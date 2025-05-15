/**
 * Sort posts by date in descending order (newest first)
 * @param {Object} a - First post
 * @param {Object} b - Second post
 * @returns {number}
 */
export function sortPostsByDate(a, b) {
  return new Date(b.frontmatter.date) - new Date(a.frontmatter.date);
}

/**
 * Format a date string to a localized format
 * @param {string|Date} date - Date to format
 * @returns {string}
 */
export function formatDate(date) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
