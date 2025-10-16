<template>
  <div class="fluent-page fluent-surface-quaternary scrollable-page">
    <div class="fluent-page-content scrollable-content">
      <div class="services-container">
        <!-- Page Header -->
        <div class="page-header fluent-animate-fade-in">
          <h1 class="fluent-text-display">Services</h1>
          <p class="fluent-text-subheading">
            Self-hosted server infrastructure and cloud services
          </p>
        </div>

        <!-- Main Service Card -->
        <div class="main-service fluent-animate-slide-in">
          <div class="fluent-card fluent-card-elevated service-card">
            <div class="service-header">
              <h2 class="fluent-text-title">Kurumi & KeQing Self-hosted Servers</h2>
              <p class="fluent-text-caption">2019 - Current</p>
            </div>
            
            <p class="fluent-text-body service-description">
              A comprehensive server cluster providing a variety of services. 
              Built with enterprise-grade hardware and software solutions for 
              reliability, performance, and scalability.
            </p>

            <!-- Service Grid -->
            <div class="services-grid">
              <div class="service-item">
                <div class="service-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
                    <path d="M2 17L12 22L22 17" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
                    <path d="M2 12L12 17L22 12" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
                  </svg>
                </div>
                <div class="service-content">
                  <h3 class="fluent-text-heading">Video Streaming</h3>
                  <p class="fluent-text-body">AniOne</p>
                  <a 
                    href="https://anime.gnetwork.space" 
                    class="fluent-button fluent-button-ghost"
                    target="_blank"
                  >
                    Access Service
                  </a>
                </div>
              </div>

              <div class="service-item">
                <div class="service-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M21 16V8A2 2 0 0 0 19 6H5A2 2 0 0 0 3 8V16A2 2 0 0 0 5 18H19A2 2 0 0 0 21 16Z" stroke="currentColor" stroke-width="2"/>
                    <path d="M7 10H17" stroke="currentColor" stroke-width="2"/>
                    <path d="M7 14H13" stroke="currentColor" stroke-width="2"/>
                  </svg>
                </div>
                <div class="service-content">
                  <h3 class="fluent-text-heading">Personal Website</h3>
                  <p class="fluent-text-body">GNetwork</p>
                  <a href="#" class="fluent-button fluent-button-ghost">
                    Current Page
                  </a>
                </div>
              </div>

              <div class="service-item">
                <div class="service-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M18 10H6A2 2 0 0 0 4 12V20A2 2 0 0 0 6 22H18A2 2 0 0 0 20 20V12A2 2 0 0 0 18 10Z" stroke="currentColor" stroke-width="2"/>
                    <path d="M8 10V6A4 4 0 0 1 16 6V10" stroke="currentColor" stroke-width="2"/>
                  </svg>
                </div>
                <div class="service-content">
                  <h3 class="fluent-text-heading">Cloud Storage</h3>
                  <p class="fluent-text-body">GN.Data Warehouse</p>
                  <a 
                    href="https://cloud.gnetwork.space" 
                    class="fluent-button fluent-button-ghost"
                    target="_blank"
                  >
                    Access Storage
                  </a>
                </div>
              </div>

              <div class="service-item">
                <div class="service-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" stroke="currentColor" stroke-width="2"/>
                    <line x1="8" y1="21" x2="16" y2="21" stroke="currentColor" stroke-width="2"/>
                    <line x1="12" y1="17" x2="12" y2="21" stroke="currentColor" stroke-width="2"/>
                  </svg>
                </div>
                <div class="service-content">
                  <h3 class="fluent-text-heading">Virtual Machine Platform</h3>
                  <p class="fluent-text-body">ESXI</p>
                  <button class="fluent-button fluent-button-ghost" disabled>
                    Private Access
                  </button>
                </div>
              </div>

              <div class="service-item">
                <div class="service-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <ellipse cx="12" cy="5" rx="9" ry="3" stroke="currentColor" stroke-width="2"/>
                    <path d="M3 5V19A2 2 0 0 0 5 21H19A2 2 0 0 0 21 19V5" stroke="currentColor" stroke-width="2"/>
                    <path d="M3 12H21" stroke="currentColor" stroke-width="2"/>
                  </svg>
                </div>
                <div class="service-content">
                  <h3 class="fluent-text-heading">Database System</h3>
                  <p class="fluent-text-body">MySQL & MongoDB</p>
                  <button class="fluent-button fluent-button-ghost" disabled>
                    Private Access
                  </button>
                </div>
              </div>
            </div>

            <!-- Infrastructure Details -->
            <div class="infrastructure-section">
              <h3 class="fluent-text-heading">Infrastructure Overview</h3>
              
              <div class="infrastructure-grid">
                <div class="infrastructure-item">
                  <h4 class="fluent-text-subheading">Server Hardware</h4>
                  <ul class="infrastructure-list">
                    <li>Dell R720 2U Rack Server</li>
                    <li>Intel Xeon E5 2637v2 × 2</li>
                    <li>DDR3 ECC RAM 64GB</li>
                    <li>8TB HDD × 4 (RAID 10)</li>
                    <li>SFP+ 10Gbps Network</li>
                  </ul>
                </div>
                
                <div class="infrastructure-item">
                  <h4 class="fluent-text-subheading">Software Stack</h4>
                  <ul class="infrastructure-list">
                    <li>VMware ESXI Hypervisor</li>
                    <li>Nginx Reverse Proxy</li>
                    <li>MySQL & MongoDB</li>
                    <li>Docker Containers</li>
                    <li>SSL/TLS Encryption</li>
                  </ul>
                </div>
                
                <div class="infrastructure-item">
                  <h4 class="fluent-text-subheading">Network Infrastructure</h4>
                  <ul class="infrastructure-list">
                    <li>Youcan 3-level Switch</li>
                    <li>48 Ports + 4 SFP+</li>
                    <li>VLAN Support</li>
                    <li>Link Aggregation</li>
                    <li>Dynamic DNS</li>
                  </ul>
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
  name: 'ServicesPage'
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

