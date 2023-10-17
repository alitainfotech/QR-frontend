<template>
  <div>
    <BaseTitle>
      <template v-slot:text> GARMENT PRESSING | 4.0 </template>
    </BaseTitle>
    <BaseSubtitle class="mb-5">
      <template v-slot:text> THE GARMENT HAS NOW ARRIVED <br/> AT THE PRESSING STAGE </template>
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
        text="START PRESSING | 4.1"
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
    title: "Order #",
    value: "01338",
  },
  {
    title: "Factory",
    value: "B",
  },
  {
    title: "Start Date",
    value: "27-09-023",
  },
  {
    title: "Due Date",
    value: "21-09-23",
  },
  {
    title: "Arrival Date",
    value: "22-09-23",
  },
  {
    title: "Factory",
    value: "3.5",
  },
  {
    title: "Start Date",
    value: "23-09-23",
  },
  {
    title: "Due Date",
    value: "24-09-23",
  },  
  {
    title: "Arrival Date",
    value: "24-09-23",
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