<template>
  <h2 id="app-products">Products</h2>
  <h2 id="my-app">Products my app</h2>

  <h2>Product 1</h2>
  <p>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit ipsam
    doloribus itaque iure quo, ea aspernatur in dolores expedita cumque, odit
    eaque ipsa libero optio aliquam nobis! Ullam, cupiditate magnam?
  </p>
  <ProductInfo :likes="product.likes" :comments="product.comments" />
</template>

<script>
import ProductInfo from "@/components/ProductInfo.vue";

export default {
  components: { ProductInfo },
  name: "Products.vue",
  data() {
    return {
        product: {
            likes: 20,
            comments: 30,
        }
    }
  }
};
</script>

<style>
#app-products {
  color: red;
}
</style>