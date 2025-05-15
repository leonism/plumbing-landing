<script setup>
import Postcard from "@/components/Postcard.vue"; // Assuming Postcard is in components root

const props = defineProps({
  services: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <section class="mb-20 px-4 md:px-0">
    <h2
      class="clamp-title font-display font-bold text-primary-700 dark:text-primary-200 mb-10 text-center drop-shadow">
      Our Plumbing Services
    </h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <Postcard
        v-for="service in services"
        :key="service.title"
        :title="service.title"
        :description="service.description"
        :image="service.image"
        :tag="service.tag"
        :icon="service.icon"
        class="hover:scale-[1.03] transition-transform duration-200" />
    </div>
  </section>
</template>
