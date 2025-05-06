i <template>
<page-section :altrow="altrow">
  <div class="object-contain object-center w-full text-logiclytextgrey">
      <div>
        <h2 class="text-2xl font-semibold text-center">{{ heading }}</h2>
      </div>
      <div class="my-8 lg:my-12 -mx-0 lg:-mx-16 xl:-mx-0">
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-0 lg:gap-6 lg:pb-16">
            <div class="col-span-1 pb-8 lg:pb-0">
              <h3 class="text-lg font-semibold pb-2">
                {{ subheading1 }}
              </h3>
              <p class="font-light pb-1">
                {{ text1a }}
              </p>
              <p class="font-light">
                {{ text1b }}
              </p>
            </div>

            <div class="col-span-1 pb-8 lg:pb-0">
              <h3 class="text-lg font-semibold pb-2">
                {{ subheading2 }}
              </h3>
              <p class="font-light pb-1">
                {{ text2a }}
              </p>
              <p class="font-light">
                {{ text2b }}
              </p>
            </div>

            <div class="col-span-1 pb-8 lg:pb-0">
              <h3 class="text-lg font-semibold pb-2">
                {{ subheading3 }}
              </h3>
              <p class="font-light pb-1">
                {{ text3a }}
              </p>
              <p class="font-light">
                {{ text3b }}
              </p>
            </div>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-3 gap-0 lg:gap-6 lg:pb-20">
            <div class="col-span-1 pb-8 lg:pb-0">
              <h3 class="text-lg font-semibold pb-2">
                {{ subheading4 }}
              </h3>
              <p class="font-light pb-1">
                {{ text4a }}
              </p>
              <p class="font-light">
                {{ text4b }}
              </p>
            </div>

            <div class="col-span-1 pb-8 lg:pb-0">
              <h3 class="text-lg font-semibold pb-2">
                {{ subheading5 }}
              </h3>
              <p class="font-light pb-1">
                {{ text5a }}
              </p>
              <p class="font-light">
                {{ text5b }}
              </p>
            </div>

            <div class="col-span-1">
              <h3 class="text-lg font-semibold pb-2">
                {{ subheading6 }}
              </h3>
              <p class="font-light pb-1">
                {{ text6a }}
              </p>
              <p class="font-light">
                {{ text6b }}
              </p>
            </div>
          </div>
      </div>
  </div>
</page-section>
</template>

<script>
export default {
  name: "GridText",

  // This is how you define all the attributes passed to the component
  // backgroundUrl becomes background-url when used as html attribute
  props: {
    heading: String,
    subheading1: String,
    subheading2: String,
    subheading3: String,
    subheading4: String,
    subheading5: String,
    subheading6: String,
    text1a: String,
    text1b: String,
    text2a: String,
    text2b: String,
    text3a: String,
    text3b: String,
    text4a: String,
    text4b: String,
    text5a: String,
    text5b: String,
    text6a: String,
    text6b: String,
  },
};
</script>

<style scoped>
</style>
