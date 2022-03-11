<template>
  <ul
    ref="pannel"
    class="
      tab-panels
      my-5
      relative
      flex
      text-white
      rounded-full
      border-2 border-solid
    "
  >
    <li class="selector absolute bg-primary rounded-full top-0"></li>
    <li
      class="movies px-8 py-1 cursor-pointer rounded-full relative z-auto"
      @click="changeSelectorProp('movies')"
    >
      Movies
    </li>
    <li
      class="series px-8 py-1 cursor-pointer rounded-full relative z-auto"
      @click="changeSelectorProp('series')"
    >
      Series
    </li>
  </ul>
</template>

<script>
export default {
  methods: {
    changeSelectorProp(pannel = 'movies') {
      const parent = this.$refs.pannel.parentNode.parentNode.classList[0]
      const el = document.querySelector(`.${parent} .${pannel}`)
      const selector = document.querySelector(`.${parent} .selector`)
      selector.style.cssText = `width : ${el.offsetWidth}px ; height : ${el.offsetHeight}px;  left : ${el.offsetLeft}px`
      this.$emit('pannel', pannel)
    },
  },
  mounted() {
    this.changeSelectorProp()
  },
}
</script>

<style lang="scss">
.tab-panels {
  width: max-content;
  background: rgb(22, 22, 22);
  border-color: #222;
  li {
    transition: all 0.2s ease-in-out;
    &:not(.selctor) {
      padding: 5px 32px;
    }
    .selector {
      z-index: -1;
    }
  }
}
</style>
