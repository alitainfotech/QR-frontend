<template>
   <v-chip
      class="ma-2"
      closable
      color="teal"
      text-color="white"
      prepend-icon="mdi-checkbox-marked-circle"
      :model-value="true"
    >
      Confirmed
    </v-chip>
</template>
<script setup>
const props = defineProps(["chipText"]);
</script>
<style>
.base-closable-chip.v-chip {
  height: 33px;
  background-color: #82819b;
}
.base-closable-chip.v-chip .v-chip__content {
  color: white;
  font-size: 16px;
  font-weight: bold !important;
  line-height: 20px;
}
</style>