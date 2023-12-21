<template>
  <div class="col-span-6">
    <h1 class="font-bold text-xl border rounded p-3 mt-5">Addres Bilgilerim</h1>
    <div class="border rounded mt-5 w-full">
      <div class="grid grid-cols-3 m-5">
        <div class="col-span-1 border rounded text-xs">
          <h2 class="font-semibold text-lg bg-gray-100 p-2">Kadriye Ev</h2>
          <h4 class="text-xs p-2">Fatih Ayaz</h4>
          <p class="p-2">
            Kemalpaşa Mah <br />
            Kemalpaşa mah. 175. Sokak Şehri Seyir Sitesi Bina<br />
            Serdivan/Sakarya
          </p>
          <span class="p-2">530*****07</span>
          <div class="flex flex-row justify-between p-2 my-5">
            <button
              class="border border-red-500 rounded p-2 text-red-500 hover:bg-red-500 hover:text-white"
            >
              Sil
            </button>
            <button
              class="border border-orange-300 rounded p-2 text-orange-400 hover:bg-orange-500 hover:text-white"
            >
              Adresi Düzenle
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const birthYear = ref([]);
function addItemToArray() {
  for (let i = 2011; i > 1950; i--) {
    birthYear.value.push(i);
  }
}
addItemToArray();
</script>
