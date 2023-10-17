<template>
  <div>
    <p class="text-primary text-18-bold text-uppercase text-center mb-2">
      select sub-products
    </p>
    <div
      class="text-primary-lighten-3 text-14-medium text-uppercase text-center"
    >
      CHOOSE THE PRODUCTS YOU NEED <br />
      TO DEAL WITH?
    </div>
    <div class="contentHeight">
      <div class="px-5">
         <BaseCheckBox
        id="checkbox1"
        label="JACKET | 1356681 | Phase 8.4"
        value="JACKET | 1356681 | Phase 8.4"
        borderColor="#CBCACA"
        checked="true"
        class="bg-boxBG-1"
      />
      <BaseCheckBox
        id="checkbox2"
        label="TROUSERS | 1356681 | Phase 8.4"
        value="TROUSERS | 1356681 | Phase 8.4"
        borderColor="#CBCACA"
        class="bg-boxBG-1"
      />
      <BaseCheckBox
        id="checkbox3"
        label="WAISTCOAT | 220556 | Phase 8.4"
        value="WAISTCOAT | 220556 | Phase 8.4"
        borderColor="#CBCACA"
        class="bg-boxBG-2"
      />
      <BaseCheckBox
        id="checkbox4"
        label="SHIRT | 1301 | PHASE 8.4"
        value="SHIRT | 1301 | PHASE 8.4"
        borderColor="#CE86C0"
        class="bg-boxBG-3"
      />
      <BaseCheckBox
        id="checkbox5"
        label="SHIRT | 2177 | PHASE 8.4"
        value="SHIRT | 2177 | PHASE 8.4"
        borderColor="#A49ABD"
        class="bg-boxBG-4"
      />
      </div>
     
    </div>
    <div class="d-flex justify-center px-5">
      <BaseSubmitButton
        block
        size="x-large"
        color="primary"
        text="PROCEED"
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
<script setup></script>

