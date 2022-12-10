<template>
  <component :is="$attrs.tag !== 'a' ? 'router-link' : 'a'" class="link" v-bind="$attrs">
    <slot></slot>
  </component>
</template>

<script>
export default {
  name: 'UiLink',

  inheritAttrs: false,
};
</script>

<style scoped>
.link {
  color: var(--blue);
  text-decoration: none;
}

.link:hover {
  text-decoration: underline;
}
</style>
