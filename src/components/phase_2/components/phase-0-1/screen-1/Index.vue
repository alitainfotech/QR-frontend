<template>
  <div>
    <BaseTitle>
      <template v-slot:text> select sub-products </template>
    </BaseTitle>
    <BaseSubtitle class="mb-5">
      <template v-slot:text>
        CHOOSE THE PRODUCTS YOU NEED <br />TO DEAL WITH?
      </template>
    </BaseSubtitle>

    <div class="px-5 mb-10">
      <BaseNumberButton text="01372" />
    </div>

    <div class="contentHeight">
      <div class="px-5">
        <BaseCheckBox
          id="checkbox1"
          label="JACKET | 1356681 | Not Started "
          value="JACKET | 1356681 | Not Started "
          borderColor="#CBCACA"
          checked="true"
          class="bg-boxBG-1"
        />
        <BaseCheckBox
          id="checkbox2"
          label="TROUSERS | 1356681 | Not Started"
          value="TROUSERS | 1356681 | Not Started"
          borderColor="#CBCACA"
          class="bg-boxBG-1"
        />
        <BaseCheckBox
          id="checkbox3"
          label="WAISTCOAT | 220556 | Not Started"
          value="WAISTCOAT | 220556 | Not Started"
          borderColor="#CBCACA"
          class="bg-boxBG-2"
        />
        <BaseCheckBox
          id="checkbox4"
          label="SHIRT | 1301 | Not Started"
          value="SHIRT | 1301 | Not Started"
          borderColor="#CE86C0"
          class="bg-boxBG-3"
        />
        <BaseCheckBox
          id="checkbox5"
          label="SHIRT | 2177 | Not Started"
          value="SHIRT | 2177 | Not Started"
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
<script setup>
</script>