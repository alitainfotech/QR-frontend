<template>
  <v-text-field
    :placeholder="placeholderText"
    variant="solo"
    class="custome-text-field"
    hide-details
    :append-inner-icon="appendInnerIcon"
  >
  
  </v-text-field>
</template>
<script setup>
import { ref } from "vue";
const props = defineProps(["placeholderText","appendInnerIcon"]);
</script>

<style>
.custome-text-field input.v-field__input {
  color: #050336;
  min-height: inherit;
  height: 42px;
  padding: 10px 15px;
  line-height: 20px;   
   font-weight:500;
}
.custome-text-field .v-field__input input {
  color: #050336;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  margin: 0;
   opacity: 1;
}
input.v-field__input::-webkit-input-placeholder {
  color: #050336; opacity: 1; 
}
input.v-field__input::-moz-placeholder {
  color: #050336; opacity: 1; 
}
input.v-field__input:-ms-input-placeholder {
  color: #050336; opacity: 1; 
}
input.v-field__input:-moz-placeholder {
  color: #050336; opacity: 1; 
}
.v-input__control .v-field {
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}
.mdi:before{
  color: #000;
}
.custome-text-field .v-field__prepend-inner > .v-icon, .v-field__append-inner > .v-icon, .v-field__clearable > .v-icon {
  opacity: 1 !important;
}
</style>