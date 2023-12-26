<template>
  <div class="container max-w-screen-xl mx-auto px-4">
    <div v-if="cartItemsTotal === 0" class="flex flex-row justify-between items-center p-8 shadow-lg mt-5">
      <div class="flex items-center gap-2">
        <div class="bg-blue-200 p-4 rounded-full">
          <Icon name="material-symbols:remove-shopping-cart" size="2em" color="blue"></Icon>
        </div>
        <h4 class="font-semibold text-xl"> Sepetinizde Ürün bulunmamaktadır</h4>
      </div>
      <NuxtLink to="/" class="bg-blue-400 px-10 py-3 rounded text-gray-50 font-semibold text-xl">Alışverişe Başla
      </NuxtLink>
    </div>
    <div v-else class=" flex shadow-md my-10">
      <div class="w-3/4 bg-white px-10 py-10">
        <div class="flex justify-between border-b pb-8">
          <h1 class="font-semibold text-2xl">Alışveriş Sepetim</h1>
          <h2 class="font-semibold text-2xl">{{ cartItemsTotal }} Ürün</h2>
        </div>
        <div class="flex mt-10 mb-5">
          <h3 class="font-semibold text-gray-600 text-xs uppercase w-2/5">
            Ürün Detayı
          </h3>
          <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">
            Adet
          </h3>
          <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">
            Fiyat
          </h3>
          <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">
            Toplam
          </h3>
        </div>
        <div v-for="item in cartItems" class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
          <div class="flex w-2/5">
            <!-- product -->
            <div class="w-20">
              <img class="h-24" :src="item.image" alt="" />
            </div>
            <div class="flex flex-col justify-between ml-4 flex-grow">
              <span class="font-bold text-sm">{{ item.title }}</span>
              <span class="text-red-500 text-xs">{{ item.category }}</span>
              <button @click="cartStore.removeCartItem(item.id)"
                class="flex font-semibold hover:text-red-500 text-gray-500 text-xs">Sil</button>
            </div>
          </div>
          <div class="flex justify-center w-1/5">
            <svg class="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
              <path
                d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
            </svg>

            <input class="mx-2 border text-center w-8" type="text" value="1" />

            <svg @click.prevent="cartStore.quantitiy++" class="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
              <path
                d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
            </svg>
          </div>
          <span class="text-center w-1/5 font-semibold text-sm">${{ item.price }}</span>
          <span class="text-center w-1/5 font-semibold text-sm">${{ item.price }}</span>

        </div>

        <NuxtLink to="/" class="flex font-semibold text-indigo-600 text-sm mt-10">
          <svg class="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512">
            <path
              d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
          </svg>
          Alışverişe devam et
        </NuxtLink>
      </div>

      <div id="summary" class="w-1/4 px-8 py-10">
        <h1 class="font-semibold text-2xl border-b pb-8">Sipariş Özeti</h1>
        <div class="flex justify-between mt-10 mb-5">
          <span class="font-semibold text-sm uppercase">{{ cartItemsTotal }} Ürün</span>
          <span class="font-semibold text-sm">{{ cartTotal }}$</span>
        </div>
        <div>
          <label class="font-medium inline-block mb-3 text-sm uppercase">Kargo</label>
          <select class="block p-2 text-gray-600 w-full text-sm">
            <option>Standart Kargo - $10.00</option>
          </select>
        </div>
        <div class="py-10">
          <label for="promo" class="font-semibold inline-block mb-3 text-sm uppercase">İndirim Kodu</label>
          <input v-model="code" type="text" id="promo" placeholder="İndirim kodunu giriniz" class="p-2 text-sm w-full" />
        </div>
        <button class="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">
          Uygula
        </button>
        <div class="border-t mt-8">
          <div class="flex font-semibold justify-between py-6 text-sm uppercase">
            <span>Toplam</span>
            <span v-if="cartTotal > 100">${{ cartTotal + 10 }}</span>
            <span v-else>${{ cartTotal }}</span>
          </div>
          <button class="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">
            Sepeti Onayla
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const code = ref("");
const cartStore = useCartStore();
const cartItems = computed(() => {
  return cartStore.getCartItems;
});
const cartItemsTotal = computed(() => {
  return cartStore.getItemsCount;
});
const cartTotal = computed(() => {
  return cartStore.getCartTotal;
});

</script>
