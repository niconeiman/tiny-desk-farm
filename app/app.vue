<script setup>
useHead({
  title: 'Nuxtflix',
  meta: [
    { name: 'description', content: 'A Netflix clone built with Nuxt.js' },
    {
      name: 'dev-note',
      content:
        'Thanks for checking out the site! For contact, please reach out.',
    },
  ],
  bodyAttrs: {
    class: 'bg-secondary',
  },
  script: [
    {
      innerHTML: `
        console.log("%c🌈 Welcome to %cNuxtflix!%c 🍿", "color: #fbbf24; font-size: 18px; font-weight: bold;", "color: #ef4444; font-size: 22px; font-weight: bold; background: linear-gradient(90deg, #a78bfa, #f472b6); padding: 2px 8px; border-radius: 5px;", "color: #38bdf8; font-size: 18px; font-weight: bold;");
        let msg = "Thanks for checking out the site! Devs can contact us anytime.";
        let colors = ["#f87171", "#fbbf24", "#4ade80", "#60a5fa", "#a78bfa", "#f472b6"];
        let styled = "";
        for(let i=0;i<msg.length;i++) {
          styled += "%c" + msg[i];
        }
        let colorArr = [];
        for(let i=0;i<msg.length;i++) {
          colorArr.push("color:"+colors[i%colors.length]+";font-size:14px;");
        }
        console.log(styled, ...colorArr);

        `,
    },
  ],
});
</script>
<template>
  <NuxtLayout name="default">
    <NuxtPage />
  </NuxtLayout>
</template>
