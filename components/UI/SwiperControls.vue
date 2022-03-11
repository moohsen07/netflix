<template>
  <div class="swiper-controls flex gap-4">
    <div class="slider-btn-prev">
      <base-button>
        <template v-slot:icon>
          <i class="las la-angle-left"></i>
        </template>
      </base-button>
    </div>

    <div class="slider-btn-next">
      <base-button>
        <template v-slot:icon>
          <i class="las la-angle-right"></i>
        </template>
      </base-button>
    </div>
  </div>
</template>

<script>
import BaseButton from './BaseButton.vue'
export default {
  components: { BaseButton },
}
</script>


<style lang="scss">
.swiper-controls {
  button {
    width: 30px;
    height: 30px;
    border-radius: 7px;
  }
}
</style>
