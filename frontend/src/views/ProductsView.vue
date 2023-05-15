<template>
  <Products v-bind:products="products" v-slot="props">
    <li @click="getProduct(props.product.id)">{{ props.product.name }}</li>
  </Products>
</template>

<script>
import ProductInfo from "@/components/ProductInfo.vue";
import Products from "@/components/Products.vue";

export default {
  components: { ProductInfo, Products },
  name: "Products.vue",
  data() {
    return {
      products: [
        {
          id: 1,
          name: "Imac",
        },
        {
          id: 2,
          name: "MacBook",
        },
        {
          id: 3,
          name: "Mouse",
        },
      ],
    };
  },
  methods: {
    getProduct(id) {
      console.log(id);
    },
  },
};
</script>

<style>
#app-products {
  color: red;
}
</style>