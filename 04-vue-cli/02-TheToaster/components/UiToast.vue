<template>
  <div class="toast" :class="classByToastType">
    <ui-icon class="toast__icon" :icon="icon" />
    <span>{{ message }}</span>
  </div>
</template>

<script>
import UiIcon from './UiIcon';
export default {
  name: 'UiToast',

  components: { UiIcon },

  props: {
    toastType: {
      type: String,
      default: 'success',
    },

    icon: String,

    message: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      toastTypeClasses: {
        success: 'toast_success',
        error: 'toast_error',
      },
    };
  },

  computed: {
    classByToastType() {
      return this.toastTypeClasses[this.toastType];
    },
  },
};
</script>

<style scoped>
@media all and (min-width: 992px) {
  .toast {
    display: flex;
    flex: 0 0 auto;
    flex-direction: row;
    align-items: center;
    padding: 16px;
    background: #ffffff;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
    border-radius: 4px;
    font-size: 18px;
    line-height: 28px;
    width: auto;
  }

  .toast + .toast {
    margin-top: 20px;
  }

  .toast__icon {
    margin-right: 12px;
  }

  .toast.toast_success {
    color: var(--green);
  }

  .toast.toast_error {
    color: var(--red);
  }
}
</style>
