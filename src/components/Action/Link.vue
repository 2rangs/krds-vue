<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  label: { type: String, required: true },
  href: { type: String, required: true },
  size: { type: String as () => "small" | "medium" | "large", default: "medium" },
  variant: { type: String as () => "basic" | "pure", default: "basic" }, // 기본 스타일
  external: { type: Boolean, default: false }, // 외부 링크 아이콘 여부
  underline: { type: Boolean, default: false }, // `<Link underline />` → `.underline`
  hiddenUnderline: { type: Boolean, default: false }, // `<Link hiddenUnderline />` → `.hidden-underline`
  target: { type: String, default: "_self" },
  title: { type: String, default: "" }
});

// 외부 링크 아이콘을 표시할지 결정
const showIcon = computed(() => props.external);
</script>

<template>
  <a
    :href="href"
    :class="['krds-btn', size, 'link', variant]"
    :target="target"
    :title="title"
    rel="noopener noreferrer"
  >
    <span :class="{ 'underline': underline, 'hidden-underline': hiddenUnderline }">
      {{ label }}
    </span>

    <!-- 외부 링크 아이콘 -->
    <i v-if="showIcon" class="svg-icon ico-go"></i>
  </a>
</template>
