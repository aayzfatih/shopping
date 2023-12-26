<template>
  <AccountUserInfo :user="user" />
</template>
<script setup>
definePageMeta({ layout: "account" });
const { data: user } = await useFetch('https://fakestoreapi.com/users/1')
</script>
