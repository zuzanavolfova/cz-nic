<script setup lang="ts">
import type { PropType } from 'vue';

const props = defineProps({
    close: {
      type: Function as PropType<() => void>,
      required: true
    }
});
</script>

<template>
    <button @click="close" class="close-btn">X</button>
</template>

<style scoped>
  .close-btn {
    font-size: 16px;
    background: transparent;
    border: none;
    cursor: pointer;
  }
</style>