import matter from "gray-matter";
import MarkdownIt from "markdown-it";
import { sortPostsByDate } from "@/utils/dateUtils";

// Import all news files using Vite's glob import
const newsFiles = import.meta.glob("/src/content/news/*.md", {
  as: "raw",
  eager: true,
});
const markdownParser = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
});

/**
 * Fetch a single news post by slug
 * @param {string} slug - The post slug
 * @returns {Promise<{frontmatter: Object, html: string}>}
 */
export async function fetchNews(slug) {
  const filePath = `/src/content/news/${slug}.md`;
  const content = newsFiles[filePath];

  if (!content) {
    throw new Error(`News post not found: ${slug}`);
  }

  const { data, content: markdown } = matter(content);
  const finalSlug = data.slug || slug;

  return {
    frontmatter: {
      ...data,
      slug: finalSlug,
      date: new Date(data.date), // Ensure date is parsed
    },
    html: markdownParser.render(markdown),
  };
}

/**
 * Fetch all news posts
 * @returns {Promise<Array<{frontmatter: Object, html: string}>>}
 */
export async function fetchAllNews() {
  const slugs = Object.keys(newsFiles)
    .map((path) => {
      const match = path.match(/\/([^/]+)\.md$/);
      return match ? match[1] : null;
    })
    .filter(Boolean);

  const posts = await Promise.all(slugs.map(fetchNews));

  return posts
    .filter((post) => post.frontmatter?.title)
    .sort(sortPostsByDate)
    .map(({ frontmatter, html }) => ({
      ...frontmatter,
      html,
    }));
}
