<template>
  <div>screen-3-7-1-3
    <BaseTitle>
      <template v-slot:text> SUMMARY | XXXX </template>
    </BaseTitle>
    <BaseSubtitle class="mb-5">
      <template v-slot:text> SUMMARY OF PHASES 1 2 & 3 </template>
    </BaseSubtitle>

    <div class="px-5 mb-10">
      <BaseNumberButton text="01372" />
    </div>

    <div class="contentHeight">
      <div class="px-5">
        <CommonTestCaseTable :items="data" />
        <div class="px-10 mt-5" style="opacity: 0.5">
          <BaseExportButton class="bg-primary" btnText="export" />
        </div>
      </div>
    </div>
    <v-divider :thickness="3" color="primary" class="mb-6"></v-divider>
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
    <div class="d-flex justify-center px-5 mb-3">
      <BaseSubmitButton
        block
        size="x-large"
        color="primary-lighten-3"
        text="HAND-FINISHING | 3.5"
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