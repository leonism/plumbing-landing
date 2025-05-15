<template>
  <section>
    <h1
      class="clamp-title font-display font-bold text-primary-700 dark:text-primary-300 mb-8 text-center">
      Our Plumbing Services
    </h1>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <Postcard
        v-for="service in services"
        :key="service.title"
        :title="service.title"
        :description="service.description"
        :image="service.image"
        :tag="service.tag"
        :icon="service.icon" />
    </div>
  </section>
</template>

<script setup>
import MainLayout from "@/layouts/MainLayout.vue";
import Postcard from "@/components/Postcard.vue";
import {
  WrenchScrewdriverIcon,
  FireIcon,
  ShieldCheckIcon,
} from "@heroicons/vue/24/outline";
import { ref } from "vue";

const services = ref([
  {
    title: "Emergency Repairs",
    description:
      "24/7 rapid response for leaks, clogs, and burst pipes. We fix it fast!",
    image:
      "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
    tag: "Emergency",
    icon: FireIcon,
  },
  {
    title: "Residential Plumbing",
    description:
      "From kitchens to bathrooms, we handle all home plumbing needs with care.",
    image:
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
    tag: "Home",
    icon: WrenchScrewdriverIcon,
  },
  {
    title: "Licensed & Insured",
    description:
      "Fully licensed, insured, and trusted by Manhattan residents for over 10 years.",
    image:
      "https://images.unsplash.com/photo-1520880867055-1e30d1cb001c?auto=format&fit=crop&w=600&q=80",
    tag: "Trust",
    icon: ShieldCheckIcon,
  },
]);
</script>

<style scoped></style>
