/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        display: ["Inter", "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
      fontSize: {
        "clamp-title": "clamp(2rem, 5vw, 3.5rem)",
        "clamp-lead": "clamp(1rem, 3vw, 1.25rem)",
      },
      colors: {
        primary: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
          950: "#082f49",
        },
      },
    },
  },
  safelist: [
    "bg-primary-500",
    "bg-red-500",
    "bg-blue-500",
    "bg-green-500",
    "bg-purple-500",
    "bg-neutral-500",
    {
      pattern: /^(px|py|p|m|mx|my|mt|mb|ml|mr)-[0-9]+$/,
    },
  ],
  plugins: [require("@tailwindcss/typography")],
};
