import matter from "gray-matter";
import MarkdownIt from "markdown-it";

const md = new MarkdownIt();

// Import all news files using Vite's glob import
// Updated to use 'query' instead of deprecated 'as'
const newsFiles = import.meta.glob("/src/content/news/*.md", {
  query: "?raw", // Use ?raw query to get the file content as a string
  import: "default", // Import the default export (the raw string)
  eager: true,
});

export async function fetchNews(slug) {
  const filePath = `/src/content/news/${slug}.md`;
  const content = newsFiles[filePath];

  if (!content) {
    // Return null or throw error if post not found
    console.error(`News post not found: ${slug}`);
    return null;
  }

  const { data, content: markdown } = matter(content);

  // Render markdown to HTML
  const html = md.render(markdown);

  // Ensure we have a slug and a parsed date
  const finalSlug = data.slug || slug;
  const date = data.date ? new Date(data.date) : new Date();

  return {
    slug: finalSlug,
    title: data.title || "Untitled", // Provide a default title
    description: data.description || "",
    date: date,
    author: data.author || "Anonymous",
    image: data.image || null,
    ogImage: data.ogImage || data.image || null,
    jsonld: data.jsonld || null,
    tags: data.tags || [],
    content: html, // The rendered HTML content
    frontmatter: data, // Keep original frontmatter data
  };
}

export async function fetchAllNews() {
  const posts = [];
  for (const path in newsFiles) {
    // Extract slug from path (e.g., /src/content/news/hello-manhattan.md -> hello-manhattan)
    const slug = path.replace("/src/content/news/", "").replace(".md", "");
    const post = await fetchNews(slug);
    if (post && post.title) {
      // Only include posts that were found and have a title
      posts.push(post);
    }
  }

  // Sort posts by date, newest first
  posts.sort((a, b) => b.date.getTime() - a.date.getTime());

  return posts;
}
