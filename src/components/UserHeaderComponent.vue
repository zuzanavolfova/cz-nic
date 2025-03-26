<script setup lang="ts">
import { ref, computed } from 'vue';
import { useStore } from './../stores/main';

import Menu from 'primevue/menu';
import LogInDialog from './Dialogs/LogInDialog.vue';

import { setDataInStore } from './../stores/setters';

import type { MenuItem } from 'primevue/menuitem';
import type { Ref } from 'vue';


const store = useStore();
const userName = computed<string>(() => store.user?.name);
const userRole = computed<string>(() => store.user?.role);

const logOut = () => {
  ['name', 'id', 'password', 'admin'].forEach(property => setDataInStore('user', property, null));
};

const items: Ref<MenuItem[]> = ref([
  { 
    label: () => `${userName.value}  ${userRole.value}`, 
    icon: 'pi pi-user', 
    command: () => console.log('TODO action redirect to user profile') 
  },
  { 
    label: 'Logout', 
    icon: 'pi pi-sign-out', 
    command: () => logOut()
  }
]);

const menu: Ref<null | {toggle: (event: MouseEvent) => void}> = ref(null);
const openUserMenu = (event: MouseEvent): void => {
  menu.value?.toggle(event);
};
</script>

<template>
  <div class="user-header">
    <button @click="openUserMenu" class="p-button user-header-button">
      <i class="bi bi-person-circle"></i>
      <span v-if="userName !== null">{{ userName }}</span>
      <span v-else>Log in</span>
    </button>
    <Menu v-if="userName !== null" ref="menu" :model="items" :popup="true" />
    <LogInDialog v-else></LogInDialog>
  </div>
</template>

<style scoped lang=scss>
.user-header-button {
    background-color: var(--blue-primary);
    border: none;
    color: white;
    display: flex;
    gap: 12px;
}
.user-header-button:active {
    background-color: var(--blue-primary); 
}
.p-button:not(:disabled):hover {
    background-color: var(--blue-primary); 
    border: none;
}
</style>
