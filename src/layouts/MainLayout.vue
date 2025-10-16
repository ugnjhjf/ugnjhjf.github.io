<template>
  <div class="fluent-app">
    <!-- Fluent Navigation -->
    <nav class="fluent-nav">
      <router-link to="/" class="fluent-nav-brand">
        GNetwork
      </router-link>
      
      <ul class="fluent-nav-links">
        <li>
          <router-link 
            to="/" 
            class="fluent-nav-link"
            :class="{ active: $route.path === '/' }"
          >
            Home
          </router-link>
        </li>
        <li>
          <router-link 
            to="/about" 
            class="fluent-nav-link"
            :class="{ active: $route.path === '/about' }"
          >
            About
          </router-link>
        </li>
        <li>
          <router-link 
            to="/projects" 
            class="fluent-nav-link"
            :class="{ active: $route.path === '/projects' }"
          >
            Projects
          </router-link>
        </li>
        <li>
          <router-link 
            to="/services" 
            class="fluent-nav-link"
            :class="{ active: $route.path === '/services' }"
          >
            Services
          </router-link>
        </li>
        <li>
          <router-link 
            to="/contact" 
            class="fluent-nav-link"
            :class="{ active: $route.path === '/contact' }"
          >
            Contact
          </router-link>
        </li>
      </ul>
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
import { watch } from 'vue'
import { useRoute } from 'vue-router'

export default {
  name: 'MainLayout',
  components: {
    BackToTop
  },
  setup() {
    const route = useRoute()
    
    // Watch route changes to control body scroll
    watch(() => route.path, (newPath) => {
      if (newPath === '/') {
        document.body.classList.add('home-page-active')
      } else {
        document.body.classList.remove('home-page-active')
      }
    }, { immediate: true })
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
</style>
