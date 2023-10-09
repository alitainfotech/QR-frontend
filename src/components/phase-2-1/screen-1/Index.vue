<template>
  <div>
    <div class="px-3">
      <p class="text-primary text-18-bold text-uppercase text-center mb-2">
        PHASE 2.1 <br />
        QUALITY CONTROL CHECKPOINT
      </p>
      <p
        class="text-primary-lighten-3 text-14-medium text-uppercase text-center"
      >
        RECORD PHOTOGRAPHIC EVIDENCE <br />FOR ALL OF THE PRODUCT’S QUALITY
        CONTROL LOCATIONS
      </p>
    </div>
    <div class="contentHeight">
      <div class="px-2">
        <v-card
          variant="flat"
          color="grayLight"
          class="rounded-lg d-flex flex-column justify-center"
        >
          <div class="pa-3">
            <DescriptionCard class="mb-4">
              <template v-slot:row1Col1>
                <span
                  class="text-capitalize mb-1 text-secondary text-14-medium"
                >
                  Sub-Product: Fabric Code
                </span>
                <p class="text-capitalize text-primary text-16-bold">Length</p>
              </template>
              <template v-slot:row1Col2>
                <span
                  class="text-capitalize mb-1 text-secondary text-14-medium"
                >
                  Result :</span
                >
                <p class="text-capitalize text-primary text-16-bold">
                  79 (-1.5)
                </p>
              </template>
              <template v-slot:row2col1>
                <span class="text-capitalize mb-1 text-secondary text-14-medium"
                  >Body</span
                >
                <p class="text-capitalize text-primary text-16-bold">77.5</p>
              </template>
              <template v-slot:row2col2>
                <span class="text-capitalize mb-1 text-secondary text-14-medium"
                  >Pattern</span
                >
                <p class="text-capitalize text-primary text-16-bold">78.0</p>
              </template>
              <template v-slot:row2col3>
                <span class="text-capitalize mb-1 text-secondary text-14-medium"
                  >Finished</span
                >
                <p class="text-capitalize text-primary text-16-bold">78.0</p>
              </template>
              <template v-slot:row3col1>
                <p class="text-capitalize text-primary text-16-bold">
                  <span
                    class="text-capitalize mb-1 text-secondary text-14-medium"
                    >ALT 1 : </span
                  >78.0
                </p>
              </template>
              <template v-slot:row3col2>
                <p class="text-capitalize text-primary text-16-bold">
                  <span
                    class="text-capitalize mb-1 text-secondary text-14-medium"
                    >ALT 1 :
                  </span>
                  78.0
                </p>
              </template>
            </DescriptionCard>
            <DescriptionCard>
              <template v-slot:row1Col1>
                <span
                  class="text-capitalize mb-1 text-secondary text-14-medium"
                >
                  Sub-Product: Fabric Code
                </span>
                <p class="text-capitalize text-primary text-16-bold">Length</p>
              </template>
              <template v-slot:row1Col2>
                <span
                  class="text-capitalize mb-1 text-secondary text-14-medium"
                >
                  Result :</span
                >
                <p class="text-capitalize text-primary text-16-bold">
                  79 (-1.5)
                </p>
              </template>
              <template v-slot:row2col1>
                <span class="text-capitalize mb-1 text-secondary text-14-medium"
                  >Body</span
                >
                <p class="text-capitalize text-primary text-16-bold">77.5</p>
              </template>
              <template v-slot:row2col2>
                <span class="text-capitalize mb-1 text-secondary text-14-medium"
                  >Pattern</span
                >
                <p class="text-capitalize text-primary text-16-bold">78.0</p>
              </template>
              <template v-slot:row2col3>
                <span class="text-capitalize mb-1 text-secondary text-14-medium"
                  >Finished</span
                >
                <p class="text-capitalize text-primary text-16-bold">78.0</p>
              </template>
              <template v-slot:row3col1>
                <p class="text-capitalize text-primary text-16-bold">
                  <span
                    class="text-capitalize mb-1 text-secondary text-14-medium"
                    >ALT 1 : </span
                  >78.0
                </p>
              </template>
              <template v-slot:row3col2>
                <p class="text-capitalize text-primary text-16-bold">
                  <span
                    class="text-capitalize mb-1 text-secondary text-14-medium"
                    >ALT 1 :
                  </span>
                  78.0
                </p>
              </template>
            </DescriptionCard>
          </div>
        </v-card>
      </div>
    </div>
   <div class="d-flex justify-center px-5">
      <BaseSubmitButton
        block
        size="x-large"
        color="primary"
        text="PROCEED"
        icon="mdi-greater-than"
        variant="elevated"
        fontSize="text-20-bold"
        fontColor="text-white"
        iconSize="small"
      />
    </div>
  </div>
</template>
<script setup>
import DescriptionCard from "../common/DescriptionCard.vue";
</script>
