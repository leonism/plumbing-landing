<template>
  <article
    class="group bg-white/80 dark:bg-neutral-900/80 rounded-2xl shadow-xl border border-neutral-100 dark:border-neutral-800 overflow-hidden flex flex-col hover:scale-[1.03] transition-transform duration-200 backdrop-blur-lg"
    v-bind="$attrs">
    <header class="relative">
      <img
        :src="image"
        :alt="title"
        class="w-full h-48 object-cover"
        loading="lazy" />
      <div class="absolute top-3 left-3 flex items-center gap-2">
        <PostTag
          v-if="tag"
          :tag="tag"
          :aria-label="`Post category: ${tag}`" />
      </div>
    </header>
    <div class="p-5 flex-1 flex flex-col">
      <h3
        class="font-display text-xl font-bold mb-2 text-primary-700 dark:text-primary-200 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
        {{ title }}
      </h3>
      <p class="text-neutral-600 dark:text-neutral-300 flex-1 line-clamp-3">
        {{ description }}
      </p>
      <footer
        v-if="showMeta"
        class="mt-4 flex items-center justify-between text-sm">
        <time
          :datetime="new Date(date).toISOString()"
          class="text-neutral-500">
          {{ formatDate(date) }}
        </time>
        <span
          v-if="author"
          class="text-primary-600 dark:text-primary-400">
          <span class="sr-only">Written by</span>
          {{ author }}
        </span>
      </footer>
    </div>
  </article>
</template>

<script setup>
import PostTag from "@/components/ui/PostTag.vue";
import { formatDate } from "@/utils/dateUtils";

defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  tag: {
    type: String,
    default: "",
  },
  date: {
    type: [Date, String],
    default: "",
  },
  author: {
    type: String,
    default: "",
  },
  showMeta: {
    type: Boolean,
    default: false,
  },
});
</script>
