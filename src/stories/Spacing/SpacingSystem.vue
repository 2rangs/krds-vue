<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  type: { type: String, required: true }, // gap 또는 padding
  size: { type: String, required: true }, // 1~12
});

/** Tailwind 클래스 자동 적용 */
const styleClass = computed(() => `${props.type}-${props.size}`);
</script>

<template>
  <div class="p-4 text-center border border-gray-300 rounded-md">
    <div :class="styleClass" class="w-32 h-8 bg-gray-200 mx-auto"></div>
    <p class="text-sm text-gray-500 mt-2">
      Class: <code>{{ styleClass }}</code>
    </p>
  </div>
</template>
