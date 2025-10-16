<template>
  <div class="fluent-app">
    <!-- Fluent Navigation -->
    <nav class="fluent-nav">
      <router-link to="/" class="fluent-nav-brand">
        GNetwork
      </router-link>
      
      <div class="nav-links-container">
        <ul class="fluent-nav-links">
          <li>
            <router-link 
              to="/" 
              class="fluent-nav-link"
              :class="{ active: $route.path === '/' }"
              data-index="0"
            >
              Home
            </router-link>
          </li>
          <li>
            <router-link 
              to="/about" 
              class="fluent-nav-link"
              :class="{ active: $route.path === '/about' }"
              data-index="1"
            >
              About
            </router-link>
          </li>
          <li>
            <router-link 
              to="/projects" 
              class="fluent-nav-link"
              :class="{ active: $route.path === '/projects' }"
              data-index="2"
            >
              Projects
            </router-link>
          </li>
          <li>
            <router-link 
              to="/services" 
              class="fluent-nav-link"
              :class="{ active: $route.path === '/services' }"
              data-index="3"
            >
              Services
            </router-link>
          </li>
          <li>
            <router-link 
              to="/contact" 
              class="fluent-nav-link"
              :class="{ active: $route.path === '/contact' }"
              data-index="4"
            >
              Contact
            </router-link>
          </li>
        </ul>
        
        <!-- Sliding indicator -->
        <div class="nav-sliding-indicator" :style="indicatorStyle"></div>
      </div>
    </nav>

    <!-- Main Content -->
    <main class="fluent-main">
      <router-view />
    </main>

    <!-- Back to Top Button (hidden on home page) -->
    <BackToTop v-if="$route.path !== '/'" />
  </div>
</template>

<script>
import BackToTop from '../components/BackToTop.vue'
import { watch, ref, computed, onMounted, nextTick } from 'vue'
import { useRoute } from 'vue-router'

export default {
  name: 'MainLayout',
  components: {
    BackToTop
  },
  setup() {
    const route = useRoute()
    const indicatorStyle = ref({
      transform: 'translateX(0px)',
      width: '20px',
      opacity: '1'
    })
    
    // Route to index mapping
    const routeIndexMap = {
      '/': 0,
      '/about': 1,
      '/projects': 2,
      '/services': 3,
      '/contact': 4
    }
    
    // Calculate indicator position with enhanced animation
    const updateIndicatorPosition = async () => {
      await nextTick()
      const currentIndex = routeIndexMap[route.path] || 0
      const navLinks = document.querySelectorAll('.fluent-nav-link')
      
      if (navLinks[currentIndex]) {
        const activeLink = navLinks[currentIndex]
        const navContainer = document.querySelector('.nav-links-container')
        const containerRect = navContainer.getBoundingClientRect()
        const linkRect = activeLink.getBoundingClientRect()
        
         const offsetX = linkRect.left - containerRect.left
         const linkWidth = linkRect.width
         const indicatorWidth = linkWidth * 0.6 // 缩短20% (左右各10%)
         const offsetAdjustment = (linkWidth - indicatorWidth) / 2 // 居中调整
         
         // Add a slight bounce effect by temporarily scaling
         indicatorStyle.value = {
           transform: `translateX(${offsetX + offsetAdjustment}px) scaleY(1.2)`,
           width: `${indicatorWidth}px`,
           opacity: '1'
         }
         
         // Reset scale after a short delay for bounce effect
         setTimeout(() => {
           indicatorStyle.value = {
             ...indicatorStyle.value,
             transform: `translateX(${offsetX + offsetAdjustment}px) scaleY(1)`
           }
         }, 200)
      }
    }
    
    // Watch route changes to control body scroll and update indicator
    watch(() => route.path, (newPath) => {
      if (newPath === '/') {
        document.body.classList.add('home-page-active')
      } else {
        document.body.classList.remove('home-page-active')
      }
      
      // Update indicator position with animation
      updateIndicatorPosition()
    }, { immediate: true })
    
    // Initialize indicator position on mount
    onMounted(() => {
      updateIndicatorPosition()
    })
    
    return {
      indicatorStyle
    }
  }
}
</script>

<style scoped>
.fluent-app {
  min-height: 100vh;
  background-color: var(--fluent-background-primary);
}

.fluent-main {
  min-height: calc(100vh - 80px);
  padding-top: 80px;
}

/* Navigation links container */
.nav-links-container {
  position: relative;
  display: flex;
  align-items: center;
}

.fluent-nav-links {
  display: flex;
  align-items: center;
  gap: var(--fluent-spacing-m);
  list-style: none;
  margin: 0;
  padding: 0;
}

.fluent-nav-link {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: var(--fluent-spacing-s) var(--fluent-spacing-m);
  border-radius: var(--fluent-border-radius-medium);
  transition: all var(--fluent-duration-normal) var(--fluent-easing-ease);
  text-decoration: none;
  color: var(--fluent-foreground-secondary);
}

.fluent-nav-link:hover {
  color: var(--fluent-accent-primary);
  background-color: var(--fluent-background-tertiary);
}

.fluent-nav-link.active {
  color: var(--fluent-accent-primary);
  background-color: var(--fluent-background-tertiary);
}

/* Sliding indicator positioned under nav links only */
.nav-sliding-indicator {
  position: absolute;
  bottom: -2px;
  left: 0;
  height: 3px;
  background: linear-gradient(90deg, 
    var(--fluent-accent-primary) 0%, 
    var(--fluent-accent-secondary) 50%, 
    var(--fluent-accent-primary) 100%);
  border-radius: var(--fluent-border-radius-small);
  box-shadow: 0 0 8px rgba(0, 120, 212, 0.3);
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  z-index: 10;
  transform-origin: center;
}

/* Add a subtle glow effect */
.nav-sliding-indicator::before {
  content: '';
  position: absolute;
  top: -1px;
  left: -2px;
  right: -2px;
  bottom: -1px;
  background: linear-gradient(90deg, 
    transparent 0%, 
    rgba(0, 120, 212, 0.2) 50%, 
    transparent 100%);
  border-radius: var(--fluent-border-radius-small);
  z-index: -1;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.nav-sliding-indicator:hover::before {
  opacity: 1;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .nav-sliding-indicator {
    height: 2px;
  }
}
</style>
