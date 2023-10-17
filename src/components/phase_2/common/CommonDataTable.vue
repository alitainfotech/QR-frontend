<template>
  <v-table class=" common-data-table" style="table-layout: fixed">
    <thead :class="headerBgColor">
        <th  v-for="(col, index) in Object.keys(items[0])" :key="index" class="py-2" :class="{'table-th-border-left':index+1===1,'table-th-border-right':index+1===Object.keys(items[0]).length}">{{col}}</th>
    </thead>
    <tbody>
      <tr v-for="(item,index) in items" :key="index" :class="{'bg-rowBG':index%2!==0}">
        <td v-for="(col,colIndx,idx) in item" :key="colIndx" :class="{'border-col-right':(Object.values(item)).length-1 !=idx }">
          <span class="text-16-medium text-uppercase" :class="[textColor]"
            >{{col}}</span
          >
        </td>
      </tr>
    </tbody>
  </v-table>
</template>
<script setup>
const props= defineProps(['items','headerBgColor','textColor'])
</script>
<style scoped>
.common-data-table.v-table > .v-table__wrapper > table > tbody > tr > td {
  padding: 10px 10px !important;
}
.common-data-table.v-table--density-default > .v-table__wrapper > table > tbody > tr > td {
  height: 0px !important;
}
.table-style {
  border-radius: 4px;
  border: 1px solid #cbcaca;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}
.table-th-border-left {
  border-top-left-radius: 8px;
  border-left: 1px solid #CBCACA;
  
}
.table-th-border-right {
  border-top-right-radius: 8px;
  border-right: 1px solid #CBCACA;
  
}
.border-col-right {
  border-right: 1px solid #cbcaca;
}
.border-row-bottom {
  border-bottom: 1px solid #cbcaca;
}
</style>