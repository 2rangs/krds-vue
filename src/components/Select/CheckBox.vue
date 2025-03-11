<template>
  <div class="flex flex-col gap-3">
    <!-- ✅ 전체 선택 체크박스 -->
    <div v-if="items.length >= 2" class="flex items-center gap-2">
      <input
        ref="selectAllRef"
        type="checkbox"
        id="selectAll"
        v-model="selectAllChecked"
        @change="toggleSelectAll"
        :class="checkboxSize"
        class="cursor-pointer"
        :disabled="disabled"
      />
      <label
        for="selectAll"
        :class="[labelSize, disabled ? 'text-gray-400 cursor-not-allowed' : 'cursor-pointer']"
        class="font-medium"
      >
        전체 선택
      </label>
    </div>

    <!-- ✅ 개별 체크박스 (그리드 배치) -->
    <div class="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="flex items-center gap-2"
      >
        <input
          type="checkbox"
          :id="`chk_${index}`"
          v-model="modelValue[index]"
          :class="checkboxSize"
          class="cursor-pointer"
          :disabled="disabled"
        />
        <label
          :for="`chk_${index}`"
          :class="[labelSize, disabled ? 'text-gray-400 cursor-not-allowed pointer-events-none' : 'cursor-pointer']"
          class="font-medium truncate w-[140px] whitespace-nowrap text-ellipsis "
        >
          {{ item }}
        </label>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, computed } from "vue";

const props = defineProps({
  items: { type: Array as () => string[], default: () => [] },
  modelValue: { type: Array as () => boolean[], required: true },
  size: { type: String as () => "small" | "medium" | "large", default: "medium" },
  disabled: { type: Boolean, default: false },
  showSelectedItems: { type: Boolean, default: false } // ✅ 선택된 항목 표시 여부
});

const emit = defineEmits(["update:modelValue"]);
const selectAllRef = ref<HTMLInputElement | null>(null);
const indeterminateState = ref(false);

// ✅ 전체 선택 체크박스 상태 계산
const selectAllChecked = computed({
  get: () => props.modelValue.every(Boolean) && props.modelValue.length > 0,
  set: (value) => {
    if (!props.disabled) {
      emit("update:modelValue", props.items.map(() => value));
    }
  }
});

// ✅ 중간 상태 감지
watch(
  () => props.modelValue,
  (newVal) => {
    const checkedCount = newVal.filter(Boolean).length;
    indeterminateState.value = checkedCount > 0 && checkedCount < props.items.length;

    if (selectAllRef.value) {
      selectAllRef.value.indeterminate = indeterminateState.value;
    }
  },
  { deep: true, immediate: true }
);

// ✅ 전체 선택/해제
const toggleSelectAll = () => {
  if (!props.disabled) {
    emit("update:modelValue", props.items.map(() => selectAllChecked.value));
  }
};

// ✅ Tailwind 크기 클래스 매핑
const checkboxSize = computed(() => ({
  small: "w-[12px] h-[12px]",
  medium: "w-[16px] h-[16px]",
  large: "w-[20px] h-[20px]"
}[props.size]));

const labelSize = computed(() => ({
  small: "text-sm",
  medium: "text-base",
  large: "text-lg"
}[props.size]));
</script>
