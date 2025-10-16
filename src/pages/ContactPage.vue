<template>
  <div class="fluent-page fluent-surface-primary scrollable-page">
    <div class="fluent-page-content scrollable-content">
      <div class="contact-container">
        <!-- Page Header -->
        <div class="page-header fluent-animate-fade-in">
          <h1 class="fluent-text-display">Contact</h1>
          <p class="fluent-text-subheading">
            Get in touch with me
          </p>
        </div>

        <!-- Contact Content -->
        <div class="contact-content fluent-animate-slide-in">
          <div class="contact-grid">
            <!-- Contact Information -->
            <div class="contact-info">
              <div class="fluent-card contact-card">
                <h2 class="fluent-text-title">Let's Connect</h2>
                <p class="fluent-text-body contact-description">
                  I'm always interested in new opportunities, collaborations, 
                  and interesting projects. Feel free to reach out!
                </p>
                
                <div class="contact-methods">
                  <div class="contact-method">
                    <div class="contact-icon email">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" stroke-width="2"/>
                        <polyline points="22,6 12,13 2,6" stroke="currentColor" stroke-width="2"/>
                      </svg>
                    </div>
                    <div class="contact-details">
                      <h3 class="fluent-text-heading">Email</h3>
                      <p class="fluent-text-body">rokidna@outlook.com</p>
                      <button 
                        @click="sendEmail" 
                        class="fluent-button fluent-button-primary"
                      >
                        Send Email
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Social Links -->
            <div class="social-links">
              <div class="fluent-card social-card">
                <h2 class="fluent-text-title">Follow Me</h2>
                <p class="fluent-text-body social-description">
                  Connect with me on social platforms
                </p>
                
                <div class="social-grid">
                  <a 
                    href="https://github.com/ugnjhjf" 
                    class="social-item github"
                    target="_blank"
                  >
                    <div class="social-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </div>
                    <div class="social-content">
                      <h3 class="fluent-text-heading">GitHub</h3>
                      <p class="fluent-text-body">@ugnjhjf</p>
                    </div>
                  </a>

                  <a 
                    href="https://www.linkedin.com/in/david-shum-181595267/" 
                    class="social-item linkedin"
                    target="_blank"
                  >
                    <div class="social-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </div>
                    <div class="social-content">
                      <h3 class="fluent-text-heading">LinkedIn</h3>
                      <p class="fluent-text-body">David Shum</p>
                    </div>
                  </a>

                  <a 
                    href="https://www.instagram.com/rokidna?igsh=bHR4a2s5dmhicTln&utm_source=qr" 
                    class="social-item instagram"
                    target="_blank"
                  >
                    <div class="social-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </div>
                    <div class="social-content">
                      <h3 class="fluent-text-heading">Instagram</h3>
                      <p class="fluent-text-body">@rokidna</p>
                    </div>
                  </a>

                  <a 
                    href="https://u.wechat.com/EINIdt19g0KhFBMg6ONz7LE" 
                    class="social-item wechat"
                    target="_blank"
                  >
                    <div class="social-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8.5 12.5c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5.7 1.5 1.5 1.5 1.5-.7 1.5-1.5zm7 0c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5.7 1.5 1.5 1.5 1.5-.7 1.5-1.5z"/>
                        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z"/>
                      </svg>
                    </div>
                    <div class="social-content">
                      <h3 class="fluent-text-heading">WeChat</h3>
                      <p class="fluent-text-body">rokidna</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <!-- Footer -->
          <div class="contact-footer">
            <div class="fluent-card footer-card">
              <div class="footer-content">
                <div class="footer-info">
                  <h3 class="fluent-text-heading">Rokidna G</h3>
                  <p class="fluent-text-body">Made with ❤</p>
                </div>
                <div class="footer-note">
                  <p class="fluent-text-caption">
                    Background images are generated by Stable Diffusion
                  </p>
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
  name: 'ContactPage',
  methods: {
    sendEmail() {
      window.location.href = "mailto:rokidna@outlook.com"
    }
  }
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

.contact-container {
  max-width: 1000px;
  width: 100%;
}

.page-header {
  text-align: center;
  margin-bottom: var(--fluent-spacing-xxxl);
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--fluent-spacing-xl);
  margin-bottom: var(--fluent-spacing-xxxl);
}

.contact-card,
.social-card {
  padding: var(--fluent-spacing-xxxl);
  height: 100%;
}

.contact-description,
.social-description {
  color: var(--fluent-foreground-secondary);
  margin-bottom: var(--fluent-spacing-xl);
}

.contact-methods {
  display: flex;
  flex-direction: column;
  gap: var(--fluent-spacing-l);
}

.contact-method {
  display: flex;
  align-items: center;
  gap: var(--fluent-spacing-m);
  padding: var(--fluent-spacing-l);
  background-color: var(--fluent-background-secondary);
  border-radius: var(--fluent-border-radius-large);
}

.contact-icon {
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  border-radius: var(--fluent-border-radius-large);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.contact-icon.email {
  background-color: var(--fluent-accent-primary);
}

.contact-details {
  flex: 1;
}

.contact-details h3 {
  margin-bottom: var(--fluent-spacing-xs);
}

.contact-details p {
  color: var(--fluent-foreground-secondary);
  margin-bottom: var(--fluent-spacing-m);
}

.social-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--fluent-spacing-m);
}

.social-item {
  display: flex;
  align-items: center;
  gap: var(--fluent-spacing-m);
  padding: var(--fluent-spacing-l);
  background-color: var(--fluent-background-secondary);
  border-radius: var(--fluent-border-radius-large);
  text-decoration: none;
  color: inherit;
  transition: all var(--fluent-duration-normal) var(--fluent-easing-ease);
}

.social-item:hover {
  background-color: var(--fluent-background-tertiary);
  transform: translateY(-2px);
}

.social-icon {
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  border-radius: var(--fluent-border-radius-medium);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.social-item.github .social-icon {
  background-color: #333;
}

.social-item.linkedin .social-icon {
  background-color: #0077b5;
}

.social-item.instagram .social-icon {
  background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%);
}

.social-item.wechat .social-icon {
  background-color: #09b83e;
}

.social-content h3 {
  margin-bottom: var(--fluent-spacing-xs);
}

.social-content p {
  color: var(--fluent-foreground-secondary);
  font-size: var(--fluent-font-size-caption);
}

.contact-footer {
  margin-top: var(--fluent-spacing-xxxl);
}

.footer-card {
  padding: var(--fluent-spacing-xl);
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-info h3 {
  margin-bottom: var(--fluent-spacing-xs);
}

.footer-info p {
  color: var(--fluent-foreground-secondary);
}

.footer-note p {
  color: var(--fluent-foreground-secondary);
  text-align: right;
}

/* Responsive Design */
@media (max-width: 768px) {
  .contact-grid {
    grid-template-columns: 1fr;
  }
  
  .social-grid {
    grid-template-columns: 1fr;
  }
  
  .footer-content {
    flex-direction: column;
    gap: var(--fluent-spacing-m);
    text-align: center;
  }
  
  .footer-note p {
    text-align: center;
  }
  
  .contact-card,
  .social-card {
    padding: var(--fluent-spacing-l);
  }
}
</style>
