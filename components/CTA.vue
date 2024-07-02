<template>
  <!-- this contains an example of loading a class via boolean value, see :class -->
  <page-section>
    <div class="content-center object-contain object-center w-full text-logiclytextgrey">
      <h1 class="text-2xl font-semibold leading-snug text-center text-logiclytextgrey">{{ text }}</h1>
      <div class="grid justify-center pt-4 align-center">
        <button class="block w-40 h-12 my-5 font-medium text-center text-white bg-logiclyorange hover:bg-logiclyhover">
          <NuxtLink :to="buttonLink">{{ buttonText }}</NuxtLink>
        </button>
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
button > a {
  text-transform: lowercase!important;
}
</style>
