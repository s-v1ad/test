<script setup lang="ts"></script>

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
          <ProtocolList />

          <ProtocolContent />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/components/section/protocol.scss';
</style>
