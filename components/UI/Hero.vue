<template>
  <div class="hero max-w-2xl">
    <div class="container">
      <img src="~/assets/imgs/netflix_serires.png" width="100" alt="" />
      <img :src="seriesLogo(media.original_name)" class="w-44 lg:w-60" alt="" />
      <div class="information flex gap-4 my-4 flex-wrap text-sm items-center">
        <span class="realese">{{ media.first_air_date.slice(0, 4) }}</span>
        <span class="border-primary border-solid rounded-full border-2 px-3"
          >+18</span
        >

        <div class="genres flex gap-x-4">
          <span
            class="genere"
            v-for="genere in media.genres"
            :key="genere.id"
            >{{ genere.name }}</span
          >
        </div>

        <span class="seasons">{{ media.number_of_seasons }} season</span>
        <span class="time">{{ media.episode_run_time[0] }}m</span>
        <vote>{{ media.vote_average }}</vote>
      </div>
      <div class="overview text-sm">
        <p>
          {{ media.overview | truncate }}
        </p>
      </div>
      <base-button class="mt-4 px-6 py-2">
        <template v-slot:icon>
          <i class="las la-play"></i>
        </template>
        Watch Trailer</base-button
      >
    </div>
  </div>
</template>

<script>
import BaseButton from '../UI/BaseButton.vue'
import Vote from './Vote.vue'

export default {
  components: {
    BaseButton,
    Vote,
  },
  props: ['media'],
  filters: {
    truncate(text) {
      return text.length > 250 ? text.slice(0, 300) + ' ' + '...' : text
    },
  },
  methods: {
    seriesLogo(name) {
      switch (name.toLowerCase()) {
        case 'stranger things':
          return 'stranger_things_logo.png'
          break
        case 'peaky blinders':
          return 'peaky_blinders_logo.png'
          break

        default:
          return 'mr_robot_logo.png'
          break
      }
    },
  },
}
</script>

<style>
</style>