.services-container {
  max-width: 1200px;
  width: 100%;
}

.page-header {
  text-align: center;
  margin-bottom: var(--fluent-spacing-xxxl);
}

.service-card {
  padding: var(--fluent-spacing-xxxl);
}

.service-header {
  text-align: center;
  margin-bottom: var(--fluent-spacing-xl);
}

.service-description {
  text-align: center;
  margin-bottom: var(--fluent-spacing-xxxl);
  color: var(--fluent-foreground-secondary);
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--fluent-spacing-l);
  margin-bottom: var(--fluent-spacing-xxxl);
}

.service-item {
  display: flex;
  align-items: flex-start;
  gap: var(--fluent-spacing-m);
  padding: var(--fluent-spacing-l);
  background-color: var(--fluent-background-secondary);
  border-radius: var(--fluent-border-radius-large);
  transition: all var(--fluent-duration-normal) var(--fluent-easing-ease);
}

.service-item:hover {
  background-color: var(--fluent-background-tertiary);
  transform: translateY(-2px);
}

.service-icon {
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  background-color: var(--fluent-accent-primary);
  border-radius: var(--fluent-border-radius-large);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.service-content {
  flex: 1;
}

.service-content h3 {
  margin-bottom: var(--fluent-spacing-xs);
}

.service-content p {
  color: var(--fluent-foreground-secondary);
  margin-bottom: var(--fluent-spacing-m);
}

.infrastructure-section {
  margin-top: var(--fluent-spacing-xxxl);
  padding-top: var(--fluent-spacing-xxxl);
  border-top: 1px solid var(--fluent-neutral-quaternary);
}

.infrastructure-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--fluent-spacing-l);
  margin-top: var(--fluent-spacing-l);
}

.infrastructure-item {
  padding: var(--fluent-spacing-l);
  background-color: var(--fluent-background-secondary);
  border-radius: var(--fluent-border-radius-large);
}

.infrastructure-item h4 {
  margin-bottom: var(--fluent-spacing-m);
  color: var(--fluent-accent-primary);
}

.infrastructure-list {
  list-style: none;
  padding: 0;
}

.infrastructure-list li {
  padding: var(--fluent-spacing-xs) 0;
  color: var(--fluent-foreground-secondary);
  font-size: var(--fluent-font-size-caption);
  position: relative;
  padding-left: var(--fluent-spacing-m);
}

.infrastructure-list li::before {
  content: '•';
  color: var(--fluent-accent-primary);
  position: absolute;
  left: 0;
}


/* Responsive Design */
@media (max-width: 768px) {
  .service-card {
    padding: var(--fluent-spacing-l);
  }
  
  .services-grid {
    grid-template-columns: 1fr;
  }
  
  .infrastructure-grid {
    grid-template-columns: 1fr;
  }
  
  
  .service-item {
    flex-direction: column;
    text-align: center;
  }
}
</style>
