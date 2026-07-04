<script setup lang="ts">
    const props = defineProps({blok: Object})
    console.log('props', props.blok)
</script>

<template>
    <p>{{ blok?.text }}</p>
</template>

