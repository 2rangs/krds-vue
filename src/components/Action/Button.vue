<script setup lang="ts">
import { computed } from "vue";
import * as icons from "lucide-vue-next";

const props = defineProps({
  label: String,
  type: {
    type: String as const,
    default: "primary",
    validator: (val: string) => ["primary", "secondary", "tertiary"].includes(val),
  },
  size: {
    type: String as const,
    default: "medium",
    validator: (val: string) => ["xsmall", "small", "medium", "large", "xlarge"].includes(val),
  },
  icon: String,
  iconSize: { type: Number, default: 20 },
  iconColor: { type: String, default: "currentColor" },
  strokeWidth: { type: Number, default: 2 },
  iconPos: {
    type: String as const,
    default: "left",
    validator: (val: string) => ["left", "right"].includes(val),
  },
});

const isIconOnly = computed(() => !props.label && props.icon);

const selectedIcon = computed(() => {
  if (!props.icon) return null;
  const iconName = props.icon.replace(/(^\w|-\w)/g, (match) => match.replace("-", "").toUpperCase());
  return icons[iconName] || null;
});

const sizeClasses = computed(() => {
  return isIconOnly.value
    ? {
      xsmall: "p-1.5",
      small: "p-2",
      medium: "p-2.5",
      large: "p-3",
      xlarge: "p-3.5",
    }[props.size]
    : {
      xsmall: "px-2 py-1 text-xs",
      small: "px-3 py-1.5 text-sm",
      medium: "px-4 py-2 text-base",
      large: "px-5 py-2.5 text-lg",
      xlarge: "px-6 py-3 text-xl",
    }[props.size];
});

const typeClasses = computed(() =>
  ({
    primary: "bg-primary text-white hover:bg-primary-60 active:bg-primary-70 focus-visible:ring-2 focus-visible:ring-primary-40",
    secondary:
      "bg-primary-5 text-primary border border-primary hover:bg-primary-10 active:bg-primary-20 focus-visible:ring-2 focus-visible:ring-primary-40",
    tertiary:
      "bg-white text-gray-90 border border-gray-50 hover:bg-gray-10 active:bg-gray-20 focus-visible:ring-2 focus-visible:ring-gray-60",
  }[props.type])
);
</script>

<template>
  <button
    type="button"
    :class="[
      'krds-btn font-sans font-medium transition-colors duration-200 cursor-pointer',
      'inline-flex items-center justify-center focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed',
      typeClasses,
      sizeClasses,
      { 'rounded-full aspect-square': isIconOnly, 'gap-2 rounded-lg': !isIconOnly }
    ]"
  >
    <component
      v-if="selectedIcon"
      :is="selectedIcon"
      :size="iconSize"
      :color="iconColor"
      :stroke-width="strokeWidth"
    />
    <span v-if="!isIconOnly" class="whitespace-nowrap">{{ label }}</span>
  </button>
</template>
