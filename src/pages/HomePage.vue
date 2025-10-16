<template>
  <div class="fluent-page fluent-surface-primary home-page-no-scroll">
    <div class="fluent-page-content home-content-no-scroll">
      <!-- Hero Section -->
      <div class="hero-section">
        <div class="hero-content fluent-animate-fade-in">
          <h1 class="fluent-text-display hero-title">
            Welcome to GNetwork
          </h1>
          <p class="fluent-text-subheading hero-subtitle">
            Unreal Developer & Backend Developer
          </p>
          <p class="fluent-text-body hero-description">
            Passionate about creating immersive experiences and robust backend solutions
          </p>
          
          <div class="hero-actions">
            <router-link to="/about" class="fluent-button fluent-button-primary">
              Learn More
            </router-link>
            <router-link to="/projects" class="fluent-button fluent-button-secondary">
              View Projects
            </router-link>
          </div>
        </div>
        
        <!-- Profile Card -->
        <div class="profile-card fluent-animate-slide-in">
          <div class="fluent-card fluent-card-elevated profile-card-square">
            <div class="profile-image">
              <img 
                src="@assets/images/Rokidna.png" 
                alt="Rokidna Profile"
                class="profile-img"
              />
            </div>
            <div class="profile-info">
              <h2 class="fluent-text-title">Rokidna G</h2>
              <p class="fluent-text-body">Unreal Developer</p>
              <p class="fluent-text-body">Backend Developer</p>
              
              <div class="profile-actions">
                <button 
                  @click="sendEmail" 
                  class="fluent-button fluent-button-primary"
                >
                  Send Message
                </button>
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
  name: 'HomePage',
  methods: {
    sendEmail() {
      window.location.href = "mailto:rokidna@outlook.com"
    }
  }
}
</script>

<style scoped>
.home-page-no-scroll {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
}

.home-content-no-scroll {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--fluent-spacing-l);
  overflow: hidden;
  height: calc(100vh - 80px);
}

.hero-section {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--fluent-spacing-xxxl);
  max-width: 100%;
  width: 100%;
  height: 100%;
  padding: 0 var(--fluent-spacing-s);
  box-sizing: border-box;
}

.hero-content {
  flex: 1;
  text-align: left;
  max-width: 500px;
}

.hero-title {
  margin-bottom: var(--fluent-spacing-s);
  background: linear-gradient(135deg, var(--fluent-accent-primary), var(--fluent-accent-tertiary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-size: var(--fluent-font-size-large-title);
}

.hero-subtitle {
  color: var(--fluent-foreground-secondary);
  margin-bottom: var(--fluent-spacing-s);
  font-size: var(--fluent-font-size-heading);
}

.hero-description {
  color: var(--fluent-foreground-secondary);
  margin-bottom: var(--fluent-spacing-l);
  max-width: 100%;
  font-size: var(--fluent-font-size-body);
}

.hero-actions {
  display: flex;
  gap: var(--fluent-spacing-m);
  justify-content: flex-start;
}

.profile-card {
  flex-shrink: 0;
}

.profile-card-square {
  width: 416px;
  height: 416px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--fluent-spacing-l);
  flex-shrink: 0;
  box-sizing: border-box;
  margin: 0 auto;
}

.profile-image {
  text-align: center;
  margin-bottom: var(--fluent-spacing-l);
}

.profile-img {
  width: 160px;
  height: 160px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid var(--fluent-accent-primary);
}

.profile-info {
  text-align: center;
}

.profile-info h2 {
  margin-bottom: var(--fluent-spacing-s);
  color: var(--fluent-foreground-primary);
  font-size: var(--fluent-font-size-title);
}

.profile-info p {
  color: var(--fluent-foreground-secondary);
  margin-bottom: var(--fluent-spacing-s);
  font-size: var(--fluent-font-size-body);
}

.profile-actions {
  margin-top: var(--fluent-spacing-m);
}

/* Responsive Design */
@media (max-width: 768px) {
  .home-content-no-scroll {
    padding: var(--fluent-spacing-s);
  }
  
  .hero-section {
    flex-direction: column;
    text-align: center;
    gap: var(--fluent-spacing-l);
    justify-content: center;
    padding: 0 var(--fluent-spacing-s);
  }
  
  .hero-content {
    text-align: left;
    max-width: 100%;
  }
  
  .hero-title {
    font-size: var(--fluent-font-size-title);
  }
  
  .hero-subtitle {
    font-size: var(--fluent-font-size-subheading);
  }
  
  .hero-actions {
    justify-content: center;
    flex-wrap: wrap;
    gap: var(--fluent-spacing-s);
  }
  
  .profile-card-square {
    width: 240px;
    height: 240px;
  }
  
  .profile-img {
    width: 96px;
    height: 96px;
  }
  
  .profile-info h2 {
    font-size: var(--fluent-font-size-heading);
  }
  
  .profile-info p {
    font-size: var(--fluent-font-size-caption);
  }
}
</style>
