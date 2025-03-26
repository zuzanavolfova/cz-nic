<script setup lang="ts">
import { ref } from 'vue';
import UserHeaderComponent from './UserHeaderComponent.vue';

// menu open handler
const isMenuOpen = ref(false);
const openMenu = ():void => {
    isMenuOpen.value = !isMenuOpen.value
}

</script>

<template>
 <div class="header">
    <div class="header_left-side">
        <div class="hamburger-menu" @click="openMenu()">
            <div class="hamburger"></div>
            <div class="hamburger"></div>
            <div class="hamburger"></div>
        </div>
        <h1>Ferda</h1>
    </div>
    <UserHeaderComponent></UserHeaderComponent>
 </div>
</template>

<style scoped lang="scss">
    .header {
        background-color: var(--blue-primary);
        padding: 6px 8px;
        color: white;
        position:fixed;
        top:0;
        left: 0;
        z-index: 100;
        width: 100%;
        box-shadow: 0px 3px 10px  rgba(0,0,0,0.5);
        display: flex;
        align-items: center;
        justify-content: space-between;
        &_left-side {
            display: flex;
            gap: 20px
        }
    }

    .hamburger-menu {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-self: center;
        width: 30px;
        height: 20px;
        cursor: pointer;
    }

    .hamburger {
        height: 3px;
        width: 100%;
        background-color: white;
        border-radius: 5px;
    }
</style>
