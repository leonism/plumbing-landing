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

const newsIcon = WrenchScrewdriverIcon;
</script>

<template>
  <section class="mb-20 px-4 md:px-0">
    <h2
      class="clamp-title font-display font-extrabold bg-gradient-to-r from-red-600 via-orange-500 to-red-700 dark:from-red-500 dark:via-orange-400 dark:to-red-600 bg-clip-text text-transparent drop-shadow-lg mb-4 leading-tight mb-10 text-center drop-shadow">
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
