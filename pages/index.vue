<template>
  <div>

    <Heroindex
      heading="We help you meet your complex information challenges"
<<<<<<< HEAD
      background-url="/Logicly-meet-your-complex-information-challenges-hero-v2.jpg"
=======
      background-url="/Logicly_website_design_New_Header_Final.jpg"
>>>>>>> Adding new hero image to index page
    />

    <Herotextnoimage
      heading="Developing thoughtfully designed digital systems"
      subheading="We bring twenty five years of knowledge and experience in research, strategy, design and technology to solve
                your complex information challenges. Our digital systems are built with innovative but practical
                thinking, flexibility and intuitive design, always with the user experience in mind."
      altrow
    />


    <page-section>
      <img src="digital_system.svg" class="content-center h-24 px-12 mb-5"/>

      <div class="grid content-center grid-cols-6 col-gap-4 mx-0 text-logiclytextgrey xl:mx-16">

        <div class="col-span-6 pb-8 md:pt-5">
          <h3 class="text-xl font-medium text-center">
            Our continuous 4 stage approach to meeting your future needs
          </h3>
        </div>

        <div class="flex items-start col-span-6 border-t-4 md:col-span-2 md:col-start-1 border-logiclytheme1">
          <span class="text-5xl font-thin text-logiclytheme1">1</span><span class="pt-5 pl-3 text-lg font-semibold md:text-base lg:text-lg">Research</span>
        </div>

        <div class="col-span-6 pb-5 border-0 md:col-span-4 md:col-start-3 md:border-t-4 md:border-gray-400 md:pt-5">
          Through a journey of discovery, we gain critical information and present different approaches and options to
          solve your information complexities.
        </div>

        <div class="flex items-start col-span-6 border-t-4 md:col-span-2 md:col-start-1 border-logiclytheme2">
          <span class="text-5xl font-thin text-logiclytheme2">2</span><span class="pt-5 pl-3 text-lg font-semibold md:text-base lg:text-lg">Design</span>
        </div>

        <div class="col-span-6 pb-5 border-0 md:col-span-4 md:col-start-3 md:border-t-4 md:border-gray-400 md:pt-5">
          We thoughtfully design the database, system and digital interface to create an easy and user friendly
          experience that’s intuitive for non-digital people.
        </div>

        <div class="flex items-start col-span-6 border-t-4 md:col-span-2 md:col-start-1 border-logiclytheme4">
          <span class="text-5xl font-thin text-logiclytheme4">3</span><span class="pt-5 pl-3 text-lg font-semibold md:text-base lg:text-lg">Build</span>
        </div>

        <div class="col-span-6 pb-5 border-0 md:col-span-4 md:col-start-3 md:border-t-4 md:border-gray-400 md:pt-5">
          Our technology team builds complex digital systems using their knowledge in development, analysis,
          front-end design, data management and security.
        </div>

        <div class="flex items-start col-span-6 border-t-4 md:col-span-2 md:col-start-1 border-logiclytheme3">
          <span class="text-5xl font-thin text-logiclytheme3">4</span><span class="pt-5 pl-3 text-lg font-semibold leading-snug md:text-base lg:text-lg">Maintain and Improve</span>
        </div>

        <div class="col-span-6 pb-5 border-0 md:col-span-4 md:col-start-3 md:border-t-4 md:border-gray-400 md:pt-5">
          Our ongoing support includes includes training, customer and user support, robust and secure hosting,
          proactive maintenance, improvements and monitoring.
        </div>

        <div class="col-span-6 pt-6 pb-2 text-center lg:col-span-4 lg:col-start-2 md:pt-10">
          <span class="font-medium">This 4 stage approach is a cycle of continuous feedback, changes and testing as the system
            evolves.</span>
        </div>

      </div>

      <div class="grid justify-center align-center">
        <Button
          buttontext="Find out more"
          buttonlink="/howwework"
        />
      </div>

    </page-section>


    <page-section altrow>
      <!-- Header -->
      <div class="mb-8 leading-snug text-center text-logiclytextgrey">
        <span class="text-2xl font-semibold">Making complex information secure & accessible for private & public use</span>
      </div>

      <!-- Sub grid 1 -->
      <div class="flex grid flex-col grid-cols-2 col-gap-4 text-logiclytextgrey">
        <div class="grid grid-cols-2 col-span-2 lg:col-span-1 lg:col-start-1">

          <div class="col-span-2">
            <overlay-image
              imageurl="/complex-information-challenges.jpg"
              height="286px"
              text="Complex information challenges"
            />
          </div>

          <div class="col-span-2 pt-8 pb-2 text-xl font-semibold lg:text-base lg:text-lg">
            What information challenges do you have?
          </div>

          <div class="col-span-2 pb-2 pr-2 md:pr-12 lg:pr-2 xl:pr-8">
            <p>
              Are you working with complex information? Do you have challenges like compliance, complex workflows,
              interactivity, accuracy or organising your data? We first look at your challenges and help you define a
              strategic pathway through research, design and building your digital solution.
            </p>
          </div>

          <div class="col-span-1 col-start-1 pb-8 lg:pb-0">
            <Button
              buttontext="learn more"
              buttonlink="/whowehelp"
            />
          </div>

        </div>
        <!-- End subgrid -->
        <!-- Sub grid 2 -->
        <div class="grid grid-cols-2 col-span-2 lg:col-span-1 lg:col-start-2">

          <div class="col-span-2">
            <overlay-image
            imageurl="/designing-building-digital-systems.jpg"
            height="286px"
            text="Designing and building digital systems"
            />
          </div>

          <div class="col-span-2 pt-8 pb-2 text-xl font-semibold lg:text-base lg:text-lg">
            What type of digital system do you require?
          </div>

          <div class="col-span-2 pb-2 pr-2 md:pr-12 lg:pr-6 xl:pr-8">
            <p>
              We design and build digital systems from simple prototypes through to systems that evolve over years of
              reviewing, improving and adapting to the changing needs of our clients and their users. Each system is
              designed for purpose, efficiency and ease of use to meet your information challenges.
            </p>
          </div>

          <div class="col-span-1 col-start-1">
            <Button
              buttontext="learn more"
              buttonlink="/whatwedo"
            />
          </div>
        </div>
      </div>
      <!-- End subgrid 2 -->
    </page-section>


    <!-- Clients section mobile -->
    <page-section class="xl:hidden">
      <div class="pb-8 text-2xl font-semibold text-center text-logiclytextgrey">
        <span>We work with corporate, government and educational clients</span>
      </div>
      <div class="grid grid-cols-3 gap-5">
        <a href="https://www.health.gov.au/">
          <div class="col-span-1"><img src="~/assets/images/Australian-government-federal-department-of-health-logo.png" /></div>
        </a>
        <a href="https://www.aviation.govt.nz/">
          <div class="col-span-1"><img src="~/assets/images/Civil-Aviation-Authority-of-New-Zealand-logo.png" /></div>
        </a>
        <a href="https://www.nab.com.au/">
          <div class="col-span-1"><img src="~/assets/images/nab-National-Australia-Bank-logo.png" /></div>
        </a>
      </div>
      <div class="grid grid-cols-2 gap-0 mx-10">
        <a href="https://www.tmr.qld.gov.au/">
          <div class="col-span-1"><img src="~/assets/images/Queensland-qovernment-department-of-transport-and-main-roads.jpg" /></div>
        </a>
        <a href="https://www.unimelb.edu.au/">
          <div class="col-span-1"><img src="~/assets/images/University-of-melbourne_logo.png" /></div>
        </a>
      </div>
    </page-section>

    <!-- Clients section desktop -->
    <page-section class="hidden xl:block">
      <div class="pt-10 pb-8 text-2xl font-semibold text-center text-logiclytextgrey">
        <span>We work with corporate, government and educational clients</span>
      </div>
      <div class="grid grid-cols-5 col-span-8 row-start-2 gap-5 grid-row">
        <a href="https://www.health.gov.au/">
          <div class="col-span-1"><img src="~/assets/images/Australian-government-federal-department-of-health-logo.png" /></div>
        </a>
        <a href="https://www.aviation.govt.nz/">
          <div class="col-span-1"><img src="~/assets/images/Civil-Aviation-Authority-of-New-Zealand-logo.png" /></div>
        </a>
        <a href="https://www.nab.com.au/">
          <div class="col-span-1"><img src="~/assets/images/nab-National-Australia-Bank-logo.png" /></div>
        </a>
        <a href="https://www.tmr.qld.gov.au/">
          <div class="col-span-1"><img src="~/assets/images/Queensland-qovernment-department-of-transport-and-main-roads.jpg" /></div>
        </a>
        <a href="https://www.unimelb.edu.au/">
          <div class="col-span-1"><img src="~/assets/images/University-of-melbourne_logo.png" /></div>
        </a>
      </div>
    </page-section>

    <page-section altrow>
      <!-- Header -->
      <div class="mb-8 text-center">
        <span class="text-2xl font-semibold text-logiclytextgrey">Every project is different and designed to meet your digital requirements</span>
      </div>

      <div class="grid grid-cols-2 col-gap-4 mb-4 bg-logiclygreytwo text-logiclytextgrey">
        <div class="grid col-span-2 grid-col-2 lg:col-span-1 lg:col-start-1">
          <div class="col-span-2">
          <overlay-image
            imageurl="/Government-project-queensland-department-of-transport-and-main-roads.jpg"
            height="286px"
            text="Government"
          />
          </div>
        </div>

        <div class="grid content-end col-span-2 px-2 pt-4 pb-10 mx-4 lg:col-span-1 lg:col-start-2 lg:pb-0 xl:pt-16">
          <div class="grid grid-cols-4">
            <div class="col-span-4 lg:col-span-3 sm:px-6 md:px-10 lg:px-0">
              <div>
                <h4 class="pt-6 pb-2 font-semibold leading-snug lg:text-sm text-logiclytheme4 lg:pb-1 lg:pt-0">
                  Queensland Department of Transport and Main Roads
                </h4>
              </div>
              <p class="text-sm">
                A digital system to help understand travel behaviours and plan for future growth and demand of the
                Queensland Transport System.
              </p>
              <div class="pt-2 lg:pb-6 xl:pb-8">
                <NuxtLink to="/projects/?article=1&tab=1" class="text-sm font-semibold hover:underline">Read more</NuxtLink>
              </div>
            </div>
            <div class="content-end hidden col-span-1 lg:grid lg:pl-8 xl:pl-8 lg:pb-8 xl:pb-10">
              <NuxtLink to="/projects/?article=1&tab=1">
                <img class="h-10" src="/Logicly-arrow.png" />
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-2 col-gap-4 mb-4 bg-logiclygreytwo text-logiclytextgreymb-4">
        <div class="grid col-span-2 grid-col-2 lg:col-span-1 lg:col-start-1">
          <div class="col-span-2">
            <overlay-image
              imageurl="/Corporate-project-NAB.jpg"
              height="286px"
              text="Corporate"
            />
          </div>
        </div>

        <div class="grid content-end col-span-2 px-2 pt-4 pb-10 mx-4 lg:col-span-1 lg:col-start-2 xl:pt-16 lg:pb-0">
          <div class="grid grid-cols-4">
            <div class="col-span-4 lg:col-span-3 sm:px-6 md:px-10 lg:px-0">
              <div>
                <h4 class="pt-6 pb-2 font-semibold leading-snug lg:text-sm text-logiclytheme4 lg:pb-1 lg:pt-0">
                  NAB
                </h4>
              </div>
              <p class="text-sm">
                A performance management tool for NAB’s business groups in Australia and overseas with the flexibility to meet their changing future requirements.
              </p>
              <div class="pt-2 lg:pb-8">
                <NuxtLink to="/projects/?article=0&tab=5" class="text-sm font-semibold hover:underline">Read more</NuxtLink>
              </div>
            </div>
            <div class="content-end hidden col-span-1 lg:grid lg:pl-8 xl:pl-8 lg:pb-8 xl:pb-10">
              <NuxtLink to="/projects/?article=0&tab=5">
                <img class="h-10" src="/Logicly-arrow.png" />
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-2 col-gap-4 mb-4 bg-logiclygreytwo text-logiclytextgrey">
        <div class="grid col-span-2 grid-col-2 lg:col-span-1 lg:col-start-1">
          <div class="col-span-2">
            <overlay-image
              imageurl="/Education-project-Deakin.jpg"
              height="286px"
              text="Educational"
            />
          </div>
        </div>

        <div class="grid content-end col-span-2 px-2 pt-4 pb-10 mx-4 lg:col-span-1 lg:col-start-2 lg:pb-0 xl:pt-16">
          <div class="grid grid-cols-4">
            <div class="col-span-4 lg:col-span-3 sm:px-6 md:px-10 lg:px-0">
              <div>
                <h4 class="pt-6 pb-2 font-semibold leading-snug lg:text-sm text-logiclytheme4 lg:pb-1 lg:pt-0">
                  Deakin University
                </h4>
              </div>
              <p class="text-sm">
                A sophisticated tool for researchers to create, analyse, publish and share data. The community can also access the research to discover and learn.
              </p>
              <div class="pt-2 lg:pb-8">
                <NuxtLink to="/projects/?article=0&tab=0" class="text-sm font-semibold hover:underline">Read more</NuxtLink>
              </div>
            </div>
            <div class="content-end hidden col-span-1 lg:grid lg:pl-8 xl:pl-8 lg:pb-8 xl:pb-10">
              <NuxtLink to="/projects/?article=0&tab=0">
                <img class="h-10" src="/Logicly-arrow.png" />
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>

      <div class="flex justify-center lg:justify-end">
        <Button
          buttontext="View all projects"
          buttonlink="/projects"
        />
      </div>
    </page-section>

    <page-section>
      <div class="my-4 text-logiclytextgrey">
          <h1 class="text-2xl font-medium text-center">
            Do you have a project in mind or a complex information challenge? Call us on +61 3 9340 9000 or enquire below.
          </h1>
          <div class="flex justify-center mt-4">
            <Button
              buttontext="Enquire"
              buttonlink="/contactus"
            />
          </div>
      </div>
    </page-section>


    <PageSectionEmail
    />


  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Logicly",
    };
  },
};
</script>

<style>

</style>
