<template>
  <div class="home">
    <banner-slider />
    <trending-now />
    <popular />
    <now-playing />
    <top-rated />
  </div>
</template>

<script>
import BannerSlider from '/components/Layout/BannerSlider.vue'
import Popular from '~/components/Layout/Popular.vue'
import TrendingNow from '~/components/Layout/TrendingNow.vue'
import NowPlaying from '~/components/Layout/NowPlaying.vue'
import TopRated from '~/components/Layout/TopRated.vue'
export default {
  components: {
    BannerSlider,
    TrendingNow,
    Popular,
    NowPlaying,
    TopRated,
  },
  name: 'IndexPage',
}
</script>

