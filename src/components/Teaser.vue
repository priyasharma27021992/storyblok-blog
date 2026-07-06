<template>
    <div>
        <p>{{ blok?.headline }} </p>
    </div>
</template>
<script lang="ts" setup>
    const props = defineProps({
        blok: Object
    })
</script>