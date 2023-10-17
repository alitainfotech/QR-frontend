<template>
  <div>
    <BaseTitle>
      <template v-slot:text> PHOTO STUDIO | 5.0 </template>
    </BaseTitle>
    <BaseSubtitle class="mb-5">
      <template v-slot:text>DOES THIS GARMENT NEED TO BE SHOT? </template>
    </BaseSubtitle>

    <div class="px-5 mb-10">
      <BaseNumberButton text="01372" />
    </div>

    <div class="contentHeight">     
      <div class="px-5">
        <CommonDescriptionTable :items="data"/>
      </div>
    </div>

    <div class="d-flex justify-center px-5 mb-3">
      <BaseSubmitButton
        block
        size="x-large"
        color="primary"
        text="DO NOT SHOOT | 6.0"
        icon="mdi-greater-than"
        variant="elevated"
        fontSize="text-16-bold"
        fontColor="text-white"
        iconSize="small"
        class="px-2"
      />
    </div>
    <div class="d-flex justify-center px-5 mb-3">
      <BaseSubmitButton
        block
        size="x-large"
        color="primary-lighten-3"
        text="SHOOTING COMPLETE | 6.0"
        icon="mdi-greater-than"
        variant="elevated"
        fontSize="text-16-bold"
        fontColor="text-white"
        iconSize="small"
        class="px-2"
      />
    </div>
    <CommonDialog>
      <template v-slot:title>
        Incoming Garments
      </template>
      <template v-slot:content>
        <p class="">
          The garments below are incoming:
        </p>
        <CommonDataTable :items="data" class="mt-2" headerBgColor="bg-primary" textColor="text-primary"/>
      </template>
      <template v-slot:footer>
        <BaseOutlineButton btnText="Delay Shipment" color="primary-lighten-3"/>
        <BaseFlatButton btnText="Continue" color="primary"/>
      </template>
    </CommonDialog>
   
  </div>
</template>
<script setup>
import { ref } from "vue";
import InfoDialog from "../../../../common/InfoDialog.vue";
const data = ref([
  {
    "Order ID": "01381",
    "Garment":"JA",
    "Due": "Today",
  },
  {
    "Order ID": "01381",
    "Garment":"JA",
    "Due": "Today",
  },
  {
    "Order ID": "01381",
    "Garment":"JA",
    "Due": "Today",
  },
  {
    "Order ID": "01381",
    "Garment":"JA",
    "Due": "Today",
  },
]);
const items = ref([
  "California",
  "Colorado",
  "Florida",
  "Georgia",
  "Texas",
  "Wyoming",
]);
</script>