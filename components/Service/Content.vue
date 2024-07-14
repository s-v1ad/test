<script setup lang="ts">
import type { IServices, TypeService, IProtocolService } from '~/types'

// Props
const props = defineProps<{ content: IServices }>()

// Data
const activeTab = ref<TypeService>('bridges')

// Computed
const tabsList = computed(() => Object.keys(props.content))
const servicesCards = computed<IProtocolService[]>(() => props.content[activeTab.value])

// watch
watch(
  () => props.content,
  () => {
    activeTab.value = tabsList.value[0]
  }
)
</script>

<template>
  <div class="service-content">
    <div class="service-content__head">
      <AppSimplebar class="service-content__scroll">
        <TabsList class="service-content__tabs" :tabs="tabsList" v-model="activeTab" />
      </AppSimplebar>
    </div>

    <AppSimplebar class="service-content__wrapper">
      <ul class="service-content__list">
        <ServiceCard v-for="card in servicesCards" :key="card.link" :data="card" />
      </ul>
    </AppSimplebar>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/components/service/service-content.scss';

.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
