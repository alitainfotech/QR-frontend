<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import DefaultLayout from "./components/layout/default/index.vue";
</script>
<template>
  <v-layout class=" h-screen d-flex flex-row justify-center align-center">
    <DefaultLayout>
      <HelloWorld msg="You did it!" />
    </DefaultLayout>
  </v-layout>
</template>

