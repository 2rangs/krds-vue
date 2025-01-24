<script setup lang="ts">
import { ref } from "vue";

const props = defineProps({
  items: {
    type: Array,
    required: true,
    default: () => [],
  },
});

const emit = defineEmits(["onToggle"]);

const activeIndexes = ref<number[]>([]);

function toggle(index: number) {
  if (activeIndexes.value.includes(index)) {
    activeIndexes.value = activeIndexes.value.filter((i) => i !== index);
  } else {
    activeIndexes.value.push(index);
  }
  emit("onToggle", activeIndexes.value); // 열려 있는 항목 인덱스 emit
}

function isActive(index: number): boolean {
  return activeIndexes.value.includes(index);
}
</script>

<template>
  <div class="flex justify-center items-center">
    <div class="accordion w-full max-w-md space-y-4">
      <div
          v-for="(item, index) in items"
          :key="index"
          class="border-t border-gray-200"
      >
        <!-- Header -->
        <div
            class="p-4 cursor-pointer flex justify-between items-center transition-all duration-300"
            @click="toggle(index)"
        >
          <!-- 제목 -->
          <span class="font-medium text-gray-80 text-lg">
            {{ item.title }}
          </span>

          <!-- 아이콘 -->
          <span
              class="transition-transform transform text-gray-50"
              :class="{ 'rotate-180': isActive(index), 'text-gray-800': isActive(index) }"
          >
            ▼
          </span>
        </div>

        <!-- Content -->
        <div
            class="accordion-content overflow-hidden transition-all duration-300"
            :class="{
            'max-h-0 opacity-0': !isActive(index),
            ' opacity-100': isActive(index)
          }"
        >
          <div
              class="p-4 bg-gray-10 rounded-md"
          >
            {{ item.content }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
