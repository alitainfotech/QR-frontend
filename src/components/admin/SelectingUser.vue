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
      <BaseCheckBox
        id="checkbox1"
        label="Manager A"
        value="Manager A"
        borderColor="#CBCACA"
        checked="true"
        class="bg-boxBG-1"
      />
      <BaseCheckBox
        id="checkbox2"
        label="Manager B"
        value="Manager B"
        borderColor="#CBCACA"
        class="bg-boxBG-1"
      />
      <BaseCheckBox
        id="checkbox3"
        label="Worker A"
        value="Worker A"
        borderColor="#CBCACA"
        class="bg-boxBG-2"
      />
      <BaseCheckBox
        id="checkbox4"
        label="Worker B"
        value="Worker B"
        borderColor="#CE86C0"
        class="bg-boxBG-3"
      />
      <BaseCheckBox
        id="checkbox5"
        label="Worker C"
        value="Worker C"
        borderColor="#A49ABD"
        class="bg-grayLight"
      />
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
<script setup></script>

