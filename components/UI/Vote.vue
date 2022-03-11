<template>
  <!-- <span class="vote text-xs bg-yellow-500 px-2 py-1 rounded-md text-black"
    ><i class="las la-star pr-1"></i><slot></slot
  ></span> -->
  <div class="vote flex items-center gap-1">
    <img src="~/assets/imgs/imdb.png" alt="" class="w-10" />
    <span><slot></slot></span>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
</style>
