<script setup>
import HeroSection from "@/components/sections/HeroSection.vue";
import ServicesSection from "@/components/sections/ServicesSection.vue";
import NewsSection from "@/components/sections/NewsSection.vue";
import FloatingContactButton from "@/components/ui/FloatingContactButton.vue";

// Import necessary icons for the services data
import {
  WrenchScrewdriverIcon,
  FireIcon,
  ShieldCheckIcon,
} from "@heroicons/vue/24/outline";

import { ref, onMounted, watch } from "vue";
import { useNews } from "@/composables/useNews";

// Fetch news data using the composable
const {
  posts: newsPosts,
  loadAllPosts,
  isLoading: isNewsLoading,
  error: newsError,
} = useNews();

onMounted(() => {
  console.log("HomeView mounted");
  loadAllPosts();
});

// Watch newsPosts to see if it gets populated (for debugging)
watch(newsPosts, (newPosts) => {
  console.log("newsPosts updated in HomeView:", newPosts);
  if (newPosts && newPosts.length > 0) {
    console.log("News posts loaded successfully in HomeView");
  }
});

// Define services data
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

// Watch services to see if it's populated (for debugging)
watch(
  services,
  (newServices) => {
    console.log("services updated in HomeView:", newServices);
    if (newServices && newServices.length > 0) {
      console.log("Services data is available in HomeView");
    }
  },
  { immediate: true }
); // Check immediately on mount
</script>

<template>
  <HeroSection />
  <ServicesSection :services="services" />
  <NewsSection
    :news-posts="newsPosts"
    :is-loading="isNewsLoading" />
  <FloatingContactButton />
</template>
