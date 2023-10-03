<template>
  <div class="">
    <v-btn
      block
      :rounded="rounded"
      :size="size"
      :variant="variant"
      :color="color"
    >
      <span :class="[fontColor, fontSize]">{{ text }}</span>
      <div>
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
 