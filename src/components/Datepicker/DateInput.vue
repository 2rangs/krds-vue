<template>
  <div class="relative w-full">
    <label class="block text-gray-800 font-medium mb-2">{{ label }}</label>
    <input
      type="text"
      :value="formattedDate"
      @input="updateDate"
      class="w-full border rounded-lg px-4 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-50"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps, defineEmits } from "vue";

const props = defineProps({
  modelValue: [String, Array],
  label: { type: String, default: "날짜 선택" },
  range: { type: Boolean, default: false },
});

const emit = defineEmits(["update:modelValue"]);

const formattedDate = computed(() =>
  Array.isArray(props.modelValue) ? props.modelValue.join(" ~ ") : props.modelValue
);

const updateDate = (event: Event) => {
  const target = event.target as HTMLInputElement;
  if (props.range) {
    emit("update:modelValue", target.value.split(" ~ "));
  } else {
    emit("update:modelValue", target.value);
  }
};
</script>
