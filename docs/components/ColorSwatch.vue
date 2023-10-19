<script setup lang="ts">
// https://github.com/d3/d3/blob/main/docs/components/ColorSwatches.vue
// https://vuejs.org/api/sfc-script-setup.html#type-only-props-emit-declarations
// https://github.com/saintplay/vue-swatches
// https://github.com/vuejs/vitepress/blob/main/docs/components/ModalDemo.vue
// https://tailwindcss.com/docs/gap
defineProps<{
  colors: string[];
}>();
</script>

<template>
  <div class="colors">
    <div
      v-for="color in colors"
      class="color"
      :style="{ backgroundColor: color }"
    />
  </div>
</template>

<style scoped>
.colors {
  display: flex;
  flex-wrap: wrap;
  gap: 1px;
}

.color {
  width: 40px;
  height: 40px;
}
</style>
