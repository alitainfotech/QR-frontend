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
      <div class="pl-5 pr-5 pb-4">
        <BaseSubtitle class="mb-2">
          <template v-slot:text> Awaiting Arrival </template>
        </BaseSubtitle>
        <BaseCheckBox
          id="checkbox1"
          label="Jacket | 1356681 | Phase 5.0 | 5 PCS"
          value="Jacket | 1356681 | Phase 5.0 | 5 PCS"
          borderColor="#CBCACA"
          checked="true"
          class="bg-boxBG-1"
        />       
        <BaseCheckBox
          id="checkbox3"
          label="Trousers | 1356681 | Phase 5.0 | 5 PCS"
          value="Trousers | 1356681 | Phase 5.0 | 5 PCS"
          borderColor="#CBCACA"
          class="bg-boxBG-2"
        />
        <BaseCheckBox
          id="checkbox4"
          label="Overcoat | 9924 | Phase 1.1 | 5 PCS"
          value="Overcoat | 9924 | Phase 1.1 | 5 PCS"
          borderColor="#CE86C0"
          class="bg-boxBG-3"
        />      
      </div>
      <StorageCard>
        <template v-slot:title>
          <div class="text-primary text-capitalize">Currently In-Storage (6.1)</div>          
        </template>
        <template v-slot:productCombination>
          <ProductCombination>
            <template v-slot:product>
              <BaseCheckBox
                id="checkbox4"
                label="Waistcoat | 1356681 | Phase 6.1"
                value="Waistcoat | 1356681 | Phase 6.1"
                borderColor="#CE86C0"
                class="bg-boxBG-3"
              />
              <BaseCheckBox
                id="checkbox5"
                label="Shirt | 2177 | Phase 6.1"
                value="Shirt | 2177 | Phase 6.1"
                borderColor="#A49ABD"
                class="bg-boxBG-4"
              />
            </template>
          </ProductCombination>
          <CommonDescriptionTable class="mt-3" :items="tblData"/>
        </template>        
      </StorageCard>
    </div>
    <!-- <v-divider :thickness="3" color="primary" class="mb-6"></v-divider> -->
    <div class="d-flex justify-center px-5 mb-3">
      <BaseSubmitButton
        block
        size="x-large"
        color="primary"
        text="INSERT| 6.1"
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

const tblData = ref([
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
    value: "23-09-23",
  },
  {
    title: "Due Date",
    value: "21-09-23",
  },
  {
    title: "Arrival Date",
    value: "21-09-23",
  },
  {
    title: "Factory",
    value: "3.5",
  },
  {
    title: "Start Date",
    value: "23-09-23",
  },
]);
</script>