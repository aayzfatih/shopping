<template>
  <NavBar />
  <div class="container max-w-screen-xl mx-auto px-4">
    <div class="grid grid-cols-8 gap-5">
      <AccountSideBar />

      <slot />
    </div>
  </div>
  <Footer />
</template>
