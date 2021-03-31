<template>
  <div>

  <Hero
    heading="CONTACT US"
    subheading="We clarify complex information challenges with digital systems that support impactful change and growth."
    background-url="/Logicly_Contact_us_header.jpg"
    right
    overlay
  />

    <div class="w-full bg-white">
      <div class="container mx-auto">
        <div class="grid h-full grid-cols-5">
          <div class="self-center col-span-3 col-start-2 pt-12 lg:pt-20">
            <h2 class="text-2xl font-extrabold text-center text-logiclytextgrey">Start the conversation about how we can help</h2>
          </div>
        </div>
        <div class="grid grid-cols-1 my-16 lg:grid-cols-8">
          <div class="grid grid-cols-1 lg:col-span-6 lg:col-start-2">
            <div class="grid grid-cols-1 gap-5 lg:grid-cols-3">
              <div class="grid col-span-1 grid-rows-4 p-5 bg-white md:grid-rows-5">
                <div class="row-span-2 row-start-1">
                  <div class="w-32 mx-auto lg:w-24">
                    <img src="~/assets/images/Call_us.svg"/>
                  </div>
                </div>
                <div class="grid grid-cols-1 col-span-1 row-span-1 row-start-3">
                  <p class="text-xl font-extrabold text-center text-logiclytextgrey">
                    Call us
                  </p>
                </div>
                <div class="grid grid-cols-1 col-span-1 row-span-1 row-start-4">
                  <p class="pt-2 font-normal text-center text-logiclyorange md:pt-0">
                    <a href="tel:0061393409000">
                      +61 3 9340 9000
                    </a>
                  </p>
                  <hr class="w-full mx-auto border border-logiclyorange lg:order-first">
                </div>
              </div>

              <div class="grid col-span-1 grid-rows-4 p-5 bg-white md:grid-rows-5">
                <div class="row-span-2 row-start-1">
                  <div class="w-32 mx-auto lg:w-24">
                    <img src="~/assets/images/Email_us.svg"/>
                  </div>
                </div>
                <div class="grid grid-cols-1 col-span-1 row-span-1 row-start-3">
                  <p class="text-xl font-extrabold text-center text-logiclytextgrey">
                    Email us
                  </p>
                </div>
                <div class="grid grid-cols-1 col-span-1 row-span-1 row-start-4">
                  <p class="pt-0 font-normal text-center text-logiclyorange">
                    <a href="mailto:info@strategicdata.com.au">
                      info@strategicdata.com.au
                    </a>
                  </p>
                  <hr class="w-full mx-auto border border-logiclyorange lg:order-first">
                </div>
              </div>

              <div class="grid col-span-1 grid-rows-4 p-5 bg-white md:grid-rows-5">
                <div class="row-span-2 row-start-1">
                  <div class="w-32 mx-auto lg:w-24">
                    <img src="~/assets/images/Mail_us.svg"/>
                  </div>
                </div>
                <div class="grid grid-cols-1 col-span-1 row-span-1 row-start-3">
                  <p class="text-xl font-extrabold text-logiclytextgrey text-center">
                    Mail us
                  </p>
                </div>
                <div class="grid grid-cols-1 col-span-1 row-span-1 row-start-4">
                  <div class="grid items-center justify-center grid-cols-1">
                    <p class="w-full pt-1 font-light text-center text-logiclytextgrey">
                      PO Box 1166, Carlton, <br>
                      Victoria, Australia 3053
                    </p>
                    <hr class="w-full mx-auto border border-logiclyorange lg:order-first">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="w-full bg-logiclygreytwo">
      <div class="container mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-8">
          <div class="grid grid-cols-1 pt-8 lg:col-span-6 lg:col-start-2">
            <div class="grid grid-cols-1 grid-rows-4 p-5 lg:grid-cols-3 lg:gap-5 gap-x-12">

                <div class="grid grid-cols-1 col-span-1 row-start-1 pt-8 lg:row-start-2 lg:pt-0">
                  <p class="font-extrabold text-left text-logiclytextgrey text-xl">
                    Visit us
                  </p>
                  <hr class="w-full border border-logiclyorange lg:w-2/3">
                  <p class="pb-8 font-light text-logiclytextgrey text-left">
                    2nd floor <br>
                    51 – 55 Johnston Street, <br>
                    Fitzroy, Victoria, <br>
                    Australia 3053
                  </p>
                </div>

                <div class="w-auto col-span-1 col-start-1 row-span-2 row-start-2 mx-auto bg-white lg:col-span-2 lg:col-start-2">
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
