<script setup lang="ts">
import { ref, computed } from "vue";
import { ChevronDown } from "lucide-vue-next";

type AccordionType = "filled" | "outlined";

const props = defineProps({
  items: {
    type: Array as () => { title: string; content: string }[],
    required: true,
    default: () => [],
  },
  type: { type: String as () => AccordionType, default: "filled" },
});

const emit = defineEmits(["onToggle"]);
const activeIndex = ref<number | null>(null);

const isActive = (index: number) => activeIndex.value === index;
const isFilledType = computed(() => props.type === "filled");

function toggle(index: number) {
  activeIndex.value = isActive(index) ? null : index;
  emit("onToggle", activeIndex.value);
}
</script>

<template>
  <div class="w-full max-w-2xl mx-auto border-b border-t border-gray-10">
    <div v-for="(item, index) in items" :key="index">
      <button
        class="w-full flex justify-between items-center px-5 py-4 text-left transition cursor-pointer rounded-t-lg"
        :class="[
          isActive(index) ? 'text-secondary font-bold' : 'font-bold text-gray-80',
          isFilledType && isActive(index) ? 'bg-light-secondary-5 mt-2' : '',
          !isFilledType && isActive(index) ? 'border-t rounded-t-none' : '',
        ]"
        @click="toggle(index)"
      >
        <span>{{ item.title }}</span>
        <ChevronDown
          class="w-5 h-5 transition-transform duration-200 ease-out"
          :class="isActive(index) ? 'rotate-180' : 'text-gray-50'"
        />
      </button>

      <div
        class="overflow-hidden transition-all duration-200 ease-out mb-2"
        :class="[
          isActive(index) ? 'max-h-[200px] opacity-100 px-5 py-4 overflow-y-auto scroll-smooth scrollbar-thin scrollbar-thumb-gray-30 scrollbar-track-gray-10' : 'max-h-0 opacity-0',
          isFilledType && isActive(index) ? 'bg-light-secondary-5 rounded-b-lg' : 'bg-white',
        ]"
      >
        <p class="text-gray-80">{{ item.content }}</p>
      </div>
    </div>
  </div>
</template>
