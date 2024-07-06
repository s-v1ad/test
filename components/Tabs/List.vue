<script setup lang="ts"></script>

<template>
  <div class="tabs-list">
    <ul class="tabs-list__list">
      <TabsItem v-for="i in 3" />
    </ul>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/components/tabs/tabs-list.scss';
</style>
