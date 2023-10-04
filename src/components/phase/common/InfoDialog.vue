<template>
  <div>
    <v-dialog v-model="dialog" width="auto">
      <v-card>
        <div>
          <v-icon class="close-icon" size="small" color="secondary">mdi-close</v-icon>
          <v-card-title class="py-6 pl-4 justify-center d-flex"
            ><span class="text-primary text-20-bold"><slot name="title"></slot></span></v-card-title
          >
        </div>

        <v-divider class="border-opacity-25" color="secondary"></v-divider>
        <v-card-text class="px-8 py-9 text-center">
          <span class="text-secondary text-18-medium"
            ><slot name="content"></slot></span
          >
        </v-card-text>
        <v-divider class="border-opacity-25" color="secondary"></v-divider>

        <v-card-actions class="justify-center py-5">
          <v-btn
            class="justify-center align-center px-9 py-2"
            color="primary"
            variant="elevated"
            size="medium"
            rounded="xl"
            @click="dialog = false"
            ><span class="text-14-medium">OK</span></v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script setup>
import { ref } from "vue";
const dialog = ref(true);
</script>
<style>
.close-icon {
  position: absolute;
  right: 16px;
  top: 24px;
}
.v-overlay__scrim {
    opacity: 0.7 !important;
}
</style>