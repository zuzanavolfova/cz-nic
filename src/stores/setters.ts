import { useStore } from './main';

export const setDataInStore = (storeProperty: string, storeData: string, data: any): void => {
    const store = useStore();

    if (store[storeProperty]) {
        store[storeProperty][storeData] = data;
    } else {
        console.error(`Property ${storeProperty} does not exist in the store`);
    }
};