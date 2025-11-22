<script setup>
const client = useSupabaseClient();
const user = useSupabaseUser();

const logout = async () => {
  await client.auth.signOut();
  navigateTo('/login');
};
</script>
<template>
  <nav
    class="bg-primary-900 text-inverse p-4 text-center flex justify-between items-center"
  >
    <div>Tiny Desk Farm</div>
    <div v-if="user">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/basics">Basics</NuxtLink>
      <button @click="logout">Logout</button>
    </div>
  </nav>
</template>
