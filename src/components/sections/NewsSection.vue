<script setup>
import NewsCard from "@/components/news/NewsCard.vue";
import SkeletonLoader from "@/components/common/SkeletonLoader.vue";
import { RouterLink } from "vue-router";
import { WrenchScrewdriverIcon } from "@heroicons/vue/24/outline";

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
      class="text-4xl md:text-5xl font-extrabold text-center mb-10 bg-gradient-to-r from-red-600 via-orange-500 to-red-700 bg-clip-text text-transparent drop-shadow-lg">
      Latest Plumbing News
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
        class="text-primary-600 hover:underline font-semibold text-lg">
        View all news
      </router-link>
    </div>
  </section>
</template>
