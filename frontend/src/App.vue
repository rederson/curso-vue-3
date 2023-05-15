<template>
  <Nav />

  <router-view></router-view>

  <input type="text" name="" id="" placeholder="Search" @keyup="search" />
</template>
<script>
import Nav from "@/components/Nav.vue";
import CountChild from "@/components/CountChild.vue";
import _ from 'lodash';

export default {
  components: { Nav, CountChild },
  data() {
    return {
      count: 0,
      itens: [
        {
          name: 'teste'
        }, 
        {
          name: 'teste1'
        }
      ]
    };
  },
  mounted(){
    //console.log(this.$refs.img['src']);
  },
  methods: {
    add(value) {
      this.count += value;
    },

    search: _.debounce(()=>{
          console.log('search');
    }, 1000)
      

  },
};
</script>

<style scoped>
</style>