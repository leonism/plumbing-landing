<script setup></script>

<template>
  <div class="hidden md:block bg-primary-500 text-white">
    <div
      class="max-w-7xl mx-auto px-4 md:px-8 py-1.5 text-sm flex items-center justify-between">
      <div class="text-black/70 flex items-center gap-6">
        <a
          href="tel:(123)456-7890"
          class="flex items-center gap-1 hover:text-white/90 transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          (123) 456-7890
        </a>
        <span class="hidden text-black/70 lg:inline-flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          24/7 Emergency Service
        </span>
      </div>
      <div class="text-black/70 flex items-center gap-4">
        <a
          href="#"
          class="hover:text-white/90 transition-colors">
          NYC License #123456
        </a>
      </div>
    </div>
  </div>
</template>
