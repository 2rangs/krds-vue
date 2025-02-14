<script setup lang="ts">
import { ref } from "vue";
import { ChevronUp, ChevronDown } from "lucide-vue-next";

// Props 정의
const props = defineProps({
  items: {
    type: Array as () => { title: string; content: string }[],
    required: true,
    default: () => [],
  },
});

// Emits 정의
const emit = defineEmits(["onToggle"]);

// 활성화된 인덱스를 Set으로 관리 (빠른 조회 및 삭제)
const activeIndexes = ref(new Set<number>());

function toggle(index: number) {
  if (activeIndexes.value.has(index)) {
    activeIndexes.value.delete(index);
  } else {
    activeIndexes.value.add(index);
  }
  emit("onToggle", Array.from(activeIndexes.value)); // 배열 형태로 emit
}
</script>

<template>
  <div class="flex justify-center items-center">
    <div class="w-full max-w-md ">
      <div v-for="(item, index) in items" :key="index" class="border-b border-gray-30">
        <!-- Header -->
        <div
            class="p-4 cursor-pointer flex justify-between items-center transition-colors duration-300 hover:bg-gray-10"
            @click="toggle(index)"
        >
          <span class="font-medium text-gray-800 text-lg">
            {{ item.title }}
          </span>
          <component
              :is="activeIndexes.has(index) ? ChevronUp : ChevronDown"
              class="transition-transform duration-300"
              color="black"
          />
        </div>

        <!-- Content -->
        <div
            class="overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out"
            :class="{
            'max-h-0 opacity-0': !activeIndexes.has(index),
            'max-h-40 opacity-100': activeIndexes.has(index)
          }"
        >
          <div class="p-3 bg-gray-5 ">
            {{ item.content }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
