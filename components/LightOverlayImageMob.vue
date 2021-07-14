<template>
  <!-- https://github.com/albertodeago/vue-aspect-ratio?ref=madewithvuejs.com#how-to-install-and-use -->
  <AspectRatio
    ar="7:4"
    width="100%"
    :style="{ backgroundSize: 'cover', backgroundImage: `url(${imageurl})` }"
  >
    <page-section :altrow="altrow" :overlay="overlay">
      <div class="w-full h-full textresponsive grid content-end">
        <div class="text-xl font-medium text-center text-white leading-snug mt-8">
          <span v-html="overlaytext"></span>
        </div>
      </div>
    </page-section>

  </AspectRatio>
</template>

<script>
export default {
  name: "ImageUrl",
  props: {
    overlaytext: String,
    imageurl: String,
    right: Boolean,
    blacktext: Boolean,
    whitetext: Boolean,
    altrow: Boolean,
    overlay: Boolean
  },
};
</script>

<style scoped>
.overlay {
  background-color: rgba(0, 0, 0, 0.25)!important;
  z-index:10;
}
</style>
