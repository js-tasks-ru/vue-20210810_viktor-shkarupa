<template>
  <div class="toasts">
    <ui-toast
      v-for="toast in toasts"
      :key="toast.id"
      :message="toast.message"
      :toast-type="toast.toastType"
      :icon="toast.icon"
    ></ui-toast>
  </div>
</template>

<script>
import UiToast from './UiToast';
export default {
  name: 'TheToaster',

  components: { UiToast },

  data() {
    return {
      toasts: [],
    };
  },

  methods: {
    success(message) {
      this.createToast(message, 'success', 'check-circle');
      this.removeToast();
    },

    error(message) {
      this.createToast(message, 'error', 'alert-circle');
      this.removeToast();
    },

    createToast(message, type, icon) {
      this.toasts.push({
        id: Date.now(),
        message: message,
        toastType: type,
        icon: icon,
      });
    },

    removeToast(time = 5000) {
      setTimeout(() => {
        this.toasts.shift();
      }, time);
    },
  },
};
</script>

<style scoped>
.toasts {
  position: fixed;
  bottom: 8px;
  right: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  white-space: pre-wrap;
  z-index: 999;
}

@media all and (min-width: 992px) {
  .toasts {
    bottom: 72px;
    right: 112px;
  }
}
</style>
