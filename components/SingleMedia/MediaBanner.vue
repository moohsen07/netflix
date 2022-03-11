<template>
  <div
    class="media-banner bg-top bg-cover"
    :style="`background-image : url(${$store.state.baseImgUrl}${background}`"
  ></div>
</template>

<script>
export default {
  props: ['background'],
}
</script>

<style>
</style>
