<script setup lang="ts">
const supabase = useSupabaseClient();
const user = useSupabaseUser();
const email = ref('');

const signInWithOtp = async () => {
  const { error, data } = await supabase.auth.signInWithOtp({
    email: email.value,
    options: {
      emailRedirectTo: 'http://localhost:3000/confirm',
    },
  });
  if (error) console.log(error);
};
</script>
<template>
  <div class="flex items-center justify-center min-h-full">
    <div class="w-full max-w-md">
      <h1 class="text-3xl font-bold text-center mb-8 text-primary">Login</h1>
      <form @submit.prevent="signInWithOtp">
        <input
          v-model="email"
          type="email"
          placeholder="Enter your email"
          class="mt-2 mb-4 block w-full rounded-md border border-default bg-primary px-4 py-2 text-primary focus:border-primary-500 focus:ring focus:ring-primary-100 transition outline-none"
        />
        <button
          type="submit"
          class="w-full rounded-md bg-primary-500 px-4 py-2 text-inverse font-medium hover:bg-primary-600 transition"
        >
          Send me a magic link
        </button>
      </form>
    </div>
  </div>
</template>
