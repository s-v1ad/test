<script setup lang="ts">
// Props
const props = withDefaults(defineProps<{ tag?: string }>(), { tag: 'li' })
</script>

<template>
  <component :is="tag" class="service-card">
    <a href="#" target="_blank" class="service-card__link">
      <img src="/images/protocols/Ethereum.svg" alt="" class="service-card__image" />
      <span class="service-card__title">SyncSwap</span>
      <Icon name="ArrowRightUpSvg" class="service-card__arrow" />
    </a>
  </component>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/components/service/service-card.scss';
</style>
