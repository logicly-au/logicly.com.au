<!-- NOTE This is just a sample page with repeating patterns we can use in other pages -->

<template>
  <div>
    <!-- NOTE Section template - Page header. Most pages have one of these at the top -->    
    <!-- HEADER SECTION -->
    <div class="object-contain object-center w-full h-64 bg-cover" :style="{ backgroundImage: `url(${backgroundUrl})` }">
      <div class="container mx-auto">
        <div class="grid h-64 grid-rows-3 grid-cols-15">
          <div class="row-start-2 text-center text-white col-span-15">
            <div>
                <h1 class="text-lg font-bold">Heading</h1>
                <h2 class="text-xl font-bold">Subheading</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- END HEADER SECTION -->

    <!-- GRAPHIC-HEADING-PARAGRAPH SECTION -->
    <div class="w-full bg-logiclylightgrey">
      <div class="container py-8 mx-auto">
        <div class="grid h-64 grid-rows-3 grid-cols-15">
          <div class="flex justify-center row-span-1 row-start-1 col-span-15">
            <img class="h-32" src="~/assets/images/We-help-people-understand-all-the-possibilities.svg" />
          </div>
          <div class="row-span-1 row-start-3 text-center col-span-15">
            <h2 class="text-xl font-bold">
              We partner with clients to simplify complex processes
            </h2>
            <p>
              We achieve our best when we partner with you to research, design, build and maintain your information and
              digital systems. We are flexible and collaborative while taking a very thorough and detailed approach to
              research, strategy, design and security.
            </p>
          </div>

        </div>
      </div>
    </div>
<!-- END GRAPHIC-HEADING-PARAGRAPH SECTION -->
    
  </div>
</template>

<script>

// This will load the background image for the Page Header section
import backgroundUrl from '~/assets/images/test.jpg'
export default {
  data() {
    return { backgroundUrl }
  }
}

</script>

<style>
</style>
