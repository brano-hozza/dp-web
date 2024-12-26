<template>
  <UHorizontalNavigation
    :links="links"
    class="border-b border-gray-200 dark:border-gray-800"
  />
</template>
<script setup lang="ts">
const links = [
  {
    label: "Home",
    avatar: {
      src: "https://avatars.githubusercontent.com/u/739984?v=4",
    },
  },
];
</script>
