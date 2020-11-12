<template>
  <div>
  
    <!-- Sec 1 -->

    <div class="w-full h-64 bg-logiclytheme2 about-header" style="background-size: cover;" :style="{ backgroundImage: `url(${backgroundUrl})` }">
      <div class="container mx-auto">
        <div class="grid h-64 grid-rows-3 grid-cols-15">
          <div class="col-span-1 col-start-2 row-start-2">


            <h1>Our Approach</h1>
            <h2>We are innovative thinkers who solve information challenges</h2>


          </div>
        </div>
      </div>
    </div>

    <!-- End Sec 1 -->
    <!-- Start Sec 2 -->

    <div class="w-full bg-logiclylightgrey">
      <div class="container mx-auto">
        <div class="grid grid-flow-col grid-cols-3 grid-rows-3">
          <div class="col-span-1 col-start-2 row-span-1 row-start-2"><img src="" /></div>
          <div class="col-span-3 row-span-1 row-start-3">
            <h2 class="text-lg text-center">
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

    <!-- End Sec 2 -->
    <!-- Start Sec 3 -->

    <div class="w-full bg-white">
      <div class="container mx-auto">
        <div class="grid grid-cols-9">
          <div class="col-span-3 col-start-4">
            <img src="~/assets/images/25-years-shaping-large-complicated-projects.svg" />
          </div>
          <div class="col-span-3 col-start-4">
            <h1 class="text-lg text-center">
              25 years shaping large complicated projects
            </h1>
            <p class="text-md">Our background originates in research and psychology with experience in statistics. This knowledge of
              research and ethics around data is the foundation of every project. After working for twenty years with
              government and on large health projects we understand the contractual requirements for reporting, legal
              and privacy constraints and meeting security standards.</p>
          </div>
        </div>
      </div>
    </div>
    <!-- End Sec 3 -->

    <div class="w-full h-64 bg-logiclytheme2">
      <div class="container mx-auto">
        <div class="grid h-64 grid-cols-1 grid-rows-2">

          <p>We review projects continually as they evolve</p>

        </div>
      </div>
    </div>

    <div class="w-full bg-logiclytheme1">
      <div class="container mx-auto">
        <div class="grid grid-cols-12 grid-rows-2">

          <div class=""></div>

          <div class="col-span-6 col-start-3 row-span-1">

          <p>When we design and build digital systems we look at the short and long term outcomes. We build systems that can grow and expand as the information needs and challenges change within a business or organisation. Clients may require more efficiencies as they grow, or make additions and changes to a process. We continually work together with clients to assess, manage and ensure the system meets their current needs.</p>
          
          </div>

        </div>
      </div>
    </div>

    <div class="w-full h-64 bg-white">
      <div class="container mx-auto">
        <div class="grid h-64 grid-cols-12 grid-rows-2">

          <div class="col-span-6 col-start-3 row-span-1">
            <div><span>Learn more about who we work with</span></div>
            <div class="col-span-2 row-span-1 col-start 8">
              <a class="block p-2 m-5 text-white bg-logiclyorange">Who we help</a>
            </div>
          </div>

        </div>
      </div>
    </div>

  </div>
</template>

<script>

import backgroundUrl from '~/assets/images/test.jpg'
export default {
  data() {
    return { backgroundUrl }
  }
}

</script>

<style>

  .about-header {
    object-fit:contain;
  }

  .logicly-footer {
    --bg-opacity: 1;
    background-color: #F6F5F1;
    background-color: rgba(246, 245, 241, var(--bg-opacity));
  }

</style>
