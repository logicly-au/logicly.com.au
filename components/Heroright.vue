i <template>
  <div
    class="object-contain object-center w-full bg-cover h-128"
    :style="{ backgroundImage: `url(${backgroundUrl})` }"
  >
            <page-section :altrow="altrow" :overlay="overlay" :right="right">

              <h1 class="font-bold text-center text-white text-md">{{ heading }}</h1>
              <h2 class="invisible text-2xl font-semibold text-center text-white lg:visible">{{ subheading }}</h2>
              
            </page-section>

  </div>
</template>

<script>
export default {
  name: "HeroRight",
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