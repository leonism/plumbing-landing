<script setup>
import SocialLinks from "@/components/ui/SocialLinks.vue";
import CopyrightInfo from "./CopyrightInfo.vue";
</script>

<template>
  <footer
    class="w-full bg-white/90 dark:bg-neutral-900/90 border-t border-neutral-200/80 dark:border-neutral-800/70 py-12 mt-24 transition-colors duration-300">
    <div
      class="max-w-7xl mx-auto px-6 sm:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
      <!-- Logo Group with subtle hover animation -->
      <div
        class="group flex items-center gap-3 transition-transform duration-200 hover:scale-[1.02]">
        <img
          src="/src/assets/images/orange-logo.png"
          alt="Manhattan Plumbing Company Logo"
          width="32"
          height="32"
          class="h-9 w-9 px-1 py-1 rounded-full bg-transparent border-2 border-white transition-transform group-hover:scale-105"
          loading="lazy" />
        <span
          class="font-display text-lg font-bold text-primary-700 dark:text-primary-300 tracking-tight"
          >Manhattan Plumbing</span
        >
      </div>

      <!-- Social Links with more spacing -->
      <div class="order-first md:order-none">
        <SocialLinks />
      </div>

      <!-- Copyright with subtle fade-in animation -->
      <transition
        appear
        enter-active-class="transition-opacity duration-500 delay-100"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100">
        <CopyrightInfo class="text-sm text-neutral-600 dark:text-neutral-400" />
      </transition>
    </div>

    <!-- Decorative element -->
    <div
      class="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-300/40 dark:via-primary-700/20 to-transparent"></div>
  </footer>
</template>
