i <template>
<page-section :altrow="altrow">
          <div class="flex justify-center col-span-5">
            <img class="h-32" :src="iconurl" />
          </div>
          <div class="col-span-5 text-center text-logiclytextgrey">
            <h1 class="text-xl font-extrabold">{{ heading }}</h1>
            <h2 class="font-light text-md">{{ subheading }}</h2>
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