<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  category: { type: String, required: true },
  size: { type: String, required: true },
  weight: { type: String, required: true }, // "regular" | "bold"
  text: { type: String, required: true },
});

/** 📌 Tailwind 클래스 자동 적용 */
const styleClass = computed(() => {
  const fontWeight = props.weight === "regular" ? "font-normal" : "font-bold";
  return `text-${props.category}-${props.size} ${fontWeight}`;
});
</script>

<template>
  <div class="p-3">
    <p :class="styleClass">{{ text }}</p>
  </div>
</template>
