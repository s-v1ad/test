<script setup lang="ts">
import { type IProtocolService } from '@/types/protocol'
// Types
type TProps = {
  tag?: string
}

// Props
withDefaults(defineProps<TProps>(), { tag: 'li' })
</script>

<template>
  <!-- protocol-card--active -->
  <component :is="tag" class="protocol-card">
    <img src="/Ethereum.svg" alt="" class="protocol-card__image" />
    <span class="protocol-card__title">Ethereum Mainnet</span>
  </component>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/components/protocol/protocol-card.scss';
</style>
