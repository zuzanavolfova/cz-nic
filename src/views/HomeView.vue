<script setup lang="ts">
import SideBar from '@/components/SideBar.vue';

const sidebarItems = [
  {
    label: "Registration",
    iconPath: "earth.svg"
  },

];
</script>

<template>
  <main class="main">
    <SideBar side-bar-title="APPLICATIONS">
      <div 
        v-for="(item, index) in sidebarItems" 
        :key="index" 
        class="side-bar__item"
      >
        <img :src="`/src/assets/icons/${item.iconPath}`" :alt="item.label">
        <span>{{ item.label }}</span>
      </div>
    </SideBar>
  </main>
</template>

<style lang="scss" scoped>
.main {
  display: flex;
  height: 100%;
}

.side-bar__item {
  height: 30px;
  padding: 3px 6px;
  color: var(--text-dark-grey);
  font-size: 14px;
  font-weight: bold;
  background-color: var(--orange-primary);
  display: flex;
  align-items: center;
  gap: 12px;
}
</style>