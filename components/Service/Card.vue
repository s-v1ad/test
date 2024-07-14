<script setup lang="ts">
// Helpers
import trimIcon from '@/utils/trimIcon'

// Types
import { type IProtocolService } from '@/types'

// Props
const props = withDefaults(defineProps<{ tag?: string; data: IProtocolService }>(), { tag: 'li' })

const imagePath = computed(() => `Service${trimIcon(props.data.icon)}`)
</script>

<template>
  <component :is="tag" class="service-card">
    <a :href="data.link" target="_blank" class="service-card__link">
      <!-- <img :src="imagePath" :alt="data.name" class="service-card__image" /> -->
      <Icon :name="imagePath" :alt="data.name" class="service-card__image" />
      <span class="service-card__title">{{ data.name }}</span>
      <Icon name="ArrowRightUpSvg" class="service-card__arrow" />
    </a>
  </component>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/components/service/service-card.scss';
</style>
