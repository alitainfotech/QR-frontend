<template>
  <div>
    <BaseTitle>
      <template v-slot:text> HAND-FINISHING QUALITY <br/>CONTROL CHECK| 3.5.5 </template>
    </BaseTitle>
    <BaseSubtitle class="mb-5">
      <template v-slot:text> NOW LOCATE THE LOCATION <br/> ON THE PRODUCT AND SHOOT IT CLEARLY </template>
    </BaseSubtitle>
    <div class="contentHeight">
      <div class="px-5">
        <v-card          
          width="100%"
          height="382px"
          variant="tonal"
          class="d-flex justify-center"
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
const data = ref([
  {
    title: "Phase 1",
    pass: "15/15",
    fail: "0/15",
  },
  {
    title: "Phase 2",
    pass: "14/15",
    fail: "1/15",
  },
  {
    title: "Phase 3",
    pass: "14/15",
    fail: "1/15",
  },
  {
    title: "All Reports",
    pass: "13/15",
    fail: "2/15",
  },
]);
</script>

<style>
.cameraView{ margin:0 -10px -80px; width: calc(100% + 20px); height: calc(100vh - 278px);}
.cameraView>div>div,
.cameraView>div{ width:100%; height:100%; border-radius:10px 10px 30px 30px ;}
</style>