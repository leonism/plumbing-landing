<script setup>
import { useHead } from "@vueuse/head";
import { onMounted, watch } from "vue";
import MainLayout from "@/layouts/MainLayout.vue";
import { useNews } from "@/composables/useNews";
import { formatDate } from "@/utils/dateUtils";

const props = defineProps({ slug: String });
const { currentPost, isLoading, error, loadPost } = useNews();

watch(
  () => props.slug,
  (newSlug) => {
    if (newSlug) loadPost(newSlug);
  },
  { immediate: true }
);

watch(currentPost, (post) => {
  if (!post) return;

  useHead({
    title: post.frontmatter.title,
    meta: [
      { name: "description", content: post.frontmatter.description },
      { property: "og:title", content: post.frontmatter.title },
      { property: "og:description", content: post.frontmatter.description },
      {
        property: "og:image",
        content: post.frontmatter.ogImage || post.frontmatter.image,
      },
    ],
    script: [
      {
        type: "application/ld+json",
        children: JSON.stringify(post.frontmatter.jsonld || {}),
      },
    ],
  });
});
</script>

<template>
  <article
    v-if="currentPost"
    class="max-w-2xl mx-auto px-4">
    <header class="mb-8">
      <img
        :src="currentPost.frontmatter.image"
        :alt="currentPost.frontmatter.title"
        class="w-full h-64 object-cover rounded-2xl mb-6" />
      <h1
        class="text-4xl font-display font-bold text-primary-700 dark:text-primary-200 mb-4">
        {{ currentPost.frontmatter.title }}
      </h1>
      <div class="flex items-center gap-4 text-sm text-neutral-500">
        <time :datetime="currentPost.frontmatter.date">
          {{ formatDate(currentPost.frontmatter.date) }}
        </time>
        <span v-if="currentPost.frontmatter.author">
          By {{ currentPost.frontmatter.author }}
        </span>
      </div>
    </header>
    <div
      class="prose dark:prose-invert max-w-none"
      v-html="currentPost.content"></div>
  </article>
  <div
    v-else-if="isLoading"
    class="animate-pulse space-y-4">
    <div class="h-64 bg-neutral-200 dark:bg-neutral-800 rounded-2xl"></div>
    <div class="h-8 w-3/4 bg-neutral-200 dark:bg-neutral-800 rounded"></div>
    <div class="h-4 w-1/4 bg-neutral-200 dark:bg-neutral-800 rounded"></div>
    <div class="space-y-3">
      <div class="h-4 bg-neutral-200 dark:bg-neutral-800 rounded"></div>
      <div class="h-4 bg-neutral-200 dark:bg-neutral-800 rounded"></div>
      <div class="h-4 w-2/3 bg-neutral-200 dark:bg-neutral-800 rounded"></div>
    </div>
  </div>
  <div
    v-else-if="error"
    class="text-center text-red-500 py-8">
    {{ error }}
  </div>
</template>
