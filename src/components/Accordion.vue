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
  <div class="krds-accordion">
    <div v-for="(item, index) in items" class="accordion-item">
      <h5 class="accordion-header"><button type="button" id="accordionHeaderSample01" class="btn-accordion" aria-controls="accordionCollapseSample01">  {{ item.title }}</button></h5>
      <div id="accordionCollapseSample01" class="accordion-collapse collapse" aria-labelledby="accordionHeaderSample01">
        <div class="accordion-body">
          <!-- accordion contents -->
        <div class="p-3">
          {{ item.content }}
        </div>
          <!-- //accordion contents -->
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
