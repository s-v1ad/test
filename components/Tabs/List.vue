<script setup lang="ts">
// Props
const props = defineProps<{ modelValue: string; tabs: string[] }>()

// Data
const icons = {
  bridges: 'ChainSvg',
  swaps: 'SwapSvg',
  landings: 'MoneySvg',
  mints: 'PictureSvg'
}

// Computed
</script>

<template>
  <div class="tabs-list">
    <div class="tabs-list__list">
      <TabsItem
        v-for="tab in tabs"
        :active="tab === modelValue"
        @click="$emit('update:modelValue', tab)"
      >
        <Icon :name="icons[tab]" class="tabs-item__image" />
        {{ tab }}
      </TabsItem>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/components/tabs/tabs-list.scss';
</style>
