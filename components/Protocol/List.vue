<script setup lang="ts">
import { type IProtocol } from '~/types'

type TProps = {
  loader: boolean
  modelValue: number
  activeProtocol: IProtocol
  protocolList: IProtocol[]
}

// Props
defineProps<TProps>()

// Emits
const emits = defineEmits<{
  (e: 'update:modelValue', value: number): void
}>()
</script>

<template>
  <div class="protocol-list">
    <AppLoader v-if="loader" />

    <AppSimplebar v-else class="protocol-list__wrapper">
      <ul class="protocol-list__list">
        <ProtocolCard
          v-for="(protocol, i) in protocolList"
          :protocol="protocol"
          :active-protocol="activeProtocol"
          @click="$emit('update:modelValue', i)"
        />
      </ul>
    </AppSimplebar>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/components/protocol/protocol-list.scss';
</style>
