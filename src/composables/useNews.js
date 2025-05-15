import { ref } from "vue";
import { fetchNews, fetchAllNews } from "@/utils/news.client";

export function useNews() {
  const posts = ref([]);
  const currentPost = ref(null);
  const isLoading = ref(false);
  const error = ref(null);

  async function loadAllPosts() {
    isLoading.value = true;
    error.value = null;
    try {
      posts.value = await fetchAllNews();
    } catch (e) {
      error.value = e.message;
      console.error("Error loading posts:", e);
    } finally {
      isLoading.value = false;
    }
  }

  async function loadPost(slug) {
    isLoading.value = true;
    error.value = null;
    try {
      currentPost.value = await fetchNews(slug);
    } catch (e) {
      error.value = e.message;
      console.error("Error loading post:", e);
    } finally {
      isLoading.value = false;
    }
  }

  return {
    posts,
    currentPost,
    isLoading,
    error,
    loadAllPosts,
    loadPost,
  };
}
