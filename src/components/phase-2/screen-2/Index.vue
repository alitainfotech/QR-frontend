<template>
  <div>
    <div class="px-6">
      <p class="text-primary text-18-bold text-uppercase text-center mb-2">
        PHASE 2.1 <br />
        QUALITY CONTROL CHECKPOINT
      </p>
      <p
        class="text-primary-lighten-3 text-14-medium text-uppercase text-center"
      >
        TAKE A LOOK AT THE LOCATION OF WHICH YOU NEED TO CAPTURE
      </p>
    </div>
    <div class="contentHeight">
      <div class="pl-5 pr-5 pb-4">
        <v-card
          width="315"
          height="287"
          variant="tonal"
          class="rounded-lg"
        ></v-card>
      </div>
    </div>
    <div class="d-flex justify-center px-5 mb-4">
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
      />
    </div>
    <div class="d-flex justify-center px-5">
      <BaseSubmitButton
        block
        size="x-large"
        color="primary"
        text="return"
        icon="mdi-greater-than"
        variant="elevated"
        fontSize="text-20-bold"
        fontColor="text-white"
        iconSize="small"
        :styleObj="styleObj"
      />
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
const styleObj = ref({
  opacity: 0.6,
});
</script>
<style scoped>
</style>