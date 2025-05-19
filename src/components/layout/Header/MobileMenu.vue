<script setup>
import { RouterLink } from "vue-router";

const props = defineProps({
  nav: {
    type: Array,
    required: true,
  },
  isCurrentRoute: {
    type: Function,
    required: true,
  },
});

const emit = defineEmits(["close"]);
</script>

<template>
  <div
    class="md:hidden bg-white/90 dark:bg-neutral-900/95 border-t border-neutral-200 dark:border-neutral-800">
    <nav class="max-w-7xl mx-auto px-4 py-3">
      <ul class="flex flex-col gap-2 text-lg font-medium">
        <li
          v-for="item in nav"
          :key="item.to">
          <router-link
            :to="item.to"
            class="block px-3 py-2.5 rounded-lg hover:bg-primary-50 dark:hover:bg-neutral-800 transition-colors"
            :class="{
              'text-primary-600 dark:text-primary-400 bg-primary-50/50 dark:bg-neutral-800/50':
                isCurrentRoute(item.to),
              'text-neutral-700 dark:text-neutral-300': !isCurrentRoute(
                item.to
              ),
            }"
            @click="emit('close')">
            {{ item.label }}
          </router-link>
        </li>
      </ul>
      <div
        class="mt-4 border-t border-neutral-200 dark:border-neutral-800 pt-4">
        <a
          href="tel:(123)456-7890"
          class="flex items-center gap-2 px-3 py-2.5 text-primary-600 dark:text-primary-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          (123) 456-7890
        </a>
      </div>
    </nav>
  </div>
</template>
