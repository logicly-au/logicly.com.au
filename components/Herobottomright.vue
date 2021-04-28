i <template>
  <AspectRatio
    ar="3:1"
    width="100%"
    :style="{ backgroundSize: 'cover', backgroundImage: `url(${backgroundUrl})` }"
  >
  <div class="grid grid-rows-5 grid-cols-2 w-full h-full">
    <div class="row-start-4 col-start-2 pl-4 pr-16 md:pr-40 lg:pr-44 xl:pr-64 md:pl-8 lg:pl-16 xl:pl-20 sm:pt-2 md:pt-4 xl:pt-8">
      <h1 class="text-white text-xs sm:text-sm md:text-base lg:text-lg xl:text-2xl font-medium">{{ heading }}</h1>
    </div>
  </div>

  </AspectRatio>


</template>

<script>
  export default {
    name: "HeroBottomRight",
    props: {
      heading: String,
      backgroundUrl: String,
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
