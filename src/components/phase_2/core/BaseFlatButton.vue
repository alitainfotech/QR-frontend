<template>
  <v-btn
    class="justify-center align-center px-9 py-2"
    height="36"
    width="140"
    variant="flat"
    :color="color"
    rounded="xl"
    @click="dialog = false"
    ><span class="text-18-bold text-capitalize">{{btnText}}</span></v-btn
  >
</template>
<script setup>
const props =defineProps(['btnText','color'])
</script>