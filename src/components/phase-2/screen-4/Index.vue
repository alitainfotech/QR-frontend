<template>
  <div>
    <div class="px-6">
      <p class="text-primary text-18-bold text-uppercase text-center mb-2">
        PHASE 2.1 <br />QUALITY CONTROL CHECKPOINT
      </p>
      <p
        class="text-primary-lighten-3 text-14-medium text-uppercase text-center"
      >
       PASS OR FAIL
      </p>
    </div>
    <div class="contentHeight">
      <div class="pl-5 pr-5 pb-4">
        <v-card
          width="315"
          height="287"
          variant="tonal"
          class="rounded-lg d-flex justify-center"
        >
          <v-card-item class="justify-center item-center" height="100%">
            <v-img
              :width="200"
              :aspect-ratio="200 / 150"
              src="/src/assets/img/images/camera-image.svg"
            ></v-img>
          </v-card-item>
        </v-card>
      </div>
    </div>
    <v-container fluid>
      <v-layout row class="pb-4 justify-center">
        <v-flex xs4 class="mr-7">
          <BaseRoundedActionButton
            class="bg-error-lighten-10"
            height="56px"
            width="56px"
          >
            <template v-slot:icon>
              <v-img
                :width="30"
                :aspect-ratio="30 / 30"
                src="/src/assets/img/images/close.svg"
              />
            </template>
          </BaseRoundedActionButton> </v-flex
        >
        <v-flex xs4 class="mr-7">
          <BaseRoundedActionButton
            class="bg-warning-lighten-10"
            height="56px"
            width="56px"
          >
            <template v-slot:icon>
              <v-img
                :width="27"
                :aspect-ratio="27 / 20"
                src="/src/assets/img/images/camera-image.svg"
              />
            </template>
          </BaseRoundedActionButton>
        </v-flex>
        <v-flex xs4>
          <BaseRoundedActionButton
            class="bg-success-lighten-10"
            height="56px"
            width="56px"
          >
            <template v-slot:icon>
              <v-img
                :width="30"
                :aspect-ratio="30 / 30"
                src="/src/assets/img/images/done_all.svg"
              />
            </template>
          </BaseRoundedActionButton>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script setup>
import { ref } from "vue";

const styleObj = ref({
  opacity: 0.6,
});
const styleAlertBtn = ref({
  width: "150px",
});
</script>
<style scoped>
.v-container {
  padding: 0px !important;
}
</style>