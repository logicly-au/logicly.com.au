i <template>
  <!-- this contains an example of loading a class via boolean value, see :class -->
  <div
    class="object-contain object-center w-full h-64 bg-cover"
    :class="{ rightMode: right, centerMode: !right }"
    :style="{ backgroundImage: `url(${backgroundUrl})` }"
  >
    <div class="container mx-auto">
      <div class="grid h-64 grid-rows-3 grid-cols-15">
        <div class="row-start-2 text-center col-span-15" >
            <div :class="{ 'text-black': blacktext, 'text-white': !blacktext }">
              <h1 class="text-lg font-medium text-center text-white">{{ heading }}</h1>
              <h2 class="invisible text-2xl font-medium text-center text-white lg:visible">{{ subheading }}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hero",

  // This is how you define all the attributes passed to the component
  // backgroundUrl becomes background-url when used as html attribute
  props: {
    heading: String,
    subheading: String,
    backgroundUrl: String,
    right: Boolean,
    blacktext: Boolean,
    whitetext: Boolean,
  },
};
</script>

<style scoped>
</style>