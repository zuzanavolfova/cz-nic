import { defineStore } from 'pinia'
import type { UserInfo } from '@/types/interfaces'

export const useStore = defineStore('user', {
    state: () => ({
      user: {
        name: 'Guest',
        role: 'admin',
        id: 1
      } as UserInfo | null
    })
  });