<template>
  <div>
    <BaseTitle>
      <template v-slot:text> STORE FITTING | 9.1 </template>
    </BaseTitle>
    <BaseSubtitle class="mb-5">
      <template v-slot:text>  DURING THE FITTING OF YOUR CUSTOMER, <br/>
ENSURE TO RECORD ANY AND ALL FITTING<br/>
MODIFICATIONS THAT ARE NEEDED. THESE<br/>
WILL BE SAVED FOR FUTURE REPEAT ORDERS. </template>
    </BaseSubtitle>
    
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
    <div class="d-flex justify-center px-5 mb-5">
      <BaseSubmitButton
        block
        size="x-large"
        color="primary"
        text="SAVE & ALTER FIT | 9.2"
        icon="mdi-greater-than"
        variant="elevated"
        fontSize="text-18-bold"
        fontColor="text-white"
        iconSize="small"
        class="px-2"
      />
    </div>
    <div class="d-flex justify-center px-5">
      <BaseSubmitButton
        block
        size="x-large"
        color="primary-lighten-3"
        text="SAVE & DELIVER | 10.0"
        icon="mdi-greater-than"
        variant="elevated"
        fontSize="text-18-bold"
        fontColor="text-white"
        iconSize="small"
        class="px-2"
      />
    </div>
  </div>
</template>
<script setup></script>


