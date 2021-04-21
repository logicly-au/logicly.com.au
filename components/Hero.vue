<template>
  <!-- https://github.com/albertodeago/vue-aspect-ratio?ref=madewithvuejs.com#how-to-install-and-use -->
  <AspectRatio
    ar="3:1"
    width="100%"
    :style="{ backgroundSize: 'cover', backgroundImage: `url(${backgroundUrl})` }"
  >
            <page-section :altrow="altrow" :overlay="overlay">

              <h1 class="font-bold text-center text-white">{{ heading }}</h1>
              <h2 class="text-2xl font-semibold text-center text-white">{{ subheading }}</h2>

            </page-section>

  </AspectRatio>
</template>

<script>
export default {
  name: "Hero",
  props: {
    heading: String,
    subheading: String,
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
