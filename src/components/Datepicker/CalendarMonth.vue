<template>
  <div class="px-4 py-2 border-l border-r border-gray-40 w-full bg-secondary-5">
    <div class="grid grid-cols-7 text-center mt-2 text-sm font-medium">
      <span v-for="day in days" :key="day">{{ day }}</span>
    </div>

    <div class="grid grid-cols-7 gap-y-1 text-center">
      <div
        v-for="date in calendarDays"
        :key="date.getTime()"
        class="relative flex items-center justify-center"
        :class="{
          'bg-primary-5': isInRange(date),
          'rounded-l-full': isStartDate(date) && !isEndDate(date),
          'rounded-r-full': isEndDate(date) && !isStartDate(date),
        }"
      >
        <button
          class="p-2 w-8 h-8 text-sm flex items-center justify-center cursor-pointer transition-all"
          :class="{
            'bg-secondary text-white rounded-full': isSelected(date),
            'text-red-500': !isPrevNextMonth(date) && date.getDay() === 0,
            'text-gray-400': isPrevNextMonth(date),
            'hover:bg-primary-5 rounded-full': !isSelected(date),
          }"
          @click="handleDateClick(date)"
        >
          {{ date.getDate() }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {defineProps, defineEmits, computed, watch} from "vue";
import { generateCalendar, isSameDate, formatDate } from "./utils.ts";

const props = defineProps({
  year: Number,
  month: Number,
  range: Boolean,
  returnFormat: { type: String, default: "YYYY-MM-DD" },
  modelValue: [String, Array],
});

const emit = defineEmits(["update:modelValue", "update:year", "update:month"]);

const days = ["일", "월", "화", "수", "목", "금", "토"];
const calendarDays = computed(() => generateCalendar(props.year, props.month));

const isPrevNextMonth = (date: Date) => date.getMonth() !== props.month;
const isSelected = (date: Date) =>
  Array.isArray(props.modelValue)
    ? props.modelValue.some((d) => isSameDate(new Date(d + "T00:00:00"), date))
    : isSameDate(new Date(props.modelValue + "T00:00:00"), date);
const isStartDate = (date: Date) =>
  Array.isArray(props.modelValue) && props.modelValue.length > 0 && isSameDate(new Date(props.modelValue[0] + "T00:00:00"), date);
const isEndDate = (date: Date) =>
  Array.isArray(props.modelValue) && props.modelValue.length === 2 && isSameDate(new Date(props.modelValue[1] + "T00:00:00"), date);
const isInRange = (date: Date) => {
  if (!Array.isArray(props.modelValue) || props.modelValue.length !== 2) return false;
  return new Date(props.modelValue[0] + "T00:00:00") < date && date < new Date(props.modelValue[1] + "T00:00:00");
};

const selectDate = (date: Date) => {
  const formattedDate = formatDate(date, props.returnFormat);
  if (!props.range) {
    emit("update:modelValue", formattedDate);
    return;
  }

  let newRange = Array.isArray(props.modelValue) ? [...props.modelValue] : [];
  if (newRange.length === 0 || newRange.length === 2) {
    newRange = [formattedDate];
  } else {
    newRange.push(formattedDate);
    if (new Date(newRange[0] + "T00:00:00") > new Date(newRange[1] + "T00:00:00")) newRange.reverse();
  }

  emit("update:modelValue", newRange);
};
const handleDateClick = (date: Date) => {
  console.log("📌 Clicked Date:", date.toISOString().split("T")[0]);
  emit("update:modelValue", formatDate(date));
  if (isPrevNextMonth(date)) {
    console.log("➡️ 이동할 연도:", date.getFullYear(), "이동할 월:", date.getMonth());

    emit("update:year", date.getFullYear());
    emit("update:month", date.getMonth());

    setTimeout(() => {
      console.log("✅ 날짜 선택 값도 같이 변경:", formatDate(date, props.returnFormat));
      emit("update:modelValue", formatDate(date, props.returnFormat)); // ✅ 여기 추가
    }, 0);
  } else {
    selectDate(date);
  }
};

</script>
