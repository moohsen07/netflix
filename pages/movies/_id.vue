<template>
  <div class="media-page">
    <media-page :media="movie" />
  </div>
</template>

<script>
import MediaPage from '~/components/SingleMedia/MediaPage.vue'

export default {
  components: { MediaPage },
  async fetch() {
    await this.$store.dispatch('SingleMedia/getSingleMedia', {
      media_type: 'movie',
      id: this.$route.params.id,
    })
  },
  computed: {
    movie() {
      return this.$store.getters['SingleMedia/getSingleMovie']
    },
  },
}
</script>

<style lang="scss">
.media-page {
  .media-banner {
    position: relative;
    height: 40vh;
    &::before {
      @include overlay(bottom, #0000009c 60%, #000000d4);
    }
    @media (min-width: 992px) {
      height: 70vh;
    }
  }
  .media-details-container {
    transform: translateY(-155px);
    background: linear-gradient(to top, #000000 70%, transparent);
    @media (min-width: 992px) {
      transform: translateY(-125px);
    }
    .media-wrapper {
      max-width: 900px;
      margin: auto;
    }
    .media-cast {
      h3 {
        &::before {
          content: '';
          position: absolute;
          top: 50%;
          right: 0;
          width: 100%;
          height: 1px;
          background-color: #151515;
        }
      }
    }
  }
}
</style>

