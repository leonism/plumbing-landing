<script setup>
import NewsCard from "@/components/news/NewsCard.vue";
import SkeletonLoader from "@/components/SkeletonLoader.vue";
import { RouterLink } from "vue-router";

const props = defineProps({
  newsPosts: {
    type: Array,
    required: true,
  },
  isLoading: {
    type: Boolean,
    default: false,
  },
  error: {
    type: [String, null],
    default: null,
  },
});
</script>

<template>
  <div>
    <div
      v-if="isLoading"
      class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <SkeletonLoader
        v-for="n in 4"
        :key="n" />
    </div>
    <div
      v-else-if="error"
      class="text-center text-red-500">
      {{ error }}
    </div>
    <div
      v-else-if="newsPosts && newsPosts.length > 0"
      class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <router-link
        v-for="post in newsPosts"
        :key="post.slug"
        :to="`/news/${post.slug}`"
        class="block hover:scale-[1.02] transition-transform">
        <NewsCard
          :title="post.title"
          :description="post.description"
          :image="post.image"
          :date="post.date"
          :author="post.author"
          :tags="post.tags"
          show-meta />
      </router-link>
    </div>
    <div
      v-else
      class="text-center text-neutral-500">
      No news posts found.
    </div>
  </div>
</template>
