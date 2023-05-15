<template>
    <ul>
        <slot v-for="(product, index) in products" :key="index" v-bind:age="40" v-bind:product="product"></slot>
    </ul>
</template>
<script setup>
defineProps(['products'])
</script>