<script setup lang="ts">
//import vue functionality and components
import { defineProps, ref, onMounted, computed} from 'vue';
import { useStore } from './../../stores/main';
import Card from 'primevue/card';

//import types
import type { Contacts} from './../../types/interfaces';

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  item: {
    type: String,
    required: true
  },
  itemObject: {
    type: Boolean,
    required: false,
    default: false
  },
  itemPosition: {
    type: Number,
    required: false
  }
});
const store = useStore();

const dataItems =  computed(() => store.data);
const itemPath: Contacts = props.itemObject ? dataItems.value[props.item][props.itemPosition] : dataItems.value[props.item];

</script>

<template>
    <Card>
        <template #title>
            <div class="administrative-card__title">
                <h3>{{ title }}</h3>
            </div>
        </template>
        <template #content>
            <div class="administrative-card__container">
                <div class="administrative-card__row">
                    <span style="grid-area: title"> Handle: </span>
                    <span style="grid-area: value; color: var(--blue-primary)"> {{ itemPath.handle}} </span>
                </div>
                <div class="administrative-card__row">
                    <i v-if="itemPath.publish.organization" class="bi bi-eye-fill active"></i>
                    <i v-else class="bi bi-eye-slash-fill inactive"></i>
                    <span> Organization: </span>
                    <span> {{ itemPath.organization}} </span>
                </div>
                <div class="administrative-card__row">
                    <i v-if="itemPath.publish.name" class="bi bi-eye-fill active"></i>
                    <i v-else class="bi bi-eye-slash-fill inactive"></i>
                    <span> Name: </span>
                    <span> {{ itemPath.name}} </span>
                </div>
            </div>
        </template>   
    </Card>
</template>
<style lang="scss" scoped>
    .administrative-card {
        &__title {
            background-color: var(--dark-background);
            margin: -20px -20px 0 -20px;
            padding: 8px 18px;
            border-radius: 12px 12px 0 0 ;
        }
        &__row {
            display: grid;
            grid-template-columns: 20px 110px 170px;
            grid-template-areas: "icon title value";
            
        }
    }
    
    .active {
        color: var(--green-primary)
    }
    .inactive {
        color: var(--warning-color)
    }
</style>