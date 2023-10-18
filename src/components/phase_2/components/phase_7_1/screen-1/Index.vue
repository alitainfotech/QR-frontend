<template>
  <div>
    <BaseTitle>
      <template v-slot:text> SELECT SUB-PRODUCTS </template>
    </BaseTitle>
    <BaseSubtitle class="mb-5">
      <template v-slot:text> CHOOSE THE PRODUCTS YOU NEED <br/> TO DEAL WITH? </template>
    </BaseSubtitle>

    <div class="px-5 mb-10">
      <BaseNumberButton text="01372" />
    </div>

    <div class="contentHeight">
      <div class="px-5">
        <BaseCheckBox
          id="checkbox1"
          label="JACKET | 1356681 | Phase 7.2"
          value="JACKET | 1356681 | Phase 7.2"
          borderColor="#CBCACA"
          checked="true"
          class="bg-boxBG-1"
        />
        <BaseCheckBox
          id="checkbox2"
          label="TROUSERS | 1356681 | Phase 7.2"
          value="TROUSERS | 1356681 | Phase 7.2"
          borderColor="#CBCACA"
          class="bg-boxBG-1"
        />
        <BaseCheckBox
          id="checkbox3"
          label="WAISTCOAT | 220556 | Phase 7.2"
          value="WAISTCOAT | 220556 | Phase 7.2"
          borderColor="#CBCACA"
          class="bg-boxBG-2"
        />
        <BaseCheckBox
          id="checkbox4"
          label="SHIRT | 1301 | PHASE 7.2"
          value="SHIRT | 1301 | PHASE 7.2"
          borderColor="#CE86C0"
          class="bg-boxBG-3"
        />
        <BaseCheckBox
          id="checkbox5"
          label="SHIRT | 2177 | PHASE 7.2"
          value="SHIRT | 2177 | PHASE 7.2"
          borderColor="#A49ABD"
          class="bg-boxBG-4"
        />
      </div>
    </div>
    <!-- <v-divider :thickness="3" color="primary" class="mb-6"></v-divider> -->
    <div class="d-flex justify-center px-5 mb-3">
      <BaseSubmitButton
        block
        size="x-large"
        color="primary"
        text="PROCEED"
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