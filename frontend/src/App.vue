<template>
  <Nav /> <br>
  <router-view></router-view>


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
      items: [ ]
    }
  },
  mounted(){
    //console.log(this.$refs.img['src']);
  },
  methods: {
    add(value) {
      this.count += value;
    },

    addItem(){
      this.items.push(Date.now())
    },

    remove(index){
      console.log(index);
     // const index = this.itens.findIndex((i) => {
     //   return i.id === item.id;
     // });
     this.items.splice(index,1);
     //console.log(index);
    },


    search: _.debounce(()=>{
          console.log('search');
    }, 1000)
      

  },
};
</script>

<style scoped>

</style>