<template>
  <div>
    <BaseTitle>
      <template v-slot:text> GARMENT STORAGE </template>
    </BaseTitle>
    <BaseSubtitle class="mb-5">
      <template v-slot:text> INSERTING GARMENTS INTO INTERNATIONAL  <br/> STORAGE </template>
    </BaseSubtitle>

    <div class="px-5 mb-10">
      <BaseNumberButton text="RETAILER | PP | 01372" />
    </div>

    <div class="contentHeight">      
      <StorageCard>
        <template v-slot:title>
          <div class="text-primary text-capitalize">Currently In-Storage (6.0)</div>
        </template>
        <template v-slot:productCombination>
          <ProductCombination>
            <template v-slot:product>
              <BaseCheckBox
                id="checkbox1"
                label="Jacket | 1356681 | 5 PCS"
                value="Jacket | 1356681 | 5 PCS"
                checked="true"
                borderColor="#CBCACA"
                class="bg-boxBG-1"
              />
              <BaseCheckBox
                id="checkbox2"
                label="Trousers | 1356681 | 5 PCS"
                value="Trousers | 1356681 | 5 PCS"
                borderColor="#CE86C0"
                class="bg-boxBG-3"
              />
              <BaseCheckBox
                id="checkbox3"
                label="Waistcoat | 1356681 | 5 PCS"
                value="Waistcoat | 1356681 | 5 PCS"
                borderColor="#CBCACA"
                class="bg-boxBG-2"
              />
              <BaseCheckBox
                id="checkbox4"
                label="Shirt | 2177 | 5 PCS"
                value="Shirt | 2177 | 5 PCS"
                borderColor="#A49ABD"
                class="bg-boxBG-4"
              />
              <BaseCheckBox
                id="checkbox5"
                label="Overcoat | 9924 | 5 PCS"
                value="Overcoat | 9924 | 5 PCS"
                borderColor="#92768F"
                class="bg-boxBG-6"
              />
            </template>
          </ProductCombination>
        </template>
      </StorageCard>
    </div>
    <!-- <v-divider :thickness="3" color="primary" class="mb-6"></v-divider> -->
    <div class="d-flex justify-center px-5 mb-3">
      <BaseSubmitButton
        block
        size="x-large"
        color="primary"
        text="EXTRACT & SHIP| 7.1"
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
        text="EXTRACT | 6.2 "
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
import StorageCard from "../../../../phase/common/StorageCard.vue";
import ProductCombination from "../../../../phase/common/ProductCombination.vue";

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