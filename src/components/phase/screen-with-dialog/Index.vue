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
              label="Jacket | 1356681"
              value="Jacket | 1356681"
              color="#D9D9D9"
              borderColor="#CBCACA"
              checked="true"
            />
          </template>
          <template v-slot:subProduct>
            <BaseCheckBox
              id="checkbox2"
              label="JA Inner Lining | YC62101"
              value="JA Inner Lining | YC62101"
              color="#D9D9D9"
              borderColor="#CBCACA"
            />
          </template>
        </ProductCombination>
        <ProductCombination>
          <template v-slot:product>
            <BaseCheckBox
              id="checkbox3"
              label="Trousers | 220551"
              value="Trousers | 220551"
              color="#FFEBF8"
              borderColor="#F9DAEE"
            />
          </template>
        </ProductCombination>
        <ProductCombination>
          <template v-slot:product>
            <BaseCheckBox
              id="checkbox4"
              label="Waistcoat | 130200"
              value="Waistcoat | 130200"
              color="#E3BADB"
              borderColor="#CE86C0"
            />
          </template>
          <template v-slot:subProduct>
            <BaseCheckBox
              id="checkbox4"
              label="WC Inner Lining | YC62101"
              value="WC Inner Lining | YC62101"
              color="#E3BADB"
              borderColor="#CE86C0"
            />
            <BaseCheckBox
              id="checkbox4"
              label="WC Outer Lining | YC62101"
              value="WC Outer Lining | YC62101"
              color="#E3BADB"
              borderColor="#CE86C0"
            />
          </template>
        </ProductCombination>
      </div>
    </div>
    <div class="">
      <BaseSubmitButton
        size="x-large"
        color="primary"
        text="STORE COMPONENTS"
        icon="mdi-greater-than"
        variant="elevated"
        rounded="xl"
        fontSize="text-22-bold"
        fontColor="text-white"
        iconSize="small"
      />
    </div>
    <InfoDialog>
      <template v-slot:title>
        Component(s) Stored
      </template>
      <template v-slot:content>
        <p class="px-4">
        You have successfully<br/> entered these components into storage.
        </p>
      </template>
    </InfoDialog>
  </div>
</template>
<script setup>
import InfoDialog from "../../common/InfoDialog.vue";
import ProductCombination from "../common/ProductCombination.vue";
</script>