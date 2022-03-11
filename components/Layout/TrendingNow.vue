<template>
  <div class="trending-now mx-auto -mt-28 lg:-mt-64">
    <div class="container">
      <section-title>
        <template v-slot:icon>
          <i class="las la-poll-h"></i>
        </template>
        Trending Now
      </section-title>
      <swiper class="h-48" :options="options">
        <swiper-slide class="" v-for="data in trending" :key="data.id">
          <media-card :media="data" small />
        </swiper-slide>
      </swiper>
      <div class="swiper-scrollbar hidden md:block"></div>
    </div>
  </div>
</template>

<script>
import MediaCard from '../MediaComponents/MediaCard.vue'
import SectionTitle from '../UI/SectionTitle.vue'
export default {
  components: { SectionTitle, MediaCard },
  data() {
    return {
      options: {
        slidesPerView: 1.2,
        centeredSlides: true,
        spaceBetween: 20,
        speed: 500,
        loop: true,
        scrollbar: {
          el: '.swiper-scrollbar',
          draggable: true,
        },
        breakpoints: {
          500: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2.4,
            centeredSlides: false,
            loop: false,
          },
          992: {
            slidesPerView: 3.2,
            centeredSlides: false,
            loop: false,
          },
          1500: {
            slidesPerView: 4,
            centeredSlides: false,
            loop: false,
          },
        },
      },
    }
  },
  async fetch() {
    return this.$store.dispatch('getTrending')
  },
  computed: {
    trending() {
      return this.$store.getters['getTrending']
    },
  },
}
</script>

<style lang="scss" >
.trending-now {
  @media (min-width: 1200px) {
    max-width: 90%;
  }
  .media-card-small {
    &::before {
      @include overlay(right, rgba(0, 0, 0, 0.644), #0000001a);
    }
  }
}
</style>
