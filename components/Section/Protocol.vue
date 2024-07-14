<script setup lang="ts">
import { protocols } from '@/data/protocols'
import type { IProtocolServices } from '@/types'

// Data
const activeIndexProtocol = ref<number>(0)

// Computed
const activeProtocol = computed(() => protocols[activeIndexProtocol.value])

const servicesData = computed(() => protocols[activeIndexProtocol.value]?.services)

// Methods
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
            :protocol-list="protocols"
            :active-protocol="activeProtocol"
          />

          <ServiceContent :content="servicesData" />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/components/section/protocol.scss';
</style>
