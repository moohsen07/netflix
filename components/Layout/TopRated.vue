<template>
  <section class="top-rated mt-5 lg:mt-16">
    <div class="container">
      <div class="flex justify-between items-center">
        <section-title>
          <template v-slot:icon>
            <i class="lar la-star"></i>
          </template>
          Top Rated
        </section-title>
        <swiper-controls></swiper-controls>
      </div>

      <tab-panels @pannel="setPannel" />

      <media-slider
        :data="pannel == 'movies' ? data.movies : data.series"
        parentClass="top-rated"
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
      endPoint: 'getTopRated',
    }
  },
  computed: {
    ...mapGetters({
      movies: 'Media/getTopRatedMovies',
      series: 'Media/getTopRatedSeries',
    }),
  },
}
</script>
