<template>
  <button
    class="
      base-button
      bg-primary
      rounded-full
      transition-all
      flex
      justify-center
      items-center
    "
  >
    <!-- icon -->
    <span class="text-2xl mx-2">
      <slot name="icon"></slot>
    </span>
    <!-- default -->
    <slot></slot>
  </button>
</template>

<script>
export default {}
</script>

<style lang="scss">
.base-button {
  &:hover {
    box-shadow: 0px 0px 15px 3px theme('colors.primary');
  }
  &.secondary {
    &:hover {
      box-shadow: 0px 0px 15px 3px theme('colors.dark');
    }
  }
}
</style>
