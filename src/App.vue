<template>
  <div id="app">
    <!-- Navigation Header -->
    <Header />
    
    <!-- Back to Top Button -->
    <BackToTop />
    
    <!-- Router View -->
    <router-view />
    
    <!-- Footer -->
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import BackToTop from './components/BackToTop.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    BackToTop
  }
}
</script>

<style>
/* Global styles are defined in external CSS files */
</style>
