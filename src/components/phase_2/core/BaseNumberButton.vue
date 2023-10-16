<template>
  <v-btn
    block
    height="44"
    rounded="pill"
    size="x-large"
    variant="elevated"
    elevation="4"
    color="primary"
    class="justify-center"
  >
    <span class="text-white text-20-bold text-uppercase">{{ text }}</span>
  </v-btn>
</template>
<script setup>
import { ref } from "vue";

const props = defineProps(["text"]);
</script>
 
 