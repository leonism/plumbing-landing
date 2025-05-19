<template>
  <div
    class="group bg-white/80 dark:bg-neutral-900/80 rounded-2xl shadow-xl border border-neutral-100 dark:border-neutral-800 overflow-hidden flex flex-col hover:scale-[1.03] transition-transform duration-200">
    <div class="relative">
      <img
        :src="image"
        :alt="title"
        class="w-full h-48 object-cover" />
      <div class="absolute top-3 left-3 flex items-center gap-2">
        <span
          v-if="icon"
          class="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-200 shadow">
          <component
            :is="icon"
            class="w-5 h-5" />
        </span>
        <span
          v-if="tag"
          class="px-3 py-1 rounded-full bg-primary-500 text-white text-xs font-semibold shadow flex items-center gap-1">
          <svg
            v-if="tag === 'News'"
            xmlns="http://www.w3.org/2000/svg"
            class="lucide lucide-newspaper w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <rect
              width="20"
              height="16"
              x="2"
              y="4"
              rx="2" />
            <path d="M6 8h8M6 12h8m-8 4h8" />
          </svg>
          {{ tag }}
        </span>
      </div>
    </div>
    <div class="p-5 flex-1 flex flex-col">
      <h3
        class="font-display text-xl font-bold mb-2 text-primary-700 dark:text-primary-200">
        {{ title }}
      </h3>
      <p class="text-neutral-600 dark:text-neutral-300 flex-1">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  description: String,
  image: String,
  tag: String,
  icon: [Object, Function],
});
</script>
