<template>
  <button @click="increment" >Add</button>
  {{ count }} 
  
<hr>

</template>

<script>

export default {

  data(){
    return {
        count: 0,
    }
  },
  
  methods:{
    increment(){
      this.count++;
    }
  }
  
};
</script>

<style >
#app {
  color: red;
}
</style>
