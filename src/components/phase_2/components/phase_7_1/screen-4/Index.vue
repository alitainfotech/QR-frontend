<template>
  <div>
    <BaseTitle>
      <template v-slot:text> SHIP | 7.1 </template>
    </BaseTitle>
    <BaseSubtitle class="mb-5">
      <template v-slot:text>
        CHOOSE THE SHIPPER, ENTER THE AIRWAY <br />BILL NUMBER, THE SHIPPING
        DATE AND THE ARRIVAL DATE FOR THE CHOSEN ORDERS
      </template>
    </BaseSubtitle>

    <div class="px-5 mb-10">
      <BaseNumberButton text="RETAILER | PP" />
    </div>

    <div class="contentHeight">
      <div class="px-5 mb-8">
        <BaseSelect
          placeholderText="Choose The Shipper"
          :items="items"
          class="mb-4"
        />
        <BaseTextField
          placeholderText="Enter The Airway Bill"
          class="mb-4"
          appendInnerIcon="mdi-barcode-scan"
        />
        <BaseCalendar class="mb-4" />
        <BaseCalendar class="mb-4" />
        <VueDatePicker/>
        <!-- <BaseTextField placeholderText="Orders Included in this Shipment" ></BaseTextField> -->
        <v-card class="groupof-selected-orders" variant="flat">
          <!-- <span class="subheading">Select type</span> -->
         <BaseClosableChip/>
          <!-- <v-chip-group
      >
        <v-chip>Extra Soft</v-chip>
        <v-chip>Soft</v-chip>
        <v-chip>Medium</v-chip>
        <v-chip>Hard</v-chip>
      </v-chip-group> -->
        </v-card>
      </div>
      <div class="px-5">
        <p class="text-primary text-uppercase text-16-bold text-center mb-3">
          ORDERS AVAILABLE TO BE INCLUDED
        </p>
        <CommonOrderChipContainer :items="orders" />
      </div>
    </div>
    <div class="d-flex justify-center px-5 mb-3">
      <BaseSubmitButton
        block
        size="x-large"
        color="primary"
        text="SUBMIT | 7.2"
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
import StorageCard from "../../../../phase/common/StorageCard.vue";
import ProductCombination from "../../../../phase/common/ProductCombination.vue";
const items = ref([
  "California",
  "Colorado",
  "Florida",
  "Georgia",
  "Texas",
  "Wyoming",
]);
const orders = ref([
  "01378",
  "01378",
  "01378",
  "01378",
  "01378",
  "01378",
  "01378",
  "01378",
  "01378",
  "01378",
  "01378",
]);
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
<style>
.groupof-selected-orders.v-card {
  padding: 9px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}
</style>