<script setup>
// Import the new components
import SocialLinks from "@/components/ui/SocialLinks.vue";
import CopyrightInfo from "@/components/layout/CopyrightInfo.vue";
</script>

<template>
  <footer
    class="w-full bg-white/90 dark:bg-neutral-900/90 border-t border-neutral-200 dark:border-neutral-800 py-8 mt-16">
    <div
      class="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
      <div class="flex items-center gap-3">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2933/2933188.png"
          alt="Logo"
          class="h-8 w-8 rounded-full bg-primary-100" />
        <span
          class="font-display text-lg font-bold text-primary-700 dark:text-primary-300"
          >Manhattan Plumbing</span
        >
      </div>
      <!-- Use the new SocialLinks component -->
      <SocialLinks />
      <!-- Use the new CopyrightInfo component -->
      <CopyrightInfo />
    </div>
  </footer>
</template>
