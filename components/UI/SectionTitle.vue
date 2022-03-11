<template>
  <div class="section-title flex gap-x-2 items-center text-muted relative z-10">
    <div class="icon text-2xl">
      <slot name="icon"></slot>
    </div>
    <h1 class="text-xl"><slot></slot></h1>
  </div>
</template>

<script>
export default {}
</script>

<style>
</style>
