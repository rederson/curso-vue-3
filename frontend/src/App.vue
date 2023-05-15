<template>
  <Nav />

  <router-view></router-view>

  <button @click="count++">Add count - {{ count }}</button>
  <!--<CountChild v-on:addCount="count++" />-->

  <!--<CountChild v-on:addCount="(value) => count+=value" />-->

    <CountChild v-on:addCount="add" />

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