import fs from "fs";
import path from "path";
import matter from "gray-matter";

const newsDir = path.resolve(__dirname, "../content/news");

export function getAllNews() {
  const files = fs.readdirSync(newsDir).filter((f) => f.endsWith(".md"));
  return files.map((filename) => {
    const filePath = path.join(newsDir, filename);
    const raw = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(raw);
    return {
      ...data,
      slug: data.slug || filename.replace(/\.md$/, ""),
      content,
    };
  });
}

export function getNewsBySlug(slug) {
  const filePath = path.join(newsDir, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return { ...data, slug, content };
}
