<script setup>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
</script>

<template>
  <div
    class="flex flex-col min-h-screen transition-colors bg-white dark:bg-neutral-900">
    <Header />
    <main class="flex-1 mx-auto max-w-7xl">
      <slot />
    </main>
    <Footer />
  </div>
</template>
