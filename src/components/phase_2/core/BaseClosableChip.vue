<template>
  <v-chip
    variant="outlined"
    class="base-closable-chip ma-2"
    closable
    :model-value="true"
    :text="chipText"
    close-icon="mdi-close"
  >
  </v-chip>
</template>
<script setup>
const props = defineProps(["chipText"]);
</script>
<style>
.base-closable-chip.v-chip {
  height: 33px;
  background-color: #fff;
  border-radius: 100px;
  border: 1px solid#e4e3e7;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}
.base-closable-chip.v-chip .v-chip__content {
  color: #050336;
  font-size: 16px;
  font-weight: bold !important;
  line-height: 20px;
}
.base-closable-chip.v-chip > .v-chip--variant-tonal .v-chip__underlay {
  background-color: white !important;
  border-radius: inherit;
  border: 1px solid;
}
.base-closable-chip.v-chip .mdi:before{
  color: #EC5757;
}
</style>