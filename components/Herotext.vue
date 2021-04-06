i <template>
<page-section :altrow="altrow">
  <div class="flex justify-center ">
    <div class="justify-center">
      <img class="h-32" :src="iconurl" />
    </div>
  </div>
  <div class="mx-0 xl:px-6">
    <div class="text-center text-logiclytextgrey">
      <h1 class="text-2xl font-extrabold text-center pb-2 pt-4 xl:pt-8">{{ heading }}</h1>
      <h2 class="font-light text-lg">{{ subheading }}</h2>
    </div>
  </div>
</page-section>
</template>

<script>
export default {
  name: "Hero",

  // This is how you define all the attributes passed to the component
  // backgroundUrl becomes background-url when used as html attribute
  props: {
    heading: String,
    subheading: String,
    iconurl: String,
    altrow: Boolean
  },
};
</script>

<style scoped>
</style>
