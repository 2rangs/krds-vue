<script setup lang="ts">
import { computed, defineModel } from "vue";

const props = defineProps({
  label: { type: String, required: true }, // 라디오 버튼 라벨
  value: { type: String, required: true }, // 라디오 버튼 값
  name: { type: String, required: true }, // 그룹 이름
  disabled: { type: Boolean, default: false }, // 비활성화 여부
  description: { type: String, default: "" }, // 부가 설명 (선택적)
  size: { type: String as () => "small" | "medium" | "large", default: "medium" } // 사이즈 추가
});

// v-model 지원 (선택된 값 반환)
const modelValue = defineModel<string>();

// ID 자동 생성 (라벨과 input 연결)
const id = computed(() => `radio_${props.name}_${props.value}`);

// ✅ Tailwind 크기 클래스 매핑
const radioSize = computed(() => ({
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

<template>
  <div class="flex items-center gap-2">
    <input
      type="radio"
      :id="id"
      :name="name"
      :value="value"
      v-model="modelValue"
      :disabled="disabled"
      :class="[
        'border border-[var(--color-primary-50)] focus:ring-[var(--color-primary-50)] focus:ring-2',
        'checked:bg-[var(--color-primary-50)] checked:border-[var(--color-primary-50)]',
        radioSize
      ]"
    />
    <label :for="id" :class="labelSize" class="font-medium cursor-pointer">
      {{ label }}
    </label>

    <!-- ✅ 부가 설명 (있을 경우) -->
    <div v-if="description" class="ml-4">
      <p :class="[labelSize, 'text-gray-500']">{{ description }}</p>
    </div>
  </div>
</template>
