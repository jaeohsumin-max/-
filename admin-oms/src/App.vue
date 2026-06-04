<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-grey-10 text-white">
      <q-toolbar>
        <q-toolbar-title class="text-weight-medium">
          CODEMUSE 백오피스
        </q-toolbar-title>
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
</script>
