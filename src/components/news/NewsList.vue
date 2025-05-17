<script setup>
import NewsCard from "@/components/news/NewsCard.vue";
import SkeletonLoader from "@/components/common/SkeletonLoader.vue";
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
  <section
    aria-label="News posts list"
    role="region">
    <div
      v-if="isLoading"
      class="grid grid-cols-1 md:grid-cols-2 gap-8"
      aria-busy="true"
      aria-label="Loading news posts">
      <SkeletonLoader
        v-for="n in 4"
        :key="n"
        aria-hidden="true" />
    </div>
    <div
      v-else-if="error"
      class="text-center text-red-500 p-4 rounded-lg bg-red-50 dark:bg-red-900/10"
      role="alert"
      aria-live="polite">
      {{ error }}
    </div>
    <ul
      v-else-if="newsPosts && newsPosts.length > 0"
      class="grid grid-cols-1 md:grid-cols-2 gap-8 list-none p-0"
      aria-label="News posts">
      <li
        v-for="post in newsPosts"
        :key="post.slug">
        <router-link
          :to="`/news/${post.slug}`"
          class="block hover:scale-[1.02] transition-transform focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-neutral-900 rounded-lg"
          :aria-label="`Read more about ${post.title}`">
          <NewsCard
            :title="post.title"
            :description="post.description"
            :image="post.image"
            :date="post.date"
            :author="post.author"
            :tags="post.tags"
            show-meta />
        </router-link>
      </li>
    </ul>
    <p
      v-else
      class="text-center text-neutral-500 p-4"
      aria-live="polite">
      No news posts found.
    </p>
  </section>
</template>
