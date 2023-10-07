<script setup>
import { ref } from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import DefaultLayout from "./components/layout/default/index.vue";
import IpadLayout from "./components/layout/ipad/Index.vue";
import Header from "./components/layout/header/index.vue";
import Footer from "./components/layout/footer/index.vue";
import PhaseScreen1 from "./components/phase/screen-1/Index.vue";
import { useDisplay } from "vuetify";
const display = ref(useDisplay());
</script>
<template>
  <v-app>
    <DefaultLayout v-if="display.xs">
      <template v-slot:header>
        <Header />
      </template>
      <template v-slot:content>
        <v-content class="bodyStyle">
          <router-view></router-view>
        </v-content>
      </template>
      <template v-slot:footer>
        <Footer />
      </template>
    </DefaultLayout>
    <IpadLayout v-else>
      <template v-slot:header>
        <Header />
      </template>
      <template v-slot:content>
        <v-content class="bodyStyle">
          <router-view></router-view>
        </v-content>
      </template>
      <template v-slot:footer>
        <Footer />
      </template>
    </IpadLayout>
  </v-app>
</template>

<style scoped>
</style>