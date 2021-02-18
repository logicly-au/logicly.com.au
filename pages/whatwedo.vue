<template>
  <div>

    <div class="object-contain object-center w-full h-64 bg-cover" :style="{ backgroundImage: `url(${backgroundUrl})` }">
      <div class="container mx-auto">
        <div class="grid h-64 grid-rows-3 grid-cols-15">
          <div class="row-start-2 text-center text-white col-span-15">
            <div>
              <h1 class="text-lg font-bold">WHAT WE DO</h1>
              <h2 class="text-xl font-bold">From discovery to development, delivery and beyond</h2>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="w-full bg-logiclylightgrey">
      <div class="container py-8 mx-auto">

        <div class="grid grid-cols-15">

          <div class="flex justify-center col-span-15">
            <!-- TODO Figure out if this should be an arrow -->
            <img class="h-32" src="~/assets/images/We-start-with-the-right-questions-to-gain-insightful-answers.svg" />
          </div>
          <div class="mt-4 col-span-15">
            <h2 class="text-xl font-bold text-center">
              We start with the right questions to gain insightful answers
            </h2>
          </div>
          <div class="col-span-7 col-start-5">
            <p>Our services are comprehensive and thorough; from initial consulting and design through to build and delivery. We continuously review results, outcomes and user experience to ensure the needs of all stakeholders are met.</p>
          </div>

        </div>

      </div>
    </div>

    <div class="w-full">
      <div class="container mx-auto my-4">




        <div class="grid grid-cols-15">

          <div class="grid grid-cols-2 col-span-11 col-start-3 mt-4">
            <div class="col-span-11 col-start-3">
              <img src="~/assets/images/Every_information_challenge-is-different-and-requires-a-unique-digital-solution.jpg" />
            </div>
            <div class="col-span-11 text-center">
              <h1 class="text-lg font-bold text-logiclytextgrey">Every information challenge is different and requires a unique digital solution</h1>
            </div>

          <div class="grid justify-center col-span-6 col-start-2 align-center">
            <div class="pb-12">
              <a class="block p-2 m-5 text-white bg-logiclyorange">View our projects</a>
            </div>
          </div>
        </div>
            
        </div>








      </div>
    </div>
  </div>

  </div>
  </div>

  </div>
  </div>



  </div>
</template>

<script>
  import backgroundUrl from '~/assets/images/Logicly_What-we-do-header-From-discovery-to-development-delivery-and-beyond.jpg';

  export default {
    data() {
        return { backgroundUrl }
    }
  }
</script>

<style>
</style>
