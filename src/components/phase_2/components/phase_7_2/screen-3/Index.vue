<template>
  <div>
    <BaseTitle>
      <template v-slot:text> SHIPMENT IN-PROGRESS | 7.2 </template>
    </BaseTitle>
    <BaseSubtitle class="mb-5">
      <template v-slot:text> PREVIEW YOUR SHIPMENT’S <br/>PROGRESS BELOW </template>
    </BaseSubtitle>

    <div class="contentHeight">
      <div class="contentHeight">
      <div class="pl-5 pr-5 pb-4">
        <v-table class="rounded-lg" style="table-layout: fixed">
          <tbody>
            <tr>
              <td style="vertical-align: top; width: 46px">
                <span class="text-secondary text-14-bold">01</span>
              </td>
              <td
                class="table--col-border-left table-col-border-right"
                style="min-width: calc(100% - 104px)"
              >
                <span class="text-primary text-14-bold text-uppercase"
                  >TEXT HERE TEXTHERE TEXT HERE TEXTHERE TEXT TEXT HERE</span
                >
              </td>
              <td class="hover-camera">
                <BaseCameraButton>
                  <template v-slot:icon>
                    <div>
                      <v-img                        
                        :width="18"
                        :aspect-ratio="18 / 14"
                        class="m-auto"
                        src="/src/assets/img/icons/camera.svg"
                      ></v-img>
                    </div>
                  </template>
                </BaseCameraButton>
              </td>
            </tr>
            <tr>
              <td class="px-4 pt-3" style="vertical-align: top; width: 46px">
                <span class="text-secondary text-14-bold">02</span>
              </td>
              <td
                class="table--col-border-left table-col-border-right"
                style="min-width: calc(100% - 104px)"
              >
                <span class="text-primary text-14-bold text-uppercase"
                  >TEXT HERE TEXTHERE TEXT HERE TEXTHERE TEXT TEXT HERE</span
                >
              </td>
              <td class="hover-camera">
                <BaseCameraButton>
                  <template v-slot:icon>
                    <div>
                      <v-img
                        :width="18"
                        :aspect-ratio="18 / 14"
                        class="m-auto"
                        src="/src/assets/img/icons/camera.svg"
                      ></v-img>
                    </div>
                  </template>
                </BaseCameraButton>
              </td>
            </tr>
            <tr>
              <td class="px-4 pt-3" style="vertical-align: top; width: 46px">
                <span class="text-secondary text-14-bold">03</span>
              </td>
              <td
                class="table--col-border-left table-col-border-right"
                style="min-width: calc(100% - 104px)"
              >
                <span class="text-primary text-14-bold text-uppercase"
                  >TEXT HERE TEXTHERE
                </span>
              </td>
              <td class="hover-camera">
                <BaseCameraButton>
                  <template v-slot:icon>
                    <div>
                      <v-img
                        :width="18"
                        :aspect-ratio="18 / 14"
                        class="m-auto"
                        src="/src/assets/img/icons/camera.svg"
                      ></v-img>
                    </div>
                  </template>
                </BaseCameraButton>
              </td>
            </tr>
            <tr>
              <td class="px-4 pt-3" style="vertical-align: top; width: 46px">
                <span class="text-secondary text-14-bold">04</span>
              </td>
              <td
                class="table--col-border-left table-col-border-right"
                style="min-width: calc(100% - 104px)"
              >
                <span class="text-primary text-14-bold text-uppercase"
                  >TEXT HERE TEXTHERE HERE TEXTHERE.</span
                >
              </td>
              <td class="hover-camera">
                <BaseCameraButton>
                  <template v-slot:icon>
                    <div>
                      <v-img
                        :width="18"
                        :aspect-ratio="18 / 14"
                        class="m-auto"
                        src="/src/assets/img/icons/camera.svg"
                      ></v-img>
                    </div>
                  </template>
                </BaseCameraButton>
              </td>
            </tr>
         
          </tbody>
        </v-table>
      </div>
    </div>
    </div>
    <!-- <v-divider :thickness="3" color="primary" class="mb-6"></v-divider> -->
    <div class="d-flex justify-center px-5 mb-3">
      <BaseSubmitButton
        block
        size="x-large"
        color="primary"
        text="SHIPMENT RECEIVED | 8.0"
        icon="mdi-greater-than"
        variant="elevated"
        fontSize="text-18-bold"
        fontColor="text-white"
        iconSize="small"
        class="px-2"
      />
    </div>
     <CommonDialog>
      <template v-slot:title>
        Are you Sure?
      </template>
      <template v-slot:content>
        <p class="text-18-medium text-secondary text-center">
         If you proceed forward, you will not be able to return to this page.
        </p>
        
      </template>
      <template v-slot:footer>
        <BaseFlatButton btnText="PROCEED" color="primary"/>
      </template>
    </CommonDialog>
  </div>
</template>
<script setup>
import { ref } from "vue";
const data = ref([
  {
    title: "Phase 1",
    pass: "15/15",
    fail: "0/15",
  },
  {
    title: "Phase 2",
    pass: "14/15",
    fail: "1/15",
  },
  {
    title: "Phase 3",
    pass: "14/15",
    fail: "1/15",
  },
  {
    title: "All Reports",
    pass: "13/15",
    fail: "2/15",
  },
]);
</script>