<script setup lang="ts">
    //import vue functionality and components
    import { computed, inject } from 'vue';
    import Card from 'primevue/card';

    import { Events } from './../../types/interfaces';

    //import functionality
    import { formatDate } from './../../stores/formaters';
    import { getDataTemp } from './../../stores/getters';
    
    const data = inject('dataItems');
    const dataEvents = computed<Events>(() => data.events);

    const registeredDate: string | undefined = formatDate(dataEvents.value.registered.timestamp);
    const updateDate: string | undefined = formatDate(dataEvents.value.updated.timestamp);
    const transferDate: string | undefined = formatDate(dataEvents.value.transfered.timestamp);
    const unregisteredDate: string | undefined =  dataEvents.value.unregistered != null ? formatDate(dataEvents.value.unregistered.timestamp) : undefined;
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
.event-card {
    width: 100%;
    padding: 20px;
    background-color: var(--medium-background);
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
.event-card__title {
    background-color: var(--dark-background);
    margin: -20px -20px 0 -20px;
    padding: 8px 18px;
    border-radius: 12px 12px 0 0 ;
}
</style>