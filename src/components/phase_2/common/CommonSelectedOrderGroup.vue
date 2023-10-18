<template>
     <v-card class="groupof-selected-orders" variant="flat">
          <v-chip-group v-if="items.length">
            <BaseClosableChip v-for="(item,index) in items" :key="index" :chipText="item"/>
          </v-chip-group>
          <span v-else class="subheading text-primary text-16-medium">Orders Included in this Shipment</span>
        </v-card>
</template>
<script setup>
const props=defineProps(['items'])
</script>
<style>
.groupof-selected-orders.v-card {
  padding: 0px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}
.groupof-selected-orders .v-chip-group{
  padding: 0px;
}
</style>