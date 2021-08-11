import { createApp } from './vendor/vue.esm-browser.js';

// Создайте Vue приложение
const VueCalculator = {
  data() {
    return {
      firstOperand: 0,
      secondOperand: 0,
      operator: '',
    };
  },
  computed: {
    calculationResult() {
      if (this.operator === 'sum') {
        return this.firstOperand + this.secondOperand;
      }

      if (this.operator === 'subtract') {
        return this.firstOperand - this.secondOperand;
      }

      if (this.operator === 'multiply') {
        return this.firstOperand * this.secondOperand;
      }

      if (this.operator === 'divide') {
        return this.firstOperand / this.secondOperand;
      }
    }
  }
};

createApp(VueCalculator).mount('#app');
