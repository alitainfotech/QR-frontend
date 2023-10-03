<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import DefaultLayout from "./components/layout/default/index.vue";
import Header from "./components/layout/header/index.vue";
import Footer from "./components/layout/footer/index.vue";
</script>
<template>
  <v-app>
    <v-card variant="flat" max-width="375" width="100%" class="mx-auto">
      <Header />
      <v-content class="bodyHeight">
        <div >tes</div>
      </v-content>
      <Footer />
    </v-card>
  </v-app>
</template>

<style scoped>
.bodyHeight{ height:calc(100vh - 142px); padding:25px 30px; overflow: auto; display:block; background:#ECECEC; border-radius:30px;}
</style>