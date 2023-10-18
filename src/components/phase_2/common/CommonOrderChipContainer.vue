<template>
    <v-container class="common-order-chip-container" fluid="true">
          <v-row>
            <v-col cols="12">
              <v-sheet color="rowBG">
                <BaseChip
                  v-for="(item, index) in items"
                  :key="index"
                  :chipText="item"
                />
              </v-sheet>
            </v-col>
          </v-row>
        </v-container>
</template>
<script setup>
const props = defineProps(['items'])
</script>
<style>
.common-order-chip-container.v-container{
  max-height: 170px;
  overflow: auto;
  padding: 0 16px 0 16px;
}
.common-order-chip-container.v-col{
    padding: 0;
}
</style>