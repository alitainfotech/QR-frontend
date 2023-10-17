<template>
  <div>
    <BaseTitle>
      <template v-slot:text> PHOTO STUDIO | 5.0 </template>
    </BaseTitle>
    <BaseSubtitle class="mb-5">
      <template v-slot:text>DOES THIS GARMENT NEED TO BE SHOT? </template>
    </BaseSubtitle>

    <div class="px-5 mb-10">
      <BaseNumberButton text="01372" />
    </div>

    <div class="contentHeight">
      <div class="px-5">
        <CommonDescriptionTable :items="data" />
      </div>
    </div>

    <div class="d-flex justify-center px-5 mb-3">
      <BaseSubmitButton
        block
        size="x-large"
        color="primary"
        text="DO NOT SHOOT | 6.0"
        icon="mdi-greater-than"
        variant="elevated"
        fontSize="text-16-bold"
        fontColor="text-white"
        iconSize="small"
        class="px-2"
      />
    </div>
    <div class="d-flex justify-center px-5 mb-3">
      <BaseSubmitButton
        block
        size="x-large"
        color="primary-lighten-3"
        text="SHOOTING COMPLETE | 6.0"
        icon="mdi-greater-than"
        variant="elevated"
        fontSize="text-16-bold"
        fontColor="text-white"
        iconSize="small"
        class="px-2"
      />
    </div>
    <CommonInputDialog>
      <template v-slot:title> Extract Garment </template>
      <template v-slot:content>
        <div class="pa-4">
          <p class="pt-5 text-18-medium text-secondary text-center">
            Why are you extracting this garment on its own from storage?
          </p>
          <div class="py-5">
            <BaseDialogCheckBox
              checked="true"
              id="checkbox5"
              label="Reason 1"
              value="Reason 1"
              borderColor="#050336"
              class="bg-primary"
              textColor="text-white"
            />
            <BaseDialogCheckBox
              
              id="checkbox5"
              label="Reason 2"
              value="Reason 2"
              borderColor="#E4E3E7"
              class="bg-white"
              textColor="text-primary"
            />
             <BaseDialogCheckBox
              
              id="checkbox5"
              label="Reason 3"
              value="Reason 3"
              borderColor="#E4E3E7"
              class="bg-white"
              textColor="text-primary"
            />
             <BaseDialogCheckBox
              
              id="checkbox5"
              label="Reason 4"
              value="Reason 4"
              borderColor="#E4E3E7"
              class="bg-white"
              textColor="text-primary"
            />
             <BaseDialogCheckBox
              
              id="checkbox5"
              label="Other"
              value="Other"
              borderColor="#E4E3E7"
              class="bg-white"
              textColor="text-primary"
            />
          </div>
        </div>
      </template>
      <template v-slot:footer>
        <BaseOutlineButton btnText="Go Back" color="primary-lighten-3" />
        <BaseFlatButton btnText="Continue" color="primary" />
      </template>
    </CommonInputDialog>
  </div>
</template>
<script setup>
import { ref } from "vue";
import InfoDialog from "../../../../common/InfoDialog.vue";
const data = ref([
  {
    title: "Order #",
    value: "01338",
  },
  {
    title: "Factory",
    value: "B",
  },
  {
    title: "Start Date",
    value: "27-09-023",
  },
  {
    title: "Due Date",
    value: "21-09-23",
  },
  {
    title: "Arrival Date",
    value: "22-09-23",
  },
  {
    title: "Factory",
    value: "3.5",
  },
  {
    title: "Start Date",
    value: "23-09-23",
  },
  {
    title: "Due Date",
    value: "24-09-23",
  },
  {
    title: "Arrival Date",
    value: "24-09-23",
  },
]);
const items = ref([
  "California",
  "Colorado",
  "Florida",
  "Georgia",
  "Texas",
  "Wyoming",
]);
</script>