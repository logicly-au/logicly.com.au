i <template>

    <button class="block w-40 h-12 my-5 text-center text-white bg-logiclyorange">
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
</style>
