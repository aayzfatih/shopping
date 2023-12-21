<template>
  <ProductDetail :product="product" />
</template>
<script setup>
const route = useRoute();
const productId = ref(route.params.id);

const { data: product } = await useFetch(
  "https://fakestoreapi.com/products/" + productId.value
);
console.log(productId.value);
</script>
