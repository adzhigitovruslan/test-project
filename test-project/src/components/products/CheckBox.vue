<template>
  <label class="container">
    <input type="checkbox" :checked="modelValue" @change="isCheckboxTrue" />
    <svg viewBox="0 0 64 64" height="2em" width="2em">
      <path
        d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
        pathLength="575.0541381835938"
        class="path"
      ></path>
    </svg>
  </label>
</template>

<script setup lang="ts">
defineProps<{
  modelValue: boolean;
}>();

const emit = defineEmits(["update:modelValue"]);

function isCheckboxTrue(e: Event) {
  const checkbox = e.target as HTMLInputElement;

  emit("update:modelValue", checkbox.checked);
}
</script>

<style lang="scss" scoped>
.container {
  cursor: pointer;
  & input {
    display: none;
  }
  & svg {
    overflow: visible;
    width: 20px;
    @media (max-width: 1200px) {
      width: calc(15px + (20 - 15) * ((100vw - 320px) / (1200 - 320)));
    }
  }
}

.path {
  fill: none;
  stroke: white;
  stroke-width: 6;
  stroke-linecap: round;
  stroke-linejoin: round;
  transition: stroke-dasharray 0.5s ease, stroke-dashoffset 0.5s ease;
  stroke-dasharray: 241 9999999;
  stroke-dashoffset: 0;
}

.container input:checked ~ svg .path {
  stroke-dasharray: 70.5096664428711 9999999;
  stroke-dashoffset: -262.2723388671875;
}
</style>
