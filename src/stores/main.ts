import { defineStore } from 'pinia'
import type { UserInfo } from '@/types/interfaces'
import { getData } from '@/stores/getters';

//get data to save to store
const data = await getData()

export const useStore = defineStore('dataStore', {
    state: () => ({
      user: {
        name: 'Guest',
        role: 'admin',
        id: 1
      } as UserInfo | null,
      data: data,
    }),
  });