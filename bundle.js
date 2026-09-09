// HackPartner Consolidated Standalone Bundle

/* --- js/data.js --- */
// Seed data for HackPartner Platform
const INITIAL_DOMAINS = [
  "All Domains",
  "AI & Machine Learning",
  "Web Development",
  "Mobile Apps",
  "Web3 & Blockchain",
  "Cloud & DevOps",
  "Cybersecurity",
  "UI/UX Design",
  "IoT & Robotics"
];
const INITIAL_SKILLS = [
  "React", "Next.js", "Python", "PyTorch", "TensorFlow", "Node.js", 
  "TypeScript", "Flutter", "Solidity", "FastAPI", "Docker", "Figma", 
  "Tailwind CSS", "GraphQL", "MongoDB", "PostgreSQL", "Go", "AWS"
];
const INITIAL_CANDIDATES = [
  {
    id: "cand-1",
    name: "Aarav Sharma",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    title: "AI/ML Engineer & PyTorch Specialist",
    university: "IIT Bombay • Pre-Final Year (CSE)",
    bio: "Passionate about Computer Vision & Large Multimodal Models. Won 1st place in Smart India Hackathon 2024 (MedTech). Looking for a team targeting HackMIT or SIH 2026.",
    domain: "AI & Machine Learning",
    skills: ["PyTorch", "Python", "FastAPI", "OpenCV", "TensorFlow", "Docker"],
    experience: "Hackathon Winner (3x)",
    hackathonsCount: 5,
    availability: "15+ hrs/week",
    rating: 4.9,
    reviewsCount: 14,
    github: "https://github.com",
    portfolio: "https://aarav-ai.dev",
    linkedin: "https://linkedin.com",
    hiredForProject: "proj-1",
    hiredRole: "FastAPI Backend & Inference Dev",
    isAvailable: false,
    badges: ["SIH 2024 Winner", "MLH Top Hacker", "Kaggle Expert"],
    featuredProject: {
      name: "RetinaScan AI",
      tagline: "Early Diabetic Retinopathy detection using Vision Transformers.",
      demoUrl: "#"
    }
  },
  {
    id: "cand-2",
    name: "Elena Rostova",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
    title: "Full-Stack Web & Next.js Architect",
    university: "UC Berkeley • Senior Year (Software Eng)",
    bio: "Building high-performance React/Next.js platforms with real-time WebSockets and Edge workers. Built 4 hackathon MVPs in 36-hour sprints.",
    domain: "Web Development",
    skills: ["React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS", "PostgreSQL"],
    experience: "Seasoned Builder (4x Finalist)",
    hackathonsCount: 6,
    availability: "Immediate (20 hrs/week)",
    rating: 5.0,
    reviewsCount: 19,
    github: "https://github.com",
    portfolio: "https://elena-codes.io",
    linkedin: "https://linkedin.com",
    hiredForProject: null,
    hiredRole: null,
    isAvailable: true,
    badges: ["CalHacks 2024 2nd Place", "React Certified", "Open Source Contributor"],
    featuredProject: {
      name: "CollabCanvas",
      tagline: "Real-time collaborative whiteboard with CRDT synchronization.",
      demoUrl: "#"
    }
  },
  {
    id: "cand-3",
    name: "Rohan Patel",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    title: "Web3 Smart Contract & DeFi Dev",
    university: "Georgia Tech • 3rd Year (CS)",
    bio: "Writing gas-optimized Solidity contracts & EVM integrations. Passionate about decentralized finance, zero-knowledge proofs, and hackathon bounties.",
    domain: "Web3 & Blockchain",
    skills: ["Solidity", "TypeScript", "Next.js", "Hardhat", "Ethers.js", "Web3.js"],
    experience: "Hackathon Winner (2x)",
    hackathonsCount: 4,
    availability: "Weekends & Evenings",
    rating: 4.8,
    reviewsCount: 9,
    github: "https://github.com",
    portfolio: "https://rohan-web3.eth",
    linkedin: "https://linkedin.com",
    hiredForProject: null,
    hiredRole: null,
    isAvailable: true,
    badges: ["ETHIndia 2024 Winner", "Polygon Bounty Winner"],
    featuredProject: {
      name: "LiquidityRoute",
      tagline: "Cross-chain automated yield aggregator across Arbitrum & Base.",
      demoUrl: "#"
    }
  },
  {
    id: "cand-4",
    name: "Priya Nair",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80",
    title: "Product Designer & UI/UX Specialist",
    university: "National Institute of Design • 4th Year",
    bio: "Turning complex technical specs into irresistible, intuitive interfaces. Rapid prototyping in Figma, design systems, and framer motion front-end handoff.",
    domain: "UI/UX Design",
    skills: ["Figma", "UI/UX Design", "Wireframing", "Tailwind CSS", "Prototyping", "Design Systems"],
    experience: "Hackathon Winner (3x Best Design)",
    hackathonsCount: 5,
    availability: "15+ hrs/week",
    rating: 4.95,
    reviewsCount: 22,
    github: "https://github.com",
    portfolio: "https://priyanair.design",
    linkedin: "https://linkedin.com",
    hiredForProject: null,
    hiredRole: null,
    isAvailable: true,
    badges: ["Best UI/UX Award HackCBS", "Figma Community Creator"],
    featuredProject: {
      name: "FinPulse Design System",
      tagline: "40+ micro-animated dark mode components for Web3 fintech.",
      demoUrl: "#"
    }
  },
  {
    id: "cand-5",
    name: "Marcus Vance",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
    title: "Cross-Platform Mobile Dev (Flutter / Dart)",
    university: "University of Waterloo • 2nd Year",
    bio: "Creating butter-smooth iOS and Android applications with Flutter, Riverpod, and Firebase. Eager to partner with backend/ML folks for upcoming 48hr hackathons.",
    domain: "Mobile Apps",
    skills: ["Flutter", "Dart", "Firebase", "REST APIs", "GraphQL", "Mobile UX"],
    experience: "1-3 Hackathons",
    hackathonsCount: 3,
    availability: "Flexible (10-15 hrs/wk)",
    rating: 4.7,
    reviewsCount: 7,
    github: "https://github.com",
    portfolio: "https://marcusvance.app",
    linkedin: "https://linkedin.com",
    hiredForProject: null,
    hiredRole: null,
    isAvailable: true,
    badges: ["Waterloo Hacks Finalist"],
    featuredProject: {
      name: "StrideTrack",
      tagline: "Offline-first athletic GPS tracking with real-time biometric sync.",
      demoUrl: "#"
    }
  },
  {
    id: "cand-6",
    name: "Zainab Al-Mansoor",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80",
    title: "Cloud Infrastructure & Backend Engineer",
    university: "NUS Singapore • Master's Candidate",
    bio: "Building resilient microservices with Go, Docker, Kubernetes, and AWS. Loves orchestrating serverless APIs and securing distributed cloud topologies.",
    domain: "Cloud & DevOps",
    skills: ["Go", "Docker", "Kubernetes", "AWS", "PostgreSQL", "FastAPI"],
    experience: "Hackathon Winner (2x)",
    hackathonsCount: 4,
    availability: "Immediate (15 hrs/wk)",
    rating: 4.9,
    reviewsCount: 11,
    github: "https://github.com",
    portfolio: "https://zainab-cloud.io",
    linkedin: "https://linkedin.com",
    hiredForProject: null,
    hiredRole: null,
    isAvailable: true,
    badges: ["AWS Certified Solutions Architect", "HackGov SG 1st Prize"],
    featuredProject: {
      name: "KubeScaler",
      tagline: "Predictive autoscaler for Kubernetes clusters based on traffic burst forecasting.",
      demoUrl: "#"
    }
  }
];
const INITIAL_PROJECTS = [
  {
    id: "proj-1",
    title: "MediScan AI - Diabetic Retinopathy Screening",
    tagline: "Empowering rural clinics with zero-cost AI fundus image diagnostics under 3 seconds.",
    targetEvent: "Smart India Hackathon 2026 (Healthcare Domain)",
    domain: "AI & Machine Learning",
    ownerName: "Devansh Mehta",
    ownerAvatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120&auto=format&fit=crop&q=80",
    ownerUniversity: "BITS Pilani",
    neededRoles: [
      { role: "Frontend UI/UX Specialist", filled: false, candidateId: null },
      { role: "FastAPI Backend & Inference Dev", filled: true, candidateId: "cand-1" }
    ],
    skillsRequired: ["PyTorch", "React", "FastAPI", "Computer Vision", "Tailwind CSS"],
    deadline: "2026-10-15",
    status: "In Progress",
    progressPct: 65,
    demo: {
      hasDemo: true,
      videoTitle: "MediScan AI 3-Minute Hackathon Demo",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      livePreviewUrl: "https://mediscan-ai-demo.web.app",
      githubRepo: "https://github.com/mediscan-ai/core-detector",
      summary: "Working prototype capable of classifying 5 stages of diabetic retinopathy with 94.2% sensitivity on the EyePACS benchmark dataset.",
      architecture: [
        { layer: "Inference Engine", detail: "ViT-Base-Patch16 fine-tuned on 35k retinal images" },
        { layer: "Backend API", detail: "FastAPI + async worker queue on Docker" },
        { layer: "Clinician Portal", detail: "React 19 + WebGL heatmap visualization" }
      ],
      keyFeatures: [
        "Instant Retinopathy Grade (0-4) with confidence score",
        "Explainability GradCAM heatmap overlay on optical disk",
        "Automated PDF medical referral dispatch to district ophthalmologist",
        "Offline-capable progressive web application mode"
      ]
    },
    milestones: [
      { id: "m-1", title: "Dataset Collection & Model Training", completed: true, dueDate: "Sept 1" },
      { id: "m-2", title: "FastAPI Inference Backend & GradCAM", completed: true, dueDate: "Sept 12" },
      { id: "m-3", title: "Interactive Doctor Web App & Heatmap", completed: false, dueDate: "Sept 25" },
      { id: "m-4", title: "Pilot Testing & Hackathon Pitch Video", completed: false, dueDate: "Oct 5" }
    ],
    tasks: [
      { id: "t-1", title: "Model ViT-B16 quantization to ONNX", status: "completed", priority: "high", assignee: "Aarav Sharma", dueDate: "Sept 4" },
      { id: "t-2", title: "Implement GradCAM heatmap generator endpoint", status: "completed", priority: "high", assignee: "Aarav Sharma", dueDate: "Sept 10" },
      { id: "t-3", title: "Build Drag & Drop Fundus image uploader", status: "in-progress", priority: "medium", assignee: "Devansh Mehta", dueDate: "Sept 18" },
      { id: "t-4", title: "Connect React viewer to FastAPI inference socket", status: "in-progress", priority: "high", assignee: "Aarav Sharma", dueDate: "Sept 21" },
      { id: "t-5", title: "Generate automated clinician report PDF", status: "backlog", priority: "low", assignee: "Devansh Mehta", dueDate: "Sept 28" }
    ],
    activityLog: [
      { id: "act-1", text: "Aarav Sharma was hired as FastAPI Backend & Inference Dev!", timestamp: "2 days ago", author: "System" },
      { id: "act-2", text: "Aarav Sharma completed task: 'Model ViT-B16 quantization to ONNX'", timestamp: "Yesterday", author: "Aarav" },
      { id: "act-3", text: "Devansh Mehta updated project demo with sample fundus scans", timestamp: "5 hours ago", author: "Devansh" }
    ]
  },
  {
    id: "proj-2",
    title: "EcoChain - Transparent Blue Carbon Marketplace",
    tagline: "Tokenizing verified mangrove reforestation with satellite NDVI oracle verification.",
    targetEvent: "ETHGlobal New York 2026 (Climate & ReFi)",
    domain: "Web3 & Blockchain",
    ownerName: "Sophia Chen",
    ownerAvatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&auto=format&fit=crop&q=80",
    ownerUniversity: "Stanford University",
    neededRoles: [
      { role: "Smart Contract Developer", filled: false, candidateId: null },
      { role: "Full-Stack Web3 Integrator", filled: false, candidateId: null }
    ],
    skillsRequired: ["Solidity", "Next.js", "Hardhat", "TypeScript", "Ethers.js"],
    deadline: "2026-11-20",
    status: "Recruiting",
    progressPct: 25,
    demo: {
      hasDemo: true,
      videoTitle: "EcoChain Protocol Architecture & Mint Flow",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      livePreviewUrl: "https://ecochain-climate.xyz",
      githubRepo: "https://github.com/ecochain-labs/contracts",
      summary: "Decentralized registry connecting certified coastal NGO restoration projects with institutional carbon buyers through automated satellite Sentinel-2 NDVI yield oracles.",
      architecture: [
        { layer: "Smart Contracts", detail: "ERC-1155 Semi-Fungible Carbon Batch credits on Arbitrum" },
        { layer: "Oracle Network", detail: "Chainlink Functions querying Copernicus Sentinel API" },
        { layer: "Trader dApp", detail: "Next.js 15, RainbowKit, and Tailwind CSS" }
      ],
      keyFeatures: [
        "Mint carbon credit tokens backed by GPS boundary polygon coordinates",
        "Automated bi-weekly biomass satellite validation trigger",
        "Zero gas fees for verified local indigenous restoration communities",
        "Live liquidation pool with Uniswap v4 hook routing"
      ]
    },
    milestones: [
      { id: "m-201", title: "ERC-1155 Smart Contract Architecture", completed: true, dueDate: "Oct 1" },
      { id: "m-202", title: "Sentinel-2 Satellite Oracle Integration", completed: false, dueDate: "Oct 18" },
      { id: "m-203", title: "Buyer & Seller Dashboard UI", completed: false, dueDate: "Nov 5" }
    ],
    tasks: [
      { id: "t-201", title: "Write CarbonBatch.sol ERC-1155 smart contract", status: "completed", priority: "high", assignee: "Sophia Chen", dueDate: "Oct 2" },
      { id: "t-202", title: "Chainlink Functions script for Sentinel NDVI retrieval", status: "in-progress", priority: "high", assignee: "Sophia Chen", dueDate: "Oct 15" },
      { id: "t-203", title: "Connect RainbowKit wallet modal to Next.js UI", status: "backlog", priority: "medium", assignee: "Unassigned", dueDate: "Oct 22" }
    ],
    activityLog: [
      { id: "act-201", text: "Project requirement posted for ETHGlobal 2026", timestamp: "3 days ago", author: "Sophia" }
    ]
  },
  {
    id: "proj-3",
    title: "CampusPulse - Real-Time Hackathon Team Up & Event Radar",
    tagline: "Hyperlocal campus mobile app for finding sudden hackathon teammates and hack nights.",
    targetEvent: "HackCBS 7.0 & Open Source",
    domain: "Mobile Apps",
    ownerName: "Arjun Verma",
    ownerAvatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=120&auto=format&fit=crop&q=80",
    ownerUniversity: "Delhi Technological University",
    neededRoles: [
      { role: "Flutter Mobile Developer", filled: false, candidateId: null },
      { role: "Node.js Realtime Backend", filled: false, candidateId: null }
    ],
    skillsRequired: ["Flutter", "Node.js", "Socket.io", "Figma", "Firebase"],
    deadline: "2026-10-30",
    status: "Recruiting",
    progressPct: 40,
    demo: {
      hasDemo: true,
      videoTitle: "CampusPulse Mobile Walkthrough",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
      livePreviewUrl: "https://campuspulse.flutterflow.app",
      githubRepo: "https://github.com/campuspulse/mobile-app",
      summary: "Mobile-first radar alerting engineering students when teammates with matching skills are in the same lab or campus hub.",
      architecture: [
        { layer: "Mobile Client", detail: "Flutter 3.24 with Material 3 expressive design" },
        { layer: "Realtime Gateway", detail: "Node.js + Socket.io geofencing room service" },
        { layer: "Storage & Auth", detail: "Supabase Postgres with Row Level Security" }
      ],
      keyFeatures: [
        "Proximity radar for campus hackathons and tech clubs",
        "1-Tap QR team formation during registration queues",
        "Instant group chat with code snippets and whiteboard sharing"
      ]
    },
    milestones: [
      { id: "m-301", title: "Figma UX Prototypes & User Flow", completed: true, dueDate: "Sept 10" },
      { id: "m-302", title: "Flutter Geolocation & Map Screens", completed: true, dueDate: "Sept 20" },
      { id: "m-303", title: "Socket.io Realtime Matchmaking Service", completed: false, dueDate: "Oct 10" }
    ],
    tasks: [
      { id: "t-301", title: "Setup Flutter project with Riverpod state", status: "completed", priority: "medium", assignee: "Arjun Verma", dueDate: "Sept 12" },
      { id: "t-302", title: "Implement live campus map markers", status: "completed", priority: "high", assignee: "Arjun Verma", dueDate: "Sept 18" },
      { id: "t-303", title: "Build Socket.io matching rooms on Node backend", status: "backlog", priority: "high", assignee: "Unassigned", dueDate: "Oct 5" }
    ],
    activityLog: [
      { id: "act-301", text: "Created project requirement for HackCBS 7.0", timestamp: "4 days ago", author: "Arjun" }
    ]
  }
];
const CURRENT_USER = {
  id: "user-1",
  name: "Devansh Mehta",
  avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120&auto=format&fit=crop&q=80",
  university: "BITS Pilani • Senior Year (CS)",
  role: "Project Owner & Full-Stack Engineer",
  email: "devansh@hackpartner.dev",
  bio: "Hackathon enthusiast, working on MediScan AI and leading campus dev clubs. Looking for talented peers to build winning products!",
  skills: ["React", "FastAPI", "Python", "Tailwind CSS", "Docker", "Machine Learning"],
  projectsCreated: ["proj-1"],
  projectsJoined: []
};
const DEFAULT_USERS = [
  {
    id: "user-1",
    name: "Devansh Mehta",
    email: "devansh@hackpartner.dev",
    password: "password123",
    roleType: "lead",
    role: "Project Owner & Full-Stack Engineer",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120&auto=format&fit=crop&q=80",
    university: "BITS Pilani • Senior Year (CS)",
    domain: "AI & Machine Learning",
    bio: "Hackathon enthusiast, working on MediScan AI and leading campus dev clubs. Looking for talented peers to build winning products!",
    skills: ["React", "FastAPI", "Python", "Tailwind CSS", "Docker", "Machine Learning"],
    projectsCreated: ["proj-1"],
    projectsJoined: []
  },
  {
    id: "user-2",
    candidateId: "cand-1",
    name: "Aarav Sharma",
    email: "aarav@hackpartner.dev",
    password: "password123",
    roleType: "partner",
    role: "AI/ML Engineer & PyTorch Specialist",
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=120&auto=format&fit=crop&q=80",
    university: "IIT Bombay • Pre-Final Year (CSE)",
    domain: "AI & Machine Learning",
    bio: "Passionate about Computer Vision and Deep Learning. 3x Hackathon winner ready to collaborate on challenging SIH or MLH projects.",
    skills: ["PyTorch", "Python", "FastAPI", "OpenCV", "Docker"],
    projectsCreated: [],
    projectsJoined: ["proj-1"]
  },
  {
    id: "user-3",
    candidateId: "cand-3",
    name: "Elena Rostova",
    email: "elena@hackpartner.dev",
    password: "password123",
    roleType: "partner",
    role: "Solidity & Smart Contract Auditor",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80",
    university: "ETH Zurich • Graduate Exchange",
    domain: "Web3 & Blockchain",
    bio: "EVM specialist and DeFi protocol researcher. Built 4 audited protocols at ETHGlobal hackathons. Looking for innovative Web3 projects.",
    skills: ["Solidity", "Hardhat", "Ethers.js", "Foundry", "Rust"],
    projectsCreated: [],
    projectsJoined: []
  }
];



