<script setup lang="ts">
import { type IProtocol } from '~/types'

type TProps = {
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

// Data
const isMobile = ref<boolean>(false)

// Methods
function checkMobile(): void {
  if (window.matchMedia('(max-width: 61.9875rem)').matches) isMobile.value = true

  isMobile.value = false
}
// Lifecycle hooks
onMounted(() => {
  checkMobile()
  window.addEventListener('resize', checkMobile)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', checkMobile)
})
</script>

<template>
  <div class="protocol-list">
    <AppSimplebar class="protocol-list__wrapper">
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
