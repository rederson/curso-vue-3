<template>
  <Products v-bind:products="products" v-slot="props" >
    <li @click="getProduct(props.product.id)">{{ props.product.name }}</li>
  </Products>
  
</template>

<script setup>
import ProductInfo from '@/components/ProductInfo.vue';
import Products from '@/components/Products.vue';
import {reactive, ref} from 'vue';


const product = reactive({
  likes:120,
  comments:45
})

const products = reactive([
{
  id:1,
  name:'Imac'
},
{
  id:2,
  name: 'MacBook'
},
{
  id:3,
  name: 'Mouse'
}
]);

const likes =  ref(20)
const comments = ref(10)

function getProduct(id){
  console.log(id);
}

</script>

<style scoped>
#app-products {
    color: red;
}

</style>