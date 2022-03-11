<template>
  <div class="media-slider">
    <swiper :options="options" class="">
      <swiper-slide v-for="media in data" :key="media.id">
        <media-card :media="media" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import MediaCard from './MediaCard.vue'

export default {
  components: { MediaCard },
  props: ['data', 'parentClass'],
  data() {
    return {
      options: {
        slidesPerView: 1.4,
        centeredSlides: true,
        spaceBetween: 20,
        speed: 500,
        loop: true,
        navigation: {
          nextEl: `.${this.parentClass} .slider-btn-next`,
          prevEl: `.${this.parentClass} .slider-btn-prev`,
        },
        breakpoints: {
          768: {
            slidesPerView: 3.5,
            centeredSlides: false,
          },
          992: {
            slidesPerView: 4.5,
            centeredSlides: false,
          },
          1200: {
            slidesPerView: 5,
            centeredSlides: false,
          },
          1500: {
            slidesPerView: 6,
            centeredSlides: false,
          },
        },
      },
    }
  },
}
</script>

<style lang="scss">
.media-slider {
  .swiper-slide-active {
    @media (max-width: 500px) {
      transform: scale(1.1);
      transition: all 0.5s linear;
    }
  }
}
</style>
