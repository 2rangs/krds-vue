<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  size: { type: String, required: true },
});

const radiusClass = computed(() => `radius-${props.size}`);
</script>

<template>
  <div class="p-4 text-center">
    <div :class="`w-20 h-20 bg-gray-300 ${radiusClass}`"></div>
    <p class="text-sm text-gray-500 mt-2">
      Class: <code>{{ radiusClass }}</code>
    </p>
  </div>
</template>
