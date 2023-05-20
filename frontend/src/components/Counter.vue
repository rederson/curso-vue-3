<template>
    <div>
        {{  store.state.counter.count }}
     
    </div>
</template>

<script setup>
import {useStore} from 'vuex';
const store = useStore();

</script>

<style scoped>

</style>