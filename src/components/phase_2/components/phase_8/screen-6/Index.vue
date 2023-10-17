<template>
  <div>
    <BaseTitle>
      <template v-slot:text> ALTERATIONS | 8.2 </template>
    </BaseTitle>
    <BaseSubtitle class="mb-10">
      <template v-slot:text>
        SUBMIT THE START & FINISH DATE FOR <br />
        THE FITTING ALTERATIONS NEEDED
      </template>
    </BaseSubtitle>

    <div class="contentHeight">
      <div class="px-5 mb-10">
        <BaseCalendar placeholderText="Enter The Start Date" class="mb-4" />
        <BaseCalendar placeholderText="Enter The Completion Date" />
      </div>
    </div>
    <div class="d-flex justify-center px-5 mb-5">
      <BaseSubmitButton
        block
        size="x-large"
        color="primary"
        text="SUBMIT | 9.3"
        icon="mdi-greater-than"
        variant="elevated"
        fontSize="text-18-bold"
        fontColor="text-white"
        iconSize="small"
        class="px-2"
      />
    </div>
    <CommonInputDialog>
      <template v-slot:title> ALT 1 Location </template>
      <template v-slot:content>
        <div class="py-9 px-15">
          <BaseDialogInput placeholderText="Enter Value"/>
        </div>
        
      </template>
      <template v-slot:footer>
       <BaseFlatButton btnText="proceed" color="primary"/>
      </template>
    </CommonInputDialog>
  </div>
</template>
<script setup></script>


