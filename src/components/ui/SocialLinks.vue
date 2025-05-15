<script setup>
// You can define props here if the social links should be dynamic
// const props = defineProps({ links: Array });
</script>

<template>
  <div class="flex gap-4 text-neutral-500 dark:text-neutral-400">
    <a
      href="https://facebook.com"
      target="_blank"
      rel="noopener"
      class="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
      <span class="sr-only">Facebook</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="lucide lucide-facebook w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor">
        <path
          d="M17 2.1A2.1 2.1 0 0 1 19.1 4.2v15.6a2.1 2.1 0 0 1-2.1 2.1H6.9A2.1 2.1 0 0 1 4.8 19.8V4.2A2.1 2.1 0 0 1 6.9 2.1h10.2z" />
        <path d="M16 8h-2a2 2 0 0 0-2 2v2h4l-.5 3H12v7" />
      </svg>
    </a>
    <a
      href="https://instagram.com"
      target="_blank"
      rel="noopener"
      class="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
      <span class="sr-only">Instagram</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="lucide lucide-instagram w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor">
        <rect
          width="20"
          height="20"
          x="2"
          y="2"
          rx="5" />
        <circle
          cx="12"
          cy="12"
          r="5" />
        <path d="M17.5 6.5v.001" />
      </svg>
    </a>
    <a
      href="https://twitter.com"
      target="_blank"
      rel="noopener"
      class="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
      <span class="sr-only">Twitter</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="lucide lucide-twitter w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor">
        <path
          d="M22 4.01c-.77.35-1.6.59-2.47.7a4.15 4.15 0 0 0 1.82-2.3c-.8.47-1.7.8-2.65.98A4.13 4.13 0 0 0 12 8.13c0 .32.04.64.1.94C8.09 8.9 4.6 7.13 2.13 4.36c-.35.6-.55 1.3-.55 2.05 0 1.42.72 2.68 1.82 3.42-.67-.02-1.3-.2-1.85-.5v.05c0 1.98 1.41 3.63 3.28 4-.34.09-.7.14-1.07.14-.26 0-.5-.02-.74-.07.5 1.56 1.96 2.7 3.7 2.73A8.3 8.3 0 0 1 2 19.54c-.38 0-.75-.02-1.12-.07A11.7 11.7 0 0 0 7.29 21c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.36-.02-.54A8.18 8.18 0 0 0 22 4.01z" />
      </svg>
    </a>
  </div>
</template>
