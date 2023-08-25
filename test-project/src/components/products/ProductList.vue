<template>
  <base-card>
    <div class="product-list">
      <ul>
        <product-item />
      </ul>
    </div>
  </base-card>
</template>

<script setup lang="ts">
import ProductItem from "./ProductItem.vue";
</script>

<style lang="scss" scoped>
.product-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
