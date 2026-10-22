<script setup lang="ts">
import { RouterView } from "vue-router";
import Navbar from "../components/organisms/Navbar.vue";
import Footer from "../components/organisms/Footer.vue";
</script>

<template>
  <div class="relative w-full min-h-screen">
  <header class="w-full py-6.5 px-9 flex items-start justify-center sticky top-0 z-10 bg-white"><Navbar/></header>
    <main class="min-h-screen">
      <RouterView />
    </main>
    <Footer/>
  </div>
</template>

<style></style>
