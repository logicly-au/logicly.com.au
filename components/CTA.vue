i <template>
  <!-- this contains an example of loading a class via boolean value, see :class -->
  <page-section :altrow="altrow">
    <div class="object-contain object-center content-center w-full text-logiclytextgrey">
      <h1 class="text-2xl font-extrabold text-center text-logiclytextgrey">{{ text }}</h1>
      <div class="grid justify-center align-center pt-2">
        <button class="block h-12 w-40 my-5 text-center text-white bg-logiclyorange">
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
</style>
