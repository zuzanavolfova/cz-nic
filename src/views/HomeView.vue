<script setup lang="ts">
import SideBar from '@/components/SideBar.vue';
import DetailLayout from './DetailLayout.vue';

const sidebarItems = [
  {
    label: "Registry",
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
    <DetailLayout title="neviditelna-univerzita.cz"></DetailLayout>
  </main>
</template>

<style lang="scss" scoped>
  .main {
    display: flex;
    height: 100%;
    margin-top: 60px;
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