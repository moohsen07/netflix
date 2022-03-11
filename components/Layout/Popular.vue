<template>
  <section class="popular mt-5 lg:mt-16">
    <div class="container">
      <div class="flex justify-between items-center">
        <section-title>
          <template v-slot:icon>
            <i class="las la-fire-alt"></i>
          </template>
          What's Popular ?
        </section-title>
        <swiper-controls></swiper-controls>
      </div>

      <tab-panels @pannel="setPannel" />

      <media-slider
        :data="pannel == 'movies' ? data.movies : data.series"
        parentClass="popular"
      />
    </div>
  </section>
</template>

<script>
import HomeSections from '~/Mixins/HomeSections'
import { mapGetters } from 'vuex'
export default {
  mixins: [HomeSections],
  data() {
    return {
      endPoint: 'getPopular',
    }
  },
  computed: {
    ...mapGetters({
      movies: 'Media/getPopularMovies',
      series: 'Media/getPopularSeries',
    }),
  },
}
</script>
