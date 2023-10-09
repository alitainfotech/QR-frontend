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
     <div class="d-flex justify-center">
       <BaseSubmitButton
        color="primary"
        text="save and return"
        icon="mdi-greater-than"
        variant="elevated"
        rounded="pill"
        fontSize="text-20-bold"
        fontColor="text-white"
        iconSize="small"
        :styleObj="styleObj"
        class="mr-5"
      />
      <BaseRoundedActionButton
        class="bg-warning-lighten-10"
        height="56px"
        width="56px"
      >
        <template v-slot:icon>
          <v-img
            :width="27"
            :aspect-ratio="27 / 20"
            src="/src/assets/img/images/camera-image.svg"
          />
        </template>
      </BaseRoundedActionButton>
     
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