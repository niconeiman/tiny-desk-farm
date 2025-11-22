<script setup lang="ts">
// This page redirects to /basics (example protected/home page)
definePageMeta({
  middleware: [
    async () => {
      return navigateTo('/basics', { replace: true });
    },
  ],
});
</script>
<template>
  <div>Loading...</div>
</template>
