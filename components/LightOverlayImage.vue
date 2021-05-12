<template>
  <div class="object-contain object-center w-full bg-cover" :style="{ backgroundImage: `url(${imageurl})`, height: height }" >
    <div class="relative overlay" style="height: 100%">
      <div style="height: 100%" class="relative z-10 grid grid-rows-5 grid-cols-5">
        <div class="row-start-4 col-start-2 col-span-3 grid content-center lg:pt-10 text-xl leading-snug font-medium md:font-semibold text-center text-white"><span v-html="overlaytext"></span></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ImageUrl",
  props: {
  overlaytext: String,
  imageurl: String,
  altrow: Boolean,
  height: String,
  }
};
</script>

<style scoped>
.overlay {
  background-color: rgba(0, 0, 0, 0.25)!important;
  z-index:10;
}
</style>
