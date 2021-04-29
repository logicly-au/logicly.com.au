<template>
  <div>

    <Hero
      heading="CONTACT US"
      subheading="We clarify complex information challenges with digital systems that support impactful change and growth."
      background-url="/Logicly_Contact_us_header.jpg"
      right
      overlay
    />


    <page-section>
      <div class="grid grid-cols-5">
        <div class="self-center col-span-5 mx-12 lg:mx-0 pt-12 lg:pt-20">
          <h2 class="text-2xl font-semibold text-center text-logiclytextgrey">Start the conversation about how we can help</h2>
        </div>
      </div>
      <div class="grid grid-cols-3 gap-x-10 my-6 lg:my-12">
        <div class="col-span-3 lg:col-span-1 grid lg:grid-rows-3">
          <div>
            <div class="w-20 md:w-20 lg:w-20 mx-auto">
              <img src="~/assets/images/Call_us.svg"/>
            </div>
          </div>
          <div>
            <p class="text-xl font-medium text-center text-logiclytextgrey mt-2">
              Call us
            </p>
            <hr class="hidden lg:block w-full mx-auto border border-logiclyorange mt-6">
          </div>
          <div>
            <p class="text-center text-logiclytheme4 mt-2 lg:-mt-2">
              <a href="tel:0061393409000">
                +61 3 9340 9000
              </a>
            </p>
            <hr class="block lg:hidden w-full mx-auto border border-logiclyorange mt-12 lg:mt-6 mb-12">
          </div>
        </div>

        <div class="col-span-3 lg:col-span-1 grid lg:grid-rows-3">
          <div>
            <div class="w-20 md:w-20 lg:w-20 mx-auto">
              <img src="~/assets/images/Email_us.svg"/>
            </div>
          </div>
          <div>
            <p class="text-xl font-medium text-center text-logiclytextgrey mt-2">
              Email us
            </p>
            <hr class="hidden lg:block w-full mx-auto border border-logiclyorange mt-6">
          </div>
          <div>
            <p class="text-center text-logiclytheme4 mt-2 lg:-mt-2">
              <a href="mailto:info@strategicdata.com.au">
                info@strategicdata.com.au
              </a>
            </p>
            <hr class="block lg:hidden w-full mx-auto border border-logiclyorange mt-12 lg:mt-6 mb-12">
          </div>
        </div>

        <div class="col-span-3 lg:col-span-1 grid lg:grid-rows-3">
          <div>
            <div class="w-20 md:w-20 lg:w-20 mx-auto lg:pt-4">
              <img src="~/assets/images/Mail_us.svg"/>
            </div>
          </div>
          <div>
            <p class="text-xl font-medium text-logiclytextgrey text-center mt-2">
              Mail us
            </p>
            <hr class="hidden lg:block w-full mx-auto border border-logiclyorange mt-6">
          </div>
          <div>
            <p class="text-center text-logiclytextgrey mt-2 lg:-mt-2">
              PO Box 1166, Carlton, <br>
              Victoria, Australia 3053
            </p>
            <hr class="block lg:hidden w-full mx-auto border border-logiclyorange mt-12 lg:mt-6 mb-12">
          </div>
        </div>
      </div>
    </page-section>






    <div class="w-full bg-logiclygreytwo">
      <div class="container mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-8">
          <div class="grid grid-cols-1 pt-8 lg:col-span-6 lg:col-start-2">
            <div class="grid grid-cols-1 grid-rows-4 p-5 lg:grid-cols-3 lg:gap-5 gap-x-12">

                <div class="grid grid-cols-1 col-span-1 row-start-1 pt-8 lg:row-start-2 lg:pt-0">
                  <p class="font-semibold text-left text-logiclytextgrey text-xl">
                    Visit us
                  </p>
                  <hr class="w-full border border-logiclyorange lg:w-2/3">
                  <p class="pb-8 text-logiclytextgrey text-left">
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
