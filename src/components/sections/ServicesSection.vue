<script setup>
import Postcard from "@/components/common/Postcard.vue";

const props = defineProps({
  services: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <section class="mb-20 px-4 md:px-0">
    <!-- Section Heading with Gradient Text -->
    <h2
      class="text-center text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-red-600 via-orange-500 to-red-700 dark:from-red-500 dark:via-orange-400 dark:to-red-600 bg-clip-text text-transparent drop-shadow-lg mb-4 leading-tight bg-clip-text text-transparent drop-shadow mb-10">
      Our Premium Plumbing Services
    </h2>

    <!-- Services Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <Postcard
        v-for="service in services"
        :key="service.title"
        :title="service.title"
        :description="service.description"
        :image="service.image"
        :tag="service.tag"
        :icon="service.icon"
        class="transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl" />
    </div>
  </section>
</template>
