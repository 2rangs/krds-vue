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
</script>

<template>
  <div :class="['krds-form-check', size]">
    <input
      type="radio"
      :id="id"
      :name="name"
      :value="value"
      v-model="modelValue"
      :disabled="disabled"
    />
    <label :for="id">{{ label }}</label>

    <!-- 부가 설명 -->
    <div v-if="description" class="krds-form-check-cnt">
      <p class="krds-form-check-p">{{ description }}</p>
    </div>
  </div>
</template>
