i <template>
<page-section :altrow="altrow" class=" lg:py-8">
  <div class="flex justify-center ">
    <div class="justify-center mb-6">
      <img :width="imgwidth" :src="iconurl" :alt="alttext" />
    </div>
  </div>
  <div class="px-0 xl:px-6">
    <div class="text-center text-logiclytextgrey">
      <h2 v-if="heading" class="text-2xl font-semibold leading-snug text-center pb-2 pt-4 xl:pt-8">{{ heading }}</h2>
      <h3 v-if="subheading" class="font-light text-lg">{{ subheading }}</h3>
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
    alttext: {
      type: String,
      default: "Image"
    },
    altrow: Boolean,
    imgwidth: String
  },
};
</script>

<style scoped>
</style>
