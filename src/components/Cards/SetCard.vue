<script setup lang="ts">
import { defineProps, ref, onMounted, computed} from 'vue';
import { useStore } from '../../stores/main';
import Card from 'primevue/card';

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  item: {
    type: Object,
    required: true
  },

});
</script>
<template>
    <Card>
        <template #title>
            <div class="set-card__title">
                <h3>{{ title }}</h3>
            </div>
        </template>
        <template #content>
            <div class="set-card__container">
                <div class="set-card__row">
                    <span style="grid-area: title; font-weight: 600"> Handle: </span>
                    <span style="grid-area: value; color: var(--blue-primary)"> {{ item.handle}} </span>
                </div>
                <div class="set-card__row">
                    <span style="grid-area: title; font-weight: 600"> Registrar: </span>
                    <span style="grid-area: value; color: var(--blue-primary)"> {{ item.registrar}} </span>
                </div>
                <slot></slot>
            </div>
        </template>  
    </Card>
</template>
<style lang="scss" scoped>
     @import "@/assets/styles/cards"; 

    .set-card {
        &__title {
            @include card-title
        }
        &__row {
            @include card-row-no-icon
        }
}
</style>
