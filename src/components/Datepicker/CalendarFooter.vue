<template>
  <div class="w-full flex justify-between items-center flex-wrap border border-gray-40 p-4 rounded-b-xl">
    <!-- 오늘 버튼 -->
    <Button label="오늘" type="tertiary" size="medium" class="border-none" @click="$emit('selectToday')" />

    <!-- 취소 / 확인 버튼 -->
    <div class="flex gap-2">
      <Button label="취소" type="secondary" size="medium" @click="$emit('cancel')" />
      <Button label="확인" type="primary" size="medium" @click="$emit('confirm')" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from '../Action/Button.vue';
</script>
