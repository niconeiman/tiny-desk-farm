<script setup lang="ts">
const user = useSupabaseUser();
console.log(1, user.value);
watch(
  user,
  () => {
    console.log(2, user.value);
    if (user.value) {
      // Redirect to protected page
      return navigateTo('/basics');
    }
  },
  { immediate: true }
);
</script>
<template>
  <div>Waiting for login...</div>
</template>
