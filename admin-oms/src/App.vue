<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="text-grey-9 border-bottom oms-header">
      <q-toolbar class="q-px-md">
        <img
          :src="logoUrl"
          alt="CODEMUSE"
          class="header-logo"
        />
        <q-space />
        <q-chip dense color="grey-9" text-color="white" icon="inventory_2">
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
.border-bottom {
  border-bottom: 1px solid #e8e4df;
}

.oms-header {
  background-color: #faf9f6 !important;
}

.header-logo {
  height: 40px;
  width: auto;
  display: block;
  object-fit: contain;
  object-position: left center;
}

@media (min-width: 600px) {
  .header-logo {
    height: 48px;
  }
}
</style>
