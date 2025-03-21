<script setup lang="ts">
import { defineProps } from 'vue';

defineProps({
  title: {
    type: String,
    required: true
  }
});
</script>
<template>
    <div class="detail-layout">
        <h2> {{ title }}</h2>
        <div class="detail-layout__content">
            <div class="detail-layout__content__main"></div>
            <div class="detail-layout__content__info"></div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    .detail-layout {
        width: 100%;
        padding: 20px;
        background-color: var(--medium-background);
        &__content {
            display: flex;
            flex-wrap: wrap;
            &__main {
                flex-grow: 1;
                min-width: 800px;
            }
            &__info {
                flex-grow: 1;
            }
        }
    }
</style>