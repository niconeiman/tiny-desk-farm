<script setup>
import Header from '@components/header.vue';
import Footer from '@components/footer.vue';
</script>
<template>
  <div
    class="container mx-auto p-4 grid grid-rows-[auto_1fr_auto] min-h-screen bg-gray-800"
  >
    <Header />
    <main class="flex-1 bg-white p-4">
      <slot />
    </main>
    <Footer />
  </div>
</template>
