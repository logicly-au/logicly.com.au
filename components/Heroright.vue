i <template>

  <AspectRatio
    ar="3:1"
    width="100%"
    :style="{ backgroundSize: 'cover', backgroundImage: `url(${backgroundUrl})` }"
  >
    <div class="grid grid-cols-8 w-full h-full">
      <div class="col-span-4 md:col-span-3 lg:col-span-2 col-start-5 md:col-start-5 lg:col-start-5 grid grid-rows-5 pr-20 sm:pr-32 md:pr-0 lg:-mr-10 pl-4 md:pl-8 lg:pl-16 xl:pl-20">
        <div class="row-start-1 md:row-start-2 mt-4 sm:mt-10 md:mt-0 md:-mt-4">
          <h1 class="font-medium text-white text-xs md:text-sm xl:text-base">{{ heading }}</h1>
          <h2 class="font-semibold text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">{{ subheading }}</h2>
        </div>
        <div class="row-start-1 row-span-5 flex flex-wrap content-center">
          <h1 class="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-normal xl:font-medium text-white pl-2 lg:pl-0 -mr-8 lg:-mr-0">{{ midpageheading }}</h1>
        </div>
      </div>
    </div>
  </AspectRatio>

</template>

<script>
export default {
  name: "HeroRight",
  props: {
    heading: String,
    subheading: String,
    midpageheading: String,
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
.bg-overlay {
  background-color: rgba(248, 247, 216, 0.7);
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
