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
      <v-layout row class="pb-4 px-5">
        <v-flex xs6>
          <BaseAlertButton
            size="x-large"
            color="error-lighten-3"
            text="fail"
            icon="mdi-greater-than"
            variant="elevated"
            rounded="xl"
            fontSize="text-22-bold"
            fontColor="text-white"
            iconSize="small"
            :styleObj="styleAlertBtn"
          /> </v-flex
        ><v-spacer></v-spacer>
        <v-flex xs6>
          <BaseAlertButton
            size="x-large"
            color="success-lighten-3"
            text="pass"
            icon="mdi-greater-than"
            variant="elevated"
            rounded="xl"
            fontSize="text-22-bold"
            fontColor="text-white"
            iconSize="small"
            :styleObj="styleAlertBtn"
          />
        </v-flex>
      </v-layout>
    </v-container>
    <BaseSubmitButton
      size="x-large"
      color="warning"
      text="shoot again"
      icon="mdi-greater-than"
      variant="elevated"
      rounded="xl"
      fontSize="text-22-bold"
      fontColor="text-white"
      iconSize="small"
    />
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