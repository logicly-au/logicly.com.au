<template>
  <!-- this contains an example of loading a class via boolean value, see :class -->
  <page-section>
    <div class="content-center object-contain object-center w-full text-logiclytextgrey">
      <h2 class="text-2xl font-semibold leading-snug text-center text-logiclytextgrey">{{ text }}</h2>
      <div class="grid justify-center p-4 align-center">
        <NuxtLink :to="buttonLink" class="flex items-center justify-center w-40 h-12 my-5 lowercase font-medium text-center text-white bg-logiclyorange hover:bg-logiclyhover">
          {{ buttonText }}
        </NuxtLink>
      </div>
    </div>
  </page-section>
</template>

<script>
export default {
  name: "CTA",

    // This is how you define all the attributes passed to the component
    // backgroundUrl becomes background-url when used as html attribute
  props: {
    text: String,
    buttonLink: String,
    buttonText: String
  },
};
</script>

<style scoped>
</style>
