<template>
  <div class="fluent-page fluent-surface-tertiary scrollable-page">
    <div class="fluent-page-content scrollable-content">
      <div class="projects-container">
        <!-- Page Header -->
        <div class="page-header fluent-animate-fade-in">
          <h1 class="fluent-text-display">Projects</h1>
          <p class="fluent-text-subheading">
            My creative and technical projects
          </p>
        </div>

        <!-- Projects Grid -->
        <div class="projects-grid fluent-animate-slide-in">
          <!-- AI Art Project -->
          <div class="project-card fluent-card fluent-card-elevated">
            <div class="project-image">
              <img 
                src="@assets/images/project/Project-StableDiffusion.jpg" 
                alt="Stable Diffusion Project"
                class="project-img"
              />
            </div>
            <div class="project-content">
              <div class="project-category art">Art</div>
              <h3 class="fluent-text-heading">AI Image Generation</h3>
              <h4 class="fluent-text-subheading">Stable Diffusion</h4>
              <p class="fluent-text-caption">Since 2023</p>
              <p class="fluent-text-body project-description">
                Stable Diffusion is a generative artificial intelligence (AI) model that produces 
                unique photorealistic images from text and image prompts. It operates based on 
                diffusion technology and uses latent space.
              </p>
              <button class="fluent-button fluent-button-ghost">
                View Gallery
              </button>
            </div>
          </div>

          <!-- Video Editing Project -->
          <div class="project-card fluent-card fluent-card-elevated">
            <div class="project-image">
              <img 
                src="@assets/images/project/Project-EVA_harbin.jpg" 
                alt="Video Editing Project"
                class="project-img"
              />
            </div>
            <div class="project-content">
              <div class="project-category art">Art</div>
              <h3 class="fluent-text-heading">Video Editing</h3>
              <p class="fluent-text-caption">Since 2018</p>
              <p class="fluent-text-body project-description">
                Creative video editing and production with focus on storytelling and visual effects.
              </p>
              <div class="project-links">
                <a 
                  href="https://www.bilibili.com/video/BV1zz4y1n7zm/" 
                  class="fluent-button fluent-button-ghost"
                  target="_blank"
                >
                  Cambridge Intro (49k views)
                </a>
                <a 
                  href="https://www.bilibili.com/video/BV1Fz4y1j7ry/" 
                  class="fluent-button fluent-button-ghost"
                  target="_blank"
                >
                  EVA Harbin (177k views)
                </a>
              </div>
            </div>
          </div>

          <!-- Game Development Project -->
          <div class="project-card fluent-card fluent-card-elevated">
            <div class="project-image">
              <img 
                src="@assets/images/project/Project-UE5_MPFPS.png" 
                alt="Unreal Engine 5 Project"
                class="project-img"
              />
            </div>
            <div class="project-content">
              <div class="project-category game">Game Development</div>
              <h3 class="fluent-text-heading">Multiplayer FPS Game</h3>
              <h4 class="fluent-text-subheading">Unreal Engine 5</h4>
              <p class="fluent-text-caption">Since 2020</p>
              <p class="fluent-text-body project-description">
                Unreal Engine 5 is the world's most open and advanced real-time 3D creation tool. 
                Creating immersive multiplayer experiences with cutting-edge technology.
              </p>
              <button class="fluent-button fluent-button-ghost">
                Learn More
              </button>
            </div>
          </div>

          <!-- Backend Development Project -->
          <div class="project-card fluent-card fluent-card-elevated">
            <div class="project-images">
              <img 
                src="@assets/images/project/Project-GNetwork_server.jpg" 
                alt="GNetwork Server"
                class="project-img-small"
              />
              <img 
                src="@assets/images/project/Project-Dell-server.jpg" 
                alt="Dell Server"
                class="project-img-small"
              />
            </div>
            <div class="project-content">
              <div class="project-category backend">Backend Development</div>
              <h3 class="fluent-text-heading">Kurumi Server</h3>
              <p class="fluent-text-caption">Since 2018</p>
              <p class="fluent-text-body project-description">
                A comprehensive server infrastructure project combining software and hardware solutions. 
                Self-hosted on 2U DELL R720 Rack Server running VMware ESXI.
              </p>
              
              <div class="tech-stack">
                <h4 class="fluent-text-subheading">Technology Stack</h4>
                <div class="tech-categories">
                  <div class="tech-category">
                    <h5 class="fluent-text-body">Backend</h5>
                    <ul class="tech-list">
                      <li>Nginx - Reverse Proxy, HTTPS</li>
                      <li>MySQL & MongoDB - Database</li>
                      <li>VMware ESXI - VM Platform</li>
                      <li>Dell iDRAC - Server Management</li>
                    </ul>
                  </div>
                  
                  <div class="tech-category">
                    <h5 class="fluent-text-body">Services</h5>
                    <ul class="tech-list">
                      <li>Alist - Private Cloud Storage</li>
                      <li>Jellyfin - Video Streaming</li>
                      <li>AutoBangumi - Media Management</li>
                      <li>Minecraft Server</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div class="hardware-specs">
                <h4 class="fluent-text-subheading">Hardware Specifications</h4>
                <div class="specs-grid">
                  <div class="spec-item">
                    <span class="spec-label">CPU:</span>
                    <span class="spec-value">Intel Xeon E5 2637v2 × 2</span>
                  </div>
                  <div class="spec-item">
                    <span class="spec-label">RAM:</span>
                    <span class="spec-value">DDR3 ECC 64GB</span>
                  </div>
                  <div class="spec-item">
                    <span class="spec-label">Storage:</span>
                    <span class="spec-value">8TB HDD × 4 (RAID 10)</span>
                  </div>
                  <div class="spec-item">
                    <span class="spec-label">Network:</span>
                    <span class="spec-value">SFP+ 10Gbps × 2</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectsPage'
}
</script>

