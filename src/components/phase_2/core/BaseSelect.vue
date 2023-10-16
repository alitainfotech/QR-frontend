<template>
  <v-select
    class="customSelect"
    :placeholder="placeholderText"
    :items="items"
    variant="solo"
    hide-details
    menu-icon="mdi-chevron-down"
  >
  </v-select>
</template>
<script setup>
import { reactive, ref } from "vue";

const props = defineProps(['placeholderText','items'])
</script>
<style>

.v-select .v-field__input {
  color: #050336;
  min-height:inherit;
  height:42px;
  padding:10px 15px;
  line-height: 20px ;
}
.v-select .v-field__input input{
  color: #050336;
  font-size: 16px ;
  font-weight: 500 ;
  line-height: 20px ;
  margin:0;
}
.v-select .v-field__input input::-webkit-input-placeholder { color: #050336; font-weight: 500 ; opacity:1 ;}
.v-select .v-field__input input::-moz-placeholder { color: #050336; font-weight: 500 ; opacity:1 ;}
.v-select .v-field__input input:-ms-input-placeholder {color: #050336; font-weight: 500 ; opacity:1 ;}
.v-select .v-field__input input:-moz-placeholder { color: #050336; font-weight: 500 ; opacity:1 ;}
.v-select .v-field .v-field__append-inner{
  color: #050336;

}
</style>