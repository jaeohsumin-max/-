<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-grey-10 text-white">
      <q-toolbar class="q-px-md">
        <img
          :src="logoUrl"
          alt="CODEMUSE"
          class="header-logo q-mr-sm"
        />
        <q-space />
        <q-chip dense color="grey-8" text-color="white" icon="inventory_2">
          OMS
        </q-chip>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <q-page class="bg-grey-2">
        <OrderManagement />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import OrderManagement from "./pages/OrderManagement.vue";
import logoUrl from "./assets/codemuse-logo.png";
</script>

<style scoped>
.header-logo {
  height: 36px;
  width: auto;
  display: block;
  object-fit: contain;
}

@media (min-width: 600px) {
  .header-logo {
    height: 44px;
  }
}
</style>
