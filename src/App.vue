<script setup lang="ts">

import Accordion from "./components/Accordion.vue";
import Button from "./components/Action/Button.vue";
import Link from "./components/Action/Link.vue";
import Radio from "./components/Select/Radio.vue";
import {ref} from "vue";
import CheckBox from "./components/Select/CheckBox.vue";


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



const checkboxItems = ["옵션 1", "옵션 2", "옵션 3"]; // 항목 리스트
const selectedStates = ref([false, false, false]); // 체크 상태 유지 (true/false 배열)
</script>

<template>
  <div class="flex justify-center">
    <div class="w-[1200px]">
    <div class="w-xl">
      <Accordion :items="items" />
      <div class="flex gap-4 p-3">
        <Button label="KRDS 버튼" icon="flame" icon-pos="left" type="secondary" size="small" />
        <Button icon="instagram" icon-pos="left" type="tertiary" size="small" />
      </div>
      <div class="flex flex-col gap-4">
        <Link label="기본 링크" href="https://www.site_name.com/" size="small" underline external target="_blank" title="새 창 열림" />

        <Link label="가상클래스 상태 시 컬러 유지" href="#!" size="medium" underline variant="pure" />

        <Link label="본문 텍스트 컬러 링크" href="#!" size="large" variant="basic" underline external target="_blank" title="새 창 열림" />

        <Link label="가상클래스 상태 시 밑줄" href="#!" size="large" variant="basic" hiddenUnderline />

        <Link label="밑줄 없음" href="#!" size="large" variant="basic" />
      </div>

      <div class="krds-check-area">
        <Radio v-model="selectedValue" name="group1" value="small" label="Small" size="small" />
        <Radio v-model="selectedValue" name="group1" value="medium" label="Medium" size="medium" />
        <Radio v-model="selectedValue" name="group1" value="large" label="Large" size="large" />
        {{selectedValue}}
      </div>

      <div>
        <CheckBox v-model="selectedStates" :items="checkboxItems" size="medium" />
        <p>선택 상태: {{ selectedStates }}</p>
      </div>
    </div>
    </div>
  </div>
</template>
