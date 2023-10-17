<template>
  <v-text-field
    class="input-dialog"
    variant="solo"
    hide-details
    color="primary-lighten-5"
    :placeholder="placeholderText"
  ></v-text-field>
</template>
<script setup>
const props = defineProps(["placeholderText"]);
</script>
<style>
.input-dialog .v-field--variant-solo {
  border-radius: 4px;
  border: 1px solid var(--Secondary-20, #e4e3e7);
  background: var(--White, #fff);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}
.input-dialog .v-input__control .v-field .v-field__field {
  align-items: center !important;
  height: 42px !important;
}
.input-dialog input {
  text-align: center !important;
  font-size: 16px;
  font-weight:500;
  line-height:20px;
}
</style>



