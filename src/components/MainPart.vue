<script setup lang="ts">
import { useCategoryStore } from '@/stores/category'
const store = useCategoryStore()

function onCounterClick() {
  store.changeNewEntry({ name: '123', sign: false, value: 123 })
}
</script>

<template>
  <div class="main-container">
    <button @click="onCounterClick">Test state</button>
    <p>{{ store.name }}</p>
  </div>
</template>
