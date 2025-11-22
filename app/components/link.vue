<script setup lang="ts">
defineProps<{
  to: string;
}>();
</script>

<template>
  <NuxtLink
    :to="to"
    class="hover:text-primary-500 transition cursor-pointer"
    v-bind="$attrs"
  >
    <slot />
  </NuxtLink>
</template>
