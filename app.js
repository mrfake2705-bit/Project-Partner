// Main Application Controller for HackPartner
import { INITIAL_DOMAINS, INITIAL_SKILLS } from './data.js';
import { store } from './store.js';
import { DemoViewer } from './demoViewer.js';
import { ProgressTracker } from './tracker.js';

class App {
  constructor() {
    this.currentTab = 'find-partners';
    this.demoViewer = null;
    this.progressTracker = null;

    // Filter states for candidates
    this.candidateFilters = {
      search: '',
      domain: 'All Domains',
      skill: '',
      experience: 'all'
    };

    // Filter states for projects
    this.projectFilters = {
      search: '',
      domain: 'All Domains'
    };
  }

  init() {
    this.setupNavigation();
    this.setupDemoViewer();
    this.setupProgressTracker();
    this.setupModals();
    this.setupAuth();
    this.setupAvatarEditor();
    this.setupForms();
    this.setupGlobalEvents();

    // Initial renders
    this.updateNavAuthState();
    this.renderHeroStats();
    this.renderCandidateDomainFilter();
    this.renderCandidateSkillChips();
    this.renderCandidates();
    this.renderProjects();
    this.renderUserProfile();

    // Listen to store updates
    store.subscribe((event) => {
      if (['candidates_updated', 'partner_hired'].includes(event)) {
        this.renderCandidates();
        this.renderHeroStats();
      }
      if (['projects_updated', 'partner_hired'].includes(event)) {
        this.renderProjects();
        this.renderHeroStats();
      }
      if (event === 'user_updated' || event === 'auth_state_changed') {
        this.updateNavAuthState();
        this.renderUserProfile();
      }
    });
  }

