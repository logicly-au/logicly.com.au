<template>
  <div>

    <div class="w-full bg-white mx-auto">
      <div class="grid grid-cols-1" style="height:32rem">
        <div class="grid grid-cols-1 cic-header" style="background-size: cover" :style="{ backgroundImage: `url(${backgroundUrl})` }">
          <div class="grid grid-cols-1 md:grid-cols-3 grid-rows-7 bg-gray-900 bg-opacity-50">
            <div class="col-span-1 col-start-1 md:col-start-2 px-20 md:px-0 row-start-2 md:row-start-3">
              <p class="text-l font-medium text-white text-center">CONTACT US</p>
              <p class="text-2xl font-medium text-white text-center invisible lg:visible">We clarify complex information challenges with digital systems that support impactful change and growth.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="w-full bg-white">
      <div class="container mx-auto">
        <div class="grid h-full grid-cols-5">
          <div class="self-center col-span-3 col-start-2 pt-12 lg:pt-20">
            <h2 class="text-3xl lg:text-xl font-normal lg:font-bold text-center">Start the conversation about how we can help</h2>
          </div>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-8 my-16">
          <div class="grid grid-cols-1 lg:col-span-6 lg:col-start-2">
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-5">
              <div class="grid grid-rows-4 md:grid-rows-5 col-span-1 p-5 bg-white">
                <div class="row-span-2 row-start-1">
                  <div class="w-32 lg:w-24 mx-auto">
                    <img src="~/assets/images/Call_us.svg"/>
                  </div>
                </div>
                <div class="col-span-1 grid grid-cols-1 row-span-1 row-start-3">
                  <p class="text-2xl lg:text-lg font-normal lg:font-semibold text-center">
                    Call us
                  </p>
                </div>
                <div class="col-span-1 grid grid-cols-1 row-span-1 row-start-4">
                  <p class="text-l font-normal text-logiclyorange text-center pt-2 md:pt-0">
                    <a href="tel:0061393409000">
                      +61 3 9340 9000
                    </a>
                  </p>
                  <hr class="border border-logiclyorange w-full mx-auto lg:order-first">
                </div>
              </div>

              <div class="grid grid-rows-4 md:grid-rows-5 col-span-1 p-5 bg-white">
                <div class="row-span-2 row-start-1">
                  <div class="w-32 lg:w-24 mx-auto">
                    <img src="~/assets/images/Email_us.svg"/>
                  </div>
                </div>
                <div class="col-span-1 grid grid-cols-1 row-span-1 row-start-3">
                  <p class="text-2xl lg:text-lg font-normal lg:font-semibold  text-center">
                    Email us
                  </p>
                </div>
                <div class="col-span-1 grid grid-cols-1 row-span-1 row-start-4">
                  <p class="text-l font-normal text-logiclyorange text-center pt-0">
                    <a href="mailto:info@strategicdata.com.au">
                      info@strategicdata.com.au
                    </a>
                  </p>
                  <hr class="border border-logiclyorange w-full mx-auto lg:order-first">
                </div>
              </div>

              <div class="grid grid-rows-4 md:grid-rows-5 col-span-1 p-5 bg-white">
                <div class="row-span-2 row-start-1">
                  <div class="w-32 lg:w-24 mx-auto">
                    <img src="~/assets/images/Mail_us.svg"/>
                  </div>
                </div>
                <div class="col-span-1 grid grid-cols-1 row-span-1 row-start-3">
                  <p class="text-2xl lg:text-lg font-normal lg:font-semibold  text-center">
                    Mail us
                  </p>
                </div>
                <div class="col-span-1 grid grid-cols-1 row-span-1 row-start-4">
                  <div class="grid grid-cols-1 items-center justify-center">
                    <p class="text-l font-light text-center pt-1 w-full">
                      PO Box 1166, Carlton, <br>
                      Victoria, Australia 3053
                    </p>
                    <hr class="border border-logiclyorange w-full mx-auto lg:order-first">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="w-full bg-logiclylightgrey">
      <div class="container mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-8">
          <div class="grid grid-cols-1 lg:col-span-6 lg:col-start-2 pt-8">
            <div class="grid grid-cols-1 lg:grid-cols-3 lg:gap-5 grid-rows-4 gap-x-12 p-5">

                <div class="col-span-1 grid grid-cols-1 row-start-1 lg:row-start-2 pt-8 lg:pt-0">
                  <p class="text-l font-semibold text-left">
                    Visit us
                  </p>
                  <hr class="border border-logiclyorange w-full lg:w-2/3">
                  <p class="text-l font-light text-left pb-8">
                    2nd floor <br>
                    51 – 55 Johnston Street, <br>
                    Fitzroy, Victoria, <br>
                    Australia 3053
                  </p>
                </div>

                <div class="col-span-1 col-start-1 lg:col-span-2 lg:col-start-2 row-start-2 row-span-2 bg-white w-auto mx-auto">
                  <div class="">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d1576.3278082186507!2d144.9770189!3d-37.7981098!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sau!4v1612919954146!5m2!1sen!2sau" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
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

import backgroundUrl from '~/assets/images/Logicly_Contact_us_header.jpg'
export default {
  data() {
    return { backgroundUrl }
  }
}

</script>



















<style>

</style>
