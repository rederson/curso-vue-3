<template>
    Likes:{{ props.likes }}
    Comments: {{ props.comments }}
  
</template>

<script setup>
const props = defineProps({
    likes:Number,
    comments:Number,
});
</script>

<style>

</style>