  // --- NAVIGATION & TABS ---
  setupNavigation() {
    const navButtons = document.querySelectorAll('.nav-link, .bottom-nav-link');
    navButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const tab = btn.dataset.tab;
        if (tab) {
          this.switchTab(tab);
        }
      });
    });

    // Hero banner quick buttons
    const heroExploreBtn = document.getElementById('hero-explore-btn');
    if (heroExploreBtn) {
      heroExploreBtn.addEventListener('click', () => this.switchTab('find-partners'));
    }
    const heroPostBtn = document.getElementById('hero-post-btn');
    if (heroPostBtn) {
      heroPostBtn.addEventListener('click', () => {
        if (!store.isAuthenticated()) {
          this.showToast('Please sign in to post your project requirement.', 'info');
          this.openAuthModal('signin');
          return;
        }
        this.switchTab('post-project');
      });
    }
    const navPostCta = document.getElementById('nav-post-cta');
    if (navPostCta) {
      navPostCta.addEventListener('click', () => {
        if (!store.isAuthenticated()) {
          this.showToast('Please sign in to hire teammates.', 'info');
          this.openAuthModal('signin');
          return;
        }
        this.switchTab('post-project');
      });
    }

    // Brand logo returns to find-partners
    const brandLogo = document.getElementById('brand-logo-btn');
    if (brandLogo) {
      brandLogo.addEventListener('click', () => this.switchTab('find-partners'));
    }

    // Auth navbar buttons
    const navSignInBtn = document.getElementById('nav-signin-btn');
    if (navSignInBtn) {
      navSignInBtn.addEventListener('click', () => this.openAuthModal('signin'));
    }
    const navRegisterBtn = document.getElementById('nav-register-btn');
    if (navRegisterBtn) {
      navRegisterBtn.addEventListener('click', () => this.openAuthModal('signup'));
    }
    const navLogoutBtn = document.getElementById('nav-logout-btn');
    if (navLogoutBtn) {
      navLogoutBtn.addEventListener('click', () => {
        store.logout();
        this.showToast('You have been signed out.', 'info');
      });
    }
    const navUserPill = document.getElementById('nav-user-pill');
    if (navUserPill) {
      navUserPill.addEventListener('click', () => this.switchTab('my-profile'));
    }
  }

  switchTab(tabId) {
    this.currentTab = tabId;

    // Update active nav links
    document.querySelectorAll('.nav-link, .bottom-nav-link').forEach(link => {
      if (link.dataset.tab === tabId) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    // Show selected view container
    document.querySelectorAll('.tab-view').forEach(view => {
      if (view.id === `view-${tabId}`) {
        view.classList.add('active');
      } else {
        view.classList.remove('active');
      }
    });

    // If switching to progress tracker, trigger render
    if (tabId === 'progress-tracker' && this.progressTracker) {
      this.progressTracker.render();
    }

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // --- HERO STATS ---
  renderHeroStats() {
    const candidates = store.getCandidates();
    const projects = store.getProjects();
    const totalHired = candidates.filter(c => !c.isAvailable).length;

    const statPartners = document.getElementById('stat-partners-count');
    const statProjects = document.getElementById('stat-projects-count');
    const statHired = document.getElementById('stat-hired-count');

    if (statPartners) statPartners.textContent = `${candidates.length * 200 + 45}+`;
    if (statProjects) statProjects.textContent = `${projects.length * 80 + 12}+`;
    if (statHired) statHired.textContent = `${totalHired + 88} Teams Formed`;
  }

  // --- CANDIDATE SEARCH & DISCOVERY ---
  renderCandidateDomainFilter() {
    const select = document.getElementById('filter-candidate-domain');
    if (!select) return;
    select.innerHTML = INITIAL_DOMAINS.map(d => `<option value="${d}">${d}</option>`).join('');

    select.addEventListener('change', (e) => {
      this.candidateFilters.domain = e.target.value;
      this.renderCandidates();
    });
  }

  renderCandidateSkillChips() {
    const container = document.getElementById('candidate-popular-skills');
    if (!container) return;

    container.innerHTML = `
      <span class="text-xs text-muted">Quick Filter Skills:</span>
      <button class="skill-quick-chip ${this.candidateFilters.skill === '' ? 'active' : ''}" data-skill="">All</button>
      ${INITIAL_SKILLS.slice(0, 8).map(s => `
        <button class="skill-quick-chip ${this.candidateFilters.skill === s ? 'active' : ''}" data-skill="${s}">${s}</button>
      `).join('')}
    `;

    container.querySelectorAll('.skill-quick-chip').forEach(btn => {
      btn.addEventListener('click', () => {
        container.querySelectorAll('.skill-quick-chip').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.candidateFilters.skill = btn.dataset.skill;
        this.renderCandidates();
      });
    });
  }

  renderCandidates() {
    const grid = document.getElementById('candidates-grid');
    if (!grid) return;

    let list = store.getCandidates();

    // Filter by search
    if (this.candidateFilters.search) {
      const q = this.candidateFilters.search.toLowerCase();
      list = list.filter(c => 
        c.name.toLowerCase().includes(q) ||
        c.title.toLowerCase().includes(q) ||
        c.bio.toLowerCase().includes(q) ||
        c.skills.some(s => s.toLowerCase().includes(q))
      );
    }

    // Filter by domain
    if (this.candidateFilters.domain && this.candidateFilters.domain !== 'All Domains') {
      list = list.filter(c => c.domain === this.candidateFilters.domain);
    }

    // Filter by skill
    if (this.candidateFilters.skill) {
      list = list.filter(c => c.skills.includes(this.candidateFilters.skill));
    }

    // Filter by experience
    if (this.candidateFilters.experience && this.candidateFilters.experience !== 'all') {
      if (this.candidateFilters.experience === 'winners') {
        list = list.filter(c => c.experience.includes('Winner'));
      } else if (this.candidateFilters.experience === 'available') {
        list = list.filter(c => c.isAvailable);
      }
    }

    if (list.length === 0) {
      grid.innerHTML = `
        <div class="empty-search-card">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          <h4>No Partners Found Matching Criteria</h4>
          <p class="text-muted">Try resetting your filters or searching for another tech skill.</p>
          <button class="btn btn-secondary btn-sm mt-2" id="reset-candidate-filters">Reset Filters</button>
        </div>
      `;
      const resetBtn = document.getElementById('reset-candidate-filters');
      if (resetBtn) {
        resetBtn.addEventListener('click', () => {
          this.candidateFilters = { search: '', domain: 'All Domains', skill: '', experience: 'all' };
          const searchInput = document.getElementById('search-candidate-input');
          const domainSelect = document.getElementById('filter-candidate-domain');
          if (searchInput) searchInput.value = '';
          if (domainSelect) domainSelect.value = 'All Domains';
          this.renderCandidateSkillChips();
          this.renderCandidates();
        });
      }
      return;
    }

    grid.innerHTML = list.map(c => `
      <div class="candidate-card ${!c.isAvailable ? 'card-hired' : ''}">
        <!-- Top Row: Avatar & Status -->
        <div class="candidate-header">
          <div class="avatar-wrap">
            <img src="${c.avatar}" alt="${c.name}" class="candidate-avatar" />
            <span class="availability-indicator ${c.isAvailable ? 'available' : 'busy'}" title="${c.isAvailable ? 'Available for Hackathons' : 'Currently Hired on Project'}"></span>
          </div>
          <div class="candidate-header-meta">
            <div class="name-badge-row">
              <h4 class="candidate-name">${c.name}</h4>
              ${!c.isAvailable ? `
                <span class="badge badge-hired">Hired Teammate</span>
              ` : `
                <span class="badge badge-available">Open to Hire</span>
              `}
            </div>
            <span class="candidate-title">${c.title}</span>
            <span class="candidate-uni text-xs text-muted">${c.university}</span>
          </div>
        </div>

        <!-- Rating & Badges -->
        <div class="candidate-badge-strip">
          <div class="candidate-rating">
            <span class="star-icon">★</span>
            <strong>${c.rating}</strong>
            <span class="text-xs text-muted">(${c.reviewsCount} reviews)</span>
          </div>
          <div class="hack-badge-list">
            ${(c.badges || []).slice(0, 2).map(b => `
              <span class="hack-badge" title="${b}">${b}</span>
            `).join('')}
          </div>
        </div>

        <!-- Bio snippet -->
        <p class="candidate-bio">${c.bio}</p>

        <!-- Skill Chips -->
        <div class="candidate-skills">
          ${c.skills.slice(0, 5).map(s => `
            <span class="skill-chip">${s}</span>
          `).join('')}
          ${c.skills.length > 5 ? `<span class="skill-chip more">+${c.skills.length - 5}</span>` : ''}
        </div>

        <!-- Commitment & Domain Info -->
        <div class="candidate-info-row">
          <div class="info-item">
            <span class="info-label">Domain</span>
            <span class="info-value text-accent">${c.domain}</span>
          </div>
          <div class="info-item">
            <span class="info-label">Availability</span>
            <span class="info-value">${c.availability}</span>
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="candidate-card-actions">
          <button class="btn btn-outline btn-sm btn-view-profile" data-candidate-id="${c.id}">
            View Profile
          </button>
          ${c.isAvailable ? `
            <button class="btn btn-primary btn-sm btn-hire-candidate" data-candidate-id="${c.id}">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="20" y1="8" x2="20" y2="14"/><line x1="23" y1="11" x2="17" y2="11"/></svg>
              Hire as Partner
            </button>
          ` : `
            <button class="btn btn-secondary btn-sm" disabled title="Already teamed up on an active project">
              Hired on Team
            </button>
          `}
        </div>
      </div>
    `).join('');

    // Bind card action buttons
    grid.querySelectorAll('.btn-hire-candidate').forEach(btn => {
      btn.addEventListener('click', () => {
        const cId = btn.dataset.candidateId;
        this.openHireModal(cId);
      });
    });

    grid.querySelectorAll('.btn-view-profile').forEach(btn => {
      btn.addEventListener('click', () => {
        const cId = btn.dataset.candidateId;
        this.openCandidateModal(cId);
      });
    });
  }

  // --- PROJECTS & DEMO SHOWCASE ---
  renderProjects() {
    const grid = document.getElementById('projects-grid');
    if (!grid) return;

    let list = store.getProjects();

    // Filter by search
    if (this.projectFilters.search) {
      const q = this.projectFilters.search.toLowerCase();
      list = list.filter(p => 
        p.title.toLowerCase().includes(q) ||
        p.tagline.toLowerCase().includes(q) ||
        p.domain.toLowerCase().includes(q) ||
        (p.targetEvent && p.targetEvent.toLowerCase().includes(q))
      );
    }

    // Filter by domain
    if (this.projectFilters.domain && this.projectFilters.domain !== 'All Domains') {
      list = list.filter(p => p.domain === this.projectFilters.domain);
    }

    grid.innerHTML = list.map(p => {
      const openRoles = (p.neededRoles || []).filter(r => !r.filled);
      const filledRoles = (p.neededRoles || []).filter(r => r.filled);

      return `
        <div class="project-showcase-card">
          <!-- Top Badge Row -->
          <div class="project-card-header">
            <div class="project-tags">
              <span class="badge badge-domain">${p.domain}</span>
              <span class="badge badge-event">${p.targetEvent || 'Hackathon Project'}</span>
            </div>
            <span class="badge ${p.status === 'In Progress' ? 'badge-accent' : 'badge-neutral'}">${p.status}</span>
          </div>

          <!-- Title & Tagline -->
          <h3 class="project-card-title">${p.title}</h3>
          <p class="project-card-tagline">${p.tagline}</p>

          <!-- Interactive Demo Highlight Pill -->
          ${p.demo && p.demo.hasDemo ? `
            <div class="project-demo-pill">
              <div class="demo-pulse-dot"></div>
              <span>Interactive Live Demo & Video Pitch Available</span>
            </div>
          ` : ''}

          <!-- Project Progress Bar -->
          <div class="project-progress-box">
            <div class="progress-labels">
              <span class="text-xs text-muted">Project Completion</span>
              <span class="text-xs font-bold text-accent">${p.progressPct || 0}%</span>
            </div>
            <div class="progress-bar-rail">
              <div class="progress-bar-fill" style="width: ${p.progressPct || 0}%;"></div>
            </div>
          </div>

          <!-- Open Roles for Teammates -->
          <div class="project-roles-box">
            <span class="roles-label text-xs text-muted font-bold">OPEN PARTNER ROLES:</span>
            <div class="roles-chips-list">
              ${openRoles.length === 0 ? `
                <span class="text-xs text-success font-bold">✓ Team Complete (${filledRoles.length} Hired)</span>
              ` : openRoles.map(r => `
                <span class="role-chip open">
                  <span class="role-dot"></span>
                  ${r.role}
                </span>
              `).join('')}
            </div>
          </div>

          <!-- Tech Stack -->
          <div class="project-tech-pills">
            ${(p.skillsRequired || []).slice(0, 4).map(s => `
              <span class="skill-chip">${s}</span>
            `).join('')}
          </div>

          <!-- Owner & Action Buttons -->
          <div class="project-card-footer">
            <div class="project-owner-info">
              <img src="${p.ownerAvatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120'}" class="owner-avatar-sm" alt="${p.ownerName}" />
              <div>
                <span class="owner-name text-xs">${p.ownerName}</span>
                <span class="owner-uni text-xxs text-muted">${p.ownerUniversity || 'Owner'}</span>
              </div>
            </div>

            <div class="project-card-buttons">
              <button class="btn btn-secondary btn-sm btn-inspect-demo" data-project-id="${p.id}">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                Inspect Demo
              </button>
              <button class="btn btn-primary btn-sm btn-track-project" data-project-id="${p.id}">
                Track Workspace
              </button>
            </div>
          </div>
        </div>
      `;
    }).join('');

    // Bind demo inspect and track buttons
    grid.querySelectorAll('.btn-inspect-demo').forEach(btn => {
      btn.addEventListener('click', () => {
        const pId = btn.dataset.projectId;
        const project = store.getProjectById(pId);
        if (project) {
          this.demoViewer.open(project);
        }
      });
    });

    grid.querySelectorAll('.btn-track-project').forEach(btn => {
      btn.addEventListener('click', () => {
        const pId = btn.dataset.projectId;
        store.setActiveProjectId(pId);
        this.switchTab('progress-tracker');
      });
    });
  }

  // --- DEMO VIEWER SETUP ---
  setupDemoViewer() {
    const container = document.getElementById('demo-modal-container');
    if (container) {
      this.demoViewer = new DemoViewer(container);
    }
  }

  // --- PROGRESS TRACKER SETUP ---
  setupProgressTracker() {
    const container = document.getElementById('tracker-container');
    if (container) {
      this.progressTracker = new ProgressTracker(container);
      this.progressTracker.init();
      this.progressTracker.render();
    }
  }

  // --- MODALS & WORKFLOWS ---
  setupModals() {
    // Backdrop click close for modals
    document.querySelectorAll('.modal-backdrop').forEach(backdrop => {
      backdrop.addEventListener('click', (e) => {
        if (e.target === backdrop) {
          backdrop.classList.remove('active');
          document.body.style.overflow = '';
        }
      });
    });

    // Close buttons on all modals
    document.querySelectorAll('.btn-modal-close').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.modal-backdrop').forEach(m => m.classList.remove('active'));
        document.body.style.overflow = '';
      });
    });

    // Hire Modal submission
    const hireForm = document.getElementById('hire-partner-form');
    if (hireForm) {
      hireForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const candidateId = document.getElementById('hire-candidate-id').value;
        const projectId = document.getElementById('hire-project-select').value;
        const roleTitle = document.getElementById('hire-role-title').value.trim();
        const message = document.getElementById('hire-invite-message').value.trim();

        try {
          const { candidate, project } = store.hireCandidate(projectId, candidateId, roleTitle, message);
          this.closeModal('hire-modal');
          this.showToast(`🎉 Success! ${candidate.name} has been hired for "${project.title}"!`, 'success');
          
          // Switch user directly to the progress tracker to view their updated workspace
          setTimeout(() => {
            this.switchTab('progress-tracker');
          }, 400);
        } catch (err) {
          alert("Error hiring partner: " + err.message);
        }
      });
    }

    // Add Task Modal submission
    const addTaskForm = document.getElementById('add-task-form');
    if (addTaskForm) {
      addTaskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const projectId = document.getElementById('add-task-project-id').value;
        const title = document.getElementById('task-title-input').value.trim();
        const status = document.getElementById('task-status-select').value;
        const priority = document.getElementById('task-priority-select').value;
        const assignee = document.getElementById('task-assignee-select').value;
        const dueDate = document.getElementById('task-due-date-input').value.trim() || 'Next Sprint';

        store.addTask(projectId, { title, status, priority, assignee, dueDate });
        this.closeModal('add-task-modal');
        this.showToast(`Task "${title}" added to ${status.toUpperCase()}!`, 'success');
        addTaskForm.reset();
      });
    }

    // Search inputs
    const candSearchInput = document.getElementById('search-candidate-input');
    if (candSearchInput) {
      candSearchInput.addEventListener('input', (e) => {
        this.candidateFilters.search = e.target.value.trim();
        this.renderCandidates();
      });
    }

    const candExpSelect = document.getElementById('filter-candidate-experience');
    if (candExpSelect) {
      candExpSelect.addEventListener('change', (e) => {
        this.candidateFilters.experience = e.target.value;
        this.renderCandidates();
      });
    }

    const projSearchInput = document.getElementById('search-projects-input');
    if (projSearchInput) {
      projSearchInput.addEventListener('input', (e) => {
        this.projectFilters.search = e.target.value.trim();
        this.renderProjects();
      });
    }

    const projDomainSelect = document.getElementById('filter-project-domain');
    if (projDomainSelect) {
      projDomainSelect.innerHTML = INITIAL_DOMAINS.map(d => `<option value="${d}">${d}</option>`).join('');
      projDomainSelect.addEventListener('change', (e) => {
        this.projectFilters.domain = e.target.value;
        this.renderProjects();
      });
    }
  }

  openHireModal(candidateId) {
    if (!store.isAuthenticated()) {
      this.showToast('Please sign in or create an account to hire teammates.', 'info');
      this.openAuthModal('signin');
      return;
    }

    const candidate = store.getCandidateById(candidateId);
    if (!candidate) return;

    const modal = document.getElementById('hire-modal');
    if (!modal) return;

    // Fill candidate preview
    document.getElementById('hire-candidate-id').value = candidate.id;
    document.getElementById('hire-modal-name').textContent = candidate.name;
    document.getElementById('hire-modal-title').textContent = candidate.title;
    document.getElementById('hire-modal-avatar').src = candidate.avatar;

    // Populate project options
    const projectSelect = document.getElementById('hire-project-select');
    const projects = store.getProjects();
    projectSelect.innerHTML = projects.map(p => `
      <option value="${p.id}">${p.title} (${p.status})</option>
    `).join('');

    // Pre-fill default role based on candidate domain
    const roleInput = document.getElementById('hire-role-title');
    if (candidate.domain.includes('AI')) roleInput.value = 'AI / ML Engineer';
    else if (candidate.domain.includes('Web3')) roleInput.value = 'Smart Contract Dev';
    else if (candidate.domain.includes('Design')) roleInput.value = 'UI/UX Product Designer';
    else if (candidate.domain.includes('Mobile')) roleInput.value = 'Mobile App Developer';
    else roleInput.value = 'Full-Stack Developer';

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  openCandidateModal(candidateId) {
    const c = store.getCandidateById(candidateId);
    if (!c) return;

    const modal = document.getElementById('candidate-profile-modal');
    const content = document.getElementById('candidate-modal-content');
    if (!modal || !content) return;

    content.innerHTML = `
      <div class="candidate-detail-header">
        <img src="${c.avatar}" class="detail-avatar" alt="${c.name}" />
        <div class="detail-header-meta">
          <div class="detail-name-row">
            <h3>${c.name}</h3>
            <span class="badge ${c.isAvailable ? 'badge-available' : 'badge-hired'}">
              ${c.isAvailable ? 'Available for Hackathons' : 'Hired on Team'}
            </span>
          </div>
          <p class="detail-title">${c.title}</p>
          <span class="text-xs text-muted">${c.university}</span>
        </div>
      </div>

      <div class="detail-section">
        <h5>About & Hackathon Track Record</h5>
        <p class="detail-bio">${c.bio}</p>
        <div class="detail-badges-row mt-2">
          ${(c.badges || []).map(b => `<span class="hack-badge large">${b}</span>`).join('')}
        </div>
      </div>

      <div class="detail-section">
        <h5>Verified Technical Skills</h5>
        <div class="tech-pill-list">
          ${c.skills.map(s => `<span class="tech-pill"><span class="tech-dot"></span>${s}</span>`).join('')}
        </div>
      </div>

      ${c.featuredProject ? `
        <div class="detail-section">
          <h5>Featured Portfolio Project</h5>
          <div class="featured-project-card">
            <span class="badge badge-accent mb-1">Featured Showcase</span>
            <h6>${c.featuredProject.name}</h6>
            <p class="text-xs text-muted">${c.featuredProject.tagline}</p>
          </div>
        </div>
      ` : ''}

      <div class="detail-footer">
        <div class="detail-socials">
          <a href="${c.github}" target="_blank" class="btn btn-outline btn-xs">GitHub</a>
          <a href="${c.portfolio}" target="_blank" class="btn btn-outline btn-xs">Portfolio</a>
          <a href="${c.linkedin}" target="_blank" class="btn btn-outline btn-xs">LinkedIn</a>
        </div>
        ${c.isAvailable ? `
          <button class="btn btn-primary btn-sm" id="btn-hire-from-detail" data-candidate-id="${c.id}">
            Hire as Partner
          </button>
        ` : `
          <button class="btn btn-secondary btn-sm" disabled>Already Hired</button>
        `}
      </div>
    `;

    const hireBtn = content.querySelector('#btn-hire-from-detail');
    if (hireBtn) {
      hireBtn.addEventListener('click', () => {
        this.closeModal('candidate-profile-modal');
        this.openHireModal(c.id);
      });
    }

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  // --- AUTHENTICATION & LOGIN WORKFLOWS ---
  setupAuth() {
    // Modal close button
    const authCloseBtn = document.getElementById('auth-modal-close-btn');
    if (authCloseBtn) {
      authCloseBtn.addEventListener('click', () => this.closeModal('auth-modal'));
    }

    // Modal Tabs switcher
    const modalTabSignin = document.getElementById('modal-tab-signin');
    const modalTabSignup = document.getElementById('modal-tab-signup');
    const modalFormSignin = document.getElementById('modal-signin-form');
    const modalFormSignup = document.getElementById('modal-signup-form');

    const switchModalAuthTab = (tab) => {
      if (tab === 'signup') {
        modalTabSignin?.classList.remove('active');
        modalTabSignup?.classList.add('active');
        modalFormSignin?.classList.remove('active');
        modalFormSignup?.classList.add('active');
      } else {
        modalTabSignin?.classList.add('active');
        modalTabSignup?.classList.remove('active');
        modalFormSignin?.classList.add('active');
        modalFormSignup?.classList.remove('active');
      }
    };

    modalTabSignin?.addEventListener('click', () => switchModalAuthTab('signin'));
    modalTabSignup?.addEventListener('click', () => switchModalAuthTab('signup'));

    document.getElementById('modal-prompt-switch-to-signup')?.addEventListener('click', () => switchModalAuthTab('signup'));
    document.getElementById('modal-prompt-switch-to-signin')?.addEventListener('click', () => switchModalAuthTab('signin'));

    // Dedicated Page Tabs switcher
    const pageTabSignin = document.getElementById('tab-btn-signin');
    const pageTabSignup = document.getElementById('tab-btn-signup');
    const pageFormSignin = document.getElementById('auth-signin-form');
    const pageFormSignup = document.getElementById('auth-signup-form');

    const switchPageAuthTab = (tab) => {
      if (tab === 'signup') {
        pageTabSignin?.classList.remove('active');
        pageTabSignup?.classList.add('active');
        pageFormSignin?.classList.remove('active');
        pageFormSignup?.classList.add('active');
      } else {
        pageTabSignin?.classList.add('active');
        pageTabSignup?.classList.remove('active');
        pageFormSignin?.classList.add('active');
        pageFormSignup?.classList.remove('active');
      }
    };

    pageTabSignin?.addEventListener('click', () => switchPageAuthTab('signin'));
    pageTabSignup?.addEventListener('click', () => switchPageAuthTab('signup'));

    document.getElementById('prompt-switch-to-signup')?.addEventListener('click', () => switchPageAuthTab('signup'));
    document.getElementById('prompt-switch-to-signin')?.addEventListener('click', () => switchPageAuthTab('signin'));

    // Password visibility toggles
    document.querySelectorAll('.toggle-password-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const targetId = btn.dataset.target;
        const input = document.getElementById(targetId);
        if (input) {
          const isPassword = input.type === 'password';
          input.type = isPassword ? 'text' : 'password';
          btn.style.color = isPassword ? 'var(--primary-light)' : 'var(--text-muted)';
        }
      });
    });

    // Role selector card styling
    const setupRoleCards = (leadCardId, partnerCardId, radioName) => {
      const leadCard = document.getElementById(leadCardId);
      const partnerCard = document.getElementById(partnerCardId);
      const radios = document.querySelectorAll(`input[name="${radioName}"]`);

      radios.forEach(radio => {
        radio.addEventListener('change', () => {
          if (radio.value === 'lead') {
            leadCard?.classList.add('selected');
            partnerCard?.classList.remove('selected');
          } else {
            partnerCard?.classList.add('selected');
            leadCard?.classList.remove('selected');
          }
        });
      });
    };

    setupRoleCards('role-choice-lead', 'role-choice-partner', 'signup-role-type');
    setupRoleCards('modal-role-choice-lead', 'modal-role-choice-partner', 'modal-signup-role-type');

    // Quick 1-Click Demo User Switcher
    document.querySelectorAll('.btn-quick-demo').forEach(btn => {
      btn.addEventListener('click', () => {
        const userId = btn.dataset.userId;
        try {
          const user = store.quickLogin(userId);
          this.closeModal('auth-modal');
          this.showToast(`⚡ Switched to demo account: ${user.name} (${user.role})!`, 'success');
          if (this.currentTab === 'auth') {
            this.switchTab('find-partners');
          }
        } catch (err) {
          this.showToast(err.message, 'error');
        }
      });
    });

    // Handle Sign In (Common logic)
    const handleLogin = (emailInputId, pwInputId) => {
      const email = document.getElementById(emailInputId)?.value.trim();
      const password = document.getElementById(pwInputId)?.value;
      if (!email || !password) {
        this.showToast('Please enter both email and password.', 'error');
        return;
      }
      try {
        const user = store.login(email, password);
        this.closeModal('auth-modal');
        this.showToast(`👋 Welcome back, ${user.name}!`, 'success');
        if (this.currentTab === 'auth') {
          this.switchTab('find-partners');
        }
      } catch (err) {
        this.showToast(err.message, 'error');
      }
    };

    pageFormSignin?.addEventListener('submit', (e) => {
      e.preventDefault();
      handleLogin('signin-email', 'signin-password');
    });

    modalFormSignin?.addEventListener('submit', (e) => {
      e.preventDefault();
      handleLogin('modal-signin-email', 'modal-signin-password');
    });

    // Handle Sign Up (Common logic)
    const handleSignup = (prefix) => {
      const name = document.getElementById(`${prefix}name`)?.value.trim();
      const email = document.getElementById(`${prefix}email`)?.value.trim();
      const password = document.getElementById(`${prefix}password`)?.value;
      const university = document.getElementById(`${prefix}university`)?.value.trim();
      const domain = document.getElementById(`${prefix}domain`)?.value;
      const skillsRaw = document.getElementById(`${prefix}skills`)?.value.trim();
      const roleType = document.querySelector(`input[name="${prefix.includes('modal') ? 'modal-' : ''}signup-role-type"]:checked`)?.value || 'partner';

      if (!name || !email || !password) {
        this.showToast('Please fill in all required fields.', 'error');
        return;
      }

      const skills = (skillsRaw || '').split(',').map(s => s.trim()).filter(Boolean);

      try {
        const user = store.signup({
          name,
          email,
          password,
          roleType,
          university,
          domain,
          skills: skills.length ? skills : ['Full-Stack', 'JavaScript'],
          role: roleType === 'lead' ? 'Project Lead & Architect' : `${domain} Specialist`
        });

        this.closeModal('auth-modal');
        this.showToast(`🚀 Welcome to HackPartner, ${user.name}! Your account has been created.`, 'success');
        this.switchTab('find-partners');
      } catch (err) {
        this.showToast(err.message, 'error');
      }
    };

    pageFormSignup?.addEventListener('submit', (e) => {
      e.preventDefault();
      handleSignup('signup-');
    });

    modalFormSignup?.addEventListener('submit', (e) => {
      e.preventDefault();
      handleSignup('modal-signup-');
    });
  }

  openAuthModal(tab = 'signin') {
    const modal = document.getElementById('auth-modal');
    if (!modal) return;

    const modalTabSignin = document.getElementById('modal-tab-signin');
    const modalTabSignup = document.getElementById('modal-tab-signup');
    const modalFormSignin = document.getElementById('modal-signin-form');
    const modalFormSignup = document.getElementById('modal-signup-form');

    if (tab === 'signup') {
      modalTabSignin?.classList.remove('active');
      modalTabSignup?.classList.add('active');
      modalFormSignin?.classList.remove('active');
      modalFormSignup?.classList.add('active');
    } else {
      modalTabSignin?.classList.add('active');
      modalTabSignup?.classList.remove('active');
      modalFormSignin?.classList.add('active');
      modalFormSignup?.classList.remove('active');
    }

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  updateNavAuthState() {
    const isLoggedIn = store.isAuthenticated();
    const user = store.getCurrentUser();

    const loggedInWrap = document.getElementById('nav-auth-logged-in');
    const loggedOutWrap = document.getElementById('nav-auth-logged-out');
    const userNameEl = document.getElementById('nav-user-name');
    const avatarEl = document.getElementById('nav-avatar-btn');

    if (isLoggedIn && user) {
      if (loggedInWrap) loggedInWrap.style.display = 'flex';
      if (loggedOutWrap) loggedOutWrap.style.display = 'none';
      if (userNameEl) userNameEl.textContent = (user.name || 'User').split(' ')[0];
      if (avatarEl && user.avatar) avatarEl.src = user.avatar;
    } else {
      if (loggedInWrap) loggedInWrap.style.display = 'none';
      if (loggedOutWrap) loggedOutWrap.style.display = 'flex';
    }
  }

  // --- EDIT PROFILE PICTURE WORKFLOWS ---
  setupAvatarEditor() {
    const modal = document.getElementById('edit-avatar-modal');
    const closeBtn = document.getElementById('edit-avatar-modal-close-btn');
    const cancelBtn = document.getElementById('btn-cancel-avatar-edit');
    const openBtn = document.getElementById('btn-open-avatar-modal');
    const clickableAvatar = document.getElementById('profile-avatar-clickable');
    const previewImg = document.getElementById('avatar-modal-preview');
    const fileInput = document.getElementById('avatar-file-input');
    const browseBtn = document.getElementById('btn-browse-photo');
    const dropzone = document.getElementById('avatar-dropzone');
    const saveBtn = document.getElementById('btn-save-avatar');
    const urlInput = document.getElementById('avatar-input-url');
    const applyUrlBtn = document.getElementById('btn-apply-url-preview');
    const presetsContainer = document.getElementById('avatar-presets-container');

    const PRESET_AVATARS = [
      { name: 'Devansh (Full-Stack Lead)', url: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=240&auto=format&fit=crop&q=80' },
      { name: 'Aarav (AI/ML Specialist)', url: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=240&auto=format&fit=crop&q=80' },
      { name: 'Elena (Web3 Auditor)', url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=240&auto=format&fit=crop&q=80' },
      { name: 'Marcus (DevOps & Cloud)', url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=240&auto=format&fit=crop&q=80' },
      { name: 'Priya (UI/UX Designer)', url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=240&auto=format&fit=crop&q=80' },
      { name: 'Cyberpunk Specialist', url: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=240&auto=format&fit=crop&q=80' },
      { name: 'Mobile App Engineer', url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=240&auto=format&fit=crop&q=80' },
      { name: 'Blockchain Architect', url: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=240&auto=format&fit=crop&q=80' }
    ];

    let currentSelectedAvatar = '';

    // Render presets grid
    if (presetsContainer) {
      presetsContainer.innerHTML = PRESET_AVATARS.map((p) => `
        <button type="button" class="preset-avatar-btn" data-url="${p.url}" title="${p.name}">
          <img src="${p.url}" alt="${p.name}" />
        </button>
      `).join('');

      presetsContainer.querySelectorAll('.preset-avatar-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          presetsContainer.querySelectorAll('.preset-avatar-btn').forEach(b => b.classList.remove('selected'));
          btn.classList.add('selected');
          currentSelectedAvatar = btn.dataset.url;
          if (previewImg) previewImg.src = currentSelectedAvatar;
        });
      });
    }

    // Tab switcher inside avatar modal
    const tabs = document.querySelectorAll('.avatar-tab-btn');
    const panels = document.querySelectorAll('.avatar-panel');
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        panels.forEach(p => p.classList.remove('active'));
        tab.classList.add('active');
        const targetPanel = document.getElementById(tab.dataset.tabPanel);
        if (targetPanel) targetPanel.classList.add('active');
      });
    });

    const openModal = () => {
      const user = store.getCurrentUser();
      currentSelectedAvatar = user ? user.avatar : 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=160';
      if (previewImg) previewImg.src = currentSelectedAvatar;
      if (urlInput) urlInput.value = currentSelectedAvatar.startsWith('data:') ? '' : currentSelectedAvatar;
      modal?.classList.add('active');
      document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
      modal?.classList.remove('active');
      document.body.style.overflow = '';
    };

    openBtn?.addEventListener('click', openModal);
    clickableAvatar?.addEventListener('click', openModal);
    closeBtn?.addEventListener('click', closeModal);
    cancelBtn?.addEventListener('click', closeModal);

    // File input / dropzone click
    browseBtn?.addEventListener('click', (e) => {
      e.stopPropagation();
      fileInput?.click();
    });

    dropzone?.addEventListener('click', () => fileInput?.click());

    const handleFile = (file) => {
      if (!file || !file.type.startsWith('image/')) {
        this.showToast('Please select a valid image file (PNG, JPG, WebP, GIF).', 'error');
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        this.showToast('Image file size exceeds 5MB limit.', 'error');
        return;
      }
      const reader = new FileReader();
      reader.onload = (e) => {
        currentSelectedAvatar = e.target.result;
        if (previewImg) previewImg.src = currentSelectedAvatar;
        presetsContainer?.querySelectorAll('.preset-avatar-btn').forEach(b => b.classList.remove('selected'));
        this.showToast('Photo loaded! Click "Save Profile Picture" to apply.', 'info');
      };
      reader.readAsDataURL(file);
    };

    fileInput?.addEventListener('change', (e) => {
      if (e.target.files && e.target.files[0]) {
        handleFile(e.target.files[0]);
      }
    });

    // Drag and drop support
    dropzone?.addEventListener('dragover', (e) => {
      e.preventDefault();
      dropzone.classList.add('dragover');
    });
    dropzone?.addEventListener('dragleave', () => dropzone.classList.remove('dragover'));
    dropzone?.addEventListener('drop', (e) => {
      e.preventDefault();
      dropzone.classList.remove('dragover');
      if (e.dataTransfer.files && e.dataTransfer.files[0]) {
        handleFile(e.dataTransfer.files[0]);
      }
    });

    // URL preview apply
    applyUrlBtn?.addEventListener('click', () => {
      const url = urlInput?.value.trim();
      if (!url) {
        this.showToast('Please enter an image URL.', 'error');
        return;
      }
      currentSelectedAvatar = url;
      if (previewImg) previewImg.src = url;
      presetsContainer?.querySelectorAll('.preset-avatar-btn').forEach(b => b.classList.remove('selected'));
      this.showToast('URL preview loaded!', 'info');
    });

    // Save avatar
    saveBtn?.addEventListener('click', () => {
      if (!currentSelectedAvatar) {
        this.showToast('Please choose or upload a profile picture.', 'error');
        return;
      }
      store.updateCurrentUser({ avatar: currentSelectedAvatar });
      closeModal();
      this.showToast('📸 Profile picture updated successfully!', 'success');
    });
  }

  // --- FORMS SETUP ---
  setupForms() {
    // Post Project Form
    const postForm = document.getElementById('post-project-form');
    if (postForm) {
      postForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const title = document.getElementById('proj-form-title').value.trim();
        const tagline = document.getElementById('proj-form-tagline').value.trim();
        const targetEvent = document.getElementById('proj-form-event').value.trim();
        const domain = document.getElementById('proj-form-domain').value;
        const rolesNeededRaw = document.getElementById('proj-form-roles').value.trim();
        const skillsRaw = document.getElementById('proj-form-skills').value.trim();
        const demoSummary = document.getElementById('proj-form-demo-summary').value.trim();
        const videoUrl = document.getElementById('proj-form-video-url').value.trim();
        const githubUrl = document.getElementById('proj-form-github').value.trim();

        const currentUser = store.getCurrentUser();

        const neededRoles = rolesNeededRaw.split(',').map(r => r.trim()).filter(Boolean).map(role => ({
          role,
          filled: false,
          candidateId: null
        }));

        const skillsRequired = skillsRaw.split(',').map(s => s.trim()).filter(Boolean);

        const newProject = store.saveProject({
          title,
          tagline,
          targetEvent: targetEvent || 'Open Hackathon 2026',
          domain,
          ownerName: currentUser.name,
          ownerAvatar: currentUser.avatar,
          ownerUniversity: currentUser.university,
          neededRoles,
          skillsRequired,
          demo: {
            hasDemo: Boolean(demoSummary || videoUrl || githubUrl),
            summary: demoSummary || tagline,
            videoUrl: videoUrl || 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
            githubRepo: githubUrl || '',
            keyFeatures: [
              "End-to-end prototype tested with mock data",
              "Ready for hackathon judging panel evaluation",
              "Scalable microservice architecture"
            ],
            architecture: [
              { layer: "Frontend Layer", detail: "Responsive Web/Mobile Application" },
              { layer: "Backend Service", detail: "REST/GraphQL API endpoints" }
            ]
          }
        });

        this.showToast(`🚀 Project "${title}" created successfully! Now hire your dream teammates.`, 'success');
        postForm.reset();

        // Switch to the project showcase or candidate discovery
        setTimeout(() => {
          this.switchTab('find-partners');
        }, 500);
      });
    }

    // Edit user profile form
    const profileForm = document.getElementById('edit-profile-form');
    if (profileForm) {
      profileForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('profile-form-name').value.trim();
        const university = document.getElementById('profile-form-uni').value.trim();
        const bio = document.getElementById('profile-form-bio').value.trim();
        const skillsRaw = document.getElementById('profile-form-skills').value.trim();
        const avatarUrl = document.getElementById('profile-form-avatar')?.value.trim();

        store.updateCurrentUser({
          name,
          university,
          bio,
          skills: skillsRaw.split(',').map(s => s.trim()).filter(Boolean),
          ...(avatarUrl ? { avatar: avatarUrl } : {})
        });

        this.showToast('Profile updated successfully!', 'success');
      });
    }
  }

  renderUserProfile() {
    const user = store.getCurrentUser();
    if (!user) return;

    const nameEl = document.getElementById('user-profile-name');
    const uniEl = document.getElementById('user-profile-uni');
    const bioEl = document.getElementById('user-profile-bio');
    const skillsList = document.getElementById('user-profile-skills');
    const avatarEl = document.getElementById('user-profile-avatar');
    const roleBadge = document.getElementById('user-profile-role-badge');

    if (nameEl) nameEl.textContent = user.name || 'Anonymous User';
    if (uniEl) uniEl.textContent = user.university || '';
    if (bioEl) bioEl.textContent = user.bio || '';
    if (roleBadge) roleBadge.textContent = user.role || 'Partner';
    if (avatarEl && user.avatar) avatarEl.src = user.avatar;

    if (skillsList) {
      skillsList.innerHTML = (user.skills || []).map(s => `
        <span class="skill-chip">${s}</span>
      `).join('');
    }

    // Pre-fill form
    const formName = document.getElementById('profile-form-name');
    const formUni = document.getElementById('profile-form-uni');
    const formBio = document.getElementById('profile-form-bio');
    const formSkills = document.getElementById('profile-form-skills');
    const formAvatar = document.getElementById('profile-form-avatar');

    if (formName) formName.value = user.name || '';
    if (formUni) formUni.value = user.university || '';
    if (formBio) formBio.value = user.bio || '';
    if (formSkills) formSkills.value = (user.skills || []).join(', ');
    if (formAvatar) formAvatar.value = (user.avatar && !user.avatar.startsWith('data:')) ? user.avatar : '';
  }

  // --- GLOBAL EVENT LISTENERS ---
  setupGlobalEvents() {
    // Open project demo from outside
    window.addEventListener('open-project-demo', (e) => {
      if (e.detail && e.detail.project) {
        this.demoViewer.open(e.detail.project);
      }
    });

    // Navigate to tab helper
    window.addEventListener('navigate-to-tab', (e) => {
      if (e.detail && e.detail.tab) {
        this.switchTab(e.detail.tab);
      }
    });

    // Open add task modal with project context
    window.addEventListener('open-add-task-modal', (e) => {
      const projectId = e.detail.projectId;
      const project = store.getProjectById(projectId);
      if (!project) return;

      const modal = document.getElementById('add-task-modal');
      if (!modal) return;

      document.getElementById('add-task-project-id').value = projectId;

      // Populate assignees (Owner + all hired candidates)
      const assigneeSelect = document.getElementById('task-assignee-select');
      const assignees = [project.ownerName, 'You (Owner)'];
      (project.neededRoles || []).forEach(r => {
        if (r.filled && r.candidateId) {
          const cand = store.getCandidateById(r.candidateId);
          if (cand && !assignees.includes(cand.name)) {
            assignees.push(cand.name);
          }
        }
      });

      assigneeSelect.innerHTML = assignees.map(a => `<option value="${a}">${a}</option>`).join('');
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  }

  showToast(message, type = 'info') {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast-message toast-${type} fade-in`;
    toast.innerHTML = `
      <div class="toast-icon">
        ${type === 'success' ? '✓' : 'ℹ'}
      </div>
      <div class="toast-text">${message}</div>
    `;

    container.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(-10px)';
      setTimeout(() => toast.remove(), 300);
    }, 3800);
  }
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
  const app = new App();
  app.init();
});
// Step 1: Create a function to fetch data from your Node API
async function loadPartnersFromBackend() {
    try {
        const response = await fetch('http://localhost:5000/api/partners');
        const data = await response.json();

        if (data.success) {
            console.log("Successfully fetched partners from server:", data.partners);
            // You can now render data.partners on your web page dynamically!
        }
    } catch (error) {
        console.error("Error connecting to backend API:", error);
    }
}

// Step 2: Run the function when the page loads
document.addEventListener('DOMContentLoaded', loadPartnersFromBackend);
// Single clean declaration for backend rendering

// Function to handle submission of the "Post Project" modal form
function setupProjectFormSubmission() {
    const form = document.getElementById('post-project-form');

    if (!form) {
        console.warn("Form #post-project-form not found.");
        return;
    }

    form.addEventListener('submit', async (event) => {
        event.preventDefault(); // Prevent page reload

        // Map form inputs to match your backend schema
        const titleInput = document.getElementById('proj-form-title');
        const rolesInput = document.getElementById('proj-form-roles');

        const newPartner = {
            name: titleInput.value.trim(),
            role: rolesInput.value.trim()
        };

        try {
            // Send POST request to your Express server
            const response = await fetch('http://localhost:5000/api/partners', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newPartner)
            });

            const result = await response.json();

            if (result.success) {
                console.log("Project/Partner saved to SQLite:", result.partner);
                
                // Clear the form fields
                form.reset();

                // Close the modal if it exists
                const modal = form.closest('.modal') || document.querySelector('.modal');
                if (modal) {
                    modal.classList.remove('active');
                    modal.style.display = 'none';
                }

                // Re-fetch and update the marketplace cards
                renderBackendPartners();
            } else {
                alert("Failed to save: " + result.message);
            }
        } catch (error) {
            console.error("Form submission error:", error);
        }
    });
}

// Ensure both functions run when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    renderBackendPartners();
    setupProjectFormSubmission();
});
// Function to handle AI Matchmaking query
function setupAIMatchmaker() {
    // Finds your search input bar
    const searchInput = document.querySelector('input[placeholder*="Search by name"]') || document.querySelector('#searchInput');

    if (!searchInput) return;

    let timeout = null;
    searchInput.addEventListener('input', (e) => {
        clearTimeout(timeout);
        const query = e.target.value.trim();

        if (query.length < 2) {
            renderBackendPartners(); // Revert to full list if input is short
            return;
        }

        // Debounce request to avoid spamming the backend
        timeout = setTimeout(async () => {
            try {
                const skillsArray = query.split(/[\s,]+/);
                
                const response = await fetch('http://localhost:5000/api/matchmaker', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ targetSkills: skillsArray })
                });

                const data = await response.json();

                if (data.success && data.matches) {
                    renderMatchedCards(data.matches);
                }
            } catch (err) {
                console.error("Matchmaker request failed:", err);
            }
        }, 300);
    });
}

// Render dynamic candidate cards with Match Score Badges
function renderMatchedCards(partners) {
    const gridContainer = document.getElementById('candidates-grid');
    if (!gridContainer) return;

    gridContainer.innerHTML = '';

    partners.forEach(partner => {
        const card = document.createElement('div');
        card.className = 'candidate-card';
        card.innerHTML = `
            <div style="padding: 1.5rem; background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 12px; margin-bottom: 1rem; position: relative;">
                <div style="position: absolute; top: 12px; right: 12px; background: #10b981; color: #fff; font-weight: bold; padding: 2px 8px; border-radius: 12px; font-size: 0.75rem;">
                    🤖 ${partner.matchScore}% AI Match
                </div>
                <h3 style="color: #fff; margin-bottom: 0.5rem;">${partner.name}</h3>
                <span style="background: #6366f1; color: #fff; padding: 4px 10px; border-radius: 6px; font-size: 0.85rem; display: inline-block; margin-bottom: 1rem;">${partner.role}</span>
                <button style="background: #4f46e5; color: #fff; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer; width: 100%;">Hire as Partner</button>
            </div>
        `;
        gridContainer.appendChild(card);
    });
}

// Update DOM listener
document.addEventListener('DOMContentLoaded', () => {
    renderBackendPartners();
    setupProjectFormSubmission();
    setupAIMatchmaker();
});
// ============================================================
// HACKPARTNER BACKEND INTEGRATION, AI MATCHMAKER & SANDBOX
// ============================================================

// 1. Render partners from Express backend along with Interactive Sandboxes
async function renderBackendPartners() {
    try {
        const response = await fetch('http://localhost:5000/api/partners');
        const data = await response.json();

        if (data.success && data.partners) {
            const gridContainer = document.getElementById('candidates-grid');
            if (!gridContainer) return;

            gridContainer.innerHTML = '';

            data.partners.forEach(partner => {
                const card = document.createElement('div');
                card.className = 'candidate-card';

                let sandboxHTML = '';
                if (partner.demo_url && partner.demo_url.trim() !== '') {
                    sandboxHTML = `
                        <div style="margin: 1rem 0; border-radius: 8px; overflow: hidden; border: 1px solid rgba(255,255,255,0.15);">
                            <div style="background: #1e293b; padding: 6px 12px; font-size: 0.75rem; color: #94a3b8; display: flex; justify-content: space-between; align-items: center;">
                                <span>⚡ Live Interactive Sandbox</span>
                                <a href="${partner.demo_url}" target="_blank" style="color: #6366f1; text-decoration: none;">Open Fullscreen ↗</a>
                            </div>
                            <iframe 
                                src="${partner.demo_url}" 
                                style="width: 100%; height: 180px; border: none; background: #0f172a;" 
                                title="Interactive Sandbox Demo"
                                loading="lazy">
                            </iframe>
                        </div>
                    `;
                }

                card.innerHTML = `
                    <div style="padding: 1.5rem; background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 12px; margin-bottom: 1rem; position: relative;">
                        ${partner.matchScore ? `
                            <div style="position: absolute; top: 12px; right: 12px; background: #10b981; color: #fff; font-weight: bold; padding: 2px 8px; border-radius: 12px; font-size: 0.75rem;">
                                🤖 ${partner.matchScore}% AI Match
                            </div>
                        ` : ''}
                        <h3 style="color: #fff; margin-bottom: 0.25rem;">${partner.name}</h3>
                        <span style="background: #6366f1; color: #fff; padding: 4px 10px; border-radius: 6px; font-size: 0.85rem; display: inline-block;">${partner.role}</span>
                        
                        ${sandboxHTML}

                        <button style="background: #4f46e5; color: #fff; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer; width: 100%; margin-top: 0.5rem;">Hire as Partner</button>
                    </div>
                `;
                gridContainer.appendChild(card);
            });
        }
    } catch (error) {
        console.error("Error rendering partners:", error);
    }
}

// 2. Form submission handler for posting a project/partner


// 3. AI Matchmaker search handler


function renderBackendPartnersWithData(partners) {
    const gridContainer = document.getElementById('candidates-grid');
    if (!gridContainer) return;

    gridContainer.innerHTML = '';
    partners.forEach(partner => {
        const card = document.createElement('div');
        card.className = 'candidate-card';
        card.innerHTML = `
            <div style="padding: 1.5rem; background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 12px; margin-bottom: 1rem; position: relative;">
                <div style="position: absolute; top: 12px; right: 12px; background: #10b981; color: #fff; font-weight: bold; padding: 2px 8px; border-radius: 12px; font-size: 0.75rem;">
                    🤖 ${partner.matchScore}% AI Match
                </div>
                <h3 style="color: #fff; margin-bottom: 0.25rem;">${partner.name}</h3>
                <span style="background: #6366f1; color: #fff; padding: 4px 10px; border-radius: 6px; font-size: 0.85rem; display: inline-block;">${partner.role}</span>
                <button style="background: #4f46e5; color: #fff; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer; width: 100%; margin-top: 1rem;">Hire as Partner</button>
            </div>
        `;
        gridContainer.appendChild(card);
    });
}

// 4. Initialize features on DOM load
document.addEventListener('DOMContentLoaded', () => {
    renderBackendPartners();
    setupProjectFormSubmission();
    setupAIMatchmaker();
});