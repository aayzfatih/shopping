<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup>
const cartStore = useCartStore();

if (process.client) {
  cartStore.setCart(JSON.parse(localStorage.getItem("cart") || "[]"));
}
</script>
