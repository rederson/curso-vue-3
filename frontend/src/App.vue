<template>
  <Nav />

  <router-view></router-view>

  <img src="https://picsum.photos/200/300" alt="" id="img" ref="img">

  <ul>
    <li v-for="(product,index) in products" :key="index" id="product" ref="product">
    {{ product.nome }}
    </li>
  </ul>

</template>

<script setup>
import Nav from '@/components/Nav.vue';
import CountChild from '@/components/CountChild.vue';
import { ref, onMounted } from 'vue';

const count = ref(0);

const img = ref(null);
const product = ref([]);

const products = ref([
  {
    id:1,
    nome:'Imac'
  },
  {
    id:2,
    nome: 'Teclado'
  }
]);

onMounted(() => {
//  console.log(document.querySelector('#img')['src']);
//console.log(document.querySelectorAll('#product'));
console.log(product.value);
})

function add(value) {
  count.value+=value
}
</script>

<style scoped>
</style>