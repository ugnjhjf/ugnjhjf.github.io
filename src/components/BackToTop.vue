<template>
  <a 
    href="#" 
    id="back-to-top" 
    title="Back to Top"
    :style="{ 
      display: showButton ? 'block' : 'none',
      opacity: showButton ? '0.85' : '0'
    }"
    @click.prevent="scrollToTop"
  >
    <i class="fa fa-angle-up fa-1x"></i>
  </a>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'

export default {
  name: 'BackToTop',
  setup() {
    const showButton = ref(false)

    const handleScroll = () => {
      if (window.pageYOffset > 100) {
        showButton.value = true
      } else {
        showButton.value = false
      }
    }

    const scrollToTop = () => {
      window.scrollTo({ 
        top: 0, 
        behavior: 'smooth' 
      })
    }

    onMounted(() => {
      window.addEventListener('scroll', handleScroll)
    })

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll)
    })

    return {
      showButton,
      scrollToTop
    }
  }
}
</script>
