<template>
  <div class="person flex items-center gap-4">
    <div class="person-img">
      <img
        :src="`${$store.state.baseImgUrl}${person.profile_path}`"
        alt=""
        class="w-12 h-12 rounded-full"
      />
    </div>
    <div class="person-info flex flex-col gap-y-1">
      <span class="person-name capitalize text-gray-300 text-sm">{{
        person.name
      }}</span>
      <span class="person-title capitalize text-muted opacity-50 text-xs">{{
        person.character || person.job
      }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['person'],
}
</script>

<style>
</style>
