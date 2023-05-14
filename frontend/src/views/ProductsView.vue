<template>
  <h2 id="app-products">Products</h2>
  <h2 id="my-app">Products my app</h2>

  <h2>Product 1</h2>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, ratione cupiditate deleniti cumque itaque similique obcaecati placeat enim, rerum dolorem qui dignissimos odit est, fugiat labore! Quasi neque fuga ducimus?</p>
  <ProductInfo :likes="product.likes" :comments="product.comments" />
</template>

<script setup>
import ProductInfo from '@/components/ProductInfo.vue';
import {reactive, ref} from 'vue';


const product = reactive({
  likes:120,
  comments:45
})

const likes =  ref(20)
const comments = ref(10)

</script>

<style scoped>
#app-products {
    color: red;
}

</style>