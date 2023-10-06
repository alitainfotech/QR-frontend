<template>
  <div>
    <div class="px-6">
      <p class="text-primary text-18-bold text-uppercase text-center mb-2">
        PHASE 1.1 <br />
        DESIGNS CHECKPOINT
      </p>
      <p
        class="text-primary-lighten-3 text-14-medium text-uppercase text-center"
      >
        YOU ARE ABOUT TO SHOOT THIS STYLE DESIGN
      </p>
    </div>
    <div class="contentHeight">
      <div class="pl-5 pr-5 pb-4">
        <v-layout row>
          <v-flex xs6>
            <v-card
              width="150"
              height="226"
              variant="tonal"
              class="rounded-lg d-flex justify-center"
            >
              <v-card-item class="justify-center item-center">
                <v-img
                  :width="67"
                  :aspect-ratio="67 / 50"
                  src="/src/assets/img/images/camera-image.svg"
                ></v-img>
              </v-card-item>
            </v-card>
          </v-flex>
          <v-spacer></v-spacer>
          <v-flex xs6>
            <v-card
              width="150"
              height="226"
              variant="tonal"
              class="rounded-lg d-flex justify-center"
            >
              <v-card-item class="justify-center item-center">
                <v-img
                  :width="67"
                  :aspect-ratio="67 / 50"
                  src="/src/assets/img/images/camera-image.svg"
                ></v-img>
              </v-card-item>
            </v-card>
          </v-flex>
        </v-layout>
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
      color="primary"
      text="save and return"
      icon="mdi-greater-than"
      variant="elevated"
      rounded="xl"
      fontSize="text-22-bold"
      fontColor="text-white"
      iconSize="small"
      :styleObj="styleObj"
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