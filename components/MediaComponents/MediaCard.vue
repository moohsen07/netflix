<template>
  <div
    class="media-card h-full relative rounded-xl overflow-hidden transition-all"
  >
    <div class="media-img w-full h-full">
      <img
        class="w-full h-full"
        :src="`${$store.state.baseImgUrl}${mediaPoster}`"
      />
    </div>
    <div
      class="
        media-data
        p-2
        absolute
        top-0
        w-full
        h-full
        flex flex-col
        justify-between
      "
    >
      <div
        class="flex items-center"
        :class="small ? 'justify-between' : 'justify-end'"
      >
        <div v-if="small" class="media-type flex items-center">
          <img src="~/assets/imgs/small_logo.png" class="w-6 h-5" alt="" />
          <span class="text-xs uppercase">{{
            media.media_type == 'tv' ? 'series' : 'movies'
          }}</span>
        </div>

        <vote>{{ media.vote_average.toFixed(1) }}</vote>
      </div>

      <div class="flex justify-between items-center z-10">
        <div class="media-info flex flex-col">
          <span class="name text-base md:text-sm font-semibold">{{
            mediaName
          }}</span>
          <span class="text-xs text-muted">{{
            mediaReleaseDate.slice(0, 4)
          }}</span>
        </div>
        <wishlist-btn />
      </div>
    </div>
  </div>
</template>

<script>
import Vote from '../UI/Vote.vue'
import WishlistBtn from '../UI/WishlistBtn.vue'
export default {
  components: { Vote, WishlistBtn },
  props: {
    media: {
      type: Object,
      required: true,
    },
    small: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
  computed: {
    mediaPoster() {
      return this.small ? this.media.backdrop_path : this.media.poster_path
    },
    mediaName() {
      return this.media.title || this.media.name
    },
    mediaReleaseDate() {
      return this.media.release_date || this.media.first_air_date
    },
  },
}
</script>

<style lang="scss">
.media-card {
  &::before {
    @include overlay(bottom);
    z-index: 1;
  }
  .media-img {
    transition: all 0.5s ease-in-out;
  }

  .media-info {
    max-width: 70%;
  }
  @media (min-width: 767px) {
    &:hover {
      transform: scale(1.05);
      .media-img {
        transform: scale(1.2);
      }
    }
  }
}
</style>
