<script setup>
import Link from '@components/link.vue';

const client = useSupabaseClient();
const user = useSupabaseUser();

const logout = async () => {
  await client.auth.signOut();
  navigateTo('/login');
};
</script>
<template>
  <nav class="bg-primary-900 text-inverse p-4 text-cente">
    <div v-if="user" class="flex items-center justify-between">
      <div class="flex items-center gap-2">
        <Link to="/">Tiny Desk Farm</Link>
        <Link to="/">Home</Link>
        <Link to="/basics">Basics</Link>
      </div>
      <div class="flex items-center gap-2">
        <div>Hi {{ user.email }}</div>
        <button
          @click="logout"
          class="hover:text-primary-500 transition cursor-pointer"
        >
          Logout
        </button>
      </div>
    </div>
  </nav>
</template>
