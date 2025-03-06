<script setup lang="ts">
import { computed } from "vue";
import * as icons from "lucide-vue-next"; // 모든 아이콘을 가져옴

const props = defineProps({
  label: {
    type: String,
    required: false, // 라벨이 없을 수도 있음
    default: ""
  },
  type: {
    type: String as () => "primary" | "secondary" | "tertiary",
    default: "primary"
  },
  size: {
    type: String as () => "xsmall" | "small" | "medium" | "large" | "xlarge",
    default: "medium"
  },
  icon: {
    type: String
  },
  iconPos: {
    type: String as () => "left" | "right",
    default: "left"
  },
  iconSize: {
    type: Number,
    default: 20
  },
  iconColor: {
    type: String,
    default: "currentColor"
  },
  strokeWidth: {
    type: Number,
    default: 2
  }
});

// 케밥 케이스(`a-arrow-down`) → PascalCase(`AArrowDown`) 변환 함수
const toPascalCase = (str: string): string => {
  return str
    .split("-") // `-` 기준으로 나눔
    .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // 첫 글자 대문자로 변환
    .join(""); // 다시 합침
};

// 아이콘 이름을 PascalCase로 변환
const formattedIconName = computed(() => {
  if (!props.icon) return null;
  return toPascalCase(props.icon);
});

// 아이콘을 동적으로 가져옴
const selectedIcon = computed(() => formattedIconName.value ? icons[formattedIconName.value] : null);

// 버튼이 아이콘만 가지는지 확인
const isIconOnly = computed(() => !props.label && props.icon);
</script>

<template>
  <button
    type="button"
    :class="[
      'krds-btn',
      props.type,
      props.size,
      { 'icon-only': isIconOnly } // 아이콘만 있을 경우 특별한 스타일 적용
    ]"
  >
    <!-- 아이콘이 왼쪽 또는 아이콘만 있는 경우 -->
    <component
      :is="selectedIcon"
      v-if="selectedIcon && (iconPos === 'left' || isIconOnly)"
      :size="iconSize"
      :color="iconColor"
      :stroke-width="strokeWidth"
    />

    <!-- 버튼 라벨 (아이콘만 있는 경우 숨김) -->
    <span v-if="!isIconOnly">{{ label }}</span>

    <!-- 아이콘이 오른쪽에 있는 경우 -->
    <component
      :is="selectedIcon"
      v-if="selectedIcon && iconPos === 'right' && !isIconOnly"
      :size="iconSize"
      :color="iconColor"
      :stroke-width="strokeWidth"
    />
  </button>
</template>

<style scoped>
/* 아이콘만 있는 경우 스타일 */
.icon-only {
  padding: 8px; /* 동일한 패딩 적용 */
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  height: auto;
  border-radius: 999px;
}
</style>
