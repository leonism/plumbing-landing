<template>
  <section
    class="relative flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 py-16 gap-5 overflow-hidden">
    <!-- Headings -->
    <div
      class="flex-1 flex flex-col items-start md:items-start text-center md:text-left">
      <h1
        class="text-5xl lg:text-6xl/18 subpixel-antialiased font-bold leading-tight font-heading font-extrabold bg-gradient-to-r from-red-600 via-orange-500 to-red-700 dark:from-red-500 dark:via-orange-400 dark:to-red-600 bg-clip-text text-transparent drop-shadow-lg mb-2 leading-tight">
        Manhattan’s Premier Plumbing Pros
      </h1>
      <h2
        class="text-xl lg:text-xl/12 font-semibold mb-4 text-neutral-200 dark:text-neutral-300">
        Prompt. Professional. Powerful Solutions.
      </h2>
      <p class="text-lg text-neutral-300 dark:text-neutral-400 max-w-xl mb-8">
        Leaky pipes? Water heater trouble? We’re the pipe heroes NYC trusts.
        24/7 emergency response. No hassle. Just solid plumbing done right.
      </p>

      <!-- CTA Buttons -->
      <div class="flex flex-wrap justify-center md:justify-start gap-4 mb-6">
        <router-link
          to="/contact"
          class="inline-flex items-center gap-2 px-6 py-3 border-2 border-red-500 text-white rounded-full bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-600 shadow-xl hover:scale-105 transform transition-all duration-300 text-base sm:text-lg font-semibold">
          <i class="fa-solid fa-faucet-drip"></i> Book Now
        </router-link>
        <router-link
          to="/services"
          class="inline-flex items-center gap-2 px-6 py-3 border-2 border-blue-500 text-blue-600 dark:text-blue-300 rounded-full hover:bg-blue-50 dark:hover:bg-neutral-800 transition-all text-base sm:text-lg font-semibold">
          <i class="fa-solid fa-pipe-wrench"></i> Our Services
        </router-link>
      </div>

      <!-- Trust Indicators -->
      <div
        class="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-neutral-500 dark:text-neutral-400">
        <span class="inline-flex items-center gap-1">
          <i class="fa-solid fa-star text-yellow-400"></i> 4.9/5 Google Rated
        </span>
        <span class="inline-flex items-center gap-1">
          <i class="fa-solid fa-shield-heart text-blue-500"></i> Licensed &
          Insured
        </span>
      </div>
    </div>

    <!-- Image & Promo Badge -->
    <div class="flex-1 w-full flex justify-center items-center relative">
      <div class="relative w-full max-w-sm sm:max-w-md md:max-w-lg">
        <img
          src="/src/assets/images/hero.jpg"
          alt="Experienced plumber on the job"
          class="rounded-3xl shadow-2xl object-cover w-full border-4 border-white dark:border-neutral-900 bg-white/30 dark:bg-neutral-900/30 backdrop-blur-sm transition-all duration-300" />
        <div
          class="absolute -bottom-5 -right-5 bg-gradient-to-r from-yellow-300 to-yellow-500 text-black font-bold px-4 py-2 rounded-full text-sm shadow-lg z-20 whitespace-nowrap">
          Promo 20% Off – First Time Customers
        </div>
      </div>
    </div>
  </section>
</template>
