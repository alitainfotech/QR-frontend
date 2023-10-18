<template>
  <div class="base-date-picker">{{date}}
    <v-menu v-model="menu">
      <template v-slot:activator="{ props }">
        <v-text-field
          v-model="date"
          :placeholder="placeholderText"
          variant="solo"
          class="custome-text-field"
          hide-details
          append-inner-icon="mdi mdi-calendar-month"
          v-bind="props"
        >
        </v-text-field>
      </template>
      <VueDatePicker
        ref="datepicker"
        v-model="date"
        :range="true"
        text-input
        inline
        :month-change-on-scroll="false"
        :enable-time-picker="false"
        @update:model-value="updateDate"
      >
        <template #action-buttons>
          <v-btn variant="plain" @click="closeMenu">
            <span class="text-capitalize primary-lighten-5 text-14-medium"
              >Cancel</span
            >
          </v-btn>
          <v-avatar color="primary" @click="closeMenu"
            ><span class="text-capitalize primary-lighten-5 text-14-medium"
              >ok</span
            >
          </v-avatar>
        </template>
        <template #action-preview="{}"> </template>
      </VueDatePicker>
    </v-menu>
  </div>
</template>
<script setup>
import { ref } from "vue";
const props = defineProps(["placeholderText"]);
const menu=ref(false)
const date = ref("");
const datepicker = ref(null);
const getDate = (date) => {
  const day = date[0].getDate();
  const month = date[0].getMonth() + 1;
  const year = date[0].getFullYear();;
  return `Selected date is ${day}/${month}/${year}`;
};
const closeMenu = () => {
  menu.value=false
}
const updateDate=()=>{
  alert()
}
</script>

<style>
.base-date-picker input.v-field__input {
  color: #050336;
  min-height: inherit;
  height: 42px;
  padding: 10px 15px;
  line-height: 20px;
}
.base-date-picker .v-field__input input {
  color: #050336;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  margin: 0;
}
.base-date-picker .v-field__input input::-webkit-input-placeholder {
  color: #050336;
  font-weight: 500;
  opacity: 1;
}
.base-date-picker .v-field__input input::-moz-placeholder {
  color: #050336;
  font-weight: 500;
  opacity: 1;
}
.base-date-picker .v-field__input input:-ms-input-placeholder {
  color: #050336;
  font-weight: 500;
  opacity: 1;
}
.base-date-picker .v-field__input input:-moz-placeholder {
  color: #050336;
  font-weight: 500;
  opacity: 1;
}
.dp-custom-cell {
  border-radius: 50%;
}
.dp__action_row{
  width: 300px !important;
}
</style>