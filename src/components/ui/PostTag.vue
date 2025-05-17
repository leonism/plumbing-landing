<template>
  <span
    class="px-3 py-1 rounded-full text-white text-xs font-semibold shadow-sm flex items-center gap-1.5 transition-colors"
    :class="[colorClass, hoverClass]"
    role="status">
    <component
      v-if="icon"
      :is="icon"
      class="w-3.5 h-3.5"
      :aria-hidden="true" />
    <span :class="{ 'sr-only': srOnly }">{{ tag }}</span>
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
  srOnly: {
    type: Boolean,
    default: false,
  },
});

const tagConfig = {
  News: {
    color: "bg-primary-500",
    hover: "hover:bg-primary-600",
    icon: NewspaperIcon,
  },
  Emergency: {
    color: "bg-red-500",
    hover: "hover:bg-red-600",
    icon: BoltIcon,
  },
  Home: {
    color: "bg-blue-500",
    hover: "hover:bg-blue-600",
    icon: HomeIcon,
  },
  Tips: {
    color: "bg-green-500",
    hover: "hover:bg-green-600",
    icon: WrenchIcon,
  },
  Trust: {
    color: "bg-purple-500",
    hover: "hover:bg-purple-600",
    icon: ShieldCheckIcon,
  },
};

const config = tagConfig[props.tag] || {
  color: "bg-neutral-500",
  hover: "hover:bg-neutral-600",
};

const colorClass = config.color;
const hoverClass = config.hover;
const icon = config.icon;
</script>
