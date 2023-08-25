<template>
  <div class="product-wrapper">
    <h1>Product list</h1>
    <div class="input-container">
      <input type="text" placeholder="Add Product" />
      <button class="button">Add</button>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

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
  background: #fefefecc;
  border-radius: 1rem;
  background: linear-gradient(135deg, #23272f 0%, #14161a 100%);
  box-shadow: 10px 10px 20px #0e1013, -10px -10px 40px #383e4b;
  padding: 3px;
  gap: 0.3rem;
  & input {
    border-radius: 0.8rem 0 0 0.8rem;
    background: #23272f;
    box-shadow: inset 5px 5px 10px #0e1013, inset -5px -5px 10px #383e4b,
      0px 0px 100px rgba(255, 212, 59, 0), 0px 0px 100px rgba(255, 102, 0, 0);
    width: 100%;
    flex-basis: 75%;
    padding: 5px 15px;
    border: none;
    border: 1px solid transparent;
    color: #fefefecc;
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
