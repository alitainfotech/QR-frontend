<template>
  <div>
    <BaseTitle>
      <template v-slot:text> HAND-FINISHING SUMMARY |  <br/> 3.5.6 </template>
    </BaseTitle>
    <BaseSubtitle class="mb-5">
      <template v-slot:text> REVIEW THE CHECKS FOR THE PREVIOUS STEPS  <br/> AND REPORT ISSUES IF NECESSARY </template>
    </BaseSubtitle>

    <div class="px-5 mb-10">
      <BaseNumberButton text="01372" />
    </div>

    <div class="contentHeight">
      <div class="px-5">
        <CommonTestCaseTable :items="data" />        
      </div>
      <div class="px-5 mt-5">
        <CommonDescriptionTable :items="dataTables"/>
      </div>
    </div>
    
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
import InfoDialog from "../../../../common/InfoDialog.vue";
const data = ref([
  {
    title: "Phase 1",
    pass: "3/3",
    fail: "0/3",
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
    pass: "17/18",
    fail: "2/18",
  },
]);
const dataTables = ref([
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
  }  
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