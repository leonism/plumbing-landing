<template>
  <span
    class="px-3 py-1 rounded-full text-white text-xs font-semibold shadow flex items-center gap-1"
    :class="colorClass">
    <component
      v-if="icon"
      :is="icon"
      class="w-4 h-4" />
    {{ tag }}
  </span>
</template>

<script setup>
import {
  NewspaperIcon,
  WrenchIcon,
  BoltIcon,
  HomeIcon,
  ShieldCheckIcon,
} from "@heroicons/vue/24/outline";

const props = defineProps({
  tag: {
    type: String,
    required: true,
  },
});

const tagConfig = {
  News: { color: "bg-primary-500", icon: NewspaperIcon },
  Emergency: { color: "bg-red-500", icon: BoltIcon },
  Home: { color: "bg-blue-500", icon: HomeIcon },
  Tips: { color: "bg-green-500", icon: WrenchIcon },
  Trust: { color: "bg-purple-500", icon: ShieldCheckIcon },
};

const config = tagConfig[props.tag] || { color: "bg-neutral-500" };
const colorClass = config.color;
const icon = config.icon;
</script>
