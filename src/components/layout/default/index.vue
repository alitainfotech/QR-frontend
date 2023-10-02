<script setup>
import Header from "../header/index.vue";
import Footer from "../footer/index.vue";
</script>
<template>
  <div class="">
    <Header />
    <slot/>
    <Footer />
  </div>
</template>