<template>
  <section :class="['mb-20 px-4 md:px-0', $attrs.class]">
    <h2
      class="clamp-title font-display font-bold text-primary-700 dark:text-primary-200 mb-10 text-center drop-shadow">
      <slot name="title"></slot>
    </h2>
    <slot></slot>
  </section>
</template>

<script setup>
defineProps({
  centered: {
    type: Boolean,
    default: false,
  },
});
</script>
