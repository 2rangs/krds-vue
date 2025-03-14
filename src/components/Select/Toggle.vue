<script setup lang="ts">
import { computed } from "vue";
import { Check, X } from "lucide-vue-next";

type Size = "small" | "medium" | "large";

const props = withDefaults(
  defineProps<{
    modelValue: boolean;
    label?: string;
    size?: Size;
    disabled?: boolean;
  }>(),
  {
    label: "Toggle",
    size: "medium",
    disabled: false,
  }
);

const emit = defineEmits(["update:modelValue"]);

const toggleSwitch = () => {
  if (!props.disabled) {
    emit("update:modelValue", !props.modelValue);
  }
};

// **토글 크기별 스타일 지정**
const sizeClass = computed(() => ({
  small: "w-10 h-5",
  medium: "w-12 h-6",
  large: "w-14 h-7",
}[props.size]));

// **핸들 크기 및 이동 거리 조정**
const handleSizeClass = computed(() => ({
  small: "w-4 h-4",
  medium: "w-5 h-5",
  large: "w-6 h-6",
}[props.size]));

const handleTranslateClass = computed(() => ({
  small: props.modelValue ? "translate-x-[21px]" : "translate-x-[0px]",
  medium: props.modelValue ? "translate-x-[25px]" : "translate-x-[1px]",
  large: props.modelValue ? "translate-x-[28px]" : "translate-x-[2px]",
}[props.size]));
</script>

<template>
  <div class="flex items-center gap-3">
    <!-- Toggle Button -->
    <div
      :class="[
        'relative flex items-center rounded-full cursor-pointer transition-all border',
        'focus:ring-2',
        sizeClass,
        props.modelValue ? 'bg-primary border-primary' : 'bg-gray-30 border-gray-40',
        props.disabled ? 'opacity-50 cursor-not-allowed' : ''
      ]"
      @click="toggleSwitch"
    >
      <div
        :class="[
          'absolute flex items-center justify-center bg-white rounded-full shadow-md transition-all',
          handleSizeClass,
          handleTranslateClass
        ]"
      >
        <Check v-if="props.modelValue" class="w-3 h-3 text-primary-50" />
        <X v-else class="w-3 h-3 text-gray-50" />
      </div>
    </div>

    <!-- Label -->
    <label :class="['font-medium', props.disabled ? 'text-gray-50' : 'text-gray-80']">
      {{ label }}
    </label>
  </div>
</template>

<style scoped>
/* 부드러운 애니메이션 */
.transition-all {
  transition: all 0.3s ease-in-out;
}
</style>
