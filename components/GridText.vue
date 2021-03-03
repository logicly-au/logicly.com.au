<template>
  <!-- this contains an example of loading a class via boolean value, see :class -->
  <div class="object-contain object-center w-full bg-white">
    <div class="container mx-auto">
      <div class="grid h-full grid-cols-5">
        <div class="self-center col-span-3 col-start-2 pt-24 lg:pt-32">
          <h2 class="text-3xl lg:text-2xl font-semibold text-center">{{ heading }}</h2>
        </div>
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-8 my-12">
        <div class="grid grid-cols-1 lg:col-span-6 lg:col-start-2">
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:pb-20">
            <div class="col-span-1 bg-white px-12 lg:px-4 pb-12 lg:pb-0">
              <p class="text-2xl lg:text-xl font-semibold pb-2">
                {{ subheading1 }}
              </p>
              <p class="text-md font-light pb-1">
                {{ text1a }}
              </p>
              <p class="text-md font-light">
                {{ text1b }}
              </p>
            </div>

            <div class="col-span-1 bg-white px-12 lg:px-4 pb-12 lg:pb-0">
              <p class="text-2xl lg:text-xl font-semibold pb-2">
                {{ subheading2 }}
              </p>
              <p class="text-md font-light pb-1">
                {{ text2a }}
              </p>
              <p class="text-md font-light">
                {{ text2b }}
              </p>
            </div>

            <div class="col-span-1 bg-white px-12 lg:px-4 pb-12 lg:pb-0">
              <p class="text-2xl lg:text-xl font-semibold pb-2">
                {{ subheading3 }}
              </p>
              <p class="text-md font-light pb-1">
                {{ text3a }}
              </p>
              <p class="text-md font-light">
                {{ text3b }}
              </p>
            </div>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:pb-20">
            <div class="col-span-1 bg-white px-12 lg:px-4 pb-12 lg:pb-0">
              <p class="text-2xl lg:text-xl font-semibold pb-2">
                {{ subheading4 }}
              </p>
              <p class="text-md font-light pb-1">
                {{ text4a }}
              </p>
              <p class="text-md font-light">
                {{ text4b }}
              </p>
            </div>

            <div class="col-span-1 bg-white px-12 lg:px-4 pb-12 lg:pb-0">
              <p class="text-2xl lg:text-xl font-semibold pb-2">
                {{ subheading5 }}
              </p>
              <p class="text-md font-light pb-1">
                {{ text5a }}
              </p>
              <p class="text-md font-light">
                {{ text5b }}
              </p>
            </div>

            <div class="col-span-1 bg-white px-12 lg:px-4 pb-12 lg:pb-0">
              <p class="text-2xl lg:text-xl font-semibold pb-2">
                {{ subheading6 }}
              </p>
              <p class="text-md font-light pb-1">
                {{ text6a }}
              </p>
              <p class="text-md font-light">
                {{ text6b }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
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
