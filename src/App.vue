<script setup lang="ts">

const colorLv = [
  0,5,10,20,30,40,50,60,70,80,90,100
]
</script>

<template>
  <div class="flex gap-2">
    <div v-for="lv in colorLv" :key="lv">
      <div :class="`bg-point-20`">
        bg-primary-{{lv}}
      </div>
    </div>
  </div>
</template>
