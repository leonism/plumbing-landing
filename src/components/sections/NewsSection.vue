<script setup>
import NewsCard from "@/components/news/NewsCard.vue"; // Assuming NewsCard is in components/news
import SkeletonLoader from "@/components/SkeletonLoader.vue"; // Assuming SkeletonLoader is in components root
import { RouterLink } from "vue-router";
import { WrenchScrewdriverIcon } from "@heroicons/vue/24/outline"; // Assuming this icon is used for news

const props = defineProps({
  newsPosts: {
    type: Array,
    required: true,
  },
  isLoading: {
    type: Boolean,
    default: false,
  },
});

const newsIcon = WrenchScrewdriverIcon; // Or choose a more appropriate icon for news
</script>

<template>
  <section class="mb-20 px-4 md:px-0">
    <h2
      class="clamp-title font-display font-bold text-primary-700 dark:text-primary-200 mb-10 text-center drop-shadow">
      Latest News
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <template v-if="isLoading">
        <SkeletonLoader
          v-for="n in 2"
          :key="n" />
      </template>
      <template v-else>
        <router-link
          v-for="post in newsPosts.slice(0, 2)"
          :key="post.slug"
          :to="`/news/${post.slug}`"
          class="block hover:scale-[1.02] transition-transform">
          <NewsCard
            :title="post.title"
            :description="post.description"
            :image="post.image"
            tag="News"
            :icon="newsIcon" />
        </router-link>
      </template>
    </div>
    <div class="text-center mt-8">
      <router-link
        to="/news"
        class="text-primary-600 hover:underline font-semibold text-lg"
        >View all news</router-link
      >
    </div>
  </section>
</template>
