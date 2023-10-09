<template>
  <v-btn class="justify-center align-center rounded-circle" :style="styleObj">
   <slot name="icon"></slot>
  </v-btn>
</template>
<script setup>
const props = defineProps(["styleObj"]);
</script>
<style scoped>
.v-btn--size-default {
    min-width: 56px;
    padding: 0 16px;
}
</style>
