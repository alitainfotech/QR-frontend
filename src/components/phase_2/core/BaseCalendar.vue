<template>
  <v-text-field
      type="date"
      :placeholder="placeholderText"
      variant="solo"
      class="customDatePicker"
      hide-details
      persistent-placeholder
    ></v-text-field>
</template>
<script setup>
import { ref } from "vue";
const props = defineProps(['placeholderText'])
</script>

<style>
 
.customDatePicker input.v-field__input { color:#050336; min-height:inherit; height:42px; padding:10px 15px; line-height:20px;}
.customDatePicker .v-field__input input{ color:#050336; font-size:16px; font-weight:500; line-height:20px; margin:0;}
.customDatePicker .v-field__input input::-webkit-input-placeholder { color: #050336; font-weight: 500 ; opacity:1 ;}
.customDatePicker .v-field__input input::-moz-placeholder { color: #050336; font-weight: 500 ; opacity:1 ;}
.customDatePicker .v-field__input input:-ms-input-placeholder {color: #050336; font-weight: 500 ; opacity:1 ;}
.customDatePicker .v-field__input input:-moz-placeholder { color: #050336; font-weight: 500 ; opacity:1 ;}

</style>