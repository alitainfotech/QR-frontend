<template>
  <div>
    <BaseTitle>
      <template v-slot:text> HAND-FINISHING OUTBOUND | 3.5.1 </template>
    </BaseTitle>
    <BaseSubtitle class="mb-5">
      <template v-slot:text>PREPARE THE GARMENT FOR OUTBOUND SHIPMENT</template>
    </BaseSubtitle>

    <div class="px-5 mb-10">
      <BaseNumberButton text="01372" />
    </div>

    <div class="contentHeight">
      <div class="px-5 mb-5">        
        <BaseSelect placeholderText="Choose The Factory" :items="items" class="mb-4"/>
        <BaseCalendar placeholderText="Enter The Start Date" class="mb-4"/>
        <BaseCalendar placeholderText="Enter The Due Date"/>
      </div>
      <div class="px-5">
        <CommonDescriptionTable :items="data"/>
      </div>
    </div>    
    <div class="d-flex justify-center px-5 mb-3">
      <BaseSubmitButton
        block
        size="x-large"
        color="primary"
        text="SHIP | 3.5.2"
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
    title: "Start Date",
    value: "07-09-023",
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
    value: "B",
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