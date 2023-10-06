<template>
  <div>
    <div class="px-6">
      <p class="text-primary text-18-bold text-uppercase text-center mb-2">
        PHASE 1.1 <br />
        DESIGNS CHECKPOINT
      </p>
      <p
        class="text-primary-lighten-3 text-14-medium text-uppercase text-center"
      >
        RECORD PHOTOGRAPHIC<br />
        EVIDENCE FOR ALL OF THE PRODUCT’S STYLE <br />
        DESIGN CHOICES
      </p>
    </div>
    <div class="contentHeight">
      <div class="pl-5 pr-5 pb-4">
        <v-table class="rounded-lg">
          <tbody>
            <tr>
              <td class="px-4 pt-3" >
                <span class="text-secondary text-14-bold">01</span>
              </td>
              <td class="table--col-border-left table-col-border-right">
                <span class="text-primary text-14-bold text-uppercase"
                  >TEXT HERE TEXTHERE TEXT HERE TEXTHERE TEXT TEXT HERE</span
                >
              </td>
              <td class="hover-camera">
                <BaseButton class="justify-center align-center">
                  <template v-slot:icon>
                    <div>
                      <v-img
                        :width="28"
                        :aspect-ratio="28 / 20"
                        src="/src/assets/img/icons/camera.svg"
                      ></v-img>
                    </div>
                  </template>
                </BaseButton>
              </td>
            </tr>
            <tr>
              <td class="px-4 pt-3" style="vertical-align: top">
                <span class="text-secondary text-14-bold">02</span>
              </td>
              <td class="table--col-border-left table-col-border-right">
                <span class="text-primary text-14-bold text-uppercase"
                  >TEXT HERE TEXTHERE TEXT HERE TEXTHERE TEXT TEXT HERE</span
                >
              </td>
              <td class="hover-camera">
                <BaseButton class="justify-center align-center">
                  <template v-slot:icon>
                    <div>
                      <v-img
                        :width="28"
                        :aspect-ratio="28 / 20"
                        src="/src/assets/img/icons/camera.svg"
                      ></v-img>
                    </div>
                  </template>
                </BaseButton>
              </td>
            </tr>
            <tr>
              <td class="px-4 pt-3" style="vertical-align: top">
                <span class="text-secondary text-14-bold">03</span>
              </td>
              <td class="table--col-border-left table-col-border-right">
                <span class="text-primary text-14-bold text-uppercase"
                  >TEXT HERE TEXTHERE
                </span>
              </td>
              <td class="hover-camera">
                <BaseButton class="justify-center align-center">
                  <template v-slot:icon>
                    <div>
                      <v-img
                        :width="28"
                        :aspect-ratio="28 / 20"
                        src="/src/assets/img/icons/camera.svg"
                      ></v-img>
                    </div>
                  </template>
                </BaseButton>
              </td>
            </tr>
            <tr>
              <td class="px-4 pt-3" style="vertical-align: top">
                <span class="text-secondary text-14-bold">04</span>
              </td>
              <td class="table--col-border-left table-col-border-right">
                <span class="text-primary text-14-bold text-uppercase"
                  >TEXT HERE TEXTHERE HERE TEXTHERE.</span
                >
              </td>
              <td class="hover-camera">
                <BaseButton class="justify-center align-center">
                  <template v-slot:icon>
                    <div>
                      <v-img
                        :width="28"
                        :aspect-ratio="28 / 20"
                        src="/src/assets/img/icons/camera.svg"
                      ></v-img>
                    </div>
                  </template>
                </BaseButton>
              </td>
            </tr>
            <tr>
              <td class="px-4 pt-3" style="vertical-align: top">
                <span class="text-secondary text-14-bold">05</span>
              </td>
              <td class="table--col-border-left table-col-border-right">
                <span class="text-primary text-14-bold text-uppercase"
                  >TEXT HERE TEXTHERE TEXT HERE TEXTHERE TEXT TEXT HERE</span
                >
              </td>
              <td class="hover-camera">
                <BaseButton class="justify-center align-center">
                  <template v-slot:icon>
                    <div>
                      <v-img
                        :width="28"
                        :aspect-ratio="28 / 20"
                        src="/src/assets/img/icons/camera.svg"
                      ></v-img>
                    </div>
                  </template>
                </BaseButton>
              </td>
            </tr>
          </tbody>
        </v-table>
      </div>
    </div>
    <div class="">
      <BaseSubmitButton
        size="x-large"
        color="primary"
        text="PROCEED"
        icon="mdi-greater-than"
        variant="elevated"
        rounded="xl"
        fontSize="text-22-bold"
        fontColor="text-white"
        iconSize="small"
      />
    </div>
  </div>
</template>
<script setup>
</script>
<style scoped>
.v-table > .v-table__wrapper > table > tbody > tr > td {
  padding: 10px 15px 10px 15px !important;
}
.hover-camera:hover{
  background-color: #050336;
  color: white;
}
</style>