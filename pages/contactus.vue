<template>
  <div>

    <Hero
      heading="CONTACT US"
      subheading="We clarify complex information challenges with digital systems that support impactful change and growth."
      background-url="/Logicly_Contact_us_header.jpg"
      class="hidden md:block"
      right
      overlay
    />

    <Hero
      heading="CONTACT US"
      background-url="/Logicly_Contact_us_header.jpg"
      class="block md:hidden"
      right
      overlay
    />


    <page-section>
      <div class="grid grid-cols-5">
        <div class="self-center col-span-5 sm:mx-12 lg:mx-0">
          <h2 class="text-2xl font-semibold text-center text-logiclytextgrey">Start the conversation about how we can help</h2>
        </div>
      </div>
      <div class="grid grid-cols-3 mt-6 gap-x-10 lg:mt-12">
        <div class="grid col-span-3 lg:col-span-1 lg:grid-rows-3">
          <div>
            <div class="w-20 mx-auto md:w-20 lg:w-20">
              <a href="tel:+61393409000">
                <img src="~/assets/images/Call_us.svg" alt="Phone icon"/>
              </a>
            </div>
          </div>
          <div>
            <a href="tel:+61393409000">
              <p class="mt-2 text-xl font-medium text-center text-logiclytextgrey">
                Call us
              </p>
            </a>
            <hr class="hidden w-full mx-auto mt-4 border lg:block border-logiclyorange">
          </div>
          <div>
            <p class="mt-2 text-center text-logiclytheme2 hover:underline lg:-mt-2">
              <a href="tel:+61393409000">
                +61 3 9340 9000
              </a>
            </p>
            <hr class="block w-full mx-auto mt-12 mb-12 border lg:hidden border-logiclyorange lg:mt-6">
          </div>
        </div>

        <div class="grid col-span-3 lg:col-span-1 lg:grid-rows-3">
          <div>
            <div class="w-20 mx-auto md:w-20 lg:w-20">
              <a href="mailto:info@logicly.com.au">
                <img src="~/assets/images/Email_us.svg" alt="Email icon"/>
              </a>
            </div>
          </div>
          <div>
            <a href="mailto:info@logicly.com.au">
              <p class="mt-2 text-xl font-medium text-center text-logiclytextgrey">
                Email us
              </p>
            </a>
            <hr class="hidden w-full mx-auto mt-4 border lg:block border-logiclyorange">
          </div>
          <div>
            <p class="mt-2 text-center text-logiclytheme2 hover:underline lg:-mt-2">
              <a href="mailto:info@logicly.com.au">
                info@logicly.com.au
              </a>
            </p>
            <hr class="block w-full mx-auto mt-12 mb-12 border lg:hidden border-logiclyorange lg:mt-6">
          </div>
        </div>

        <div class="grid col-span-3 lg:col-span-1 lg:grid-rows-3">
          <div>
            <div class="w-20 mx-auto md:w-20 lg:w-20 lg:pt-4">
              <img src="~/assets/images/Mail_us.svg" alt="Mail icon"/>
            </div>
          </div>
          <div>
            <p class="mt-2 text-xl font-medium text-center text-logiclytextgrey">
              Mail us
            </p>
            <hr class="hidden w-full mx-auto mt-4 border lg:block border-logiclyorange">
          </div>
          <div>
            <p class="mt-2 text-center text-logiclytextgrey lg:-mt-2">
              PO Box 1166, Carlton, <br>
              Victoria, Australia 3053
            </p>
            <hr class="block w-full mx-auto mt-12 border lg:hidden border-logiclyorange lg:mt-6">
          </div>
        </div>
      </div>
    </page-section>


    <page-section class="bg-logiclygreytwo">
      <div class="grid grid-cols-1 lg:grid-cols-3">
        <div class="grid content-start col-span-1">
          <p class="text-xl font-semibold text-left text-logiclytextgrey">
            Visit us
          </p>
          <hr class="w-full mt-4 border border-logiclyorange lg:w-2/3">
          <p class="pb-8 mt-4 text-left text-logiclytextgrey">
            2nd floor <br>
            51 – 55 Johnston Street, <br>
            Fitzroy, Victoria, <br>
            Australia 3065
          </p>
        </div>

        <div class="col-span-1 col-start-1 lg:col-span-2 lg:col-start-2">
          <div class="map-responsive">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1576.3312160892153!2d144.97535638363166!3d-37.79795009914856!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x390bd7e491dbb8b5!2sStrategic%20Data!5e0!3m2!1sen!2sau!4v1620884717464!5m2!1sen!2sau" width="600" height="450" frameborder="0" style="border:0" allowfullscreen title="Location map showing Logicly office in Melbourne"></iframe>
          </div>
        </div>
      </div>
    </page-section>

  </div>
</template>

<script>

import backgroundUrl from '~/assets/images/Logicly_Contact_us_header.jpg'
export default {
  data() {
    return { backgroundUrl }
  },

  head() {
    return {
      title: "Contact us · Logicly"
    };
  },
};

</script>

<style>
.map-responsive{
    overflow:hidden;
    padding-bottom:56.25%;
    position:relative;
    height:0;
}
.map-responsive iframe{
    left:0;
    top:0;
    height:100%;
    width:100%;
    position:absolute;
}

@media only screen and (max-width: 640px) {
  .map-responsive{
      padding-bottom:100%;
  }
}

.map-responsive {
    filter: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg"><filter id="g"><feColorMatrix type="matrix" values="0.3 0.3 0.3 0 0 0.3 0.3 0.3 0 0 0.3 0.3 0.3 0 0 0 0 0 1 0"/></filter></svg>#g');
    -webkit-filter: grayscale(100%);
    filter: grayscale(100%);
    filter: progid:DXImageTransform.Microsoft.BasicImage(grayScale=1);
}
</style>
