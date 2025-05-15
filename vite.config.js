import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { fileURLToPath, URL } from "url";
import tailwindcss from "@tailwindcss/vite";
import { nodePolyfills } from "vite-plugin-node-polyfills"; // Import the plugin

export default defineConfig({
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  plugins: [
    tailwindcss(),
    vue(),
    nodePolyfills(), // Add the polyfills plugin here
  ],
  // Enable importing .md files with ?raw query
  assetsInclude: ["**/*.md"],
});
