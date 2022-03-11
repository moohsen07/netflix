<template>
  <div
    class="banner bg-cover bg-no-repeat relative"
    :style="`background-image: url('${$store.state.baseImgUrl}${media.backdrop_path}')`"
  >
    <div
      class="
        banner-content
        w-full
        md:pl-10
        lg:pl-30
        top-1/3
        lg:top-1/2
        absolute
      "
    >
      <Hero :media="media" />
    </div>
  </div>
</template>

<script>
import Hero from './Hero.vue'
export default {
  components: { Hero },
  props: ['media'],
}
</script>

<style lang="scss">
.banner {
  height: 80vh;
  background-position: 70%;
  &::before {
    @include overlay(right, #000000d2, rgba(0, 0, 0, 0.26));
  }

  @media (min-width: 768px) and (max-width: 992px) {
    height: 50vh;
    background-position: center top;
  }
  @media (min-width: 992px) {
    height: 100vh;
  }
  @media (min-width: 1024px) {
    background-position: center top;
  }

  .banner-content {
    transform: translateY(-30%);
    @media (min-width: 1024px) {
      transform: translateY(-80%);
    }
  }
}
</style>
