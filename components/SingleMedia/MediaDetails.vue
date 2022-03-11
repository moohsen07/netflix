<template>
  <div class="media-details-container container">
    <div class="media-wrapper">
      <div
        class="
          media-details
          grid grid-cols-1
          gap-y-4
          md:grid-cols-3 md:gap-10
          items-center
        "
      >
        <div class="media-poster flex justify-center">
          <img
            :src="`${$store.state.baseImgUrl}${media.poster_path}`"
            class="w-1/2 md:w-full rounded-lg"
            alt=""
          />
        </div>

        <div class="info col-span-2">
          <h1 class="font-bold text-3xl">{{ media.original_title }}</h1>
          <badges-list :genres="media.genres" />
          <p class="text-muted text-sm my-5">
            {{ media.overview }}
          </p>
          <div class="rating flex items-center my-5">
            <span class="icon text-xl font-bold">
              <i class="las la-star"></i>
            </span>
            <span class="rating-no text-xl font-bold ml-1 mr-2"
              >{{ media.vote_average }}
              <span class="text-sm font-normal">/10</span>
            </span>
            <div class="rating-imdb">
              <img src="~/assets/imgs/imdb.png" class="w-7" alt="" />
            </div>
          </div>
          <div class="btns-group flex gap-2">
            <base-button class="px-6 py-1 uppercase text-sm">
              <template v-slot:icon><i class="las la-play"></i></template>
              Play
            </base-button>
            <base-button class="secondary bg-dark px-6 py-1 uppercase text-sm">
              <template v-slot:icon><i class="las la-plus"></i></template>
              My List
            </base-button>
          </div>
        </div>
      </div>

      <div class="media-cast mt-6">
        <h3 class="text-2xl font-bold relative">
          <span class="relative bg-black pr-5"> Cast & Crew </span>
        </h3>
        <div class="crew-wrapper grid grid-cols-2">
          <div class="director-writers-wrapper">
            <h4 class="text-lg my-4">Directors & Writers</h4>
          </div>
          <div class="cast-wrapper">
            <h4 class="text-lg my-4">Cast</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BadgesList from '~/components/UI/BadgesList.vue'
import BaseButton from '~/components/UI/BaseButton.vue'
import Vote from '~/components/UI/Vote.vue'
export default {
  components: { Vote, BaseButton, BadgesList },
  props: ['media'],
}
</script>

<style>
</style>
