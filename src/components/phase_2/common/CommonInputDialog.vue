<template>
  <div>
    <v-dialog v-model="dialog" class="common-input-dialog" width="327">
      <v-card>
        <div>
          <v-icon class="close-icon" size="small" color="secondary"
            >mdi-close</v-icon
          >
          <v-card-title class="py-6 pl-4 justify-center d-flex"
            ><span class="text-primary text-20-bold"
              ><slot name="title"></slot></span
          ></v-card-title>
        </div>

        <v-divider class="border-opacity-25" color="secondary"></v-divider>
        
        <v-card-item density="compact">
          <slot name="content"> </slot>
        </v-card-item>
        <v-divider class="border-opacity-25" color="secondary"></v-divider>

        <v-card-actions class="justify-center py-5">
          <slot name="footer"></slot>
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
.common-input-dialog.v-dialog > .v-overlay__content > .v-card > .v-card-item{
    padding: 0 !important;
}
</style>