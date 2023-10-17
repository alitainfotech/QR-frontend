<template>
  <v-btn
    class="justify-center outline-button align-center px-9 py-2"
    height="36"
    width="140"
    variant="outlined"
    :color="color"
    rounded="xl"
    @click="dialog = false"
    ><span class="text-18-bold text-capitalize">{{btnText}}</span></v-btn
  >
</template>
<script setup>
const props =defineProps(['btnText','color'])
</script>
<style scoped>
.outline-button.v-btn {
  letter-spacing:0 !important
}
</style>