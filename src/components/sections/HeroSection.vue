<script setup>
import { RouterLink } from "vue-router";
import {
  WrenchScrewdriverIcon,
  FireIcon,
  ShieldCheckIcon,
} from "@heroicons/vue/24/outline"; // Assuming these are used in the hero section

// Define props if any data needs to be passed down, e.g., dynamic text
// const props = defineProps({...});

// Define local data or computed properties if needed
// const localData = ref(...);

// Define local methods if needed
// function localMethod() {...}

// Note: Data fetching (like useNews) should remain in the parent HomeView
// and passed down as props if needed by the section components.
</script>

<template>
  <section
    class="relative flex flex-col md:flex-row items-center gap-10 mb-20 pt-8 md:pt-20 px-4 md:px-0">
    <div class="flex-1 flex flex-col gap-6 z-10">
      <h1
        class="clamp-title font-display font-extrabold text-primary-700 dark:text-primary-200 mb-2 drop-shadow-lg">
        Manhattan's #1 Plumbing Experts
      </h1>
      <p
        class="clamp-lead text-neutral-700 dark:text-neutral-200 mb-4 max-w-xl">
        Fast, reliable, and friendly plumbing for homes and businesses in
        Manhattan, NY. 24/7 emergency service. Satisfaction guaranteed. Book
        online or call us now!
      </p>
      <div class="flex gap-4 flex-wrap">
        <router-link
          to="/contact"
          class="px-8 py-3 rounded-full bg-primary-500 text-white font-semibold shadow-xl hover:bg-primary-600 transition text-lg flex items-center gap-2">
          <i class="fa-solid fa-phone"></i> Book Now
        </router-link>
        <router-link
          to="/services"
          class="px-8 py-3 rounded-full border-2 border-primary-500 text-primary-700 dark:text-primary-200 font-semibold hover:bg-primary-50 dark:hover:bg-neutral-800 transition text-lg flex items-center gap-2">
          <i class="fa-solid fa-wrench"></i> Our Services
        </router-link>
      </div>
      <div class="flex gap-3 mt-4">
        <span
          class="inline-flex items-center gap-1 text-neutral-500 dark:text-neutral-400 text-sm">
          <i class="fa-solid fa-star text-yellow-400"></i> 4.9/5 Google Rated
        </span>
        <span
          class="inline-flex items-center gap-1 text-neutral-500 dark:text-neutral-400 text-sm">
          <i class="fa-solid fa-shield-halved text-primary-500"></i> Licensed &
          Insured
        </span>
      </div>
    </div>
    <div class="flex-1 flex justify-center relative z-10">
      <img
        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
        alt="Plumber at work"
        class="rounded-3xl shadow-2xl w-full max-w-md object-cover border-4 border-white dark:border-neutral-900 bg-white/60 dark:bg-neutral-900/60 backdrop-blur-lg" />
      <div class="absolute -top-8 -right-8 hidden md:block">
        <img
          src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=200&q=80"
          alt="Plumbing tool"
          class="rounded-full w-24 h-24 border-4 border-primary-200 shadow-lg" />
      </div>
    </div>
    <div
      class="absolute inset-0 bg-gradient-to-br from-primary-50/80 via-white/60 to-primary-100/40 dark:from-neutral-900/80 dark:via-neutral-800/60 dark:to-neutral-900/40 pointer-events-none -z-10 rounded-3xl"></div>
  </section>
</template>
