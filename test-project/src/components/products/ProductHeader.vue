<template>
  <div class="product-wrapper">
    <h1>Product list</h1>
    <div class="input-container">
      <input
        type="text"
        placeholder="Add Product"
        v-model="inputVal"
        @keyup.enter="addItemToList"
      />
      <button class="button" @click="addItemToList">Add</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const emit = defineEmits(["save-product"]);
const inputVal = ref("");

function addItemToList() {
  if (!inputVal.value) {
    return;
  }
  emit("save-product", inputVal.value);
  inputVal.value = "";
}
</script>

<style lang="scss" scoped>
.product-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  & h1 {
    font-weight: 900;
    font-size: 20px;
    white-space: nowrap;
    @media (max-width: 1200px) {
      font-size: calc(15px + (20 - 15) * ((100vw - 320px) / (1200 - 320)));
    }
  }
}

.input-container {
  display: flex;
  background: #212121;
  border-radius: 1rem;
  padding: 3px;
  gap: 0.3rem;
  & input {
    border-radius: 0.8rem 0 0 0.8rem;
    background: #fefefe;
    width: 100%;
    flex-basis: 75%;
    padding: 5px 15px;
    border: none;
    border: 1px solid transparent;
    color: #212121;
    transition: all 0.2s ease-in-out;
    @media (max-width: 500px) {
      border-radius: 0.8rem;
    }
    &:focus {
      border: 1px solid #fefefecc;
      outline: none;
    }
  }
  & button {
    flex-basis: 25%;
    padding: 20px;
    font-weight: 900;
    text-transform: uppercase;
    background: linear-gradient(90deg, #fc466b 0%, #3f5efb 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    transition: 0.3s;
    @media (max-width: 1200px) {
      padding: calc(10px + (20 - 10) * ((100vw - 320px) / (1200 - 320)));
    }
    &:hover {
      opacity: 0.5;
    }
  }
}
</style>
