<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import TopInfoBar from "./TopInfoBar.vue";
import MainNav from "./MainNav.vue";
import MobileMenu from "./MobileMenu.vue";

const route = useRoute();
const showMobile = ref(false);
const nav = [
  { label: "Home", to: "/" },
  { label: "News", to: "/news" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Contact", to: "/contact" },
  { label: "Location", to: "/location" },
];

function isCurrentRoute(path) {
  return route.path === path;
}

function toggleMobileMenu() {
  showMobile.value = !showMobile.value;
}

function closeMobileMenu() {
  showMobile.value = false;
}
</script>

<template>
  <header class="sticky top-0 z-40 w-full transition">
    <TopInfoBar />
    <MainNav
      :nav="nav"
      :is-current-route="isCurrentRoute"
      :show-mobile="showMobile"
      @toggle-mobile="toggleMobileMenu" />
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="transform -translate-y-2 opacity-0"
      enter-to-class="transform translate-y-0 opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="transform translate-y-0 opacity-100"
      leave-to-class="transform -translate-y-2 opacity-0">
      <MobileMenu
        v-if="showMobile"
        :nav="nav"
        :is-current-route="isCurrentRoute"
        @close="closeMobileMenu" />
    </transition>
  </header>
</template>
