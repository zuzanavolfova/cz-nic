<script setup lang="ts">
import closeButton from '../widgets/CloseButton.vue';

const emit = defineEmits(['close']);
const close = ()=>{
    emit('close')
}

</script>
<template>
    <teleport to="body">
    <div class="login-dialog">
        <div class="login-dialog__header">
            <h2>Log in</h2>
            <closeButton :close="close" style="color: white;"/>
        </div>
        <div class="login-dialog__content"></div>
    </div>
</teleport>
</template>
<style scoped lang="scss">
    .login-dialog {
        position: absolute;
        top: 25%;
        left: 50%;
        z-index: 10000000;
        width: 400px;
        height: 300px;
        margin: auto auto;
        background-color: white;
        &__header {
            display: flex;
            justify-content: space-between;
            background-color: var(--blue-primary);
            padding: 6px 8px;
        }
    }
</style>