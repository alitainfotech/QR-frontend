<template>
  <v-card color="" flat rounded="0" class="pa-6 h-auto">
    <v-toolbar density="compact" color="white" class="h-auto" >
      <BaseButton class="justify-center align-start">
        <template v-slot:icon>
          <div>
            <v-img
              :width="27"
              :aspect-ratio="27 / 18"
              src="/src/assets/img/icons/back_arrow.svg"
            ></v-img>
          </div>
        </template>
      </BaseButton>
      <v-spacer></v-spacer>
      <div class="text-primary text-28-bold text-uppercase">SUB-PRODUCTS</div>
      <v-spacer></v-spacer>
      <BaseButton class="justify-center align-end">
        <template v-slot:icon>
          <div>
            <v-img
              :width="27"
              :aspect-ratio="27 / 22"
              src="/src/assets/img/icons/hamberg.svg"
            ></v-img>
          </div>
        </template>
      </BaseButton>
    </v-toolbar>
  </v-card>
</template>

<style>
.v-toolbar__content{ height:auto !important ;}
</style>