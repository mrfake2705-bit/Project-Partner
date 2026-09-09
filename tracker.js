// Post-Hire Progress Tracking & Project Collaboration Dashboard
import { store } from './store.js';

export class ProgressTracker {
  constructor(containerElement) {
    this.container = containerElement;
    this.currentProject = null;
    this.activeFilterAssignee = 'all'; // 'all' | 'me' | 'partner'
  }

  init() {
    this.currentProject = store.getActiveProject();
    store.subscribe((event, payload) => {
      if (['active_project_changed', 'task_added', 'task_updated', 'task_deleted', 'milestone_toggled', 'partner_hired', 'activity_added', 'projects_updated'].includes(event)) {
        this.currentProject = store.getActiveProject();
        this.render();
      }
    });
  }

  render() {
    this.currentProject = store.getActiveProject();
    if (!this.currentProject) {
      this.container.innerHTML = `
        <div class="empty-state-card">
          <h3>No Active Project Selected</h3>
          <p class="text-muted">Create a project or hire a partner to start tracking progress.</p>
        </div>
      `;
      return;
    }

    const p = this.currentProject;
    const allProjects = store.getProjects();
    const tasks = p.tasks || [];
    const milestones = p.milestones || [];
    const activityLog = p.activityLog || [];

    // Calculate metrics
    const completedTasks = tasks.filter(t => t.status === 'completed').length;
    const inProgressTasks = tasks.filter(t => t.status === 'in-progress').length;
    const completedMilestones = milestones.filter(m => m.completed).length;

    // Filter tasks if needed
    const filterTasksByStatus = (status) => {
      return tasks.filter(t => {
        const matchesStatus = t.status === status;
        if (this.activeFilterAssignee === 'all') return matchesStatus;
        if (this.activeFilterAssignee === 'me') {
          return matchesStatus && (t.assignee.includes('Owner') || t.assignee.includes('You') || t.assignee === p.ownerName);
        }
        return matchesStatus && !t.assignee.includes('Owner') && !t.assignee.includes('You') && t.assignee !== p.ownerName;
      });
    };

    const backlogTasks = filterTasksByStatus('backlog');
    const inProgressList = filterTasksByStatus('in-progress');
    const reviewTasks = filterTasksByStatus('review');
    const completedList = filterTasksByStatus('completed');

    this.container.innerHTML = `
      <div class="tracker-dashboard">
        <!-- Dashboard Header & Project Switcher -->
        <div class="tracker-top-bar">
          <div class="tracker-project-info">
            <div class="project-selector-wrapper">
              <label for="active-project-select" class="text-xs text-muted font-bold">CURRENT ACTIVE PROJECT:</label>
              <select id="active-project-select" class="project-dropdown">
                ${allProjects.map(proj => `
                  <option value="${proj.id}" ${proj.id === p.id ? 'selected' : ''}>
                    ${proj.title} (${proj.progressPct}% Done)
                  </option>
                `).join('')}
              </select>
            </div>
            <div class="tracker-meta-row">
              <span class="badge badge-domain">${p.domain}</span>
              <span class="badge badge-event">${p.targetEvent || 'Hackathon Project'}</span>
              <span class="badge ${p.status === 'In Progress' ? 'badge-accent' : 'badge-neutral'}">${p.status}</span>
            </div>
          </div>

          <!-- Quick Connect Actions -->
          <div class="tracker-quick-connect">
            <button class="btn btn-secondary btn-sm" id="btn-demo-from-tracker" title="Inspect Demo Prototype">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"/></svg>
              View Demo
            </button>
            <a href="https://discord.com" target="_blank" class="btn btn-outline btn-sm" title="Team Discord Voice / Chat">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/></svg>
              Discord
            </a>
            <button class="btn btn-primary btn-sm" id="btn-open-add-task-modal">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
              Add Task
            </button>
          </div>
        </div>

        <!-- Metric KPI Cards with Progress Gauge -->
        <div class="tracker-metrics-grid">
          <!-- Overall Progress Gauge Card -->
          <div class="metric-card progress-gauge-card">
            <div class="gauge-left">
              <span class="metric-label">Overall Completion</span>
              <div class="gauge-number-row">
                <span class="gauge-pct">${p.progressPct || 0}%</span>
                <span class="badge ${p.progressPct > 60 ? 'badge-success' : 'badge-accent'}">
                  ${p.progressPct > 75 ? 'Ready to Submit' : p.progressPct > 35 ? 'Sprint Velocity High' : 'Early Ideation'}
                </span>
              </div>
              <div class="progress-bar-rail mt-2">
                <div class="progress-bar-fill" style="width: ${p.progressPct || 0}%;"></div>
              </div>
              <span class="text-xs text-muted mt-2">Weighted: 60% Tasks + 40% Milestones</span>
            </div>
            <div class="gauge-circle-container">
              <svg viewBox="0 0 36 36" class="circular-chart">
                <path class="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                <path class="circle-fill" stroke-dasharray="${p.progressPct || 0}, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                <text x="18" y="20.35" class="circle-text">${p.progressPct || 0}%</text>
              </svg>
            </div>
          </div>

          <!-- Milestones Metric -->
          <div class="metric-card">
            <div class="metric-icon-wrap icon-violet">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></svg>
            </div>
            <div class="metric-details">
              <span class="metric-label">Key Milestones</span>
              <h3 class="metric-val">${completedMilestones} / ${milestones.length}</h3>
              <span class="text-xs text-muted">${milestones.length - completedMilestones} phases remaining</span>
            </div>
          </div>

          <!-- Tasks Metric -->
          <div class="metric-card">
            <div class="metric-icon-wrap icon-cyan">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
            </div>
            <div class="metric-details">
              <span class="metric-label">Tasks Completed</span>
              <h3 class="metric-val">${completedTasks} / ${tasks.length}</h3>
              <span class="text-xs text-muted">${inProgressTasks} currently in progress</span>
            </div>
          </div>

          <!-- Team Roster Metric -->
          <div class="metric-card">
            <div class="metric-icon-wrap icon-emerald">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            </div>
            <div class="metric-details">
              <span class="metric-label">Team Members</span>
              <h3 class="metric-val">${1 + (p.neededRoles || []).filter(r => r.filled).length} Devs</h3>
              <span class="text-xs text-accent font-bold">${(p.neededRoles || []).filter(r => r.filled).length} Hired Partner(s)</span>
            </div>
          </div>
        </div>

        <!-- Section: Milestone Roadmap -->
        <div class="milestones-roadmap-card">
          <div class="roadmap-header">
            <div>
              <h4 class="section-title">Milestone Roadmap & Phase Checkpoints</h4>
              <p class="text-xs text-muted">Click any milestone checkbox to mark as completed and update the project progress.</p>
            </div>
            <span class="badge badge-neutral">${completedMilestones} of ${milestones.length} Completed</span>
          </div>

          <div class="milestone-timeline">
            ${milestones.map((m, idx) => `
              <div class="milestone-item ${m.completed ? 'completed' : ''}" data-milestone-id="${m.id}">
                <button class="milestone-check-btn" title="Toggle Milestone Status">
                  ${m.completed ? `
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
                  ` : `
                    <span class="milestone-dot-num">${idx + 1}</span>
                  `}
                </button>
                <div class="milestone-body">
                  <div class="milestone-title-row">
                    <strong class="milestone-title">${m.title}</strong>
                    <span class="milestone-date text-xs text-muted">Due: ${m.dueDate || 'Sprint'}</span>
                  </div>
                  <span class="milestone-status-badge ${m.completed ? 'text-success' : 'text-amber'}">
                    ${m.completed ? '✓ Completed' : 'Pending Verification'}
                  </span>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Section: Interactive Kanban Board -->
        <div class="kanban-section">
          <div class="kanban-header">
            <div>
              <h4 class="section-title">Project Sprint Task Board</h4>
              <p class="text-xs text-muted">Manage active deliverables between the project owner and hired partners.</p>
            </div>

            <!-- Filter by Assignee -->
            <div class="kanban-filters">
              <span class="text-xs text-muted mr-2">Filter Assignee:</span>
              <button class="filter-pill ${this.activeFilterAssignee === 'all' ? 'active' : ''}" data-filter="all">All Tasks (${tasks.length})</button>
              <button class="filter-pill ${this.activeFilterAssignee === 'me' ? 'active' : ''}" data-filter="me">My Tasks</button>
              <button class="filter-pill ${this.activeFilterAssignee === 'partner' ? 'active' : ''}" data-filter="partner">Hired Partners</button>
            </div>
          </div>

          <div class="kanban-columns-grid">
            <!-- Col 1: Backlog -->
            ${this.renderKanbanColumn('backlog', 'Backlog', backlogTasks, 'border-slate')}

            <!-- Col 2: In Progress -->
            ${this.renderKanbanColumn('in-progress', 'In Progress', inProgressList, 'border-amber')}

            <!-- Col 3: Review -->
            ${this.renderKanbanColumn('review', 'In Review / QA', reviewTasks, 'border-violet')}

            <!-- Col 4: Completed -->
            ${this.renderKanbanColumn('completed', 'Done & Shipped', completedList, 'border-emerald')}
          </div>
        </div>

        <!-- Section: Team Roster & Activity Feed Split -->
        <div class="tracker-footer-grid">
          <!-- Team Roster -->
          <div class="team-roster-card">
            <div class="roster-header">
              <h4 class="card-subtitle">Active Team Roster</h4>
              <span class="text-xs text-muted">${1 + (p.neededRoles || []).filter(r => r.filled).length} Members</span>
            </div>

            <div class="roster-list">
              <!-- Owner -->
              <div class="roster-item">
                <img src="${p.ownerAvatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120'}" class="member-avatar" alt="${p.ownerName}" />
                <div class="member-info">
                  <strong>${p.ownerName} <span class="badge badge-accent text-xs">Project Lead</span></strong>
                  <span class="text-xs text-muted">${p.ownerUniversity || 'Creator'}</span>
                </div>
                <span class="badge badge-success text-xs">Active</span>
              </div>

              <!-- Hired Teammates -->
              ${(p.neededRoles || []).map(roleItem => {
                if (!roleItem.filled) {
                  return `
                    <div class="roster-item open-slot">
                      <div class="open-slot-avatar">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                      </div>
                      <div class="member-info">
                        <strong>${roleItem.role}</strong>
                        <span class="text-xs text-accent">Open Position — Hire Candidate</span>
                      </div>
                      <button class="btn btn-primary btn-xs" id="quick-hire-slot-btn">Hire</button>
                    </div>
                  `;
                }

                const cand = store.getCandidateById(roleItem.candidateId) || {
                  name: roleItem.candidateId || "Hired Teammate",
                  avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150",
                  university: "Hired Partner"
                };

                return `
                  <div class="roster-item hired-member">
                    <img src="${cand.avatar}" class="member-avatar" alt="${cand.name}" />
                    <div class="member-info">
                      <strong>${cand.name} <span class="badge badge-hired text-xs">Hired Partner</span></strong>
                      <span class="text-xs text-muted">${roleItem.role}</span>
                    </div>
                    <span class="badge badge-success text-xs">Active on Team</span>
                  </div>
                `;
              }).join('')}
            </div>
          </div>

          <!-- Standup Log & Activity -->
          <div class="activity-feed-card">
            <div class="activity-header">
              <h4 class="card-subtitle">Team Activity & Standup Log</h4>
              <span class="text-xs text-muted">Real-time collaboration trail</span>
            </div>

            <!-- Post Standup Update Form -->
            <form id="post-standup-form" class="standup-input-row">
              <input type="text" id="standup-input" placeholder="Post daily progress update (e.g. Completed Auth API)..." required />
              <button type="submit" class="btn btn-secondary btn-sm">Post</button>
            </form>

            <div class="activity-timeline-list">
              ${activityLog.slice(0, 7).map(item => `
                <div class="activity-entry">
                  <div class="activity-bullet"></div>
                  <div class="activity-content">
                    <p class="activity-text">${item.text}</p>
                    <span class="activity-time">${item.author ? `<strong>${item.author}</strong> • ` : ''}${item.timestamp}</span>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </div>
    `;

    this.bindEvents();
  }

  renderKanbanColumn(statusKey, title, tasks, borderClass) {
    const p = this.currentProject;
    return `
      <div class="kanban-col ${borderClass}" data-col-status="${statusKey}">
        <div class="kanban-col-header">
          <div class="col-title-group">
            <span class="col-status-indicator indicator-${statusKey}"></span>
            <span class="col-title">${title}</span>
          </div>
          <span class="col-count">${tasks.length}</span>
        </div>

        <div class="kanban-task-list">
          ${tasks.length === 0 ? `
            <div class="empty-col-placeholder">No tasks in ${title}</div>
          ` : tasks.map(t => this.renderTaskCard(t)).join('')}
        </div>
      </div>
    `;
  }

  renderTaskCard(task) {
    const priorityClass = task.priority === 'high' ? 'priority-high' : task.priority === 'medium' ? 'priority-med' : 'priority-low';
    return `
      <div class="task-card" data-task-id="${task.id}">
        <div class="task-top-row">
          <span class="task-priority-badge ${priorityClass}">
            ${task.priority.toUpperCase()}
          </span>
          <div class="task-action-dropdown">
            <button class="btn-task-action" data-task-id="${task.id}" title="Delete Task">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
            </button>
          </div>
        </div>

        <h5 class="task-card-title">${task.title}</h5>

        <div class="task-footer">
          <div class="task-assignee">
            <span class="assignee-avatar">${task.assignee ? task.assignee.charAt(0) : 'U'}</span>
            <span class="assignee-name text-xs">${task.assignee || 'Unassigned'}</span>
          </div>
          <span class="task-due-date text-xs text-muted">Due: ${task.dueDate || 'Sprint'}</span>
        </div>

        <!-- Quick Status Change Controls -->
        <div class="task-move-controls">
          <span class="text-xs text-muted">Move:</span>
          <select class="task-status-select" data-task-id="${task.id}">
            <option value="backlog" ${task.status === 'backlog' ? 'selected' : ''}>Backlog</option>
            <option value="in-progress" ${task.status === 'in-progress' ? 'selected' : ''}>In Progress</option>
            <option value="review" ${task.status === 'review' ? 'selected' : ''}>In Review</option>
            <option value="completed" ${task.status === 'completed' ? 'selected' : ''}>Completed</option>
          </select>
        </div>
      </div>
    `;
  }

  bindEvents() {
    const p = this.currentProject;
    if (!p) return;

    // Active project dropdown
    const select = document.getElementById('active-project-select');
    if (select) {
      select.addEventListener('change', (e) => {
        store.setActiveProjectId(e.target.value);
      });
    }

    // View demo button
    const demoBtn = document.getElementById('btn-demo-from-tracker');
    if (demoBtn) {
      demoBtn.addEventListener('click', () => {
        window.dispatchEvent(new CustomEvent('open-project-demo', { detail: { project: p } }));
      });
    }

    // Add task modal button
    const addTaskBtn = document.getElementById('btn-open-add-task-modal');
    if (addTaskBtn) {
      addTaskBtn.addEventListener('click', () => {
        window.dispatchEvent(new CustomEvent('open-add-task-modal', { detail: { projectId: p.id } }));
      });
    }

    // Filter pills
    this.container.querySelectorAll('.filter-pill').forEach(btn => {
      btn.addEventListener('click', () => {
        this.activeFilterAssignee = btn.dataset.filter;
        this.render();
      });
    });

    // Milestone checkboxes
    this.container.querySelectorAll('.milestone-item').forEach(item => {
      const btn = item.querySelector('.milestone-check-btn');
      if (btn) {
        btn.addEventListener('click', () => {
          const mId = item.dataset.milestoneId;
          store.toggleMilestone(p.id, mId);
        });
      }
    });

    // Task status change
    this.container.querySelectorAll('.task-status-select').forEach(sel => {
      sel.addEventListener('change', (e) => {
        const taskId = sel.dataset.taskId;
        const newStatus = e.target.value;
        store.updateTaskStatus(p.id, taskId, newStatus);
      });
    });

    // Task delete
    this.container.querySelectorAll('.btn-task-action').forEach(btn => {
      btn.addEventListener('click', () => {
        const taskId = btn.dataset.taskId;
        if (confirm("Are you sure you want to delete this task?")) {
          store.deleteTask(p.id, taskId);
        }
      });
    });

    // Post standup update
    const standupForm = document.getElementById('post-standup-form');
    if (standupForm) {
      standupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const input = document.getElementById('standup-input');
        if (input && input.value.trim()) {
          store.addActivityLog(p.id, input.value.trim(), store.getCurrentUser().name);
          input.value = '';
        }
      });
    }

    // Quick hire slot button
    const quickHireBtn = document.getElementById('quick-hire-slot-btn');
    if (quickHireBtn) {
      quickHireBtn.addEventListener('click', () => {
        window.dispatchEvent(new CustomEvent('navigate-to-tab', { detail: { tab: 'find-partners' } }));
      });
    }
  }
}
