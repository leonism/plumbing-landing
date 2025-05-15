<template>
  <!-- This div acts as a container for the buttons passed via the default slot -->
  <div
    class="inline-flex rounded-md shadow-sm border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800">
    <!-- The default slot will render the buttons provided by the parent component (ThemeToggle.vue) -->
    <slot></slot>
  </div>
</template>

<script setup>
// This component is designed to wrap a group of buttons
// It doesn't need specific props or logic unless you want to
// add shared behavior or styling based on props.

// If you wanted to handle options and emit events here,
// you would define props like:
// const props = defineProps({
//   options: {
//     type: Array,
//     required: true,
//   },
//   modelValue: {
//     type: [String, Number, Boolean, Object],
//     required: true,
//   },
// });
// const emit = defineEmits(['update:modelValue']);

// And the template would iterate over options and render buttons,
// emitting the update:modelValue event on click.
</script>

<style scoped>
:deep(.btn-toggle) {
  position: relative;
  padding: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  border-radius: 0.375rem;
  transition-property: color, background-color;
  transition-duration: 200ms;
}

:deep(.btn-toggle.active) {
  background-color: white;
  color: rgb(37 99 235);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

:deep(.btn-toggle:not(.active)) {
  color: rgb(75 85 99);
}

:deep(.btn-toggle:not(.active):hover) {
  color: rgb(37 99 235);
}

@media (prefers-color-scheme: dark) {
  :deep(.btn-toggle.active) {
    background-color: rgb(23 23 23);
    color: rgb(96 165 250);
  }

  :deep(.btn-toggle:not(.active)) {
    color: rgb(156 163 175);
  }

  :deep(.btn-toggle:not(.active):hover) {
    color: rgb(96 165 250);
  }
}
</style>
