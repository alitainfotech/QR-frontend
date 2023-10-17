<template>
  <div>
    <BaseTitle>
      <template v-slot:text> GARMENT DELIVERY </template>
    </BaseTitle>
    <BaseSubtitle class="mb-5">
      <template v-slot:text>
        CONGRATS ON DELIVERING <br />YOUR GARMENTS
      </template>
    </BaseSubtitle>

    <div class="contentHeight">
      <div class="px-5">
        <v-card
          variant="flat"
          height="396"
          width="315"
          class="garment-delivery-card rounded-card"
        >
          <v-container fluid>
            <v-row>
              <v-col cols="12" class="delivery-card-img-padding">
                <v-img
                  :width="135"
                  :aspect-ratio="135 / 150"
                  src="/src/assets/img/images/garment_delivery_card.svg"
                  cover
                  class="text-white"
                />
              </v-col>
            </v-row>
          </v-container>
          <v-divider :thickness="1" color="primary" class="mb-5"></v-divider>
          <div class="px-6 pb-5">
            <p class="text-primary text-capitalize text-18-bold text-center mb-3">This Workflow Is Finished Now</p>
            <p class="text-primary-lighten-3 text-capitalize text-14-medium text-center">
              you wish to Access Any Fitting Data For <br />
              This Order In Question, You Can Do so <br />From Your Platfrom
              Account
            </p>
          </div>
        </v-card>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
const data = ref([
  {
    title: "Phase 1",
    pass: "15/15",
    fail: "0/15",
  },
  {
    title: "Phase 2",
    pass: "14/15",
    fail: "1/15",
  },
  {
    title: "Phase 3",
    pass: "14/15",
    fail: "1/15",
  },
  {
    title: "All Reports",
    pass: "13/15",
    fail: "2/15",
  },
]);
</script>
<style>
.garment-delivery-card.rounded-card {
  border-radius: 30px;
}
.delivery-card-img-padding {
  padding: 60px 90px;
}
</style>