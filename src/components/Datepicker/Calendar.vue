<template>
  <div class="max-w-[500px]">
    <CalendarHeader :year="year" :month="month" @update:year="year = $event" @update:month="month = $event" />
    <CalendarMonth
      :year="year"
      :month="month"
      v-model="selectedDate"
      @update:year="year = $event"
      @update:month="month = $event"
    />
    <CalendarFooter />
  </div>
</template>

<script setup lang="ts">
import {defineEmits, defineProps, ref, watch} from "vue";
import CalendarHeader from "./CalendarHeader.vue";
import CalendarMonth from "./CalendarMonth.vue";
import CalendarFooter from "./CalendarFooter.vue";
const props = defineProps({
  returnFormat: { type: String, default: "YYYY-MM-DD" },
  range: { type: Boolean, default: false },
});
const emit = defineEmits(["update:modelValue"]);
const today = new Date();
const year = ref(today.getFullYear());
const month = ref(today.getMonth());
const selectedDate = ref(today.toISOString().split("T")[0]); // YYYY-MM-DD 포맷
watch(selectedDate, (nv) => {
  emit("update:modelValue", nv);

})
console.log(props)
</script>
