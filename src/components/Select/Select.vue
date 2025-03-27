<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from "vue";
import { ChevronDown, Check, CircleAlert } from "lucide-vue-next";

type Option = {
  value: string;
  label: string;
  icon?: any;
};

type Size = "small" | "medium" | "large";
type State = "default" | "completed" | "error" | "disabled";

const props = withDefaults(
  defineProps<{
    modelValue: string | null;
    options: Option[];
    placeholder?: string;
    size?: Size;
    state?: State;
    label?: string;
    helperText?: string;
  }>(),
  {
    placeholder: "선택",
    size: "medium",
    state: "default",
    label: "",
  }
);

const emit = defineEmits(["update:modelValue"]);

const isOpen = ref(false);
const selectRef = ref<HTMLElement | null>(null);

// 선택한 옵션
const selectedOption = computed(() => props.options.find((opt) => opt.value === props.modelValue));

// 상태별 클래스
const stateClass = computed(() => ({
  default: "border-gray-30 bg-white text-gray-900 focus:ring-primary-50",
  completed: "border-green-50 focus:ring-green-500",
  error: "border-danger focus:ring-red-500",
  disabled: "border-gray-200 bg-gray-10 text-gray-50 cursor-not-allowed",
}[props.state]));

// 사이즈별 높이 설정
const heightClass = computed(() => ({
  small: "h-10 text-sm",
  medium: "h-12 text-md",
  large: "h-14 text-lg",
}[props.size]));

// 헬퍼 아이콘 색상
const iconColor = computed(() => ({
  default: "text-gray-50",
  completed: "text-green-50",
  error: "text-red-500",
  disabled: "text-gray-40",
}[props.state]));

// 도움말 색상
const hintClass = computed(() => ({
  default: "text-gray-50",
  completed: "text-green-50",
  error: "text-red-50",
  disabled: "text-gray-400",
}[props.state]));

// 선택된 옵션인지 확인
const isSelected = (option: Option) => option.value === props.modelValue;

// 옵션 선택
const selectOption = (option: Option) => {
  if (props.state === "disabled") return;
  emit("update:modelValue", option.value);
  isOpen.value = false;
};

// 드롭다운 토글
const toggleDropdown = () => {
  if (props.state === "disabled") return;
  isOpen.value = !isOpen.value;
};

// **외부 클릭 감지하여 드롭다운 닫기**
const handleClickOutside = (event: MouseEvent) => {
  if (selectRef.value && !selectRef.value.contains(event.target as Node)) {
    isOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>

<template>
  <div class="relative w-full min-w-[100px]" ref="selectRef">
    <!-- Label -->
    <label v-if="label" class="block text-gray-800 font-medium mb-2">{{ label }}</label>

    <!-- Select Box -->
    <div class="relative">
      <div
        :class="[
          'flex items-center justify-between border rounded-lg px-4 cursor-pointer transition-all',
          'focus:ring-2',
          heightClass, stateClass
        ]"
        @click="toggleDropdown"
      >
        <div class="flex items-center gap-2 flex-1 truncate">
          <slot name="prefix" :selected-option="selectedOption">
            <component :is="selectedOption?.icon" v-if="selectedOption?.icon" class="w-4 h-4 text-gray-700" />
          </slot>
          <span class="truncate font-medium">{{ selectedOption?.label || placeholder }}</span>
        </div>
        <ChevronDown class="absolute right-4 transition-transform duration-300 w-4 h-4"
                     :class="isOpen ? 'rotate-180' : ''" />
      </div>

      <!-- Dropdown -->
      <transition name="fade">
        <ul v-show="isOpen" class="dropdown-list">
          <li v-for="option in options" :key="option.value"
              :class="['dropdown-item flex items-center m-1 radius-md', { 'selected': isSelected(option) }]"
              @click="selectOption(option)">
            <Check v-if="isSelected(option)" class="w-4 h-4 mr-2" />
            <component :is="option.icon" v-if="option.icon" class="w-4 h-4 text-gray-700 mr-2" />
            <span class="truncate font-medium ">{{ option.label }}</span>
          </li>
        </ul>
      </transition>
    </div>

    <!-- Helper Text -->
    <p v-if="helperText" :class="['mt-2 flex items-center gap-2 text-sm', hintClass]">
      <CircleAlert size="16" :class="iconColor" />
      <span>{{ helperText }}</span>
    </p>
  </div>
</template>

<style scoped>
/* 드롭다운 스타일 */
.dropdown-list {
  position: absolute;
  z-index: 10;
  background: white;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-height: 200px;
  overflow-y: auto;
  padding: 8px 0;
  margin-top: 4px;
  border: 1px solid var(--color-gray-20);
}

/* 드롭다운 아이템 */
.dropdown-item {
  display: flex;
  align-items: center;
  padding: 10px 12px;
  cursor: pointer;
  border-radius: 5px;
  transition: background 0.2s;
}

.dropdown-item:hover {
  background: var(--color-gray-10);
}

.dropdown-item.selected {
  background: var(--color-primary-5);
  color: var(--color-navy-70);
}
</style>
