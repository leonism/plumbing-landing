<script setup>
// Define social links data with platform-specific colors
const socialLinks = [
  {
    name: "Facebook",
    href: "https://facebook.com",
    icon: "M17 2.1A2.1 2.1 0 0 1 19.1 4.2v15.6a2.1 2.1 0 0 1-2.1 2.1H6.9A2.1 2.1 0 0 1 4.8 19.8V4.2A2.1 2.1 0 0 1 6.9 2.1h10.2z M16 8h-2a2 2 0 0 0-2 2v2h4l-.5 3H12v7",
    color: "text-[#1877F2] dark:text-[#1877F2]",
    hoverBg: "bg-[#1877F2]/10 dark:bg-[#1877F2]/20",
  },
  {
    name: "Instagram",
    href: "https://instagram.com",
    icon: "M12 2.16a9.84 9.84 0 1 0 0 19.68 9.84 9.84 0 0 0 0-19.68zm0 1.8a8.04 8.04 0 1 1 0 16.08 8.04 8.04 0 0 1 0-16.08zm4.9 2.5a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4zm-4.9 1.2a4.8 4.8 0 1 0 0 9.6 4.8 4.8 0 0 0 0-9.6zm0 1.8a3 3 0 1 1 0 6 3 3 0 0 1 0-6z",
    color: "text-[#E4405F] dark:text-[#E4405F]",
    hoverBg: "bg-[#E4405F]/10 dark:bg-[#E4405F]/20",
  },
  {
    name: "Twitter",
    href: "https://twitter.com",
    icon: "M22 4.01c-.77.35-1.6.59-2.47.7a4.15 4.15 0 0 0 1.82-2.3c-.8.47-1.7.8-2.65.98A4.13 4.13 0 0 0 12 8.13c0 .32.04.64.1.94C8.09 8.9 4.6 7.13 2.13 4.36c-.35.6-.55 1.3-.55 2.05 0 1.42.72 2.68 1.82 3.42-.67-.02-1.3-.2-1.85-.5v.05c0 1.98 1.41 3.63 3.28 4-.34.09-.7.14-1.07.14-.26 0-.5-.02-.74-.07.5 1.56 1.96 2.7 3.7 2.73A8.3 8.3 0 0 1 2 19.54c-.38 0-.75-.02-1.12-.07A11.7 11.7 0 0 0 7.29 21c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.36-.02-.54A8.18 8.18 0 0 0 22 4.01z",
    color: "text-[#1DA1F2] dark:text-[#1DA1F2]",
    hoverBg: "bg-[#1DA1F2]/10 dark:bg-[#1DA1F2]/20",
  },
];
</script>

<template>
  <nav aria-label="Social media links">
    <ul class="flex gap-4">
      <li
        v-for="link in socialLinks"
        :key="link.name">
        <a
          :href="link.href"
          target="_blank"
          rel="noopener noreferrer"
          :aria-label="`Visit our ${link.name} page (opens in new tab)`"
          class="group relative p-3 block transition-all duration-300 ease-out">
          <!-- Platform-colored background circle -->
          <span
            class="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
            :class="link.hoverBg"></span>

          <!-- Platform-colored icon with 3D lift effect on hover -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6 transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-lg"
            :class="link.color"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="1.75">
            <path :d="link.icon" />
          </svg>

          <!-- Enhanced tooltip with platform color -->
          <span
            class="absolute left-1/2 -translate-x-1/2 bottom-full mb-3 px-3 py-1.5 text-xs font-semibold text-white rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-200 shadow-md"
            :style="{
              backgroundColor: link.color.includes('Facebook')
                ? '#1877F2'
                : link.color.includes('Instagram')
                ? '#E4405F'
                : '#1DA1F2',
            }">
            {{ link.name }}
            <span
              class="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent"
              :style="{
                borderTopColor: link.color.includes('Facebook')
                  ? '#1877F2'
                  : link.color.includes('Instagram')
                  ? '#E4405F'
                  : '#1DA1F2',
              }"></span>
          </span>
        </a>
      </li>
    </ul>
  </nav>
</template>
