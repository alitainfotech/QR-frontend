<template>
  <v-btn
    block
    prepend-icon="mdi-export"
    height="38"
    variant="elevated"
    elevation="4"
    size="large"
    rounded="pill"
  >
    <template v-slot:prepend>
      <v-icon color="white"></v-icon>
    </template>
   <span class="text-18-bold text-uppercase">{{btnText}}</span>
  </v-btn>
</template>
<script setup>
const props=defineProps(['btnText'])
</script>