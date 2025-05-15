<script setup>
// Assuming ButtonGroup is in the same ui folder
import ButtonGroup from "./ButtonGroup.vue";
// Import the new composable
import { useTheme } from "@/composables/useTheme";

// Use the composable to get theme state and setter
const { currentTheme, setTheme } = useTheme();

// No more onMounted or theme logic needed here, it's in the composable
</script>

<template>
  <ButtonGroup>
    <button
      @click="setTheme('light')"
      class="btn-toggle"
      :class="{ active: currentTheme === 'light' }"
      title="Light theme">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-4 h-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor">
        <circle
          cx="12"
          cy="12"
          r="4" />
        <path
          d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
      </svg>
    </button>
    <button
      @click="setTheme('dark')"
      class="btn-toggle"
      :class="{ active: currentTheme === 'dark' }"
      title="Dark theme">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-4 h-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor">
        <path
          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 9.003 0 008.354-5.646z" />
      </svg>
    </button>
    <button
      @click="setTheme('system')"
      class="btn-toggle"
      :class="{ active: currentTheme === 'system' }"
      title="System theme">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-4 h-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor">
        <rect
          x="2"
          y="3"
          width="20"
          height="14"
          rx="2"
          ry="2" />
        <path d="M8 21h8m-4-4v4" />
      </svg>
    </button>
  </ButtonGroup>
</template>
