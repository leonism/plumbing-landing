<script setup>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
</script>

<template>
  <div
    class="min-h-screen flex flex-col bg-neutral-50 dark:bg-neutral-900 transition-colors">
    <Header />
    <main class="flex-1">
      <slot />
    </main>
    <Footer />
  </div>
</template>
