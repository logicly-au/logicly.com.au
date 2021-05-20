i <template>
  <AspectRatio
    ar="3:1"
    width="100%"
    :style="{ backgroundSize: 'cover', backgroundImage: `url(${backgroundUrl})` }"
  >
  <div class="grid grid-rows-5 grid-cols-2 w-full h-full">
    <div class="row-start-4 col-start-2 pl-4 pr-8 sm:pr-16 md:pr-40 lg:pr-44 xl:pr-64 md:pl-8 lg:pl-16 xl:pl-20 sm:pt-2 md:pt-4 xl:pt-8 textresponsiveright">
      <div>
        <h1 class="text-white text-sm sm:text-sm md:text-base lg:text-lg xl:text-2xl font-medium leading-snug">{{ heading }}</h1>
      </div>
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
@media only screen and (max-width: 522px) {
  .textresponsiveright div {
    margin-top: 0rem;
    padding-left: 0rem;
  }
  .textresponsiveright h1 {
    font-size: 0.8rem;
  }
}

@media only screen and (max-width: 483px) {
  .textresponsiveright div {
    margin-top: -0.4rem;
    margin-right: -0.2rem;
  }
}

@media only screen and (max-width: 370px) {
  .textresponsiveright div {
    margin-top: -0.7rem;
    margin-right: -0.6rem;
    margin-left: -0.4rem;
  }
}
</style>
