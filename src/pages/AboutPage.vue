<template>
  <div class="fluent-page fluent-surface-secondary scrollable-page">
    <div class="fluent-page-content scrollable-content">
      <div class="about-container">
        <!-- Page Header -->
        <div class="page-header fluent-animate-fade-in">
          <h1 class="fluent-text-display">About Me</h1>
          <p class="fluent-text-subheading">
            My educational journey and professional development
          </p>
        </div>

        <!-- Education Section -->
        <div class="education-section fluent-animate-slide-in">
          <h2 class="fluent-text-title section-title">Education</h2>
          
          <div class="fluent-grid fluent-grid-2 education-grid">
            <!-- Primary Education -->
            <div class="fluent-card education-card">
              <div class="education-header">
                <div class="school-logos">
                  <img 
                    src="@assets/images/school_logo/PolyU_logo.png" 
                    alt="PolyU Logo"
                    class="school-logo"
                  />
                  <img 
                    src="@assets/images/school_logo/Polyu_comp50_logo.png" 
                    alt="PolyU Comp Logo"
                    class="school-logo"
                  />
                </div>
                <h3 class="fluent-text-heading">BSc (HONS) In Computer Science</h3>
                <h4 class="fluent-text-subheading">The Hong Kong Polytechnic University</h4>
                <p class="fluent-text-body">2022.09 - 2026.04</p>
              </div>
              
              <div class="education-details">
                <h4 class="fluent-text-subheading">Minor in Design</h4>
                <p class="fluent-text-body">2024.09 - 2026.04</p>
                <img 
                  src="@assets/images/school_logo/polyu_design_logo.png" 
                  alt="PolyU Design Logo"
                  class="school-logo"
                />
              </div>
            </div>

            <!-- Exchange Programs -->
            <div class="fluent-card education-card">
              <h3 class="fluent-text-heading">Exchange Programs</h3>
              
              <div class="exchange-item">
                <img 
                  src="@assets/images/school_logo/cambridge_logo.svg" 
                  alt="Cambridge Logo"
                  class="school-logo"
                />
                <div>
                  <h4 class="fluent-text-subheading">Summer Exchange</h4>
                  <p class="fluent-text-body">University Of Cambridge</p>
                  <p class="fluent-text-caption">2023.07</p>
                </div>
              </div>
              
              <div class="exchange-item">
                <img 
                  src="@assets/images/school_logo/TongJi_logo.png" 
                  alt="TongJi Logo"
                  class="school-logo"
                />
                <div>
                  <h4 class="fluent-text-subheading">Semester Exchange</h4>
                  <p class="fluent-text-body">TongJi University</p>
                  <p class="fluent-text-caption">2024.02 - 2024.07</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Activities Timeline -->
        <div class="activities-section fluent-animate-fade-in">
          <h2 class="fluent-text-title section-title">Activities Highlight</h2>
          
          <div class="timeline">
            <!-- Year 1 Activities -->
            <div class="timeline-section">
              <div class="timeline-header">
                <h3 class="fluent-text-heading">Year 1 Activities</h3>
                <span class="timeline-year">2022-2023</span>
              </div>
              
              <div class="timeline-items">
                <div class="timeline-item">
                  <div class="timeline-marker achievement"></div>
                  <div class="timeline-content">
                    <h4 class="fluent-text-subheading">Proof-of-Concept 2023-1</h4>
                    <p class="fluent-text-caption">2023.02.13</p>
                    <span class="achievement-badge outstanding">Outstanding Team</span>
                  </div>
                </div>
                
                <div class="timeline-item">
                  <div class="timeline-marker competition"></div>
                  <div class="timeline-content">
                    <h4 class="fluent-text-subheading">HKIA The 5th Innovation Day 2023</h4>
                    <p class="fluent-text-caption">2023.04.18</p>
                    <span class="achievement-badge finalist">Finalist</span>
                  </div>
                </div>
                
                <div class="timeline-item">
                  <div class="timeline-marker competition"></div>
                  <div class="timeline-content">
                    <h4 class="fluent-text-subheading">1st OSH Innovation & Technology award</h4>
                    <p class="fluent-text-caption">2023.11.08</p>
                    <span class="achievement-badge finalist">Finalist</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Year 2 Activities -->
            <div class="timeline-section">
              <div class="timeline-header">
                <h3 class="fluent-text-heading">Year 2 Activities</h3>
                <span class="timeline-year">2023-2024</span>
              </div>
              
              <div class="timeline-items">
                <div class="timeline-item">
                  <div class="timeline-marker project"></div>
                  <div class="timeline-content">
                    <h4 class="fluent-text-subheading">COMP2411 Database System</h4>
                    <p class="fluent-text-caption">2024.05.2</p>
                    <p class="fluent-text-body">Group Leader & Database designer</p>
                    <a href="https://github.com/ugnjhjf/COMP2411_DBGP" class="fluent-button fluent-button-ghost">
                      View Project
                    </a>
                  </div>
                </div>
                
                <div class="timeline-item">
                  <div class="timeline-marker certificate"></div>
                  <div class="timeline-content">
                    <h4 class="fluent-text-subheading">Japanese-Language Proficiency Test JLPT</h4>
                    <p class="fluent-text-caption">2024.01.22</p>
                    <span class="achievement-badge n3">N3</span>
                  </div>
                </div>
                
                <div class="timeline-item">
                  <div class="timeline-marker competition"></div>
                  <div class="timeline-content">
                    <h4 class="fluent-text-subheading">Hong Kong Techathon 2024</h4>
                    <p class="fluent-text-caption">2024.01.28</p>
                    <span class="achievement-badge silver">Silver Prize + HKSTP ideation</span>
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
  name: 'AboutPage'
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