<style scoped>
.scrollable-page {
  min-height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
}

.scrollable-content {
  min-height: calc(100vh - 80px);
  padding: var(--fluent-spacing-xxl);
}

.projects-container {
  max-width: 1400px;
  width: 100%;
}

.page-header {
  text-align: center;
  margin-bottom: var(--fluent-spacing-xxxl);
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: var(--fluent-spacing-xl);
}

.project-card {
  overflow: hidden;
  transition: transform var(--fluent-duration-normal) var(--fluent-easing-ease);
}

.project-card:hover {
  transform: translateY(-4px);
}

.project-image {
  width: 100%;
  height: 200px;
  overflow: hidden;
}

.project-images {
  display: flex;
  gap: var(--fluent-spacing-s);
  margin-bottom: var(--fluent-spacing-m);
}

.project-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.project-img-small {
  flex: 1;
  height: 120px;
  object-fit: cover;
  border-radius: var(--fluent-border-radius-medium);
}

.project-content {
  padding: var(--fluent-spacing-l);
}

.project-category {
  display: inline-block;
  padding: var(--fluent-spacing-xs) var(--fluent-spacing-s);
  border-radius: var(--fluent-border-radius-small);
  font-size: var(--fluent-font-size-caption);
  font-weight: var(--fluent-font-weight-medium);
  margin-bottom: var(--fluent-spacing-m);
}

.project-category.art {
  background-color: #e3f2fd;
  color: #1976d2;
}

.project-category.game {
  background-color: #f3e5f5;
  color: #7b1fa2;
}

.project-category.backend {
  background-color: #e8f5e8;
  color: #388e3c;
}

.project-description {
  margin: var(--fluent-spacing-m) 0;
  color: var(--fluent-foreground-secondary);
}

.project-links {
  display: flex;
  flex-direction: column;
  gap: var(--fluent-spacing-s);
}

.tech-stack {
  margin-top: var(--fluent-spacing-l);
  padding-top: var(--fluent-spacing-l);
  border-top: 1px solid var(--fluent-neutral-quaternary);
}

.tech-categories {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--fluent-spacing-m);
  margin-top: var(--fluent-spacing-m);
}

.tech-category h5 {
  margin-bottom: var(--fluent-spacing-s);
  color: var(--fluent-accent-primary);
}

.tech-list {
  list-style: none;
  padding: 0;
}

.tech-list li {
  padding: var(--fluent-spacing-xs) 0;
  color: var(--fluent-foreground-secondary);
  font-size: var(--fluent-font-size-caption);
}

.hardware-specs {
  margin-top: var(--fluent-spacing-l);
  padding-top: var(--fluent-spacing-l);
  border-top: 1px solid var(--fluent-neutral-quaternary);
}

.specs-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--fluent-spacing-s);
  margin-top: var(--fluent-spacing-m);
}

.spec-item {
  display: flex;
  flex-direction: column;
  gap: var(--fluent-spacing-xs);
}

.spec-label {
  font-weight: var(--fluent-font-weight-medium);
  color: var(--fluent-foreground-primary);
  font-size: var(--fluent-font-size-caption);
}

.spec-value {
  color: var(--fluent-foreground-secondary);
  font-size: var(--fluent-font-size-caption);
}

/* Responsive Design */
@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
  
  .tech-categories {
    grid-template-columns: 1fr;
  }
  
  .specs-grid {
    grid-template-columns: 1fr;
  }
  
  .project-images {
    flex-direction: column;
  }
  
  .project-img-small {
    height: 100px;
  }
}
</style>
