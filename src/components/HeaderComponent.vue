<script setup lang="ts">
import UserHeaderComponent from './UserHeaderComponent.vue';

</script>

<template>
 <div class="header">
    <h1>Ferda</h1>
<UserHeaderComponent></UserHeaderComponent>



 </div>
</template>
<style scoped lang="scss">
    .header {
        background-color: var(--blue-primary);
        padding: 6px 8px;
        color: white
    }
</style>
