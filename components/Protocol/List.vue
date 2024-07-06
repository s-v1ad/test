<script setup lang="ts">
import Simplebar from 'simplebar-vue'
import 'simplebar-vue/dist/simplebar.min.css'
</script>

<template>
  <div class="protocol-list">
    <Simplebar class="protocol-list__wrapper">
      <ul class="protocol-list__list">
        <ProtocolCard v-for="i in 10" />
      </ul>
    </Simplebar>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/components/protocol/protocol-list.scss';
</style>
