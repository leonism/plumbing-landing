<template>
  <section
    class="relative flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 py-16 gap-10 overflow-hidden">
    <!-- Text Content -->
    <div
      class="flex-1 flex flex-col items-start md:items-start text-center md:text-left">
      <h1
        class="text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-red-600 via-orange-500 to-red-700 dark:from-red-500 dark:via-orange-400 dark:to-red-600 bg-clip-text text-transparent drop-shadow-lg mb-4 leading-tight">
        Manhattan’s Premier Plumbing Pros
      </h1>
      <h2
        class="text-xl lg:text-2xl font-semibold text-neutral-700 dark:text-neutral-300 mb-6">
        Prompt. Professional. Powerful Solutions.
      </h2>
      <p class="text-lg text-neutral-600 dark:text-neutral-400 max-w-xl mb-8">
        Leaky pipes? Water heater trouble? We’re the pipe heroes NYC trusts.
        24/7 emergency response. No hassle. Just solid plumbing done right.
      </p>

      <!-- CTA Buttons -->
      <div class="flex flex-wrap gap-4 mb-4">
        <router-link
          to="/contact"
          class="inline-flex items-center border-3 border-cyan-900 dark:border-neutral-900 gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-red-600 to-red-500 hover:from-cyan-500 hover:to-blue-600 shadow-xl hover:scale-105 transform transition-all duration-300 text-lg font-semibold">
          <i class="fa-solid fa-faucet-drip text-white"></i> Book Now
        </router-link>
        <router-link
          to="/services"
          class="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-blue-500 text-blue-600 dark:text-blue-300 hover:bg-blue-50 dark:hover:bg-neutral-800 transition-all text-lg font-semibold">
          <i class="fa-solid fa-pipe-wrench"></i> Our Services
        </router-link>
      </div>

      <!-- Trust Indicators -->
      <div
        class="flex flex-wrap gap-3 text-sm text-neutral-500 dark:text-neutral-400">
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
    <div class="flex-1 relative w-full flex justify-center items-center">
      <div class="relative">
        <img
          src="/src/assets/images/hero.jpg"
          alt="Experienced plumber on the job"
          class="rounded-3xl shadow-2xl object-cover w-full sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl border-4 border-white dark:border-neutral-900 bg-white/30 dark:bg-neutral-900/30 backdrop-blur-sm transition-all duration-300" />
        <div
          class="absolute -bottom-4 -right-4 bg-gradient-to-r from-yellow-300 to-yellow-500 text-black font-bold px-4 py-2 rounded-full text-sm shadow-lg z-20">
          Promo 20% Off – First Time Customers
        </div>
      </div>
    </div>

    <!-- Subtle Background Gradient -->
    <div
      class="absolute inset-0 -z-10 bg-gradient-to-br from-white via-blue-50 to-cyan-100 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900"></div>
  </section>
</template>
