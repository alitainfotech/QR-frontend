<script setup>
// import Header from "../header/index.vue";
// import Footer from "../footer/index.vue";
</script>
<template>
 <v-card variant="flat" max-width="834" width="100%" class="mx-auto">
  <slot name="header"></slot>
  <slot name="content"></slot>
  <slot name="footer"></slot>
 </v-card>
</template>