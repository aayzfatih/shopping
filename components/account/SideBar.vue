<template>
  <div class="col-span-2 mt-5 ml-10 flex flex-col gap-2">
    <label class="border rounded p-2 font-bold">Fatih Ayaz</label>
    <div class="border rounded p-3">
      <div class="font-bold border-b-2 mb-2">
        <label>Siparişlerim</label>
      </div>
      <ul class="flex flex-col gap-2 text-sm">
        <li>Tüm Siparişlerim</li>
        <li>Değerlendirmelerim</li>
        <li>Satıcı Mesajlarım</li>
        <li>Tekrar Satın Al</li>
      </ul>
    </div>
    <div class="border rounded p-3">
      <div class="font-bold border-b-2 mb-2">
        <label>Sana Özel</label>
      </div>
      <ul class="flex flex-col gap-2 text-sm">
        <li>İndirimli Kuponlarım</li>
        <li>Önceden Gezdiklerim</li>
        <li>Takip Ettiğim Mağazalar</li>
        <li>Trendyol Elit</li>
      </ul>
    </div>
    <div class="border rounded p-3">
      <div class="font-bold border-b-2 mb-2">
        <label>Hizmetlerim</label>
      </div>
      <ul class="flex flex-col gap-2 text-sm">
        <li>Krediler</li>
        <li>Şanslı Çekiliş</li>
        <li>CardFinans AyazStore</li>
      </ul>
    </div>
    <div class="border rounded p-3">
      <div class="font-bold border-b-2 mb-2">
        <label>Hesabım & Yardım</label>
      </div>
      <ul class="flex flex-col gap-2 text-sm">
        <NuxtLink to="/account/user-info">Kullanıcı Bilgilerim</NuxtLink>
        <NuxtLink to="/account/address-info">Adres Bilgilerim</NuxtLink>
        <li>Kayıtlı Kartlarım</li>
        <li>Duyuru Tercihlerim</li>
        <li>Yardım</li>
      </ul>
    </div>
  </div>
</template>
