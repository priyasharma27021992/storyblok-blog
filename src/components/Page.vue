<script setup lang="ts">
const props = defineProps({blok: Object})
console.log('block', props.blok)
</script>

<template>
    <StoryblokComponent v-for="currentBlok in blok.body" :key="currentBlok._uid" :blok="currentBlok"/>
</template>