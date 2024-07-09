<script setup lang="ts">
import Simplebar from 'simplebar-vue'
import 'simplebar-vue/dist/simplebar.min.css'

// Props
defineProps<{ options?: {} }>()
</script>

<template>
  <Simplebar class="simplebar" v-bind="{ ...options }">
    <slot />
  </Simplebar>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/components/app/simplebar.scss';
</style>
