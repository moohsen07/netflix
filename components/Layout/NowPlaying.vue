<template>
  <section class="now-playing mt-5 lg:mt-16">
    <div class="container">
      <div class="flex justify-between items-center">
        <section-title>
          <template v-slot:icon>
            <i class="las la-stopwatch"></i>
          </template>
          Now Playing
        </section-title>
        <swiper-controls></swiper-controls>
      </div>

      <tab-panels @pannel="setPannel" />

      <media-slider
        :data="pannel == 'movies' ? data.movies : data.series"
        parentClass="now-playing"
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
      endPoint: 'getNowPlaying',
    }
  },
  computed: {
    ...mapGetters({
      movies: 'Media/getNowPlayingMovies',
      series: 'Media/getNowPlayingSeries',
    }),
  },
}
</script>
