<template>
  <ul class="list-items flex">
    <li class="list-item" v-for="link in links" :key="link.name">
      <nuxt-link :to="link.url" class="px-4 py-5">{{ link.name }}</nuxt-link>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { name: 'Home', url: '/' },
        { name: 'Movies', url: '/movies' },
        { name: 'Series', url: '/series' },
        { name: 'People', url: '/people' },
        { name: 'Favourits', url: '/favourits' },
      ],
    }
  },
}
</script>

<style lang="scss" >
.list-items {
  .nuxt-link-exact-active {
    border-bottom: 4px solid theme('colors.primary');
    background: linear-gradient(0deg, #ffffff2d, #ffffff00);
  }
}
</style>
