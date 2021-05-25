<template>
  <!-- https://github.com/albertodeago/vue-aspect-ratio?ref=madewithvuejs.com#how-to-install-and-use -->
  <AspectRatio
    ar="3:1"
    width="100%"
    :style="{ backgroundSize: 'cover', backgroundImage: `url(${backgroundUrl})` }"
  >
    <page-section :altrow="altrow" :overlay="overlay">
      <div class="-mt-20 sm:-mt-32 md:-mt-40 lg:-mt-48 mx-12 sm:mx-20 md:mx-24 lg:mx-40 xl:mx-56 px-8 md:px-0 xl:px-2 textresponsiveblack">
        <div>
          <h1 class="text-base sm:text-lg lg:text-xl font-semibold text-center text-black">{{ heading }}</h1>
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
    backgroundUrl: String,
    altrow: Boolean,
    overlay: Boolean
  },
};
</script>

<style scoped>
@media only screen and (max-width: 519px) {
  .textresponsiveblack div {
    margin-left: -1rem;
    margin-right: -1rem;
  }
}

@media only screen and (max-width: 450px) {
  .textresponsiveblack div {
    margin-left: -1.5rem;
    margin-right: -1.5rem;
  }
  .textresponsiveblack h1 {
    font-size: 0.9rem;
  }
}

@media only screen and (max-width: 380px) {
  .textresponsiveblack div {
    margin-left: -3rem;
    margin-right: -3rem;
  }
}
</style>
