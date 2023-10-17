<template>
  <div>
    <BaseTitle>
      <template v-slot:text> HAND-FINISHING SUMMARY |  <br/> 3.5.6 </template>
    </BaseTitle>
    <div class="px-5 mb-10">
      <BaseNumberButton text="01372" />
    </div>

    <div class="contentHeight">     
      <div class="px-5">
        <CommonDescriptionTable :items="data"/>
      </div>
    </div>
    <!-- <v-divider :thickness="3" color="primary" class="mb-6"></v-divider> -->
    <div class="d-flex justify-center px-5 mb-3">
      <BaseSubmitButton
        block
        size="x-large"
        color="primary"
        text="GARMENT PRESSING | 4.0"
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
    value: "27-09-23",
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