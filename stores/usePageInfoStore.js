import { defineStore } from 'pinia';

export const usePageInfoStore = defineStore('pageInfo', {
  state: () => ({
    title: 'Nossa história de amor',
    subtitle: 'Cada momento especial que vivemos juntos',
    homeIcon: true,

    images: [],
    files: null,
  }),
  
  actions: {
    setUpdateField(field, value) {
      if (field in this) {
        this[field] = value;
      }
    },
  }
}); 