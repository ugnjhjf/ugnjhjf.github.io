import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Home from './views/Home.vue'
import Projects from './views/Projects.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

// Router configuration
const routes = [
  { path: '/', component: Home },
  { path: '/projects', component: Projects }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

const app = createApp(App)

app.use(router)

// Initialize AOS animation
app.mount('#app')

// Initialize AOS after DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  AOS.init({
    duration: 1000,
    once: true,
    offset: 100
  })
})
