<script setup lang="ts">
import { defineProps, ref, onMounted, computed, provide } from 'vue';
import ToggleSwitch from 'primevue/toggleswitch';
import Card from 'primevue/card';
import EventCard from './../components/Cards/EventCard.vue';
import AdministrativeCard from './../components/Cards/AdministrativeCard.vue';
import AdministrativeCardVerbose from './../components/Cards/AdministrativeCardVerbose.vue';



import { formatDate } from './../stores/formaters';
import { useStore } from './../stores/main';

import type { StateFlags } from './../types/interfaces';

defineProps({
  title: {
    type: String,
    required: true
  }
});

//data to be insert
const dataStore = useStore();
const data = computed(() => dataStore.data); 
const expiresAt = computed<string | undefined>(()=>formatDate(data.value?.expires_at));
const dataStateFlags = computed<StateFlags[]>(()=> data.value.state_flags.flags);

//switch to handle verbose view
const detailedInfo = ref<boolean>(false);
const showPassword = ref<boolean>(false);
const password = computed(() => dataStore.user.password)

</script>
<template>
    <div class="detail-layout">
        <h2> {{ title }}</h2>
        <div class="detail-layout__toggle">
            <ToggleSwitch v-model="detailedInfo" />
            <span class="detail-layout__toggle__title">Verbose view</span>
        </div>
        <div class="detail-layout__content">
            <div class="detail-layout__content__main">
                <Card>
                    <template #content>
                        <div class="detail-layout__content__main__container">
                            <div class="detail-layout__content__main__row grid-cols-1">
                                <div class="detail-layout__content__main__row__title">
                                    AuthInfo:
                                </div>
                                <button v-if="!showPassword" class="button" @click="showPassword = !showPassword">SHOW</button>
                                <span v-if="showPassword" @click="showPassword = !showPassword">{{ password }}</span>
                            </div>
                            <div class="detail-layout__content__main__row grid-cols-1">
                                    <div class="detail-layout__content__main__row__title">Expires at:</div>
                                    <div> {{ expiresAt }}</div>
                            </div>
                        </div>
                    </template>
                </Card>
                <EventCard/>
                <Card>
                    <template #title>
                        <div class="card__title">
                            <h3>State flags:</h3>
                        </div>
                    </template>

                    <template #content>
                        <div :style="{display: detailedInfo ? 'flex' : 'block'}">
                            <div>
                                <div v-for="(item, key) in dataStateFlags" :key="key">
                                    <div v-if="data.state_flags.groups[0].includes(item.name)">
                                    <i v-if="item.active" class="bi bi-check-circle-fill active"></i>
                                    <i v-if="!item.active && detailedInfo" class="bi bi-x-circle-fill inactive"></i>
                                    <span v-if="item.active || (!item.active && detailedInfo)" :style="{color: item.active ? 'var(--green-primary)' : 'var(--warning-color)', padding: '10px'}"> {{ item.description }} </span>
                                </div>
                                </div>
                            </div>
                            <div>
                                <div v-for="(item, key) in dataStateFlags" :key="key">
                                    <div v-if="data.state_flags.groups[1].includes(item.name)">
                                        <i v-if="item.active" class="bi bi-check-circle-fill active"></i>
                                        <i v-if="!item.active && detailedInfo" class="bi bi-x-circle-fill inactive"></i>
                                        <span v-if="item.active || (!item.active && detailedInfo)" :style="{color: item.active ? 'var(--green-primary)' : 'var(--warning-color)', padding: '10px'}"> {{ item.description }} </span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div v-for="(item, key) in dataStateFlags" :key="key">
                                    <div v-if="!data.state_flags.groups[0].includes(item.name) && !data.state_flags.groups[1].includes(item.name) ">
                                        <i v-if="item.active" class="bi bi-check-circle-fill active"></i>
                                        <i v-if="!item.active && detailedInfo" class="bi bi-x-circle-fill inactive"></i>
                                        <span v-if="item.active || (!item.active && detailedInfo)" :style="{color: item.active ? 'var(--green-primary)' : 'var(--warning-color)', padding: '10px'}"> {{ item.description }} </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </template>
                </Card>
            </div>
            <div class="detail-layout__content__info">
                <AdministrativeCard title="Owner:" item="owner" :item-object="false"></AdministrativeCard>
                <AdministrativeCardVerbose v-if="!detailedInfo" title="Administrative contacts:" items="administrative_contacts"></AdministrativeCardVerbose>
                <AdministrativeCard v-if="detailedInfo" title="Administrative contacts:" item="administrative_contacts" :item-position=0 :item-object="true"></AdministrativeCard>
                <AdministrativeCard v-if="detailedInfo" title="Administrative contacts:" item="administrative_contacts" :item-position=1 :item-object="true"></AdministrativeCard>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    @import "@/assets/styles/cards"; 
    
    .detail-layout {
        width: 100%;
        padding: 20px;
        background-color: var(--medium-background);
        &__toggle {
            display: flex;
            align-items: center;
            margin: 20px 0;
            &__title{
                color: var(--text-extra-light-grey);
                margin-left: 16px;
            }
        }
        &__content {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            &__main {
                flex-shrink: 0;
                width: 1200px;
                display: flex;
                flex-direction: column;
                gap: 20px;
                &__container {
                    display: grid;
                    grid-template-columns: 2fr 2fr;
                }
                &__row {
                    display: grid;
                    grid-template-columns: 2fr 2fr;
                    &__title {
                        font-weight: 600;
                    }
                    &__text-blue {
                        color: var(--blue-primary);
                    }
                }
            }
            &__info {
                flex-grow: 1;
                min-width: 400px;
                display: flex;
                flex-direction:column;
                gap: 20px
            }
        }
    } 
    .grid-cols-1 {
        grid-column: 1;
    }
    .active {
        color: var(--green-primary)
    }
    .inactive {
        color: var(--warning-color)
    }
    :deep(.p-toggleswitch) {
        &.p-toggleswitch-checked {
            .p-toggleswitch-slider {
                background-color: var(--blue-primary) !important;
            }
        }
    }

    button {
        background-color: var(--blue-primary);
        width: 70px;
        height: 26px;
        border-radius: 4px;
        justify-content: center;
        align-content: center;
        font-size: 13px;
        border: none;
        color: white;
        display: flex;
        gap: 12px;
    }
    .card__title {
        @include card-title
    }
</style>