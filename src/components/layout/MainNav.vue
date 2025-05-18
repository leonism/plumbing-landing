<script setup>
import { RouterLink } from "vue-router";
import ThemeToggle from "@/components/ui/ThemeToggle.vue";

const props = defineProps({
  nav: {
    type: Array,
    required: true,
  },
  isCurrentRoute: {
    type: Function,
    required: true,
  },
  showMobile: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits(["toggle-mobile"]);
</script>

<template>
  <nav
    class="bg-white/90 dark:bg-neutral-900/90 border-b border-neutral-200 dark:border-neutral-800">
    <div
      class="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 py-3">
      <!-- Logo -->
      <router-link
        to="/"
        class="flex items-center gap-3 group">
        <img
          src="/src/assets/images/logo.png"
          alt="Manhattan Plumbing Logo"
          class="h-9 w-9 rounded-full bg-white shadow transition-transform group-hover:scale-105" />
        <span
          class="font-display text-xl md:text-2xl text-black font-bold tracking-tight font-extrabold bg-gradient-to-r from-red-600 via-orange-500 to-red-700 dark:from-red-500 dark:via-orange-400 dark:to-red-600 bg-clip-text text-transparent drop-shadow-lg">
          Manhattan Plumbing
        </span>
      </router-link>

      <!-- Right side: Desktop Nav, Theme Toggle, Mobile Button -->
      <div class="flex items-center gap-6">
        <!-- Desktop Navigation -->
        <ul class="hidden md:flex items-center gap-6 text-base font-medium">
          <li
            v-for="item in nav"
            :key="item.to">
            <router-link
              :to="item.to"
              class="relative px-2 py-1.5 rounded transition-all hover:text-primary-600 dark:hover:text-primary-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400"
              :class="{
                'text-primary-600 dark:text-primary-400': isCurrentRoute(
                  item.to
                ),
                'text-neutral-700 dark:text-neutral-300': !isCurrentRoute(
                  item.to
                ),
              }">
              {{ item.label }}
              <span
                class="absolute inset-x-2 -bottom-px h-0.5 bg-primary-500 transform origin-left transition-transform"
                :class="{
                  'scale-x-100': isCurrentRoute(item.to),
                  'scale-x-0': !isCurrentRoute(item.to),
                }"></span>
            </router-link>
          </li>
        </ul>

        <!-- Theme Toggle (visible on all screen sizes) -->
        <ThemeToggle />

        <!-- Mobile Menu Button (hidden on desktop) -->
        <button
          @click="emit('toggle-mobile')"
          class="p-2 rounded hover:bg-primary-50 dark:hover:bg-neutral-800 transition-colors md:hidden"
          :aria-expanded="showMobile">
          <span class="sr-only">Menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6"
            :class="{ hidden: showMobile, block: !showMobile }"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6"
            :class="{ block: showMobile, hidden: !showMobile }"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  </nav>
</template>
