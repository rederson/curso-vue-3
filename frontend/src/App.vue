<template>
  <Nav />

  <router-view></router-view>

</template>

<script setup>
import Nav from '@/components/Nav.vue';
import CountChild from '@/components/CountChild.vue';
import { ref } from 'vue';

const count = ref(0);

function add(value) {
  count.value+=value
}
</script>

<style scoped>
</style>