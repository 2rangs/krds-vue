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

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
