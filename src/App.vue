<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import DefaultLayout from "./components/layout/default/index.vue";
import Header from "./components/layout/header/index.vue";
import Footer from "./components/layout/footer/index.vue";
import SelectingUser from './components/admin/SelectingUser.vue'

</script>
<template>
  <v-app>
    <v-card variant="flat" max-width="375" width="100%" class="mx-auto">
      <Header />
      <v-content class="bodyStyle">
        <SelectingUser/>
      </v-content>
      <Footer />
    </v-card>
  </v-app>
</template>

<style scoped>

</style>