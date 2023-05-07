<template>
  <Header />

  <button v-on:click="count++">Add {{ count }}</button>

  <h2>App</h2>

  <Footer />
</template>

<script>
//options api

import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: { Header, Footer },
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    add() {
      this.count++;
    },
  },
};
</script>

<style>
</style>