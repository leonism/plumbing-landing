<script setup>
const currentYear = new Date().getFullYear();
</script>

<template>
  <div
    class="text-sm text-neutral-500 dark:text-neutral-400 text-center md:text-right space-y-1 transition-colors duration-300"
    aria-label="Copyright and company information">
    <!-- Copyright with subtle animation -->
    <transition
      appear
      enter-active-class="transition-all duration-500 delay-75"
      enter-from-class="opacity-0 translate-y-1"
      enter-to-class="opacity-100 translate-y-0">
      <p class="font-medium text-neutral-600 dark:text-neutral-300">
        © {{ currentYear }} Manhattan Plumbing. All rights reserved.
      </p>
    </transition>

    <!-- Licensing info with separator dots -->
    <transition
      appear
      enter-active-class="transition-all duration-500 delay-150"
      enter-from-class="opacity-0 translate-y-1"
      enter-to-class="opacity-100 translate-y-0">
      <div
        class="flex flex-wrap items-center justify-center md:justify-end gap-x-2">
        <span class="inline-flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="w-3.5 h-3.5 mr-1 text-emerald-500">
            <path
              fill-rule="evenodd"
              d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clip-rule="evenodd" />
          </svg>
          Licensed
        </span>
        <span class="text-neutral-300 dark:text-neutral-600">•</span>
        <span class="inline-flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="w-3.5 h-3.5 mr-1 text-blue-500">
            <path
              fill-rule="evenodd"
              d="M14.5 10a4.5 4.5 0 004.284-5.882c-.105-.324-.51-.391-.752-.15L15.34 6.66a.454.454 0 01-.493.11 3.01 3.01 0 01-1.618-1.616.455.455 0 01.11-.494l2.694-2.692c.24-.241.174-.647-.15-.752a4.5 4.5 0 00-5.873 4.575c.055.873-.128 1.808-.8 2.368l-7.23 6.024a2.724 2.724 0 103.837 3.837l6.024-7.23c.56-.672 1.495-.855 2.368-.8.096.007.193.01.291.01zM5 16a1 1 0 11-2 0 1 1 0 012 0z"
              clip-rule="evenodd" />
            <path
              d="M14.5 11.5c.173 0 .345-.007.514-.022l3.754 3.754a2.5 2.5 0 01-3.536 3.536l-4.41-4.41 2.172-2.607c.052-.063.147-.138.342-.196a2.115 2.115 0 01.794-.075c.351.024.703.055 1.056.089z" />
          </svg>
          Insured
        </span>
        <span class="text-neutral-300 dark:text-neutral-600">•</span>
        <span class="inline-flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="w-3.5 h-3.5 mr-1 text-amber-500">
            <path
              fill-rule="evenodd"
              d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"
              clip-rule="evenodd" />
          </svg>
          Manhattan, NY
        </span>
      </div>
    </transition>
  </div>
</template>
