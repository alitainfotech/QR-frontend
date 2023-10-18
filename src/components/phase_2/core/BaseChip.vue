<template>
  <v-chip class="base-chip text-center px-5 mx-1 my-1" :text="chipText"> </v-chip>
</template>
<script setup>
const props = defineProps(["chipText"]);
</script>
<style>
.base-chip.v-chip {
  height: 33px;
  background-color: #82819b;
}
.base-chip.v-chip .v-chip__content {
  color: white;
  font-size: 16px;
  font-weight: bold !important;
  line-height: 20px;
}
</style>