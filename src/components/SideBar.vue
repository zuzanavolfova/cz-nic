<script setup lang="ts">
import { defineProps } from 'vue';

defineProps({
  sideBarTitle: {
    type: String,
    required: true
  }
});
</script>

<template>
  <div class="side-bar">
    <div class="side-bar__title">{{ sideBarTitle }}</div>
    <div class="side-bar__content">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
.side-bar {
  display: flex;
  flex-direction: column;
  width: 160px;
  height: 100vh;
  background-color: white;
  color: var(--text-light-grey);
  border-right: 1px solid rgb(196, 195, 195);
  
  &__title {
    font-size: 18px;
    padding: 6px 8px;
  }
  
  &__content {
    display: flex;
    flex-direction: column;
  }
}

</style>