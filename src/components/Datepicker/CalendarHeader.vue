<template>
  <div class="bg-secondary-5 flex justify-between items-center pl-5 pr-5 pt-5 border border-b-0 border-gray-40 rounded-t-lg">
    <!-- 이전 달 버튼 -->
    <button
      @click="changeMonth(-1)"
      class="rounded-full cursor-pointer hover:bg-gray-10 padding-3 transition"
    >
      <ChevronLeft :size="20" />
    </button>

    <!-- 년도 및 월 선택 -->
    <div class="flex gap-2">
      <Select
        v-model="selectedYear"
        :options="yearOptions"
        size="small"
      />
      <Select
        v-model="selectedMonth"
        :options="monthOptions"
        size="small"
      />
    </div>

    <!-- 다음 달 버튼 -->
    <button
      @click="changeMonth(1)"
      class="rounded-full cursor-pointer hover:bg-gray-10 padding-3 transition"
    >
      <ChevronRight :size="20" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, computed, ref, watch } from "vue";
import { ChevronLeft, ChevronRight } from "lucide-vue-next";
import Select from "../Select/Select.vue";

const props = defineProps({
  year: Number,
  month: Number,
});

const emit = defineEmits(["update:year", "update:month"]);

// 📌 `year`와 `month`를 String으로 변환하여 `Select`에 전달
const selectedYear = ref(String(props.year));
const selectedMonth = ref(String(props.month));

// 📌 연도 및 월 옵션 리스트
const yearOptions = computed(() => {
  const currentYear = new Date().getFullYear();
  return Array.from({ length: 200 }, (_, i) => {
    const year = currentYear - 100 + i;
    return { value: String(year), label: `${year}년` };
  });
});
const monthOptions = computed(() =>
  Array.from({ length: 12 }, (_, i) => ({
    value: String(i),
    label: `${i + 1}월`,
  }))
);

// 📌 `Select`에서 선택한 값을 Number로 변환하여 `emit` 실행
watch(selectedYear, (newValue) => emit("update:year", Number(newValue)));
watch(selectedMonth, (newValue) => emit("update:month", Number(newValue)));

// 📌 월 변경 (이전/다음 달 이동)
const changeMonth = (delta: number) => {
  let newMonth = Number(selectedMonth.value) + delta;
  if (newMonth < 0) {
    selectedMonth.value = "11";
    selectedYear.value = String(Number(selectedYear.value) - 1);
  } else if (newMonth > 11) {
    selectedMonth.value = "0";
    selectedYear.value = String(Number(selectedYear.value) + 1);
  } else {
    selectedMonth.value = String(newMonth);
  }
};
</script>
