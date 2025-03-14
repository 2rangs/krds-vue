<template>
  <div class="max-w-[350px]">
    <DateInput v-model="modelValue" :returnFormat="returnFormat" :range="range" />
    <Calendar v-model="modelValue" :returnFormat="returnFormat" :range="range" />
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineModel, watch } from "vue";
import DateInput from "./DateInput.vue";
import Calendar from "./Calendar.vue";

const props = defineProps({
  returnFormat: { type: String, default: "YYYY-MM-DD" },
  range: { type: Boolean, default: false },
});

// ✅ v-model 지원 (외부에서 값을 받을 수 있음)
const modelValue = defineModel<string | string[]>({ default: new Date().toISOString().split("T")[0] });

// ✅ range 값이 바뀌면 modelValue도 초기화 (단일/범위 맞춰서)
watch(
  () => props.range,
  (newRange) => {
    modelValue.value = newRange ? [] : new Date().toISOString().split("T")[0];
    console.log("📌 modelValue 초기화:", modelValue.value);
  }
);
</script>
