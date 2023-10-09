<template>
  <div>
    <p class="text-primary text-18-bold text-uppercase text-center mb-2">
      select sub-products
    </p>
    <div
      class="text-primary-lighten-3 text-14-medium text-uppercase text-center"
    >
      SELECT THE SUB-PRODUCTS FOR WHICH <br />
      YOU WANT TO HANDLE FOR
    </div>

    <div class="contentHeight">
      <div class="pl-5 pr-5 pb-4">
        <p
          class="text-primary text-capitalize text-center text-18-medium mb-2 py-1"
        >
          Awaiting Arrival
        </p>
        <ProductCombination>
          <template v-slot:product>
            <BaseCheckBox
              id="checkbox1"
              label="Jacket+Trousers+Waistcoat | 1356681"
              value="Jacket+Trousers+Waistcoat | 1356681"
              borderColor="#CBCACA"
              class="bg-boxBG-1"
            />
          </template>
          <template v-slot:subProduct>
            <BaseCheckBox
              id="checkbox2"
              label="JA Inner Lining | YC62101"
              value="JA Inner Lining | YC62101"
              borderColor="#CBCACA"
              checked="true"
              class="bg-boxBG-1"
            />
          </template>
        </ProductCombination>
        <ProductCombination>
          <template v-slot:product>
            <BaseCheckBox
              id="checkbox3"
              label="Trousers | 220551"
              value="Trousers | 220551"
              borderColor="#F9DAEE"
              class="bg-boxBG-2"
            />
          </template>
        </ProductCombination>
        <ProductCombination>
          <template v-slot:product>
            <BaseCheckBox
              id="checkbox4"
              label="Waistcoat | 130200"
              value="Waistcoat | 130200"
              borderColor="#CE86C0"
              class="bg-boxBG-3"
            />
          </template>
          <template v-slot:subProduct>
            <BaseCheckBox
              id="checkbox4"
              label="WC Inner Lining | YC62101"
              value="WC Inner Lining | YC62101"
              borderColor="#CE86C0"
              checked="true"
              class="bg-boxBG-3"
            />
            <BaseCheckBox
              id="checkbox4"
              label="WC Outer Lining | YC62101"
              value="WC Outer Lining | YC62101"
              borderColor="#CE86C0"
              checked="true"
              class="bg-boxBG-3"
            />
          </template>
        </ProductCombination>
      </div>
    </div>
    <div class="d-flex justify-center px-5">
      <BaseSubmitButton
      block
        size="x-large"
        color="primary"
        text="STORE COMPONENTS"
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
import ProductCombination from "../common/ProductCombination.vue";
</script>