.about-container {
  max-width: 1200px;
  width: 100%;
}

.page-header {
  text-align: center;
  margin-bottom: var(--fluent-spacing-xxxl);
}

.section-title {
  margin-bottom: var(--fluent-spacing-xl);
  text-align: center;
}

.education-grid {
  margin-bottom: var(--fluent-spacing-xxxl);
}

.education-card {
  padding: var(--fluent-spacing-xl);
}

.education-header {
  text-align: center;
  margin-bottom: var(--fluent-spacing-l);
}

.school-logos {
  display: flex;
  justify-content: center;
  gap: var(--fluent-spacing-m);
  margin-bottom: var(--fluent-spacing-m);
}

.school-logo {
  height: 40px;
  width: auto;
}

.education-details {
  text-align: center;
  padding-top: var(--fluent-spacing-m);
  border-top: 1px solid var(--fluent-neutral-quaternary);
}

.exchange-item {
  display: flex;
  align-items: center;
  gap: var(--fluent-spacing-m);
  margin-bottom: var(--fluent-spacing-m);
  padding: var(--fluent-spacing-m);
  background-color: var(--fluent-background-tertiary);
  border-radius: var(--fluent-border-radius-medium);
}

.timeline {
  max-width: 800px;
  margin: 0 auto;
}

.timeline-section {
  margin-bottom: var(--fluent-spacing-xxxl);
}

.timeline-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--fluent-spacing-l);
  padding-bottom: var(--fluent-spacing-m);
  border-bottom: 2px solid var(--fluent-accent-primary);
}

.timeline-year {
  background-color: var(--fluent-accent-primary);
  color: white;
  padding: var(--fluent-spacing-xs) var(--fluent-spacing-m);
  border-radius: var(--fluent-border-radius-large);
  font-size: var(--fluent-font-size-caption);
  font-weight: var(--fluent-font-weight-medium);
}

.timeline-items {
  position: relative;
  padding-left: var(--fluent-spacing-l);
}

.timeline-items::before {
  content: '';
  position: absolute;
  left: 8px;
  top: 0;
  bottom: 0;
  width: 2px;
  background-color: var(--fluent-neutral-quaternary);
}

.timeline-item {
  display: flex;
  align-items: flex-start;
  gap: var(--fluent-spacing-m);
  margin-bottom: var(--fluent-spacing-l);
  position: relative;
}

.timeline-marker {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 3px solid var(--fluent-background-primary);
  position: absolute;
  left: -24px;
  top: 4px;
  z-index: 1;
}

.timeline-marker.achievement {
  background-color: var(--fluent-accent-primary);
}

.timeline-marker.competition {
  background-color: #ff6b35;
}

.timeline-marker.project {
  background-color: #4ecdc4;
}

.timeline-marker.certificate {
  background-color: #45b7d1;
}

.timeline-content {
  flex: 1;
  background-color: var(--fluent-background-primary);
  padding: var(--fluent-spacing-m);
  border-radius: var(--fluent-border-radius-medium);
  box-shadow: var(--fluent-shadow-2);
}

.achievement-badge {
  display: inline-block;
  padding: var(--fluent-spacing-xs) var(--fluent-spacing-s);
  border-radius: var(--fluent-border-radius-small);
  font-size: var(--fluent-font-size-caption);
  font-weight: var(--fluent-font-weight-medium);
  margin-top: var(--fluent-spacing-xs);
}

.achievement-badge.outstanding {
  background-color: #4caf50;
  color: white;
}

.achievement-badge.finalist {
  background-color: #ff9800;
  color: white;
}

.achievement-badge.silver {
  background-color: #9e9e9e;
  color: white;
}

.achievement-badge.n3 {
  background-color: #2196f3;
  color: white;
}

/* Responsive Design */
@media (max-width: 768px) {
  .education-grid {
    grid-template-columns: 1fr;
  }
  
  .exchange-item {
    flex-direction: column;
    text-align: center;
  }
  
  .timeline-header {
    flex-direction: column;
    gap: var(--fluent-spacing-s);
    text-align: center;
  }
}
</style>
