<template>
  <button @click="showSomething()">Show</button>

  <input type="text" ref="inputElement" v-if="showElement">
</template>

<script>
export default {
  data() {
    return {
        showElement:false,
    }
  },
  methods: {
    async showSomething(){
      //console.log('show');
      this.showElement =  true;
      
      await this.$nextTick(()=>{
        this.$refs.inputElement.focus();
        console.log('focus');
      })
      console.log('carregou');
/** ou trabalhar com setTimeout */
     /** setTimeout(() => {
        this.$refs.inputElement.focus();
        console.log(this.$refs.inputElement);
      }, 100);
*/

    }
  }
}

</script>

<style >

</style>
