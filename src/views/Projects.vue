<template>
  <div>
    <header :class="{ sticky: isSticky }">
      <router-link to="/" class="logo">
        <span>GNetwork</span><br />
        <span class="author">RokidnaG</span>
      </router-link>
      <ul>
        <li>
          <router-link to="/"><span class="home">Home</span></router-link>
        </li>
        <li><a href="#">About</a></li>
        <li>
          <a href="#"><span class="CV">CV</span></a>
        </li>
        <li>
          <a href="#"><span class="project">Projects</span></a>
        </li>
        <li><a href="#">Services</a></li>
        <li>
          <a href="#"><span class="contact">Contact</span></a>
        </li>
      </ul>
    </header>
    <section class="banner project"></section>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'

export default {
  name: 'Projects',
  setup() {
    const isSticky = ref(false)

    const handleScroll = () => {
      isSticky.value = window.scrollY > 0
    }

    onMounted(() => {
      window.addEventListener('scroll', handleScroll)
    })

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll)
    })

    return {
      isSticky
    }
  }
}
</script>
