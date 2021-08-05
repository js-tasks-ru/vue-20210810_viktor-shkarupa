import { createApp } from './vendor/vue.esm-browser.js';

// Создайте Vue приложение
const CounterButtonApp = {
  data() {
    return {
      counter: 0
    };
  }
};

createApp(CounterButtonApp).mount('#app');
