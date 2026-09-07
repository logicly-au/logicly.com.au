<template>
  <NuxtLink :to="buttonlink" class="flex items-center justify-center w-40 h-12 my-5 lowercase font-medium text-center text-white bg-logiclyorange hover:bg-logiclyhover focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-logiclyfocus">
    {{ buttontext }}
  </NuxtLink>
</template>

<script>
export default {
  name: "Button",

    // This is how you define all the attributes passed to the component
    // backgroundUrl becomes background-url when used as html attribute
  props: {
    buttontext: String,
    buttonlink: String,
  },
};
</script>

<style scoped>
</style>
