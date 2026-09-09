// Seed data for HackPartner Platform
export const INITIAL_DOMAINS = [
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

export const INITIAL_SKILLS = [
  "React", "Next.js", "Python", "PyTorch", "TensorFlow", "Node.js", 
  "TypeScript", "Flutter", "Solidity", "FastAPI", "Docker", "Figma", 
  "Tailwind CSS", "GraphQL", "MongoDB", "PostgreSQL", "Go", "AWS"
];

export const INITIAL_CANDIDATES = [
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

export const INITIAL_PROJECTS = [
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

export const CURRENT_USER = {
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

export const DEFAULT_USERS = [
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

