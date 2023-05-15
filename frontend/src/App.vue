<template>
  <Nav />

  <router-view></router-view>

  <button @click="count++">Add - {{ count }}</button>

  <CountChild v-on:addCount="(value) => count+=value" />
</template>

<script>
import Nav from "@/components/Nav.vue";
import CountChild from "@/components/CountChild.vue";

export default {
  components: { Nav, CountChild },
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    add(value) {
      this.count += value;
    },
  },
};
</script>

<style scoped>
</style>