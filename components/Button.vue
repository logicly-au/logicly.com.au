i <template>

    <button class="block w-40 h-12 my-5 font-medium text-center text-white tt-lc bg-logiclyorange hover:bg-logiclyhover">
      <NuxtLink :to="buttonlink">{{ buttontext }}</NuxtLink>
    </button>

  </div>
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
button > a {
  text-transform: lowercase!important;
}
</style>
