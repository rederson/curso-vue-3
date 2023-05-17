<template>
  <router-link class="link" to="/">Home</router-link>
  <router-link class="link" to="/about">About</router-link>
  <router-link class="link" to="/user/create">User Create</router-link>
  
</template>

<script>
export default {
    name: "Nav"
};
</script>

<style>

  .link {
    color: blue;
    margin-right: 20px;
  }
</style>