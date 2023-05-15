<template>
  <Nav />

  <router-view></router-view>
  <ul>
    <li v-for="(item,index) in itens" :key="index" ref="item">
    {{ item.name }}
    </li>

  </ul>

  <img src="https://picsum.photos/200/300" alt="" id="img" ref="img">

</template>
<script>
import Nav from "@/components/Nav.vue";
import CountChild from "@/components/CountChild.vue";

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
    console.log(this.$refs.img['src']);
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