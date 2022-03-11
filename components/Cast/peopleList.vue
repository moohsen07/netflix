<template>
  <div class="people-wrapper">
    <person v-for="person in people" :key="person.id" :person="person"></person>
  </div>
</template>

<script>
import person from './person'

export default {
  components: { person },
  props: ['people'],
}
</script>

<style>
</style>
