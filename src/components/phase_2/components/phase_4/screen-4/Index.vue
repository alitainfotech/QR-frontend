<template>
  <div>
    <BaseTitle>
      <template v-slot:text> PRESSING FINISHED | 4.2 </template>
    </BaseTitle>
    <BaseSubtitle class="mb-5">
      <template v-slot:text>THIS GARMENT IS NOW FINISHED PRESSED</template>
    </BaseSubtitle>

    <div class="px-5 mb-10">      
      <BaseNumberButton text="01372" />
    </div>

    <div class="contentHeight">     
      <div class="px-5">
        <BaseSubtitle class="mb-5">
          <template v-slot:text>YOU NEED TO COMPLETE PRESSING  <br/> FOR THE GARMENTS AS FOLLOWS: </template>
        </BaseSubtitle>
        <CommonDescriptionTable :items="data"/>
      </div>
    </div>

    <div class="d-flex justify-center px-5 mb-3">
      <BaseSubmitButton
        block
        size="x-large"
        color="primary"
        text="PHOTO STUDIO | 5.0"
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
        text="INSERT TO STORAGE | 6.0"
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
const data = ref([
  {
    title: "TOTAL TIME",
    value: "17 Mins",
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