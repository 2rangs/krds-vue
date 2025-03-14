<script setup lang="ts">
import { computed } from "vue";
import { ExternalLink } from "lucide-vue-next";

const props = defineProps({
  label: { type: String, required: true },
  href: { type: String, required: true },
  size: { type: String as () => "small" | "medium" | "large", default: "medium" },
  variant: { type: String as () => "basic" | "pure", default: "basic" },
  external: Boolean,
  underline: Boolean,
  hiddenUnderline: Boolean,
  hoverUnderline: Boolean,
  target: String,
  title: String,
});

// 기본 클래스 설정
const classes = computed(() => [
  "inline-flex items-center gap-1 transition-colors duration-200",
  {
    small: "text-sm",
    medium: "text-base",
    large: "text-lg",
  }[props.size],
  {
    basic: "text-primary-50 hover:text-primary-60",
    pure: "text-gray-900 hover:text-primary-60",
  }[props.variant],
  props.underline && "underline",
  props.hiddenUnderline && "no-underline",
  props.hoverUnderline && "hover:underline",
]);
</script>

<template>
  <a
    :href="href"
    :target="target || '_self'"
    :title="title || label"
    rel="noopener noreferrer"
    :class="classes"
  >
    <span>{{ label }}</span>

    <!-- 외부 링크 아이콘 -->
    <ExternalLink v-if="external" class="w-4 h-4" />
  </a>
</template>
