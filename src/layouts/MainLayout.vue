<script setup>
import Header from "@/components/layout/Header/Header.vue";
import Footer from "@/components/layout/Footer/Footer.vue";
</script>

<template>
  <Header />
  <main class="flex-1 max-w-screen-xl mx-auto max-w-7xl">
    <slot />
  </main>
  <Footer />
</template>
