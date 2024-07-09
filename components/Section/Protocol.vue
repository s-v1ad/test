<script setup lang="ts">
import { protocols } from '@/data/protocols'
import type { IProtocolServices, IServices } from '@/types'

// Data
const loaderList = ref<boolean>(true)
const loaderContent = ref<boolean>(true)
const protocolData = ref<IProtocolServices[]>([])
const activeIndexProtocol = ref<number>(0)

// Computed
const activeProtocol = computed(() => protocolData.value[activeIndexProtocol.value])

const servicesData = computed(() => protocolData.value[activeIndexProtocol.value]?.services)

// Methods

// Lifecycle hooks
onMounted(() => {
  // Эмулируем загрузку
  setTimeout(() => {
    protocolData.value = protocols
    loaderList.value = false
    loaderContent.value = false
  }, 800)
})
</script>

<template>
  <section class="protocol">
    <div class="protocol__container container">
      <div class="protocol__inner">
        <div class="protocol__head">
          <h2 class="protocol__title">Supported Protocols</h2>
          <p class="protocol__description">
            Supports a variety of Ethereum networks for seamless exchanges
          </p>
        </div>

        <div class="protocol__content">
          <ProtocolList
            v-model="activeIndexProtocol"
            :loader="loaderList"
            :protocol-list="protocolData"
            :active-protocol="activeProtocol"
          />

          <ServiceContent :loader="loaderContent" :content="servicesData" />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/components/section/protocol.scss';
</style>
