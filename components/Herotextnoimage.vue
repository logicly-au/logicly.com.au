i <template>
<page-section :altrow="altrow">
    <div class="grid grid-cols-12">
    <div class="col-span-12 xl:col-span-10 col-start-1 xl:col-start-2">
      <div class="text-center text-logiclytextgrey">
        <h1 class="text-2xl font-semibold text-center pb-2">{{ heading }}</h1>
        <h2 class="font-light text-lg">{{ subheading }}</h2>
      </div>
    </div>
  </div>
  </div>
</page-section>
</template>

<script>
export default {
  name: "HerotextNoImage",

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
