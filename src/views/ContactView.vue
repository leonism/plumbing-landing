<template>
  <section
    class="max-w-2xl mx-auto mt-16 mb-24 px-4 py-10 bg-white/80 dark:bg-neutral-900/80 rounded-2xl shadow-xl border border-neutral-100 dark:border-neutral-800">
    <h1
      class="clamp-title font-display font-bold text-primary-700 dark:text-primary-200 mb-6 text-center">
      Contact Us
    </h1>
    <p class="text-neutral-600 dark:text-neutral-300 mb-8 text-center">
      Have a question or need plumbing help? Fill out the form below and our
      team will get back to you ASAP!
    </p>
    <form class="flex flex-col gap-6">
      <div class="flex flex-col gap-2">
        <label
          for="name"
          class="font-semibold text-neutral-700 dark:text-neutral-200"
          >Name</label
        >
        <input
          id="name"
          type="text"
          class="rounded-lg border border-neutral-300 dark:border-neutral-700 px-4 py-3 bg-white dark:bg-neutral-800 focus:ring-2 focus:ring-primary-500 outline-none transition"
          placeholder="Your Name"
          required />
      </div>
      <div class="flex flex-col gap-2">
        <label
          for="email"
          class="font-semibold text-neutral-700 dark:text-neutral-200"
          >Email</label
        >
        <input
          id="email"
          type="email"
          class="rounded-lg border border-neutral-300 dark:border-neutral-700 px-4 py-3 bg-white dark:bg-neutral-800 focus:ring-2 focus:ring-primary-500 outline-none transition"
          placeholder="you@email.com"
          required />
      </div>
      <div class="flex flex-col gap-2">
        <label
          for="message"
          class="font-semibold text-neutral-700 dark:text-neutral-200"
          >Message</label
        >
        <textarea
          id="message"
          rows="5"
          class="rounded-lg border border-neutral-300 dark:border-neutral-700 px-4 py-3 bg-white dark:bg-neutral-800 focus:ring-2 focus:ring-primary-500 outline-none transition"
          placeholder="How can we help you?"
          required></textarea>
      </div>
      <button
        type="submit"
        class="mt-2 px-8 py-3 rounded-full bg-primary-500 text-white font-semibold shadow-xl hover:bg-primary-600 transition text-lg flex items-center gap-2 justify-center">
        <!-- Lucide send icon -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="lucide lucide-send w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <line
            x1="22"
            x2="11"
            y1="2"
            y2="13" />
          <polygon points="22 2 15 22 11 13 2 9 22 2" />
        </svg>
        Send Message
      </button>
      <div class="text-xs text-neutral-400 text-center mt-2">
        This is a demo form. For real inquiries, please call or email us
        directly.
      </div>
    </form>
  </section>
</template>

<script setup></script>
