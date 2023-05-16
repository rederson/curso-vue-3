<template>
  <Nav />

  <router-view></router-view>

  

</template>

<script setup>
import Nav from '@/components/Nav.vue';
import CountChild from '@/components/CountChild.vue';
import { ref, onMounted } from 'vue';
import _ from 'lodash';

const count = ref(0);

const img = ref(null);
const product = ref([]);

const search = _.debounce(()=> {
console.log('search');
}, 1000);// espera 1 segundo após parar de digitar para enviar a pesquisa
// já usando throttle no lugar de debounce envia segundo a segundo

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