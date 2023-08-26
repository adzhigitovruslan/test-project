<template>
  <li class="product-item">
    <check-box v-model="checkedVal" :id="id" />
    <p :class="{ checked: checkedVal }">{{ name }}</p>
    <remove-button @click="removeProduct(id)" />
  </li>
</template>
<script setup lang="ts">
import { ref } from "vue";
import CheckBox from "./CheckBox.vue";
import RemoveButton from "./RemoveButton.vue";

const props = defineProps<{
  name: string;
  id: string;
  isChecked: boolean;
}>();
const emit = defineEmits(["remove-product"]);
const checkedVal = ref(props.isChecked);

function removeProduct(id: string) {
  emit("remove-product", id);
}
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
