// Project Demo Viewer & Interactive Prototype Sandbox
export class DemoViewer {
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
