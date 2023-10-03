<template>
  <div>
    <p class="text-primary text-18-bold text-uppercase text-center mb-2">
      select sub-products
    </p>
    <div class="text-secondary text-14-medium text-uppercase text-center">
      SELECT THE SUB-PRODUCTS FOR WHICH <br />
      YOU WANT TO HANDLE FOR
    </div>
    <div class="mt-6">
      <BaseCheckBox
        id="checkbox1"
        label="Manager A"
        value="Manager A"
        class="bg01"
        checked="true"
      />
      <BaseCheckBox
        id="checkbox2"
        label="Manager B"
        value="Manager B"
        class="bg01"
      />
      <BaseCheckBox
        id="checkbox3"
        label="Worker A"
        value="Worker A"
        class="bg02"
      />
      <BaseCheckBox
        id="checkbox4"
        label="Worker B"
        value="Worker B"
        class="bg03"
      />
      <BaseCheckBox
        id="checkbox5"
        label="Worker C"
        value="Worker C"
        class="bg05"
      />
    </div>
    <div class="mt-14">
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