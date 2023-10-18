<template>
  <div class="d-flex base-dialog-checkbox customCheckBox" :style="bgColor">
      <div class="round">
        <input
          type="checkbox"
          :checked="checked"
          :id="id"
        />
        <label :for="id"></label>
      </div>
      <span class="text-16-medium" :class="[textColor]">{{ label }}</span>
  </div>
</template>
<script setup>
import { ref,reactive } from "vue";

const props = defineProps(["checked","label", "value","id","color","borderColor","textColor"]);
const bgColor = reactive({
  background: props.color,
  'border-color': props.borderColor
})
</script>
<style scoped>
.base-dialog-checkbox.customCheckBox{ margin-bottom:14px; padding:9px 10px; box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25); border-radius:4px;  
border:1px solid transparent; width:100%; align-items:center ;}
.bg01{ background:#D9D9D9; border-color:#CBCACA;}
.bg02{ background:#FFEBF8; border-color:#F9DAEE;}
.bg03{ background:#E3BADB; border-color:#CE86C0;}
.bg04{ background:#C0A7BE; border-color:#92768F;}
.bg05{ background:#ADA9BB; border-color:#A49ABD;}
.base-dialog-checkbox .round {
  position: relative;
  min-height:24px;
  min-width:24px;
  padding-left:34px;
}

.base-dialog-checkbox .round label {
  background-color: #fff;
  border: 1px solid #E4E3E7;
  /* border: 1px solid #ccc; */
  border-radius: 50%;
  cursor: pointer;
  height: 24px;
  left: 0;
  position: absolute;
  top: 0;
  width: 24px;
}

.base-dialog-checkbox .round label:after {
  border: 3px solid #050336;
  border-top: none;
  border-right: none;
  content: "";
  height: 8px;
  left:5px;
  opacity: 0;
  position: absolute;
  top:6px;
  transform: rotate(-45deg);
  width: 14px;
}

.base-dialog-checkbox .round input[type="checkbox"] {visibility: hidden; position:absolute; top:0; left:0;}
.base-dialog-checkbox .round input[type="checkbox"]:checked + label {
  background-color: #FFF;
  /* border-color: #050336; */
}

.base-dialog-checkbox .round input[type="checkbox"]:checked + label:after {
  opacity: 1;
}
</style>