import { defineStore } from 'pinia';

export const useObjectStore = defineStore('objects', {
  state: () => ({
    objects: [],
    x: 1,
  }),
  actions: {
    addObject() {
      console.log("addObject");
      this.objects.push({ position: [this.x++, 0, 0] });
    },
    removeObject() {
      console.log("removeObject");
      this.objects.pop();
      this.x--;
    },
  },
});