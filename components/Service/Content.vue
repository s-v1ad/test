<script setup lang="ts">
import type { IServices } from '~/types'

// Props
const props = defineProps<{ loader: boolean; content: IServices }>()

// Data
const activeTab = ref(Object.keys(props.content)[0])

// watch
// watch(
//   () => props.content,
//   () => (activeTab.value = Object.keys(props.content)[0])
// )

// Computed
const tabsList = computed(() => Object.keys(props.content))

// const contentCards = computed(() => props.content.services[activeTab.value])
</script>

<template>
  <div class="service-content">
    {{ props.content }}
    <AppLoader v-if="loader" />
    <template v-else>
      <TabsList class="service-content__tabs" :tabs="tabsList" v-model="activeTab" />

      <AppSimplebar class="service-content__wrapper">
        <TransitionGroup name="list" tag="ul" class="service-content__list">
          <ServiceCard v-for="i in 20" :key="'a' + i" />
        </TransitionGroup>
      </AppSimplebar>
    </template>
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
