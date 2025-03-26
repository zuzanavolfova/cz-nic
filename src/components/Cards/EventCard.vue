<script setup lang="ts">
    //import vue functionality and components
    import { computed, inject } from 'vue';
    import Card from 'primevue/card';
    import { useStore } from './../../stores/main';

    //import types
    import { Events } from './../../types/interfaces';

    //import functionality
    import { formatDate } from './../../stores/formaters';
    
    const store = useStore();
    const data = computed(() => store.data);

    const registeredDate = computed< string | undefined>(() => formatDate(data.value.events.registered.timestamp));
    const updateDate = computed< string | undefined>(() => formatDate(data.value.events.updated.timestamp));
    const transferDate = computed< string | undefined>(() => formatDate(data.value.events.transferred.timestamp));
    const unregisteredDate = computed< string | undefined>(() => data.value.events.unregistered != null ? formatDate(data.value.events.unregistered.timestamp) : undefined);
    const dataEvents = computed<Events[]>(() => data.value.events);
</script>

<template>
    <Card>
        <template #title>
            <div class="event-card__title">
                <h3>Events:</h3>
            </div>
        </template>
        <template #content>
            <div class="event-card__content__container">
                <div class="event-card__content__row">
                    <span class="event-card__content__row__title">Create date</span>
                    <span> {{ registeredDate }}</span>
                </div>
                <div  class="event-card__content__row">
                    <span class="event-card__content__row__title">Registrar</span>
                    <span class="event-card__content__row__text-blue"> {{ dataEvents.registered.registrar_handle }}</span>
                </div>
            </div>
            <div class="event-card__content__container">
                <div class="event-card__content__row">
                    <span class="event-card__content__row__title">Update date</span>
                    <span> {{ updateDate }}</span>
                </div>
                <div  class="event-card__content__row">
                    <span class="event-card__content__row__title">Registrar</span>
                    <span class="event-card__content__row__text-blue"> {{ dataEvents.updated.registrar_handle }}</span>
                </div>
            </div>
            <div class="event-card__content__container">
                <div class="event-card__content__row">
                    <span class="event-card__content__row__title">Transfer date</span>
                    <span> {{ transferDate }}</span>
                </div>
                <div class="event-card__content__row">
                    <span class="event-card__content__row__title">Registrar</span>
                    <span class="event-card__content__row__text-blue"> {{ dataEvents.transferred.registrar_handle }}</span>
                </div>
            </div>
            <div class="event-card__content__container">
                <div class="event-card__content__row">
                    <span class="event-card__content__row__title">Delete date</span>
                    <span v-if="unregisteredDate !== undefined" > {{ transferDate }}</span>
                </div>
            </div>
        </template>
    </Card>
</template>


<style lang="scss" scoped>
    @import "@/assets/styles/cards"; 
    .event-card {
        &__title  {
            @include card-title
        };
        &__content {
            &__container {
                display: grid;
                grid-template-columns: 2fr 2fr;
            }
            &__row {
                display: grid;
                grid-template-columns: 2fr 2fr;
                gap: 10px;
                margin-right:20px ;
                &__title {
                    font-weight: 600;
                }
                &__text-blue {
                    color: var(--blue-primary);
                }
            }
        }
    }
</style>