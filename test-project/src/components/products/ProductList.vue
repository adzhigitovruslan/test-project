<template>
  <base-card>
    <div class="product-list">
      <transition
        v-if="!store.getters.getIsLoading"
        name="display"
        mode="out-in"
      >
        <p v-if="!getProductsList.length">There is no products yet.</p>
        <transition-group v-else name="product" tag="ul">
          <product-item
            v-for="product in getProductsList"
            :id="product.id"
            :key="product.id"
            :name="product.productName"
            :isChecked="product.isChecked"
            @remove-product="removeProduct"
            class="product-item"
          />
        </transition-group>
      </transition>
      <base-spinner v-else></base-spinner>
    </div>
  </base-card>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "vuex";
import ProductItem from "./ProductItem.vue";

const store = useStore();

const getProductsList = computed(() => {
  return store.getters.getProducts;
});

function removeProduct(id: string) {
  store.dispatch("removeProduct", id);
}
</script>

<style lang="scss" scoped>
.product-item {
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.4s ease;
  width: 100%;
  max-width: 500px;
}

.product-enter-from {
  opacity: 0;
  transform: translateY(30px);
}
.product-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.product-leave-active {
  position: absolute;
}

.display-enter-from,
.display-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.display-enter-active,
.display-leave-active {
  transition: 0.5s;
}
</style>
