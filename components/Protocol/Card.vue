<script setup lang="ts">
// Helpers
import trimIcon from '@/utils/trimIcon'

// Types
import type { IProtocol } from '~/types'

type TProps = {
  tag?: string
  activeProtocol: IProtocol
  protocol: IProtocol
}

// Props
const props = withDefaults(defineProps<TProps>(), { tag: 'li' })

// Emits
const emits = defineEmits<{ (e: 'click'): void }>()

// Computed
// const imagePath = computed(() => `/images/protocols${props.protocol.icon}`)
const imagePath = computed(() => `Service${trimIcon(props.protocol.icon)}`)
</script>

<template>
  <!-- protocol-card--active -->

  <component
    :is="tag"
    class="protocol-card"
    :class="{ 'protocol-card--active': protocol.title === activeProtocol.title }"
    @click="$emit('click')"
  >
    <Icon :name="imagePath" :alt="protocol.title" class="protocol-card__image" />
    <span class="protocol-card__title">{{ protocol.title }}</span>
  </component>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/components/protocol/protocol-card.scss';
</style>
