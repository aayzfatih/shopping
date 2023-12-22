<template>
  <div class="container max-w-screen-xl mx-auto px-4">
    <div class="flex flex-row justify-between shadow mt-5 p-2 rounded">
      <div class="flex">
        <button
          class="flex p-2 flex-row items-center justify-center gap-2 hover:text-orange-500 focus:text-orange-500 focus:border-b-4 focus:border-orange-500"
        >
          <Icon name="heroicons-solid:heart" size="1.5em" color="orange"></Icon>

          FAVORİLERİM
        </button>
        <button
          class="flex p-2 flex-row items-center justify-center gap-2 hover:text-orange-500 focus:text-orange-500 focus:border-b-4 focus:border-orange-500"
        >
          <Icon
            name="material-symbols:collections-bookmark-sharp"
            size="1.5em"
            color="orange"
          ></Icon>
          KOLEKSİYONLARIM
        </button>
      </div>

      <input
        type="text"
        placeholder="Favorilerimde ara"
        class="bg-gray-100 border rounded p-2 w-2/6"
      />
    </div>
    <div class="flex gap-3 mt-3 text-sm font-semibold">
      <button
        class="border rounded shadow p-2 flex item-center justify-center gap-2 transition-colors hover:text-orange-500 hover:ring-orange-500 hover:border-2 focus:border-2 hover:border-orange-500 focus:text-orange-500 focus:ring-orange-500 focus:border-orange-500"
      >
        <Icon
          name="material-symbols-light:heart-check"
          color="orange"
          size="1.5em"
        >
        </Icon>
        Tüm Favoriler
      </button>
      <button
        class="border rounded p-2 shadow flex item-center justify-center gap-2 transition-colors hover:text-blue-500 hover:ring-blue-500 hover:border-2 focus:border-2 hover:border-blue-500 focus:text-blue-500 focus:ring-blue-500 focus:border-blue-500"
      >
        <Icon
          name="material-symbols-light:stars"
          color="blue"
          size="1.5em"
        ></Icon>
        Avantajlı Ürünler
      </button>
      <button
        class="border rounded p-2 shadowflex item-center justify-center gap-2 transition-colors hover:text-red-500 hover:ring-red-500 hover:border-2 focus:border-2 hover:border-red-500 focus:text-red-500 focus:ring-red-500 focus:border-red-500"
      >
        <Icon
          name="streamline:money-graph-bar-decrease-arrow-product-performance-down-decrease-graph-business-chart"
          color="red"
          size="1.5em"
        ></Icon>
        Fiyatı Düşenler
      </button>
      <button
        class="border rounded p-2 shadow flex item-center justify-center gap-2 transition-colors hover:text-blue-500 hover:ring-indigo-500 hover:border-2 focus:border-2 hover:border-indigo-500 focus:text-indigo-500 focus:ring-indigo-500 focus:border-indigo-500"
      >
        <Icon name="bxs:coupon" color="blue" size="1.5em"></Icon>
        Kuponlu Ürünler
      </button>
    </div>
  </div>
</template>
blue

<script setup></script>
