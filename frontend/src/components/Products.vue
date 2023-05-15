<template>

    <slot v-for="(product,index) in products" :key="index" v-bind:product="product"></slot>


</template>

<script>
export default {
props:['products'],
}
</script>

<style scoped>

</style>