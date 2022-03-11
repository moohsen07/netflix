<template>
  <div class="media-wrapper">
    <media-banner :background="media.backdrop_path" />
    <media-details :media="media" />
  </div>
</template>

<script>
import MediaBanner from './MediaBanner.vue'
import MediaDetails from './MediaDetails.vue'
export default {
  components: { MediaDetails, MediaBanner },
  props: ['media'],
}
</script>

