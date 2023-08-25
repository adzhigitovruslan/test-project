<template>
  <li class="product-item">
    <check-box v-model="checkedVal" />
    <p :class="{ checked: checkedVal }">Added product</p>
    <remove-button />
  </li>
</template>
<script setup lang="ts">
import { ref } from "vue";
import CheckBox from "./CheckBox.vue";
import RemoveButton from "./RemoveButton.vue";

const checkedVal = ref(false);
</script>

<style lang="scss" scoped>
li {
  margin: 1rem 0;
  border: 1px solid #424242;
  border-radius: 12px;
  padding: 1rem;
  & p {
    transition: text-decoration 0.2s;
  }
  & p.checked {
    text-decoration: line-through;
  }
}
</style>
