<template>
  <v-table class="table-style" style="table-layout: fixed">
    <tbody>
      <tr v-for="(item,index) in items" :key="index" :class="{'bg-rowBG':index%2!==0}">
        <td style="min-width: calc(100% - 100px)">
          <span class="text-primary text-16-medium text-uppercase"
            >{{item.title}}</span
          >
        </td>
        <td style="width: 100px; text-align: center;" class="border-col-left">
          <span class="text-primary text-18-bold text-uppercase">{{item.value}}</span>
        </td>
      </tr>
    </tbody>
  </v-table>
</template>
<script setup>
const props= defineProps(['items'])
</script>
<style scoped>
.v-table > .v-table__wrapper > table > tbody > tr > td {
  padding: 10px 10px;
}
.v-table--density-default > .v-table__wrapper > table > tbody > tr > td {
  height: 0px !important;
}
.table-style {
  border-radius: 4px;
  border: 1px solid #cbcaca;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}
.border-col-left {
  border-left: 1px solid #cbcaca;
}
.border-row-bottom {
  border-bottom: 1px solid #cbcaca;
}
</style>