<template>
  <div>
  
    <div class="object-contain object-center w-full h-64 bg-cover" :style="{ backgroundImage: `url(${backgroundUrl})` }">
      <div class="container mx-auto">
        <div class="grid h-64 grid-rows-3 grid-cols-15">
          <div class="row-start-2 text-center text-white col-span-15">
            <div>
                <h1 class="text-lg font-bold">WHO WE HELP</h1>
                <h2 class="text-xl font-bold">Our clients approach us with a range of challenges</h2>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="w-full bg-logiclylightgrey">
      <div class="container py-8 mx-auto">

        <div class="grid grid-cols-15">

            <div class="flex justify-center col-span-15">
                <img class="h-32" src="~/assets/images/We-help-people-understand-all-the-possibilities.svg" />
            </div>
            <div class="mt-4 col-span-15">
                <h2 class="text-xl font-bold text-center">
                  We help people understand all the possibilities
                </h2>
            </div>
            <div class="col-span-7 col-start-5">
              <p>We help clients understand the power of technology to improve efficiencies and gain quality information to inform critical decisions. We guide our clients through the possible pathways and alternatives. It is rare that any two projects are the same so every digital system is designed for your specific needs and vision.</p>
            </div>

          </div>

      </div>
    </div>

    <div class="w-full h-64">
      <div class="container mx-auto my-32">
        <div class="grid h-128 grid-cols-15">
          <div class="text-center col-span-15">
                <h1 class="text-lg font-bold">Information and digital needs come in all different forms</h1>
            </div>

            <div class="grid grid-cols-2 col-span-9 col-start-4 mt-4">
                <div class="col-span-1">
                    <ul>
                        <li>Developing a business case</li>
                        <li>Define the data requirements for research</li>
                        <li>Collecting useful and accurate data</li>
                        <li>Integrating multiple data sets</li>
                        <li>Transition from a manual to an online system</li>
                    </ul>
                </div>
                <div class="col-span-1">
                    <ul>
                        <li>Systemising information management</li>
                        <li>Capture, collect and collate stories and information</li>
                        <li>Efficient systems to reduce errors and repititious work</li>
                        <li>Collating and transforming data for analysis</li>
                    </ul>
                </div>
            </div>

          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>

import backgroundUrl from '~/assets/images/Logicly-who-we-help-header-our-clients-approach-us-with-a-range-of-challenges.jpg'
export default {
  data() {
    return { backgroundUrl }
  }
}

</script>

<style>
</style>
