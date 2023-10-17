<template>
  <div>
    <BaseTitle>
      <template v-slot:text> NEXT STEP | 8.4 </template>
    </BaseTitle>
    <BaseSubtitle class="mb-5">
      <template v-slot:text>  WHAT IS THE NEXT STEP FOR <br />THESE GARMENTS? </template>
    </BaseSubtitle>
    
    <div class="contentHeight">
      
    </div>
    <div class="d-flex justify-center px-5 mb-5">
      <BaseSubmitButton
        block
        size="x-large"
        color="primary"
        text="STORE FITTING | 9.1"
        icon="mdi-greater-than"
        variant="elevated"
        fontSize="text-18-bold"
        fontColor="text-white"
        iconSize="small"
        class="px-2"
      />
    </div>
    <div class="d-flex justify-center px-5">
      <BaseSubmitButton
        block
        size="x-large"
        color="primary-lighten-3"
        text="DELIVER GARMENTS | 10.0"
        icon="mdi-greater-than"
        variant="elevated"
        fontSize="text-18-bold"
        fontColor="text-white"
        iconSize="small"
        class="px-2"
      />
    </div>
  </div>
</template>
<script setup></script>


