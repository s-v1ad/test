<script setup lang="ts">
// Props
const props = defineProps<{ active?: boolean }>()

// Emits
const emit = defineEmits<{
  (e: 'click'): void
}>()
</script>

<template>
  <button class="tabs-item" :class="{ 'tabs-item--active': active }" @click="$emit('click')">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/components/tabs/tabs-item.scss';
</style>
