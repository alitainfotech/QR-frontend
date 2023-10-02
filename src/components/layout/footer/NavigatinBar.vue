<template>
  <v-footer class="bg-grey-lighten-1">
    <v-row class="d-flex justify-space-between"  no-gutters>
      <BaseButton>
        <template v-slot:icon>
          <v-img
            :width="22"
            :height="20"
            src="/src/assets/img/icons/center.svg"
          ></v-img>
        </template>
        <template v-slot:label>
          <span>{{ footerNavigation.center }}</span>
        </template>
      </BaseButton>
      <BaseButton>
        <template v-slot:icon>
          <v-img
            :width="22"
            :height="20"
            src="/src/assets/img/icons/designs.svg"
          ></v-img>
        </template>
        <template v-slot:label>
          <span>{{ footerNavigation.designs }}</span>
        </template>
      </BaseButton>
      <BaseButton>
        <template v-slot:icon>
          <v-img
            :width="28"
            :height="20"
            src="/src/assets/img/icons/fit.svg"
          ></v-img>
        </template>
        <template v-slot:label>
          <span> {{ footerNavigation.fit }}</span>
        </template>
      </BaseButton>
      <BaseButton>
        <template v-slot:icon>
          <v-img
            :width="28"
            :height="20"
            src="/src/assets/img/icons/qc.svg"
          ></v-img>
        </template>
        <template v-slot:label>
          <span> {{ footerNavigation.qc }}</span>
        </template>
      </BaseButton>
    </v-row>
  </v-footer>
</template>
<script setup>
import BaseButton from "../../base/Button.vue";
import { footerNavigation } from "../../../data/constants/static";
</script>