<template>
  <div>
    <BaseTitle>
      <template v-slot:text> PRODUCTION IN-PROGRESS| 0.2 </template>
    </BaseTitle>
    <BaseSubtitle class="mb-5">
      <template v-slot:text>
        THIS GARMENT IS CURRENTLY <br/>IN-PRODUCTION
      </template>
    </BaseSubtitle>

    <div class="px-5 mb-10">
      <BaseNumberButton text="01372" />
    </div>

    <div class="contentHeight">
      <div class="px-5">
      <CommonDescriptionTable :items="data"/>
      </div>
    </div>
    <div class="d-flex justify-center px-5">
      <BaseSubmitButton
        block
        size="x-large"
        color="primary"
        text="GARMENT COMPLETE | 0.3"
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
import {ref} from 'vue'
const data = ref([
  {
    title: "Order #",
    value: "01372",
  },
  {
    title: "Factory",
    value: "B",
  },
  {
    title: "Start Date",
    value: "07-09-23",
  },
  {
    title: "Due Date",
    value: "21-9-23",
  },
  {
    title: "Arrival Date",
    value: "01372",
  },
]);
</script>