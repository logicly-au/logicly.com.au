<template>
  <div class="object-contain object-center w-full bg-cover" :style="{ backgroundImage: `url(${imageurl})`, height: height }" >
    <div class="relative grid-rows-4 test" style="height: 100%">
      <div style="height: 100%" class="relative z-10 grid font-bold text-center text-white">
        <div class="row-span-1 row-start-2 p-2 text-xl">{{ text }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "ImageUrl",
    props: {
    text: String,
    imageurl: String,
    altrow: Boolean,
    height: String,
    }
};
</script>

<style scoped>
.test {
    background-color: rgba(0, 0, 0, 0.5)!important;
    z-index:10;
}
</style>
