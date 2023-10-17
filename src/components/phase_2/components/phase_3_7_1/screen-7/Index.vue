<template>
  <div>
    <BaseTitle>
      <template v-slot:text> HAND-FINISHING <br/>DESIGNS CHECK | 3.5.4 </template>
    </BaseTitle>
    <BaseSubtitle class="mb-5">
      <template v-slot:text> DOES B EXACTLY MATCH A? </template>
    </BaseSubtitle>
    <div class="contentHeight">
      <div class="pl-5 pr-5 pb-4">
        <v-layout row>
          <v-flex xs6>
            <p class="text-primary text-22-bold text-uppercase text-center">A</p>
            <v-card
              width="150"
              height="350"
              variant="tonal"
              class="rounded-lg d-flex justify-center"
            >
              <v-card-item class="justify-center item-center">
              
              </v-card-item>
            </v-card>
          </v-flex>
          <v-spacer></v-spacer>
          <v-flex xs6>
            <p class="text-primary text-22-bold text-uppercase text-center">B</p>
            <v-card
              width="150"
              height="350"
              variant="tonal"
              class="rounded-lg d-flex justify-center"
            >
              <v-card-item class="justify-center item-center">
               
              </v-card-item>
            </v-card>
          </v-flex>
        </v-layout>
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
    <div class="d-flex justify-center px-5 mb-3">
      <BaseSubmitButton
        block
        size="x-large"
        color="primary-lighten-3"
        text="SAVE AND RETURN"
        icon="mdi-greater-than"
        variant="elevated"
        fontSize="text-16-bold"
        fontColor="text-white"
        iconSize="small"
        class="px-2"
      />
    </div>
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