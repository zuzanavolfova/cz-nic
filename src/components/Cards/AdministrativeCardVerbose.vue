<script setup lang="ts">
//import vue functionality and components
import { defineProps, computed} from 'vue';
import { useStore } from './../../stores/main';
import Card from 'primevue/card';

//import types
import type { Contacts} from './../../types/interfaces';

const props = defineProps({
    title: {
        type: String,
        required: true
    },
    items: {
        type: String,
        required: true
    }
});
const store = useStore();

const dataItems =  computed<Contacts>(() => store.data[props.items]);

</script>

<template>
    <Card>
        <template #title>
            <div class="administrative-card-verbose__title">
                <h3>{{ title }}</h3>
            </div>
        </template>
        <template #content>
            <div class="administrative-card-verbose__container">
                <div v-for="(item, key) in dataItems" :key="key" class="administrative-card-verbose__row">
                    <span style="grid-area: title; font-weight: 600;"> {{ item.name }} </span>
                    <span style="grid-area: value; color: var(--blue-primary)"> {{ item.handle}} </span>
                </div>
            </div>
        </template>   
    </Card>
</template>
<style lang="scss" scoped>
    @import "@/assets/styles/cards"; 

    .administrative-card-verbose {
        &__title {
            @include card-title
        }
        &__row {
            @include card-row-no-icon
        }
    }    
</style>