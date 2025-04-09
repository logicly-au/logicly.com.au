<template>
  <!-- https://github.com/albertodeago/vue-aspect-ratio?ref=madewithvuejs.com#how-to-install-and-use -->
  <AspectRatio
    ar="13:4"
    width="100%"
    :style="{ backgroundSize: 'cover', backgroundImage: `url(${backgroundUrl})` }"
  >
    <page-section :altrow="altrow" :overlay="overlay">
      <div class="w-full h-full textresponsive grid content-center">
        <div class="mt-0">
        <h1 v-if="heading" class="text-xs md:text-sm xl:text-base font-medium text-center text-white">{{ heading }}</h1>
        <h2 v-if="subheading" class="text-base sm:text-lg md:text-xl xl:text-2xl font-semibold text-center leading-tight text-white">{{ subheading }}</h2>
        <h1 v-if="pageheroheading" class="text-base sm:text-lg lg:text-xl text-center text-white">{{ pageheroheading }}</h1>
      </div>
      </div>
    </page-section>

  </AspectRatio>
</template>

<script>
export default {
  name: "Hero",
  props: {
    heading: String,
    subheading: String,
    pageheroheading: String,
    backgroundUrl: String,
    right: Boolean,
    blacktext: Boolean,
    whitetext: Boolean,
    altrow: Boolean,
    overlay: Boolean
  },
};
</script>

<style scoped>
@media only screen and (max-width: 520px) {
  .textresponsive div {
    margin-top: -0.7rem;
    margin-left: 2rem;
    margin-right: 2rem;
  }
}

@media only screen and (max-width: 450px) {
  .textresponsive div {
    margin-top: -1.2rem;
  }
}

@media only screen and (max-width: 410px) {
  .textresponsive div {
    margin-top: -2rem;
  }
  .textresponsive div h1 {
    font-size: 0.8rem;
  }
  .textresponsive div h2 {
    font-size: 0.9rem;
  }
}
</style>
