<template>
  <section class="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto">
    <h2
      v-if="$slots.title"
      class="clamp-title font-display font-bold text-primary-700 dark:text-primary-200 mb-10 text-center drop-shadow">
      <slot name="title"></slot>
    </h2>
    <slot></slot>
  </section>
</template>

<script setup>
// No script needed for this simple container component
</script>