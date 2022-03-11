<template>
  <div class="banner-slider">
    <swiper :options="options">
      <swiper-slide v-for="ser in series" :key="ser.id">
        <banner :media="ser" />
      </swiper-slide>
    </swiper>
    <div class="controls hidden md:block absolute top-1/3 w-full z-50">
      <div class="next-slider-button absolute w-10 h-10 left-5">
        <base-button class="w-full h-full">
          <template v-slot:icon><i class="las la-angle-left"></i></template>
        </base-button>
      </div>
      <div class="prev-slider-button absolute w-10 h-10 right-5">
        <base-button class="w-full h-full">
          <template v-slot:icon><i class="las la-angle-right"></i></template>
        </base-button>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from '../UI/Banner.vue'
import BaseButton from '../UI/BaseButton.vue'

export default {
  components: {
    Banner,
    BaseButton,
  },
  data() {
    return {
      options: {
        loop: true,
        speed: 1000,
        grabCursor: true,
        navigation: {
          nextEl: '.prev-slider-button',
          prevEl: '.next-slider-button',
        },
      },
    }
  },
  async fetch() {
    return this.$store.dispatch('Banners/getSeries')
  },
  computed: {
    series() {
      return this.$store.getters['Banners/getBanners']
    },
  },
}
</script>
<style lang="scss">
.banner-slider {
  .swiper-container {
    padding: 0 !important;
  }
}
</style>
