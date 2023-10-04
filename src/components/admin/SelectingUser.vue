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
        color="#D9D9D9"
        checked="true"
      />
      <BaseCheckBox
        id="checkbox2"
        label="Manager B"
        value="Manager B"
        borderColor="#CBCACA"
        color="#D9D9D9"
      />
      <BaseCheckBox
        id="checkbox3"
        label="Worker A"
        value="Worker A"
        borderColor="#CBCACA"
        color="#FFEBF8"
      />
      <BaseCheckBox
        id="checkbox4"
        label="Worker B"
        value="Worker B"
        borderColor="#CE86C0"
        color="#E3BADB"
      />
      <BaseCheckBox
        id="checkbox5"
        label="Worker C"
        value="Worker C"
        borderColor="#A49ABD"
        color="#ADA9BB"
      />
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
  </div>
</template>
<script setup></script>

