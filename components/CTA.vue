i <template>
  <!-- this contains an example of loading a class via boolean value, see :class -->
  <div class="object-contain object-center w-full h-64 bg-cover">
    <div class="container mx-auto">
      <div class="grid grid-rows-3 content-center h-64">
        <div class="row-start-2 text-center">
          <h1 class="text-2xl font-extrabold text-center text-logiclytextgrey">{{ text }}</h1>
          <button><a class="block p-2 m-5 text-white bg-logiclyorange" :href="buttonLink">{{ buttonText }}</a></h2></button>
        </div>
      </div>
    </div>
  </div>
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