/* --- js/store.js --- */
// Reactive LocalStorage Store for HackPartner Platform

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
const store = new Store();


/* --- js/demoViewer.js --- */
// Project Demo Viewer & Interactive Prototype Sandbox
class DemoViewer {
  constructor(containerElement) {
    this.container = containerElement;
    this.currentProject = null;
    this.activeTab = 'sandbox'; // 'sandbox' | 'video' | 'code' | 'specs'
    this.simulationState = {
      selectedSample: 'scan-1',
      isAnalyzing: false,
      analysisDone: false,
      result: null
    };
  }

  open(project) {
    this.currentProject = project;
    this.activeTab = 'sandbox';
    this.resetSimulation();
    this.render();
    const modal = document.getElementById('demo-modal');
    if (modal) {
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  close() {
    const modal = document.getElementById('demo-modal');
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  resetSimulation() {
    this.simulationState = {
      selectedSample: 'scan-1',
      isAnalyzing: false,
      analysisDone: false,
      result: null
    };
  }

  setTab(tabName) {
    this.activeTab = tabName;
    this.render();
  }

  render() {
    if (!this.currentProject) return;
    const p = this.currentProject;
    const demo = p.demo || {
      hasDemo: true,
      summary: "Project prototype and live demonstration.",
      keyFeatures: ["Core MVP functionality", "Tested on realistic inputs", "Ready for peer review"],
      architecture: [{ layer: "Frontend", detail: "Modern UI" }, { layer: "Backend", detail: "REST APIs" }]
    };

    this.container.innerHTML = `
      <div class="demo-modal-dialog">
        <!-- Modal Header -->
        <div class="demo-header">
          <div class="demo-title-area">
            <div class="demo-badge-row">
              <span class="badge badge-accent">Interactive Project Showcase</span>
              <span class="badge badge-domain">${p.domain}</span>
              <span class="badge badge-event">${p.targetEvent || 'Hackathon Project'}</span>
            </div>
            <h2 class="demo-title">${p.title}</h2>
            <p class="demo-tagline">${p.tagline}</p>
          </div>
          <button class="btn-close" id="close-demo-btn" title="Close Showcase">&times;</button>
        </div>

        <!-- Project Quick Stats & Links -->
        <div class="demo-toolbar">
          <div class="demo-tabs">
            <button class="demo-tab-btn ${this.activeTab === 'sandbox' ? 'active' : ''}" data-tab="sandbox">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
              Interactive Live Sandbox
            </button>
            <button class="demo-tab-btn ${this.activeTab === 'video' ? 'active' : ''}" data-tab="video">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"/></svg>
              Pitch & Video Walkthrough
            </button>
            <button class="demo-tab-btn ${this.activeTab === 'code' ? 'active' : ''}" data-tab="code">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
              Architecture & Code
            </button>
            <button class="demo-tab-btn ${this.activeTab === 'specs' ? 'active' : ''}" data-tab="specs">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
              Project Specifications
            </button>
          </div>
          <div class="demo-actions">
            ${demo.githubRepo ? `
              <a href="${demo.githubRepo}" target="_blank" class="btn btn-secondary btn-sm">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                View Repository
              </a>
            ` : ''}
            <button class="btn btn-primary btn-sm" id="demo-join-team-btn" data-project-id="${p.id}">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="20" y1="8" x2="20" y2="14"/><line x1="23" y1="11" x2="17" y2="11"/></svg>
              Apply / Team Up
            </button>
          </div>
        </div>

        <!-- Main Tab Content Area -->
        <div class="demo-body">
          ${this.renderTabContent()}
        </div>
      </div>
    `;

    this.bindEvents();
  }

  renderTabContent() {
    switch (this.activeTab) {
      case 'sandbox':
        return this.renderSandboxTab();
      case 'video':
        return this.renderVideoTab();
      case 'code':
        return this.renderCodeTab();
      case 'specs':
        return this.renderSpecsTab();
      default:
        return this.renderSandboxTab();
    }
  }

  // TAB 1: INTERACTIVE LIVE SANDBOX
  renderSandboxTab() {
    const p = this.currentProject;

    // Custom interactive sandbox simulation depending on project domain
    if (p.id === 'proj-1') {
      return `
        <div class="sandbox-container">
          <div class="sandbox-browser-chrome">
            <div class="browser-dots">
              <span class="dot dot-red"></span>
              <span class="dot dot-yellow"></span>
              <span class="dot dot-green"></span>
            </div>
            <div class="browser-address-bar">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
              <span>https://preview.hackpartner.io/mediscan-vit-demo</span>
            </div>
            <span class="browser-status-pill">Live Simulated Environment</span>
          </div>

          <div class="sandbox-interactive-workspace">
            <div class="mediscan-demo-grid">
              <!-- Left: Controls & Image Select -->
              <div class="mediscan-controls-panel">
                <h4 class="panel-heading">1. Select Sample Patient Retinal Scan</h4>
                <div class="sample-scans-row">
                  <div class="sample-scan-card ${this.simulationState.selectedSample === 'scan-1' ? 'active' : ''}" data-sample="scan-1">
                    <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=200&auto=format&fit=crop&q=80" alt="Scan 1" />
                    <div class="sample-meta">
                      <span class="sample-name">Patient #4829</span>
                      <span class="sample-sub">Diabetic Patient (Type 2)</span>
                    </div>
                  </div>
                  <div class="sample-scan-card ${this.simulationState.selectedSample === 'scan-2' ? 'active' : ''}" data-sample="scan-2">
                    <img src="https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=200&auto=format&fit=crop&q=80" alt="Scan 2" />
                    <div class="sample-meta">
                      <span class="sample-name">Patient #7104</span>
                      <span class="sample-sub">Routine Health Checkup</span>
                    </div>
                  </div>
                  <div class="sample-scan-card ${this.simulationState.selectedSample === 'scan-3' ? 'active' : ''}" data-sample="scan-3">
                    <img src="https://images.unsplash.com/photo-1516549655169-df83a0774514?w=200&auto=format&fit=crop&q=80" alt="Scan 3" />
                    <div class="sample-meta">
                      <span class="sample-name">Patient #9231</span>
                      <span class="sample-sub">Pre-Op Screening</span>
                    </div>
                  </div>
                </div>

                <div class="sandbox-action-box">
                  <button class="btn btn-primary btn-lg w-100" id="run-ai-diagnostic-btn" ${this.simulationState.isAnalyzing ? 'disabled' : ''}>
                    ${this.simulationState.isAnalyzing ? `
                      <span class="spinner-inline"></span> Running ViT Inference & GradCAM Heatmap...
                    ` : `
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                      Run AI Diagnostic Inference
                    `}
                  </button>
                  <p class="text-muted text-xs text-center mt-2">
                    Inference simulated using quantized Vision Transformer (ViT-B/16) at 8.4ms latency.
                  </p>
                </div>
              </div>

              <!-- Right: Realtime Diagnostic Output Viewer -->
              <div class="mediscan-output-panel">
                <h4 class="panel-heading">2. Diagnostic Findings & GradCAM Overlay</h4>
                <div class="diagnostic-screen ${this.simulationState.isAnalyzing ? 'scanning' : ''}">
                  ${this.simulationState.isAnalyzing ? `
                    <div class="scanning-overlay">
                      <div class="scan-laser"></div>
                      <div class="scan-status-text">
                        <span class="badge badge-accent">PyTorch Tensor Processing</span>
                        <p>Extracting macular feature vectors & patch embeddings...</p>
                      </div>
                    </div>
                  ` : ''}

                  ${this.simulationState.analysisDone ? `
                    <div class="diagnostic-result-card fade-in">
                      <div class="result-header">
                        <div class="result-badge-group">
                          <span class="badge ${this.simulationState.result.severity === 'high' ? 'badge-danger' : 'badge-success'}">
                            ${this.simulationState.result.stage}
                          </span>
                          <span class="badge badge-accent">${this.simulationState.result.confidence}% Confidence</span>
                        </div>
                        <span class="result-time">Inference time: 142ms</span>
                      </div>

                      <div class="result-details">
                        <div class="result-metric">
                          <span class="metric-label">Microaneurysms Detected</span>
                          <span class="metric-val text-amber">${this.simulationState.result.microaneurysms}</span>
                        </div>
                        <div class="result-metric">
                          <span class="metric-label">Hard Exudates Density</span>
                          <span class="metric-val">${this.simulationState.result.exudates}</span>
                        </div>
                        <div class="result-metric">
                          <span class="metric-label">Clinical Recommendation</span>
                          <span class="metric-val text-accent">${this.simulationState.result.action}</span>
                        </div>
                      </div>

                      <div class="gradcam-heatmap-container">
                        <div class="heatmap-header">
                          <span>GradCAM Visual Attention Map</span>
                          <span class="text-xs text-muted">Attention concentrated in inferior temporal arcade</span>
                        </div>
                        <div class="heatmap-visual">
                          <div class="heatmap-circle"></div>
                          <span class="heatmap-marker">Target Lesion Alpha</span>
                        </div>
                      </div>

                      <div class="result-footer">
                        <button class="btn btn-outline btn-sm" id="export-pdf-btn">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                          Export Clinician PDF Report
                        </button>
                        <span class="text-xs text-muted">Validated with EyePACS Ground Truth</span>
                      </div>
                    </div>
                  ` : `
                    <div class="diagnostic-empty-state">
                      <div class="empty-icon-glow">
                        <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/><line x1="12" y1="2" x2="12" y2="4"/><line x1="12" y1="20" x2="12" y2="22"/><line x1="2" y1="12" x2="4" y2="12"/><line x1="20" y1="12" x2="22" y2="12"/></svg>
                      </div>
                      <h5>Ready for Retinal Examination</h5>
                      <p>Select a sample patient retinal scan and click "Run AI Diagnostic Inference" to see the live neural network classification.</p>
                    </div>
                  `}
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
    }

    // Default interactive sandbox for other projects
    return `
      <div class="sandbox-container">
        <div class="sandbox-browser-chrome">
          <div class="browser-dots">
            <span class="dot dot-red"></span>
            <span class="dot dot-yellow"></span>
            <span class="dot dot-green"></span>
          </div>
          <div class="browser-address-bar">
            <span>https://app-preview.hackpartner.io/${p.id}</span>
          </div>
          <span class="browser-status-pill">Interactive Prototype Preview</span>
        </div>

        <div class="sandbox-interactive-workspace p-4">
          <div class="generic-sandbox-card">
            <div class="generic-sandbox-hero">
              <span class="badge badge-accent mb-2">${p.domain} Prototype</span>
              <h3>${p.title}</h3>
              <p class="text-muted mb-4">${p.tagline}</p>

              <div class="interactive-prototype-box">
                <div class="sandbox-preview-mockup">
                  <div class="mockup-header-bar">
                    <span class="mockup-title">Prototype Live Viewport</span>
                    <div class="viewport-toggle">
                      <button class="viewport-btn active">Desktop</button>
                      <button class="viewport-btn">Tablet</button>
                      <button class="viewport-btn">Mobile</button>
                    </div>
                  </div>
                  <div class="mockup-screen-area">
                    <div class="mockup-content-canvas">
                      <div class="canvas-item-circle"></div>
                      <h4>${p.title} Interactive Interface</h4>
                      <p>Active hackathon MVP currently tested on testbed.</p>
                      <div class="canvas-stats-row">
                        <div class="canvas-stat">
                          <span class="stat-num">99.8%</span>
                          <span class="stat-label">Uptime</span>
                        </div>
                        <div class="canvas-stat">
                          <span class="stat-num">&lt; 250ms</span>
                          <span class="stat-label">Response Time</span>
                        </div>
                        <div class="canvas-stat">
                          <span class="stat-num">Verified</span>
                          <span class="stat-label">Test Coverage</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // TAB 2: VIDEO & PITCH WALKTHROUGH
  renderVideoTab() {
    const p = this.currentProject;
    const demo = p.demo || {};

    return `
      <div class="video-tab-layout">
        <div class="video-player-wrapper">
          <div class="custom-video-player">
            <!-- Simulated High-Tech Video Screen -->
            <div class="video-screen-mockup">
              <div class="video-backdrop-mesh"></div>
              <div class="video-center-content">
                <button class="video-play-huge-btn" id="simulated-play-btn">
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                </button>
                <div class="video-overlay-titles">
                  <h4>${demo.videoTitle || `${p.title} - Pitch Walkthrough`}</h4>
                  <p>Recorded for ${p.targetEvent || 'Hackathon Judges'}</p>
                </div>
              </div>

              <!-- Video Controls Bar -->
              <div class="video-control-bar">
                <button class="v-btn play"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg></button>
                <div class="v-progress-rail">
                  <div class="v-progress-filled" style="width: 42%;"></div>
                  <div class="v-scrubber" style="left: 42%;"></div>
                </div>
                <span class="v-time">01:14 / 03:00</span>
                <button class="v-btn"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/></svg></button>
                <button class="v-btn"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/></svg></button>
              </div>
            </div>
          </div>

          <!-- Video Chapters & Notes -->
          <div class="video-chapters-panel">
            <h4 class="chapters-title">Demo Chapters</h4>
            <div class="chapter-list">
              <div class="chapter-item active">
                <span class="chapter-time">00:00</span>
                <div class="chapter-info">
                  <strong>Introduction & Problem Context</strong>
                  <p>The gap in healthcare access and diagnosis delays.</p>
                </div>
              </div>
              <div class="chapter-item">
                <span class="chapter-time">00:45</span>
                <div class="chapter-info">
                  <strong>System Architecture & Machine Learning Stack</strong>
                  <p>Vision Transformer ViT-B/16 quantization and FastAPI pipeline.</p>
                </div>
              </div>
              <div class="chapter-item">
                <span class="chapter-time">01:30</span>
                <div class="chapter-info">
                  <strong>Live Real-time Diagnosis & GradCAM Heatmap</strong>
                  <p>Demonstration on benchmark retinal datasets.</p>
                </div>
              </div>
              <div class="chapter-item">
                <span class="chapter-time">02:20</span>
                <div class="chapter-info">
                  <strong>Future Roadmap & Deployment to Primary Health Centers</strong>
                  <p>How the team plans to scale to 500+ rural clinics.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // TAB 3: CODE & ARCHITECTURE
  renderCodeTab() {
    const p = this.currentProject;
    const demo = p.demo || {};

    return `
      <div class="code-tab-layout">
        <!-- Architecture Layered Overview -->
        <div class="architecture-grid">
          <div class="arch-card">
            <div class="arch-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg></div>
            <div class="arch-content">
              <h5>Model & AI Inference</h5>
              <p>PyTorch ViT-Base-16 fine-tuned with contrastive loss, exported to ONNX Runtime for low-latency Edge execution.</p>
              <div class="code-snippet-box">
                <code># ViT inference forward pass\noutputs = vit_model(tensor_image)\nheatmap = generate_gradcam(outputs, target_layer)</code>
              </div>
            </div>
          </div>

          <div class="arch-card">
            <div class="arch-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg></div>
            <div class="arch-content">
              <h5>Backend API & Workers</h5>
              <p>Asynchronous FastAPI microservice connected to Celery Redis workers for background PDF generation and telemetry.</p>
              <div class="code-snippet-box">
                <code>@app.post("/api/v1/diagnose")\nasync def diagnose_retina(file: UploadFile):\n    return await inference_service.predict(file)</code>
              </div>
            </div>
          </div>

          <div class="arch-card">
            <div class="arch-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg></div>
            <div class="arch-content">
              <h5>Frontend Clinician Portal</h5>
              <p>Next.js / React with WebGL canvas shaders rendering real-time pixel heatmaps directly in the browser.</p>
              <div class="code-snippet-box">
                <code>&lt;HeatmapCanvas\n  fundusData={scanImage}\n  weights={gradcamMatrix}\n  opacity={0.75}\n/&gt;</code>
              </div>
            </div>
          </div>
        </div>

        <!-- Tech Stack Pills -->
        <div class="tech-stack-section">
          <h4>Technologies Powering This Demo</h4>
          <div class="tech-pill-list">
            ${(p.skillsRequired || ['Python', 'React', 'FastAPI']).map(s => `
              <span class="tech-pill">
                <span class="tech-dot"></span>
                ${s}
              </span>
            `).join('')}
            <span class="tech-pill"><span class="tech-dot"></span>ONNX Runtime</span>
            <span class="tech-pill"><span class="tech-dot"></span>Docker</span>
            <span class="tech-pill"><span class="tech-dot"></span>WebGL</span>
          </div>
        </div>
      </div>
    `;
  }

  // TAB 4: SPECIFICATIONS & FEATURES
  renderSpecsTab() {
    const p = this.currentProject;
    const demo = p.demo || {};

    return `
      <div class="specs-tab-layout">
        <div class="specs-grid">
          <div class="specs-left">
            <h4 class="specs-heading">Project Abstract</h4>
            <p class="specs-text">${demo.summary || p.tagline}</p>

            <h4 class="specs-heading mt-4">Key Implemented Features</h4>
            <ul class="specs-feature-list">
              ${(demo.keyFeatures || [
                "End-to-end user workflow validated",
                "Responsive design for desktop and mobile devices",
                "Modern architecture with modular services"
              ]).map(f => `
                <li class="specs-feature-item">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent-emerald)" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>${f}</span>
                </li>
              `).join('')}
            </ul>
          </div>

          <div class="specs-right">
            <div class="team-owner-card">
              <h5 class="card-subtitle">Project Lead & Creator</h5>
              <div class="owner-profile-row">
                <img src="${p.ownerAvatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120'}" class="owner-avatar" alt="${p.ownerName}" />
                <div class="owner-meta">
                  <strong>${p.ownerName}</strong>
                  <span>${p.ownerUniversity || 'Team Creator'}</span>
                </div>
              </div>

              <div class="needed-roles-summary mt-4">
                <h5 class="card-subtitle">Teammates & Open Positions</h5>
                <div class="roles-roster">
                  ${(p.neededRoles || []).map(r => `
                    <div class="role-roster-item ${r.filled ? 'filled' : 'open'}">
                      <span class="status-indicator"></span>
                      <div class="role-text">
                        <strong>${r.role}</strong>
                        <span class="text-xs text-muted">${r.filled ? 'Filled' : 'Open for Hire'}</span>
                      </div>
                    </div>
                  `).join('')}
                </div>
              </div>

              <div class="specs-cta mt-4">
                <button class="btn btn-primary w-100" id="specs-apply-btn" data-project-id="${p.id}">
                  Apply to Join This Project
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  bindEvents() {
    // Tab switching
    this.container.querySelectorAll('.demo-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        this.setTab(btn.dataset.tab);
      });
    });

    // Close button
    const closeBtn = document.getElementById('close-demo-btn');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => this.close());
    }

    // Sample image selection
    this.container.querySelectorAll('.sample-scan-card').forEach(card => {
      card.addEventListener('click', () => {
        this.container.querySelectorAll('.sample-scan-card').forEach(c => c.classList.remove('active'));
        card.classList.add('active');
        this.simulationState.selectedSample = card.dataset.sample;
        this.simulationState.analysisDone = false;
        this.render();
      });
    });

    // Run AI diagnostic inference button
    const runBtn = document.getElementById('run-ai-diagnostic-btn');
    if (runBtn) {
      runBtn.addEventListener('click', () => {
        this.simulationState.isAnalyzing = true;
        this.render();

        setTimeout(() => {
          this.simulationState.isAnalyzing = false;
          this.simulationState.analysisDone = true;

          // Simulated diagnostic result based on sample
          if (this.simulationState.selectedSample === 'scan-1') {
            this.simulationState.result = {
              stage: 'Stage 3: Severe Non-Proliferative Retinopathy (NPDR)',
              severity: 'high',
              confidence: 96.4,
              microaneurysms: '18 focal lesions',
              exudates: 'High density near fovea',
              action: 'Immediate tertiary ophthalmology referral recommended within 7 days.'
            };
          } else if (this.simulationState.selectedSample === 'scan-2') {
            this.simulationState.result = {
              stage: 'Stage 0: Normal / No Apparent Retinopathy',
              severity: 'low',
              confidence: 99.1,
              microaneurysms: 'None observed',
              exudates: 'Clear optic disk margins',
              action: 'Annual standard diabetic wellness screening scheduled.'
            };
          } else {
            this.simulationState.result = {
              stage: 'Stage 1: Mild Non-Proliferative Retinopathy',
              severity: 'medium',
              confidence: 92.8,
              microaneurysms: '2 isolated microaneurysms',
              exudates: 'Minimal peripheral trace',
              action: 'Repeat screening in 6 months with glycemic control monitoring.'
            };
          }
          this.render();
        }, 1400);
      });
    }

    // Join team buttons
    const joinBtn = document.getElementById('demo-join-team-btn');
    const specsBtn = document.getElementById('specs-apply-btn');
    const handleJoin = () => {
      this.close();
      window.dispatchEvent(new CustomEvent('open-apply-modal', { detail: { project: this.currentProject } }));
    };
    if (joinBtn) joinBtn.addEventListener('click', handleJoin);
    if (specsBtn) specsBtn.addEventListener('click', handleJoin);

    // Play video simulation button
    const playHugeBtn = document.getElementById('simulated-play-btn');
    if (playHugeBtn) {
      playHugeBtn.addEventListener('click', () => {
        playHugeBtn.style.transform = 'scale(0.8)';
        setTimeout(() => {
          alert("🎬 Simulated pitch video playback started! In production, this embeds a real YouTube/Loom/Vimeo pitch walkthrough.");
          playHugeBtn.style.transform = 'scale(1)';
        }, 150);
      });
    }

    // Export PDF report
    const pdfBtn = document.getElementById('export-pdf-btn');
    if (pdfBtn) {
      pdfBtn.addEventListener('click', () => {
        alert("📄 Generated clinician audit report: 'MediScan_AI_Patient_Report.pdf'. Feature ready for clinical export!");
      });
    }
  }
}


/* --- js/tracker.js --- */
// Post-Hire Progress Tracking & Project Collaboration Dashboard
class ProgressTracker {
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


/* --- js/app.js --- */
// Main Application Controller for HackPartner




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

