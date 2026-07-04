<script setup lang="ts">
import { Suspense } from 'vue';
import Home from '../src/Home.vue'

</script>

<template>
  <main>
    <Suspense>
      <template #default>
        <Home />
      </template>
    </Suspense>
  </main>
</template>

<style scoped></style>
