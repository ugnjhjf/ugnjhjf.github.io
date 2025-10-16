<template>
  <header :class="{ sticky: isSticky }">
    <router-link to="/" class="logo">
      <p>GNetwork<span class="author">by RokidnaG</span></p>
    </router-link>
    <ul>
      <li><a href="#education"><span class="home">About</span></a></li>
      <li>
        <a href="#" @click.prevent="showComingSoon"><span class="blog">Blog</span></a>
      </li>
      <li>
        <a href="https://cloud.gnetwork.space/" @click.prevent="showGuestAlert">
          <span class="CV">CV</span>
        </a>
      </li>
      <li><a href="#services">Services</a></li>
      <li>
        <router-link to="/projects">
          <span class="project">Projects</span>
        </router-link>
      </li>
      <li class="animate__animated animate__wobble inf">
        <a href="#page_end"><span class="contact">Contact</span></a>
      </li>
    </ul>
  </header>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'

export default {
  name: 'Header',
  setup() {
    const isSticky = ref(false)

    const handleScroll = () => {
      isSticky.value = window.scrollY > 0
    }

    const showComingSoon = () => {
      alert('Coming Soon!')
    }

    const showGuestAlert = () => {
      alert('Click continue as Guest')
    }

    onMounted(() => {
      window.addEventListener('scroll', handleScroll)
    })

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll)
    })

    return {
      isSticky,
      showComingSoon,
      showGuestAlert
    }
  }
}
</script>
