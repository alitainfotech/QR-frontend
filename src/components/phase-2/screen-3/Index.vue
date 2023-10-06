<template>
  <div>
    <div class="px-6">
      <p class="text-primary text-18-bold text-uppercase text-center mb-2">
        PHASE 2.1 <br />QUALITY CONTROL CHECKPOINT
      </p>
      <p
        class="text-primary-lighten-3 text-14-medium text-uppercase text-center"
      >
        NOW LOCATE THE LOCATION ON THE PRODUCT AND SHOOT IT CLEARLY
      </p>
    </div>
    <div class="contentHeight">
      <div class="pl-5 pr-5 pb-4">
        <v-card
          width="315"
          height="287"
          variant="tonal"
          class="rounded-lg d-flex justify-center"
        >
          <v-card-item class="justify-center item-center" height="100%">
            <v-img
              :width="200"
              :aspect-ratio="200 / 150"
              src="/src/assets/img/images/camera-image.svg"
            ></v-img>
          </v-card-item>
        </v-card>
      </div>
    </div>
    <div class="mb-4">
      <BaseSubmitButton
        size="x-large"
        color="warning"
        text="shoot"
        icon="mdi-greater-than"
        variant="elevated"
        rounded="xl"
        fontSize="text-22-bold"
        fontColor="text-white"
        iconSize="small"
      />
    </div>

    <BaseSubmitButton
      size="x-large"
      color="primary"
      text="save and return"
      icon="mdi-greater-than"
      variant="elevated"
      rounded="xl"
      fontSize="text-22-bold"
      fontColor="text-white"
      iconSize="small"
      :styleObj="styleObj"
    />
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