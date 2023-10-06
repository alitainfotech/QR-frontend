<template>
  <div class="btnStyle px-5">
    <v-btn
      block
      :rounded="rounded"
      :size="size"
      :variant="variant"
      :color="color"
      class="justify-start"
    >
      <span :class="[fontColor, fontSize]">{{ text }}</span
      ><v-spacer></v-spacer>
      <div class="btnArrow">
        <v-icon :size="iconSize" class="text-22-normal">{{ icon }}</v-icon>
      </div>
    </v-btn>
  </div>
</template>
<script setup>
import { ref } from "vue";

const props = defineProps([
  "size",
  "color",
  "text",
  "icon",
  "variant",
  "rounded",
  "fontSize",
  "fontColor",
  "iconSize",
]);
</script>
 
 <style scoped>
.btnArrow:before {
  content: "";
  background: url(src/assets/img/icons/chevron_right.svg) no-repeat center
    center;
  width: 28px;
  height: 28px;
  display: block;
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
}
.btnArrow i:before {
  content: "";
}

.v-btn--size-x-large {
    padding: 0 30px !important;
}
</style>