<template>
  <div>
    <div class="w-full bg-logiclytheme2">
        <div class="grid grid-cols-2" style="height:28rem">
          <div class="grid grid-cols-2 col-span-4 grid-rows-4 cic-header" style="background-size: cover" :style="{ backgroundImage: `url(${backgroundUrl})` }">
            <div class="col-span-2 col-start-2 row-start-4">
              <span class="text-xl text-white">We help you meet your complex information challenges</span>
            </div>
          </div>
        </div>
        </div>

    <div class="w-full bg-logiclylightgrey">
      <div class="container mx-auto">
        <div class="grid h-full grid-cols-4 grid-rows-3">
          <div class="self-center col-span-2 col-start-2 row-start-2">
            <h2 class="text-xl font-bold text-center">Developing thoughtfully designed digital systems</h2>
            <p>We bring twenty years of knowledge and experience in research, strategy, design and technology to solve
              your complex information challenges. Our digital systems are built with innovative but practical
              thinking, flexibility and intuitive design, always with the user experience in mind.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full bg-white">
      <div class="container mx-auto">

        <!-- Whole grid for this section -->
        <div class="grid grid-cols-8">


          <!-- Grid just for header thing -->
          <div class="grid grid-flow-row-dense grid-cols-12 col-span-4 col-start-3">

            <div class="col-span-5">
              <div class="col-span-1 p-2 border-t-4 border-l-4 rounded-tl-full border-logiclytheme1"></div>
              <div class="col-span-1 p-2"></div>
              <div class="col-span-1 p-2 border-b-4 border-l-4 rounded-bl-full border-logiclytheme2"></div>
            </div>
            <div class="col-span-2">
              <div class="col-span-1 p-2"></div>
              <div class="col-span-1 p-2">
                <div>
                  <h2>
                    Digital System
                  </h2>
                </div>
              </div>
              <div class="col-span-1 p-2"></div>
            </div>
            <div class="col-span-5">
              <div class="col-span-1 p-2 border-t-4 border-r-4 rounded-tr-full border-logiclytheme3"></div>
              <div class="col-span-1 p-2"></div>
              <div class="col-span-1 p-2 border-b-4 border-r-4 rounded-br-full border-logiclytheme4"></div>
            </div>

          </div>
        </div>
        <!-- End of Grid just for header thing -->

        <div class="grid grid-cols-8 col-start-2 col-gap-2">

          <div class="content-center col-span-6 col-start-2">
            <h3>
              Our continuous 4 stage approach to meeting your future needs
            </h3>
          </div>

          <div class="col-span-2 col-start-2 border-t-4 border-logiclytheme2">
            <span class="text-xl text-logiclytheme2">1</span><span>Research</span>
          </div>

          <div class="col-span-3 col-start-4 border-t-4 border-gray-500">
            Through a journey of discovery, we gain critical information and present different approaches and options to
            solve your information complexities.
          </div>

          <div class="col-span-2 col-start-2 border-t-4 border-logiclytheme2">
            <span class="text-xl text-logiclytheme2">2</span><span>Design</span>
          </div>

          <div class="col-span-3 col-start-4 border-t-4 border-gray-500">
            We thoughtfully design the database, system and digital interface to create an easy and user friendly
            experience that’s intuitive for non-digital people.
          </div>

          <div class="col-span-2 col-start-2 border-t-4 border-logiclytheme2">
            <span class="text-xl text-logiclytheme2">3</span><span>Build</span>
          </div>

          <div class="col-span-3 col-start-4 border-t-4 border-gray-500">
            <span>Our technology team builds complex digital systems using their knowledge in development, analysis,
              front-end design, data management and security.</span>
          </div>

          <div class="col-span-2 col-start-2 border-t-4 border-logiclytheme2">
            <span class="text-xl text-logiclytheme2">4</span><span>Maintain and Improve</span>
          </div>

          <div class="col-span-3 col-start-4 border-t-4 border-gray-500">
            <span>Our maintenance program includes training, customer and user support, robust and secure hosting,
              proactive maintenance, improvements and monitoring.</span>
          </div>

          <div class="col-span-4 col-start-3 py-12 text-center">
            <span class="font-bold text-gray-700">This 4 stage approach is a cycle of continuous feedback, changes and testing as the system
              evolves.</span>
          </div>

          <div class="grid justify-center col-span-6 col-start-2 align-center">
            <div class="pb-12">
              <a class="block p-2 m-5 text-white bg-logiclyorange">Find out more</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full h-auto bg-logiclylightgrey">
      <!-- Start container -->
      <div class="container mx-auto">

        <!-- Overall grid -->
        <div class="grid grid-cols-8">

          <!-- Header -->
          <div class="col-span-6 col-start-2 text-center">
            <span class="font-extrabold" >Making complex information secure & accessible for private & public use</span>
          </div>


          <!-- Sub grid 1 -->
          <div class="grid grid-cols-1 col-span-3 col-start-2">

            <div class="col-span-1">
              <img src="~/assets/images/complex-information-challenges.jpg" class="p-0">
              <div class="relative font-bold text-center text-white top-center">Complex Information Challenges</div>
            </div>

            <div class="col-span-1 row-span-3">
              What information challenges do you have?
            </div>

            <div class="col-span-1">
              Are you working with complex information? Do you have challenges like compliance, complex workflows,
              interactivity, accuracy or organising your data? We first look at your challenges and help you define a
              strategic pathway through research, design and building your digital solution.
            </div>

            <div class="col-span-1">
              <div class="p-5"><a class="block p-2 m-5 text-white bg-logiclyorange">Learn more</a></div>
            </div>

          </div>
          <!-- End subgrid -->
          <!-- Sub grid 2 -->
          <div class="grid grid-cols-1 col-span-3">

            <div class="col-span-1">
              <img src="~/assets/images/designing-building-digital-systems.jpg" class="p-0">
              <div class="relative font-bold text-center text-white top-center">
                Designing and building digital systems
              </div>
            </div>

            <div class="col-span-1 font-bold">
              What type of digital system do you require?
            </div>

            <div class="col-span-1">
              We design and build digital systems from simple prototypes through to systems that evolve over years of
              reviewing, improving and adapting to the changing needs of our clients and their users. Each system is
              designed for purpose, efficiency and ease of use to meet your information challenges.
            </div>

            <div class="p-5">
              <a class="block p-2 m-5 text-white bg-logiclyorange">Learn more</a>
            </div>

          </div>
          <!-- End subgrid 2 -->
        </div>
        <!-- End Overall Grid -->
      </div>
      <!-- End container -->

      <div class="w-full h-auto bg-white">
        <!-- Start container -->
        <div class="container mx-auto">
          <div class="grid grid-cols-8">
            <div class="col-span-6 col-start-2 text-center"><span>We work with corporate, government and educational
                clients</span></div>
            <div class="grid grid-cols-1 col-span-6 col-start-2 grid-rows-3">
              <div class="grid grid-cols-5 row-start-2 gap-5 grid-row">
                <div class="col-span-1"><img src="~/assets/images/Australian-government-federal-department-of-health-logo.png" /></div>
                <div class="col-span-1"><img src="~/assets/images/Civil-Aviation-Authority-of-New-Zealand-logo.png" /></div>
                <div class="col-span-1"><img src="~/assets/images/nab-National-Australia-Bank-logo.png" /></div>
                <div class="col-span-1"><img src="~/assets/images/Queensland-qovernment-department-of-transport-and-main-roads.jpg" /></div>
                <div class="col-span-1"><img src="~/assets/images/University-of-melbourne_logo.png" /></div>
              </div>
            </div>
          </div>

        </div>
        <!-- End Container -->
      </div>

      <div class="w-full h-auto bg-white">
        <!-- Start container -->
        <div class="container mx-auto">
          <div class="grid grid-cols-5">

          </div>
        </div>
        <!-- End Container -->
      </div>

      <div class="w-full h-auto bg-logiclygrey">
        <!-- Start container -->
        <div class="container mx-auto">
          <div class="grid grid-cols-8">

            <div class="col-span-6 col-start-2 text-center">
              <span>Every project is different and designed to meet your digital requirements</span>
            </div>

            <div class="grid grid-cols-6 col-span-6 col-start-2">
              <div class="col-span-3">
                  <img src="~/assets/images/Governement-project-queensland-department-of-transport-and-main-roads.jpg" />
                  <div class="relative font-bold text-center text-white top-center">Government</div>
              </div>
              <div class="flex flex-col justify-end col-span-3 pb-2">
                <h3>
                  <div>Queensland Department of Transport and Main Roads</div>
                </h3>
                <p>
                  A digital system to help understand travel behaviours and plan for future growth and demand of the
                  Queensland Transport System.
                </p>
                <a class="text-orange-700" href="">Read more</a>
              </div>

              <div class="col-span-3">
                  <img src="~/assets/images/Corporate-project-NAB.jpg" />
                  <div class="relative font-bold text-center text-white top-center">Corporate</div>
              </div>
              <div class="flex flex-col justify-end col-span-3 pb-2">
                <h3>
                  Queensland Department of Transport and Main Roads
                </h3>
                <p>
                  A digital system to help understand travel behaviours and plan for future growth and demand of the
                  Queensland Transport System.
                </p>
                <a class="text-orange-700" href="">Read more</a>
              </div>

              <div class="col-span-3">
                <img src="~/assets/images/educationalplaceholder.png" />
                <!-- TODO Replace placeholder image here -->
                <div class="relative font-bold text-center text-white top-center">Educational</div>
              </div>

              <div class="flex flex-col justify-end col-span-3 pb-2">
                <h3>
                  Queensland Department of Transport and Main Roads
                </h3>
                <p>
                  A digital system to help understand travel behaviours and plan for future growth and demand of the
                  Queensland Transport System.
                </p>
                <a class="text-orange-700" href="">Read more</a>
              </div>

            </div>

          </div>
        </div>
        <!-- End Container -->
      </div>

      <div class="w-full h-auto bg-white">
        <!-- Start container -->
        <div class="container h-64 mx-auto">
          <div class="grid items-center content-center justify-center h-64 grid-cols-1">
            <div class="text-center">
              Do you have a project in mind or a complex information challenge? Call us on +61 3 9340 9000 or enquire
              below.
            </div>
            <!-- TODO Add link here -->
            <a href="" class="p-2 m-5 text-center text-white bg-logiclyorange">Enquire</a>
          </div>
        </div>
        <!-- End Container -->
      </div>

      <div class="w-full h-auto bg-logiclybeige">
        <!-- Start container -->
        <div class="container mx-auto">
          <div class="grid grid-cols-8 grid-rows-3">

            <div class="grid grid-cols-8 col-span-8 row-start-2">
              <div class="col-span-2">
                <h2 class="text-lg font-bold text-orange-600">
                  New thinking & digital updates
                </h2>
                <div>
                  Discover new ways of thinking and innovative digital systems to solve complex information challenges
                </div>
              </div>

              <div class="content-center col-span-2 align-middle bg-orange-100">

                Name

              </div>

              <div class="col-span-2">
                Email
              </div>

              <div class="col-span-2">
                <button>Subscribe</button>
              </div>
            </div>

          </div>
        </div>
        <!-- End Container -->
      </div>




    </div>
  </div>
</template>

<script>

import backgroundUrl from '~/assets/images/Logicly-meet-your-complex-information-challenges-header.jpg'
export default {
  data() {
    return { backgroundUrl }
  }
}

</script>

<style>


  .cic-header {

  }

  .title {
    font-family:
      'Quicksand',
      'Source Sans Pro',
      -apple-system,
      BlinkMacSystemFont,
      'Segoe UI',
      Roboto,
      'Helvetica Neue',
      Arial,
      sans-serif;
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
  }

  .subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }

  .links {
    padding-top: 15px;
  }

</style>
