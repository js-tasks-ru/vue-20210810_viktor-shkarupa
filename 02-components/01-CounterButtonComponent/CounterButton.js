import { defineComponent } from './vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'CounterButton',
  props: {
    count: {
      type: Number,
      default: 0,
    },
  },
  emits: ['update:count'],
  methods: {
    increaseCount(event) {
      this.$emit('update:count', ++event.target.value);
    },
  },

  // Компонент должен иметь входной параметр

  // Шаблон лучше держать максимально простым, а логику выносить в методы

  // Шаблон потребуется отредактировать
  template: `<button :value="count" @click="increaseCount" type="button">{{ count }}</button>`,
});
