<template>
  <page-section altrow>
    <article altrow>
      <div class="grid grid-cols-12">
        <div class="col-span-12 lg:col-span-3 text-logiclytextgrey">
          <h2 class="font-semibold pb-2">Category</h2>
        </div>
      <div class="col-span-12 lg:col-span-9 lg:col-start-4 xl:col-span-8 xl:col-start-5 lg:pl-6 xl:pl-0 blog-text">
        <h1 class="text-xl font-semibold pb-2 text-logiclytheme4">Blog post heading</h1>
        <p class="text-lg  pb-2 text-logiclytextgrey">Blog post description</p>
      </div>
    </div>

    </article>
  </page-section>
</template>

<script>
export default {
  name: "BlogHeading",

  // This is how you define all the attributes passed to the component
  // backgroundUrl becomes background-url when used as html attribute
  props: {
    heading: String,
    subheading: String,
    iconurl: String,
  },
};

</script>

<style scoped>
</style>
