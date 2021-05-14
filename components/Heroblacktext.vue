<template>
  <!-- https://github.com/albertodeago/vue-aspect-ratio?ref=madewithvuejs.com#how-to-install-and-use -->
  <AspectRatio
    ar="3:1"
    width="100%"
    :style="{ backgroundSize: 'cover', backgroundImage: `url(${backgroundUrl})` }"
  >
    <page-section :altrow="altrow" :overlay="overlay">
      <h1 class="-mt-20 sm:-mt-32 md:-mt-40 lg:-mt-48 mx-10 sm:mx-20 md:mx-24 lg:mx-40 xl:mx-56 px-8 md:px-0 xl:px-2 text-lg lg:text-xl font-semibold text-center text-black">{{ heading }}</h1>
    </page-section>

  </AspectRatio>
</template>

<script>
export default {
  name: "Hero",
  props: {
    heading: String,
    backgroundUrl: String,
    altrow: Boolean,
    overlay: Boolean
  },
};
</script>

<style scoped>
  .h-128 {
  height:32rem;
}

.bg-overlay {
  background-color: rgba(248, 247, 216, 0.7);
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
