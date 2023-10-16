<template>
  <div>
    <BaseTitle>
      <template v-slot:text> BEGIN PRODUCTION| 0.1 </template>
    </BaseTitle>
    <BaseSubtitle class="mb-5">
      <template v-slot:text> SCAN THE GARMENT INTO <br />PRODUCTION </template>
    </BaseSubtitle>

    <div class="px-5 mb-10">
      <BaseNumberButton text="01372" class="mb-4"/>
      <BaseSelect placeholderText="Choose The Factory" :items="items" class="mb-4"/>
      <BaseCalendar placeholderText="Enter The Start Date" class="mb-4"/>
      <BaseCalendar placeholderText="Enter The Completion Date"/>
      
   
    </div>
  
    <div class="contentHeight">
      <div class="px-5">
        <CommonDescriptionTable :items="data"/>
      </div>
    </div>
    <div class="d-flex flex-column justify-center px-5">
      <BaseSubmitButton
        block
        size="x-large"
        color="primary"
        text="SUBMIT"
        icon="mdi-greater-than"
        variant="elevated"
        fontSize="text-20-bold"
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
    value: "01372",
  },
  {
    title: "Start Date",
    value: "01372",
  },
  {
    title: "Due Date",
    value: "01372",
  },
  {
    title: "Arrival Date",
    value: "01372",
  },
  {
    title: "Factory",
    value: "01372",
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