import { defineComponent } from 'vue';
import { defineStore, storeToRefs } from 'pinia';

const useCounterStore = defineStore('counter', {
  state: () => ({
    value: 0,
  }),
  actions: {
    increment() {
      this.value += 1;
    },
    decrement() {
      this.value -= 1;
    },
    randomize() {
      this.value = Math.round(100 * Math.random());
    },
  },
  getters: {},
});

export { useCounterStore };
