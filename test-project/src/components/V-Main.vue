<template>
  <div class="container">
    <base-card>
      <product-header @save-product="saveToProduct" />
    </base-card>
    <product-list @remove-product="removeFromProduct" />
  </div>
</template>

<script setup lang="ts">
import ProductHeader from "@/components/products/ProductHeader.vue";
import ProductList from "@/components/products/ProductList.vue";
import { useStore } from "vuex";

const store = useStore();

function saveToProduct(product: string) {
  store.dispatch("saveToProduct", { productName: product, isChecked: false });
}
function removeFromProduct(index: string) {
  store.dispatch("removeFromProduct", index);
}
</script>

<style scoped>
.container {
  padding: 30px 15px;
  max-width: 500px;
  margin: 0 auto;
}
</style>
