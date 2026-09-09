// Reactive LocalStorage Store for HackPartner Platform
import { INITIAL_CANDIDATES, INITIAL_PROJECTS, CURRENT_USER, DEFAULT_USERS } from './data.js';

const STORAGE_KEYS = {
  CANDIDATES: 'hackpartner_candidates_v1',
  PROJECTS: 'hackpartner_projects_v1',
  CURRENT_USER: 'hackpartner_user_v1',
  ACTIVE_PROJECT_ID: 'hackpartner_active_project_id_v1',
  USERS: 'hackpartner_users_v1',
  AUTH_TOKEN: 'hackpartner_auth_token_v1'
};

class Store {
  constructor() {
    this.listeners = [];
    this.init();
  }

  init() {
    if (!localStorage.getItem(STORAGE_KEYS.CANDIDATES)) {
      localStorage.setItem(STORAGE_KEYS.CANDIDATES, JSON.stringify(INITIAL_CANDIDATES));
    }
    if (!localStorage.getItem(STORAGE_KEYS.PROJECTS)) {
      localStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(INITIAL_PROJECTS));
    }
    if (!localStorage.getItem(STORAGE_KEYS.USERS)) {
      localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(DEFAULT_USERS));
    }
    if (!localStorage.getItem(STORAGE_KEYS.AUTH_TOKEN)) {
      // Default to first user (Devansh Mehta) for seamless zero-friction initial experience
      localStorage.setItem(STORAGE_KEYS.AUTH_TOKEN, 'user-1');
      localStorage.setItem(STORAGE_KEYS.CURRENT_USER, JSON.stringify(DEFAULT_USERS[0]));
    }
    if (!localStorage.getItem(STORAGE_KEYS.ACTIVE_PROJECT_ID)) {
      localStorage.setItem(STORAGE_KEYS.ACTIVE_PROJECT_ID, 'proj-1');
    }
  }

  subscribe(listener) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  notify(event, payload) {
    this.listeners.forEach(listener => {
      try {
        listener(event, payload);
      } catch (err) {
        console.error("Store listener error:", err);
      }
    });
  }

  // --- CANDIDATES ---
  getCandidates() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEYS.CANDIDATES)) || [];
    } catch {
      return INITIAL_CANDIDATES;
    }
  }

  getCandidateById(id) {
    return this.getCandidates().find(c => c.id === id);
  }

  updateCandidate(candidate) {
    const list = this.getCandidates().map(c => c.id === candidate.id ? candidate : c);
    localStorage.setItem(STORAGE_KEYS.CANDIDATES, JSON.stringify(list));
    this.notify('candidates_updated', list);
  }

  // --- PROJECTS ---
  getProjects() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEYS.PROJECTS)) || [];
    } catch {
      return INITIAL_PROJECTS;
    }
  }

  getProjectById(id) {
    return this.getProjects().find(p => p.id === id);
  }

  saveProject(projectData) {
    const list = this.getProjects();
    let updated;
    if (projectData.id) {
      updated = list.map(p => p.id === projectData.id ? { ...p, ...projectData } : p);
    } else {
      const newProj = {
        id: `proj-${Date.now()}`,
        progressPct: 0,
        status: "Recruiting",
        milestones: [
          { id: `m-${Date.now()}-1`, title: "Architecture & Problem Validation", completed: false, dueDate: "Week 1" },
          { id: `m-${Date.now()}-2`, title: "Core MVP Development", completed: false, dueDate: "Week 2" },
          { id: `m-${Date.now()}-3`, title: "Demo Video & Pitch Submission", completed: false, dueDate: "Week 3" }
        ],
        tasks: [
          { id: `t-${Date.now()}-1`, title: "Set up project repository & README", status: "backlog", priority: "medium", assignee: "You (Owner)", dueDate: "In 3 days" }
        ],
        activityLog: [
          { id: `act-${Date.now()}`, text: `Project "${projectData.title}" created.`, timestamp: "Just now", author: "System" }
        ],
        ...projectData
      };
      list.unshift(newProj);
      updated = list;
      this.setActiveProjectId(newProj.id);
    }
    localStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(updated));
    this.notify('projects_updated', updated);
    return projectData.id ? projectData : list[0];
  }

  // --- ACTIVE PROJECT ---
  getActiveProjectId() {
    return localStorage.getItem(STORAGE_KEYS.ACTIVE_PROJECT_ID) || 'proj-1';
  }

  setActiveProjectId(id) {
    localStorage.setItem(STORAGE_KEYS.ACTIVE_PROJECT_ID, id);
    this.notify('active_project_changed', id);
  }

  getActiveProject() {
    const id = this.getActiveProjectId();
    return this.getProjectById(id) || this.getProjects()[0];
  }

  // --- HIRING ACTION ---
  hireCandidate(projectId, candidateId, roleTitle, inviteMessage) {
    const candidate = this.getCandidateById(candidateId);
    const project = this.getProjectById(projectId);

    if (!candidate || !project) {
      throw new Error("Invalid project or candidate ID");
    }

    // Mark candidate as hired
    candidate.isAvailable = false;
    candidate.hiredForProject = project.id;
    candidate.hiredRole = roleTitle;
    this.updateCandidate(candidate);

    // Update project needed roles or add hired member
    let roleFound = false;
    if (project.neededRoles) {
      for (const r of project.neededRoles) {
        if (!r.filled && (!roleTitle || r.role.toLowerCase().includes(roleTitle.toLowerCase()) || roleTitle.toLowerCase().includes(r.role.toLowerCase()))) {
          r.filled = true;
          r.candidateId = candidate.id;
          r.role = roleTitle || r.role;
          roleFound = true;
          break;
        }
      }
    }
    if (!roleFound) {
      project.neededRoles = project.neededRoles || [];
      project.neededRoles.push({
        role: roleTitle || "Core Partner",
        filled: true,
        candidateId: candidate.id
      });
    }

    // Set project status to In Progress
    if (project.status === "Recruiting") {
      project.status = "In Progress";
    }

    // Add activity log
    project.activityLog = project.activityLog || [];
    project.activityLog.unshift({
      id: `act-${Date.now()}`,
      text: `${candidate.name} was hired as ${roleTitle || 'Project Partner'}!`,
      timestamp: "Just now",
      author: "System"
    });

    // Add onboarding task for hired partner
    project.tasks = project.tasks || [];
    project.tasks.unshift({
      id: `t-${Date.now()}`,
      title: `Onboard ${candidate.name} (${roleTitle || 'Partner'}) to codebase and roadmap`,
      status: "in-progress",
      priority: "high",
      assignee: candidate.name,
      dueDate: "Tomorrow"
    });

    this.recalculateProjectProgress(project);
    this.saveProject(project);
    this.setActiveProjectId(project.id);
    this.notify('partner_hired', { candidate, project, roleTitle });
    return { candidate, project };
  }

  // --- TRACKER & KANBAN TASKS ---
  addTask(projectId, { title, priority, assignee, dueDate, status = 'backlog' }) {
    const project = this.getProjectById(projectId);
    if (!project) return;

    const newTask = {
      id: `t-${Date.now()}`,
      title,
      priority: priority || 'medium',
      assignee: assignee || 'Unassigned',
      dueDate: dueDate || 'Next week',
      status
    };

    project.tasks = project.tasks || [];
    project.tasks.unshift(newTask);

    project.activityLog = project.activityLog || [];
    project.activityLog.unshift({
      id: `act-${Date.now()}`,
      text: `Added new task "${title}" assigned to ${newTask.assignee}.`,
      timestamp: "Just now",
      author: this.getCurrentUser().name
    });

    this.recalculateProjectProgress(project);
    this.saveProject(project);
    this.notify('task_added', { projectId, task: newTask });
    return newTask;
  }

  updateTaskStatus(projectId, taskId, newStatus) {
    const project = this.getProjectById(projectId);
    if (!project || !project.tasks) return;

    const task = project.tasks.find(t => t.id === taskId);
    if (!task) return;

    const prevStatus = task.status;
    task.status = newStatus;

    project.activityLog = project.activityLog || [];
    project.activityLog.unshift({
      id: `act-${Date.now()}`,
      text: `Task "${task.title}" moved to ${newStatus.toUpperCase().replace('-', ' ')}.`,
      timestamp: "Just now",
      author: task.assignee || "Member"
    });

    this.recalculateProjectProgress(project);
    this.saveProject(project);
    this.notify('task_updated', { projectId, task, prevStatus, newStatus });
  }

  deleteTask(projectId, taskId) {
    const project = this.getProjectById(projectId);
    if (!project || !project.tasks) return;

    project.tasks = project.tasks.filter(t => t.id !== taskId);
    this.recalculateProjectProgress(project);
    this.saveProject(project);
    this.notify('task_deleted', { projectId, taskId });
  }

  toggleMilestone(projectId, milestoneId) {
    const project = this.getProjectById(projectId);
    if (!project || !project.milestones) return;

    const milestone = project.milestones.find(m => m.id === milestoneId);
    if (!milestone) return;

    milestone.completed = !milestone.completed;
    
    project.activityLog = project.activityLog || [];
    project.activityLog.unshift({
      id: `act-${Date.now()}`,
      text: `Milestone "${milestone.title}" marked as ${milestone.completed ? 'COMPLETED' : 'INCOMPLETE'}.`,
      timestamp: "Just now",
      author: this.getCurrentUser().name
    });

    this.recalculateProjectProgress(project);
    this.saveProject(project);
    this.notify('milestone_toggled', { projectId, milestone });
  }

  addActivityLog(projectId, text, author) {
    const project = this.getProjectById(projectId);
    if (!project) return;
    project.activityLog = project.activityLog || [];
    project.activityLog.unshift({
      id: `act-${Date.now()}`,
      text,
      timestamp: "Just now",
      author: author || this.getCurrentUser().name
    });
    this.saveProject(project);
    this.notify('activity_added', { projectId });
  }

  recalculateProjectProgress(project) {
    const tasks = project.tasks || [];
    const milestones = project.milestones || [];

    if (tasks.length === 0 && milestones.length === 0) {
      project.progressPct = 0;
      return;
    }

    const completedTasks = tasks.filter(t => t.status === 'completed').length;
    const taskWeight = tasks.length > 0 ? (completedTasks / tasks.length) * 60 : 0;

    const completedMilestones = milestones.filter(m => m.completed).length;
    const milestoneWeight = milestones.length > 0 ? (completedMilestones / milestones.length) * 40 : 0;

    const total = Math.round(taskWeight + milestoneWeight);
    project.progressPct = Math.min(100, Math.max(0, total));
  }

  // --- USER PROFILE & AUTHENTICATION ---
  getUsers() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEYS.USERS)) || DEFAULT_USERS;
    } catch {
      return DEFAULT_USERS;
    }
  }

  getUserById(id) {
    return this.getUsers().find(u => u.id === id);
  }

  getUserByEmail(email) {
    if (!email) return null;
    return this.getUsers().find(u => u.email.toLowerCase() === email.trim().toLowerCase());
  }

  isAuthenticated() {
    return Boolean(localStorage.getItem(STORAGE_KEYS.AUTH_TOKEN));
  }

  getCurrentUser() {
    const token = localStorage.getItem(STORAGE_KEYS.AUTH_TOKEN);
    if (!token) return null;
    const user = this.getUserById(token);
    if (user) return user;
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEYS.CURRENT_USER)) || null;
    } catch {
      return null;
    }
  }

  login(email, password) {
    const user = this.getUserByEmail(email);
    if (!user) {
      throw new Error("No account found with this email address.");
    }
    if (user.password !== password) {
      throw new Error("Invalid password. Please check your credentials.");
    }

    localStorage.setItem(STORAGE_KEYS.AUTH_TOKEN, user.id);
    localStorage.setItem(STORAGE_KEYS.CURRENT_USER, JSON.stringify(user));
    this.notify('auth_state_changed', { user, isAuthenticated: true });
    return user;
  }

  quickLogin(userId) {
    const user = this.getUserById(userId);
    if (!user) {
      throw new Error("User account not found.");
    }

    localStorage.setItem(STORAGE_KEYS.AUTH_TOKEN, user.id);
    localStorage.setItem(STORAGE_KEYS.CURRENT_USER, JSON.stringify(user));
    this.notify('auth_state_changed', { user, isAuthenticated: true });
    return user;
  }

  signup(formData) {
    const existing = this.getUserByEmail(formData.email);
    if (existing) {
      throw new Error("An account with this email already exists.");
    }

    const userId = "user-" + Date.now().toString(36);
    const newUser = {
      id: userId,
      name: formData.name.trim(),
      email: formData.email.trim().toLowerCase(),
      password: formData.password,
      roleType: formData.roleType || 'partner', // 'lead' or 'partner'
      role: formData.role || (formData.roleType === 'lead' ? 'Project Lead & Architect' : 'Full-Stack Developer'),
      avatar: formData.avatar || `https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120&auto=format&fit=crop&q=80`,
      university: formData.university || 'Tech University • Computer Science',
      domain: formData.domain || 'AI & Machine Learning',
      bio: formData.bio || 'Passionate developer looking to build winning projects at hackathons.',
      skills: formData.skills || ['JavaScript', 'Python', 'React'],
      projectsCreated: [],
      projectsJoined: []
    };

    const users = this.getUsers();
    users.push(newUser);
    localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(users));

    // If registering as a partner, also register into candidates marketplace
    if (newUser.roleType === 'partner') {
      const candidates = this.getCandidates();
      const newCandidate = {
        id: "cand-" + userId,
        userId: newUser.id,
        name: newUser.name,
        avatar: newUser.avatar,
        title: newUser.role,
        university: newUser.university,
        domain: newUser.domain,
        skills: newUser.skills,
        experience: "Hackathon Ready (1-2x)",
        availability: "15+ hrs/week",
        rating: 5.0,
        badges: ["New Talent", "Open to Hack"],
        isAvailable: true,
        bio: newUser.bio,
        portfolioUrl: "https://github.com",
        github: "https://github.com",
        linkedin: "https://linkedin.com"
      };
      candidates.unshift(newCandidate);
      localStorage.setItem(STORAGE_KEYS.CANDIDATES, JSON.stringify(candidates));
      this.notify('candidates_updated', candidates);
    }

    localStorage.setItem(STORAGE_KEYS.AUTH_TOKEN, newUser.id);
    localStorage.setItem(STORAGE_KEYS.CURRENT_USER, JSON.stringify(newUser));
    this.notify('auth_state_changed', { user: newUser, isAuthenticated: true });
    return newUser;
  }

  logout() {
    localStorage.removeItem(STORAGE_KEYS.AUTH_TOKEN);
    localStorage.removeItem(STORAGE_KEYS.CURRENT_USER);
    this.notify('auth_state_changed', { user: null, isAuthenticated: false });
  }

  updateCurrentUser(userData) {
    const current = this.getCurrentUser() || {};
    const updated = { ...current, ...userData };
    localStorage.setItem(STORAGE_KEYS.CURRENT_USER, JSON.stringify(updated));
    
    // Also update in users list
    const users = this.getUsers().map(u => u.id === updated.id ? updated : u);
    localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(users));

    // Also update in candidates list if matching
    const candidates = this.getCandidates();
    let candUpdated = false;
    const updatedCandidates = candidates.map(c => {
      if (c.userId === updated.id || c.id === updated.candidateId || c.name === current.name) {
        candUpdated = true;
        return {
          ...c,
          avatar: updated.avatar || c.avatar,
          name: updated.name || c.name,
          university: updated.university || c.university,
          bio: updated.bio || c.bio,
          skills: updated.skills || c.skills
        };
      }
      return c;
    });
    if (candUpdated) {
      localStorage.setItem(STORAGE_KEYS.CANDIDATES, JSON.stringify(updatedCandidates));
      this.notify('candidates_updated', updatedCandidates);
    }

    this.notify('user_updated', updated);
    this.notify('auth_state_changed', { user: updated, isAuthenticated: true });
    return updated;
  }

  resetToDefaults() {
    localStorage.removeItem(STORAGE_KEYS.CANDIDATES);
    localStorage.removeItem(STORAGE_KEYS.PROJECTS);
    localStorage.removeItem(STORAGE_KEYS.CURRENT_USER);
    localStorage.removeItem(STORAGE_KEYS.ACTIVE_PROJECT_ID);
    localStorage.removeItem(STORAGE_KEYS.USERS);
    localStorage.removeItem(STORAGE_KEYS.AUTH_TOKEN);
    this.init();
    this.notify('reset', null);
  }
}

export const store = new Store();
