<template>
  <div class="app">
    <Base-Navbar />
    <Nuxt />
    <app-footer />
  </div>
</template>

<script>
import AppFooter from '~/components/Layout/AppFooter.vue'
import BaseNavbar from '../components/Navbar/BaseNavbar.vue'
export default {
  components: { BaseNavbar, AppFooter },
  mounted() {
    const nav = document.querySelector('nav')
    window.onscroll = () => {
      if (window.scrollY > nav.offsetHeight + 50) {
        nav.classList.add('active-nav')
      } else {
        nav.classList.remove('active-nav')
      }
    }
  },
}
</script>

<style lang="scss">
</style>
