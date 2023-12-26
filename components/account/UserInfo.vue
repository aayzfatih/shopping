<template>
  <div class="col-span-6">
    <h1 class="font-bold text-xl border rounded p-3 mt-5">
      Kullanıcı Bilgilerim
    </h1>
    <div class="mt-5 flex flex-row">
      <div class="border w-1/2 p-4 flex flex-col gap-5">
        <h2 class="text-orange-600">Üyelik Bilgilerim</h2>
        <div class="flex flex-row gap-9">
          <div class="flex flex-col gap-1">
            <label class="font-semibold">Ad</label>
            <input type="text" class="border rounded p-2 bg-gray-100" :placeholder="user.name.firstname" />
          </div>
          <div class="flex flex-col gap-1">
            <label class="font-semibold">Soyad</label>
            <input type="text" class="border rounded p-2 bg-gray-100" :placeholder="user.name.lastname" />
          </div>
        </div>
        <div class="flex flex-col gap-1">
          <label class="font-semibold">Email</label>
          <input type="text" class="border rounded p-2 bg-gray-100" :placeholder="user.email" />
        </div>
        <div class="flex flex-col gap-1">
          <label class="font-semibold">Cep Telefonu</label>
          <div class="flex flex-row gap-4">
            <select class="p-2 border rounded bg-gray-100 w-2/6 cursor-pointer" data-te-select-init>
              <option value="+90">+90</option>
              <option value="+49">+49</option>
              <option value="+43">+43</option>
              <option value="+32">+32</option>
              <option value="+1">+1</option>
              <option value="+359">+359</option>
              <option value="+45">+45</option>
              <option value="+48">+48</option>
            </select>
            <input type="text" class="border rounded p-2 bg-gray-100 w-full" :placeholder="user.phone" />
          </div>
        </div>
        <div class="flex flex-col gap-1">
          <label class="font-semibold">Doğum Tarihiniz</label>
          <div class="flex flex-row gap-4">
            <select class="p-2 border rounded bg-gray-100 w-2/6 cursor-pointer" data-te-select-init>
              <option value="" disabled selected>Gün</option>
              <option v-for="i in 30" :key="i">{{ i }}</option>
            </select>
            <select class="p-2 border rounded bg-gray-100 w-2/6 cursor-pointer" data-te-select-init>
              <option value="" disabled selected>Ay</option>
              <option v-for="i in 12" :key="i">{{ i }}</option>
            </select>
            <select class="p-2 border rounded bg-gray-100 w-2/6 cursor-pointer" data-te-select-init>
              <option value="" disabled selected>Yıl</option>
              <option v-for="(item, index) in birthYear" :key="index">
                {{ item }}
              </option>
            </select>
          </div>
        </div>
        <div class="flex flex-col gap-1">
          <label class="font-semibold">Kurumsal</label>
          <div>
            <input type="checkbox" id="kurumsal" name="kurumsal" />
            <label class="text-sm ml-2" for="kurumsal">
              İş yeri alışverişlerim için fırsatlardan haberdar olmak istiyorum.
            </label>
          </div>
        </div>
        <button class="border border-orange-300 rounded p-2 text-orange-500 hover:bg-orange-500 hover:text-white">
          GÜNCELLE
        </button>
      </div>

      <div class="border w-1/2 p-4 flex flex-col gap-5">
        <h2 class="text-orange-600">Şifre Güncelleme</h2>
        <div class="flex flex-col gap-1">
          <label class="font-semibold">Şu Anki Şifre</label>
          <input type="password" class="border rounded p-2 bg-gray-100" placeholder="************" />
        </div>
        <div class="flex flex-col gap-1">
          <label class="font-semibold">Yeni Şifre </label>
          <input type="password" class="border rounded p-2 bg-gray-100" />
          <p class="text-xs">
            Şifreniz <span class="font-bold">en az 7 karakter</span> ve
            <span class="font-bold">en fazla 64 karakter</span> olmalı, harf ve
            rakam içermelidir.
          </p>
        </div>
        <div class="flex flex-col gap-1">
          <label class="font-semibold">Yeni Şifre(Tekrar)</label>
          <input type="password" class="border rounded p-2 bg-gray-100" />
        </div>
        <button class="border border-orange-300 rounded p-2 text-orange-500 hover:bg-orange-500 hover:text-white">
          GÜNCELLE
        </button>
        <div class="bg-gray-200 p-4 border rounded flex flex-row gap-2">
          <div>
            <h4>İKİ ADIMLI DOĞRULAMA</h4>
            <p class="text-xs">
              İki adımlı doğrulama yöntemini etkinleştirdiğinizde,<br />
              kişisel şifrelerinize ek olarak kayıtlı cep telefonunuza
              <br />
              gelen doğrulama koduyla oturum açarsınız.
            </p>
          </div>
          <div>
            <label class="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" class="sr-only peer" />
              <div
                class="w-11 h-6 bg-gray-500 peer-focus:outline-none peer-focus:ring-4 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600">
              </div>
            </label>
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
const props = defineProps({
  user: {
    type: Object,
    required: true
  }
})
</script>
