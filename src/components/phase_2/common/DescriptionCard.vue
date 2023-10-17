<template>
  <v-container fluid class="container-padding">
    <v-row no-gutters>
      <v-col>
        <v-card
          variant="flat"
          class="rounded-lg d-flex flex-column justify-center"
        >
          <v-container fluid class="container-padding">
            <v-row no-gutters>
              <v-col cols="8" class="col-border-right pa-4">
                <slot name="row1Col1"></slot>
              </v-col>
              <v-col cols="4" class="pa-4 text-end">
                <slot name="row1Col2"></slot>
              </v-col>
            </v-row>
            <v-row class="row-border-top-bottom" no-gutters>
              <v-col cols="4" class="col-border-right pa-4 text-center">
                <slot name="row2col1"></slot>
              </v-col>
              <v-col cols="4" class="col-border-right pa-4 text-center">
                <slot name="row2col2"></slot>
              </v-col>
              <v-col cols="4" class="pa-4 text-center">
                <slot name="row2col3"></slot>
              </v-col>
            </v-row>
            <v-row no-gutters>
              <v-col cols="6" class="col-border-right px-4 py-2">
                <slot name="row3col1"></slot>
              </v-col>
              <v-col cols="6" class="px-4 py-2">
                <slot name="row3col2"></slot>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup>
</script>
<style scoped>
.col-border-right {
  border-right: 1px solid #dbdbdb;
}
.row-border-top-bottom {
  border-top: 1px solid #dbdbdb;
  border-bottom: 1px solid #dbdbdb;
}
.outer-container-padding {
  padding: 16px 16px 0 16px;
}
.container-padding {
  padding: 0 !important;
}
/* .v-col{
    padding: 0 !important;
} */
</style>