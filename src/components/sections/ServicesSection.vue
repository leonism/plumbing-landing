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
    <h2
      class="text-4xl md:text-5xl font-extrabold text-center mb-10 bg-gradient-to-r from-red-600 via-orange-500 to-red-700 bg-clip-text text-transparent drop-shadow-lg">
      Our Plumbing Services
    </h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
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
