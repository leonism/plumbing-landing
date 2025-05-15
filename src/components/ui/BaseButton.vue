<template>
  <button
    :class="[
      'px-8 py-3 rounded-full font-semibold transition text-lg flex items-center gap-2',
      variant === 'primary'
        ? 'bg-primary-500 text-white shadow-xl hover:bg-primary-600'
        : 'border-2 border-primary-500 text-primary-700 dark:text-primary-200 hover:bg-primary-50 dark:hover:bg-neutral-800',
    ]"
    v-bind="$attrs">
    <slot name="icon"></slot>
    <slot></slot>
  </button>
</template>

<script setup>
defineProps({
  variant: {
    type: String,
    default: "primary",
    validator: (value) => ["primary", "outline"].includes(value),
  },
});
</script>
