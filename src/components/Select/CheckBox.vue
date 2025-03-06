<script setup lang="ts">
import { computed, ref, watch, defineEmits, defineProps } from "vue";

const props = defineProps({
  items: { type: Array as () => string[], default: () => [] }, // 체크박스 항목 배열
  modelValue: { type: Array as () => boolean[], required: true }, // 체크 상태 (배열)
  size: { type: String as () => "small" | "medium" | "large", default: "medium" } // 체크박스 크기
});

const emit = defineEmits(["update:modelValue"]);

// 전체 선택 체크박스 참조 (Vue에서는 `indeterminate`를 직접 조작해야 함)
const overallRef = ref<HTMLInputElement | null>(null);

// 개별 체크박스 상태 변환 (`true`, `false` 배열 유지)
const checkboxStates = computed(() => props.modelValue.map(v => !!v));

// 전체 선택 필요 여부
const showSelectAll = computed(() => props.items.length >= 2);

// `indeterminate` 및 `checked` 상태 업데이트
const updateOverallState = () => {
  if (overallRef.value) {
    const checkedCount = checkboxStates.value.filter(v => v).length;
    overallRef.value.indeterminate = checkedCount > 0 && checkedCount < props.items.length;
    overallRef.value.checked = checkedCount === props.items.length;
  }
};

// `watch`를 통해 개별 체크 상태가 바뀔 때마다 `indeterminate` 상태 업데이트
watch(checkboxStates, updateOverallState, { deep: true });

// 전체 선택 / 해제
const toggleSelectAll = () => {
  const newState = overallRef.value?.checked ? props.items.map(() => true) : props.items.map(() => false);
  emit("update:modelValue", newState);
};

// 개별 체크박스 토글
const toggleCheckbox = (index: number) => {
  const newState = [...checkboxStates.value];
  newState[index] = !newState[index];
  emit("update:modelValue", newState);
};
</script>

<template>
  <div class="krds-check-area">
    <!-- 전체 선택 체크박스 -->
    <div v-if="showSelectAll" class="krds-form-check" :class="size">
      <input ref="overallRef" type="checkbox" id="selectAll" @change="toggleSelectAll" />
      <label for="selectAll">전체 선택</label>
    </div>

    <!-- 개별 체크박스 -->
    <div v-for="(item, index) in items" :key="index" class="krds-form-check" :class="size">
      <input type="checkbox" :id="'chk_' + index" :checked="checkboxStates[index]" @change="toggleCheckbox(index)" />
      <label :for="'chk_' + index">{{ item }}</label>
    </div>
  </div>
</template>
