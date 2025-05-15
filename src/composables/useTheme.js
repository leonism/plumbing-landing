import { ref, onMounted } from "vue";

export function useTheme() {
  const currentTheme = ref("system"); // 'light', 'dark', or 'system'

  function applyTheme(theme) {
    const isDarkMode =
      theme === "dark" ||
      (theme === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }

  function setTheme(theme) {
    currentTheme.value = theme;
    applyTheme(theme);
    localStorage.setItem("theme", theme);
  }

  onMounted(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      // Default to system theme if no saved preference
      setTheme("system");
    }

    // Listen for system theme changes if current theme is 'system'
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (e) => {
        if (currentTheme.value === "system") {
          applyTheme("system"); // Re-apply system theme based on new preference
        }
      });
  });

  return {
    currentTheme,
    setTheme,
  };
}