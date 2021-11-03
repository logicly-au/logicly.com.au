i <template>

  <AspectRatio
    ar="3:1"
    width="100%"
    :style="{ backgroundSize: 'cover', backgroundImage: `url(${backgroundUrl})` }">
    <div class="grid grid-rows-6 grid-cols-2 w-full h-full">
      <div class="row-start-3 col-span-1 ml-6 sm:ml-16 md:ml-16 xl:pl-12 md:pr-12 -mt-4 xl:-mt-6 heroresponsive">
        <div>
          <h1 class="text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-3xl font-medium leading-snug">{{ heading }}</h1>
        </div>
      </div>
    </div>
  </AspectRatio>

</template>

<script>
  export default {
    name: "HeroIndex",
    props: {
      heading: String,
      backgroundUrl: String,
    },
  };
</script>

<style scoped>
@media only screen and (max-width: 550px) {
  .heroresponsive h1 {
    font-size: 0.8rem;
  }
}

@media only screen and (max-width: 483px) {
  .heroresponsive div {
    margin-right: -0.3rem;
  }
}

@media only screen and (max-width: 424px) {
  .heroresponsive div {
    margin-left: -0.4rem;
    margin-right: -1rem;
  }
}

@media only screen and (max-width: 390px) {
  .heroresponsive div {
    margin-left: -0.4rem;
    margin-right: -3rem;
  }
}
</style>
