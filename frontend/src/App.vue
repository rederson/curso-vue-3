<template>

  <Counter />
  <router-view></router-view>


</template>



<script>
import Counter from "@/components/Counter.vue";

export default {
  components: { Counter },
  
};
</script>

<style scoped>

</style>