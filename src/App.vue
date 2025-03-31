<script setup lang="ts">

import Accordion from "./components/Accordion.vue";
import Button from "./components/Action/Button.vue";
import Link from "./components/Action/Link.vue";
import Radio from "./components/Select/Radio.vue";
import {computed, onMounted, ref} from "vue";
import CheckBox from "./components/Select/CheckBox.vue";
import Select from "./components/Select/Select.vue";
import Toggle from "./components/Select/Toggle.vue";
import Datepicker from "./components/Datepicker/index.vue";
const date = ref();
const daterange = ref();

const items = [
  {
    title : 'titles1',
    content : 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)'
  },
  {
    title : 'titles1',
    content : 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)'
  }
]

const selectedValue = ref("medium");
const toggle = ref(false)
const selected = ref("");
const checkboxItems = ["옵션1", "옵션2", "옵션3","옵션4", "옵션5", "옵션6","옵션7", "옵션8", "옵션9"]; // 항목 리스트
const checkboxItems2 = ["옵션1", "옵션2", "옵션3","옵션4"]; // 항목 리스트
const checkboxItems3 = ["옵션1"]; // 항목 리스트
const selectedStates = ref([]); // 체크 상태 유지 (true/false 배열)
const selectedItems = computed(() =>
  checkboxItems.filter((_, index) => selectedStates.value[index])
)


</script>

<template>
  <div class="flex justify-center">
    <div class="w-[1200px] h-[5000px]">
    <div class="w-[400px]">
      <br />
      <Accordion
        :items="[
    { title: '기본형 아코디언 1', content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).' },
    { title: '기본형 아코디언 2', content: '두 번째 아코디언의 내용입니다.' }
  ]"
        type="filled"
      />
<br />
      <Accordion
        :items="[
    { title: '라인형 아코디언 1', content: '첫 번째 아코디언의 내용입니다.' },
    { title: '라인형 아코디언 2', content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).' }
  ]"
        type="outlined"
      />
      <div class="flex gap-4 p-3">
        <Button label="버튼 : primary" type="primary" size="medium" icon="check" icon-pos="left" />
        <Button label="버튼 : secondary" type="secondary" size="medium" icon="settings" icon-pos="right" />
        <Button label="버튼 : tertiary" type="tertiary" size="medium" icon="check" icon-pos="left" />
        <Button icon="search" type="primary" size="medium" />  <!-- ✅ 아이콘만 있는 원형 버튼 -->
        <Button icon="flame" type="secondary" size="medium" />  <!-- ✅ 아이콘만 있는 원형 버튼 -->
        <Button icon="apple" type="tertiary" size="medium" />  <!-- ✅ 아이콘만 있는 원형 버튼 -->
        <Button label="비활성화" type="primary" size="medium" :disabled="true" />
      </div>
      <div class="flex flex-col gap-4">
        <Link label="기본 링크" href="https://www.site_name.com/" size="small" underline external target="_blank" title="새 창 열림" />

        <!-- 가상 클래스 상태 시 컬러 유지 -->
        <Link label="가상클래스 상태 시 컬러 유지" href="#!" size="medium" underline variant="pure" />

        <!-- 본문 텍스트 컬러 링크 -->
        <Link label="본문 텍스트 컬러 링크" href="#!" size="large" variant="basic" underline external target="_blank" title="새 창 열림" />

        <!-- 가상 클래스 상태 시 밑줄 -->
        <Link label="가상클래스 상태 시 밑줄" href="#!" size="large" variant="basic" hiddenUnderline hoverUnderline />

        <!-- 밑줄 없음 -->
        <Link label="밑줄 없음" href="#!" size="large" variant="basic" />
      </div>

      <div class="krds-check-area">
        <Radio v-model="selectedValue" name="group1" value="small" label="Small" size="small" />
        <Radio v-model="selectedValue" name="group1" value="medium" label="Medium" size="medium" />
        <Radio v-model="selectedValue" name="group1" value="large" label="Large" size="large" />
        {{selectedValue}}
      </div>
      <div>
        <CheckBox v-model="selectedStates" :items="checkboxItems" size="small" :showSelectedItems="false" />
        <p>선택 상태: {{ selectedItems }}</p>
      </div>
      <div>
      <CheckBox v-model="selectedStates" :items="checkboxItems2" size="medium" :showSelectedItems="false" disabled />
      <p>선택 상태: {{ selectedItems }}</p>
    </div>
      <div>
        <CheckBox v-model="selectedStates" :items="checkboxItems3" size="large" :showSelectedItems="false" />
        <p>선택 상태: {{ selectedItems }}</p>
      </div>
    </div>

<div class="w-sm grid  gap-5">
  <Select
    label="기본 셀렉트"
    v-model="selected"
    size="medium"
    helper-text="기본 도움말의 위치에요."
    :options="[
    { value: 'opt1', label: '케이티 위즈' },
    { value: 'opt2', label: 'KRDS - Selecct 옵션' },
    { value: 'opt3', label: '대한민국' }
  ]"
    placeholder="옵션을 선택하세요."
    state="default"
  >
  </Select>
  <Select
    label="스몰 셀렉트"
    v-model="selected"
    size="small"
    helper-text="문제가 발생했어요."
    :options="[
    { value: 'opt1', label: '케이티 위즈' },
    { value: 'opt2', label: 'KRDS - Selecct 옵션' },
    { value: 'opt3', label: '대한민국' }
  ]"
    placeholder="옵션을 선택하세요."
    state="error"
  >
  </Select>
  <Select
    label="미디움 셀렉트"
    v-model="selected"
    size="medium"
    helper-text="성공이에요."
    :options="[
    { value: 'opt1', label: '케이티 위즈' },
    { value: 'opt2', label: 'KRDS - Selecct 옵션' },
    { value: 'opt3', label: '대한민국' }
  ]"
    placeholder="옵션을 선택하세요."
    state="completed"
  >
  </Select>
  <Select
    label="라지 셀렉트"
    v-model="selected"
    size="large"
    helper-text="비활성화 되었어요."
    :options="[
    { value: 'opt1', label: '케이티 위즈' },
    { value: 'opt2', label: 'KRDS - Selecct 옵션' },
    { value: 'opt3', label: '대한민국' }
  ]"
    placeholder="옵션을 선택하세요."
    state="disabled"
  >
  </Select>
</div>
      <div class=" p-3">
        <Toggle size="small" label="test"  v-model="toggle"/>
        <br />
        <Toggle size="medium" label="test"  v-model="toggle"/>
        <br />
        <Toggle size="large" label="test"  v-model="toggle"/>
      </div>
      <div class="p-3">
        <!-- ✅ 날짜 선택기 (범위 선택 가능) -->
        <Datepicker v-model="date" />
        <!-- ✅ 선택된 날짜 표시 -->
        <p class="mt-2 text-lg font-medium">선택한 날짜: {{ date }}</p>
        <Datepicker v-model="daterange" :range="true" />
        <!-- ✅ 선택된 날짜 표시 -->
        <p class="mt-2 text-lg font-medium">선택한 날짜: {{ daterange }}</p>
      </div>
      <div class="bg-ci_daree_logo" />
    </div>
  </div>
</template>
