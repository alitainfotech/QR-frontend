<template>
  <div class="storageBox">
    <p class="text-center pb-4 text-18-medium"><slot name="title"></slot></p>
    <div style="opacity: 0.6">
      <slot name="productCombination"></slot>
    </div>
  </div>
</template>
<script setup>
</script>

<style scoped>
.storageBox {
  width: 100%;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 10px;
  padding: 15px;
}
</style>