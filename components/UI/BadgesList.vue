<template>
  <div class="genres flex flex-wrap gap-2 mt-3 text-muted uppercase text-sm">
    <div
      class="badge rounded-full px-5 py-1 bg-dark"
      v-for="genre in genres"
      :key="genre.id"
    >
      {{ genre.name }}
    </div>
  </div>
</template>

<script>
export default {
  props: ['genres'],
}
</script>

<style>
</style>
