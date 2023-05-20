<template>
    <div>
        {{  store.state.count}}
    </div>
</template>

<script setup>
import {useStore} from 'vuex';
const store = useStore();

</script>

<style scoped>

</style>