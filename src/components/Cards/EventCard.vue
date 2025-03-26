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
    const unregisteredDate = computed< string | undefined>(() =>  data.value.events.unregistered != null ? formatDate(data.value.events.unregistered.timestamp) : undefined);
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
                    <div class="event-card__content__row__title">Create date</div>
                    <div> {{ registeredDate }}</div>
                </div>
                <div  class="event-card__content__row">
                    <div class="event-card__content__row__title">Registrar</div>
                    <div class="event-card__content__row__text-blue"> {{ dataEvents.registered.registrar_handle }}</div>
                </div>
            </div>
            <div class="event-card__content__container">
                <div class="event-card__content__row">
                    <div class="event-card__content__row__title">Update date</div>
                    <div > {{ updateDate }}</div>
                </div>
                <div  class="event-card__content__row">
                    <div class="event-card__content__row__title">Registrar</div>
                    <div class="event-card__content__row__text-blue"> {{ dataEvents.updated.registrar_handle }}</div>
                </div>
            </div>
            <div class="event-card__content__container">
                <div class="event-card__content__row">
                    <div class="event-card__content__row__title">Transfer date</div>
                    <div > {{ transferDate }}</div>
                </div>
                <div class="event-card__content__row">
                    <div class="event-card__content__row__title">Registrar</div>
                    <div class="event-card__content__row__text-blue"> {{ dataEvents.transferred.registrar_handle }}</div>
                </div>
            </div>
            <div class="event-card__content__container">
                <div class="event-card__content__row">
                    <div class="event-card__content__row__title">Delete date</div>
                    <div v-if="unregisteredDate !== undefined" > {{ transferDate }}</div>
                </div>
            </div>
        </template>
    </Card>
</template>


<style lang="scss" scoped>
    @import "@/assets/styles/cards"; 
    .event-card {
        width: 100%;
        padding: 20px;
        background-color: var(--medium-background);
        &__title  {
            @include card-title
        };
        &__content {
            display: flex;
            flex-wrap: wrap;
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
    }
</style>