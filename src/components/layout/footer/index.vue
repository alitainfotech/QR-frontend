<template>
  <v-footer class="py-5 px-8">
    <v-row class="d-flex justify-space-between" no-gutters>
      <BaseButton class="justify-center align-center">
        <template v-slot:icon>
          <div>
            <v-img
              :width="19"
              :aspect-ratio="19 / 20"
              src="/src/assets/img/icons/center.svg"
            ></v-img>
          </div>
        </template>
        <template v-slot:label>
          <span class="pt-2 text-primary-lighten-5 text-13-medium">{{ footerNavigation.center }}</span>
        </template>
      </BaseButton>

      <BaseButton class="justify-center align-center">
        <template v-slot:icon>
          <div>
            <v-img
              :width="22"
              :aspect-ratio="22 / 20"
              src="/src/assets/img/icons/designs.svg"
            ></v-img>
          </div>
        </template>
        <template v-slot:label>
          <span class="pt-2 text-primary-lighten-5 text-13-medium">{{ footerNavigation.designs }}</span>
        </template>
      </BaseButton>
      <BaseButton class="justify-center align-center">
        <template v-slot:icon>
          <div>
            <v-img
              :width="28"
              :aspect-ratio="28 / 20"
              src="/src/assets/img/icons/fit.svg"
            ></v-img>
          </div>
        </template>
        <template v-slot:label>
          <span class="pt-2 text-primary-lighten-5 text-13-medium"> {{ footerNavigation.fit }}</span>
        </template>
      </BaseButton>
      <BaseButton class="justify-center align-center">
        <template v-slot:icon>
          <div>
            <v-img
              :width="28"
              :aspect-ratio="28 / 20"
              src="/src/assets/img/icons/qc.svg"
            ></v-img>
          </div>
        </template>
        <template v-slot:label>
          <span class="pt-2 text-primary-lighten-5 text-13-medium"> {{ footerNavigation.qc }}</span>
        </template>
      </BaseButton>
    </v-row>
  </v-footer>
</template>
<script setup>
import {footerNavigation} from '../../../data/constants/static'
</script>