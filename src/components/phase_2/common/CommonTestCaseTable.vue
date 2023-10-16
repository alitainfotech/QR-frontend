<template>
  <v-table class="table-style test-case-table" style="table-layout: fixed">
    <thead class="">
      <th
        v-for="(col, index) in Object.keys(items[0])"
        :key="index"
        :class="{
          'bg-success-lighten-10': index === 1,
          'bg-error-lighten-10': index === 2,
        }"
        class="border-th-bottom py-3"
      >
        <span
          class="text-primary text-16-bold text-uppercase"
          :class="{ 'hidden-lg-and-down': index === 0 }"
          >{{ col }}</span
        >
      </th>
    </thead>
    <tbody>
      <tr v-for="(item, index) in items" :key="index">
        <td
          style="min-width: calc(100% - 160px);"
          class="text-primary text-14-medium text-uppercase"
        >
          <v-radio
            density="compact"
            class="text-primary text-14-medium text-uppercase"
            value="one"
            :label="item.title"
          >
          </v-radio>
        </td>
        <td style="width: 80px; text-align: center" class="border-col-left">
          <span class="text-success-lighten-10 text-14-bold text-uppercase">{{
            item.pass
          }}</span>
        </td>
        <td style="width: 80px; text-align: center" class="border-col-left">
          <span class="text-error-lighten-10 text-14-bold text-uppercase">{{
            item.fail
          }}</span>
        </td>
      </tr>
    </tbody>
  </v-table>
</template>
<script setup>
const props = defineProps(["items"]);
</script>
<style>
.test-case-table.v-table > .v-table__wrapper > table > tbody > tr > td {
  padding: 4px 10px !important;
}
.test-case-table .v-table--density-default > .v-table__wrapper > table > tbody > tr > td {
  height: 0px !important;
}
.test-case-table .table-style {
  border-radius: 4px;
  background: #fff;
}
.test-case-table .border-col-left {
  border-left: 1px solid #cbcaca;
}
.test-case-table .border-row-bottom {
  border-bottom: 1px solid #cbcaca;
}
.test-case-table .border-th-bottom {
  border-bottom: 1px solid #cbcaca;
}
.test-case-table .v-selection-control .v-label {
  font-size: 14px !important;
  font-weight: 500;
  color: #050336;
}
.test-case-table .v-selection-control__input {
  height: 16px !important;
  width: 16px !important;
}
.test-case-table.v-table--density-default > .v-table__wrapper > table > tbody > tr > td{
  height: 0px !important;
}
</style>