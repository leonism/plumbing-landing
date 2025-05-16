<template>
  <SectionContainer>
    <template #title>News & Updates</template>
    <!-- Use the new NewsList component -->
    <NewsList
      :news-posts="newsPosts"
      :is-loading="isLoading"
      :error="error" />
  </SectionContainer>
</template>

<script setup>
import SectionContainer from "@/components/layout/SectionContainer.vue";
import NewsList from "@/components/news/NewsList.vue"; // Import the new component
import { useNews } from "@/composables/useNews";
import { onMounted, watch } from "vue";

const { posts: newsPosts, loadAllPosts, isLoading, error } = useNews();

onMounted(() => {
  console.log("NewsView mounted");
  loadAllPosts();
});

// Watch newsPosts to see if it gets populated (for debugging)
watch(newsPosts, (newPosts) => {
  console.log("newsPosts updated in NewsView:", newPosts);
  if (newPosts && newPosts.length > 0) {
    console.log("News posts loaded successfully in NewsView");
  }
});
</script>
