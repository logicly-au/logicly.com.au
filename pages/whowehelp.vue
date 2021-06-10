<template>
  <div>

    <Hero
      heading="WHO WE HELP"
      subheading="Our clients approach us with a range of challenges"
      background-url="/Logicly-who-we-help-header-our-clients-approach-us-with-a-range-of-challenges.jpg"
      overlay
    />


    <Herotext
      iconurl="We-help-people-understand-all-the-possibilities.svg"
      imgwidth="310px"
      heading="We help people understand all the possibilities"
      subheading="We help clients understand the power of technology to improve efficiencies and gain quality information
              to inform critical decisions. We guide our clients through the possible pathways and alternatives. It is
              rare that any two projects are the same so every digital system is designed for your specific needs and vision."
      altrow
    />


    <page-section>
      <div class="w-full hidden sm:block lg:pt-8 -mb-20 lg:-mb-10">
        <light-overlay-image class="overlay-height"
          imageurl="/different_audiences.jpg"
          overlaytext="Different audiences. </br>Different information needs. </br>Different systems."
        />
      </div>

      <div class="w-full block sm:hidden -mb-16">
        <div class="container mx-auto">
          <light-overlay-image class="overlay-height"
            imageurl="/different_audiences.jpg"
            overlaytext="Different audiences. </br>Different information needs. </br>Different systems."
          />
        </div>
      </div>
    </page-section>


    <page-section>
      <div class="text-logiclytextgrey">
        <h2 class="text-2xl font-semibold text-center mb-10 lg:mb-12 xl:mb-16">We work with clients across different industries to understand their internal and external stakeholders so that the systems we build really do meet their needs.</h2>
        <vsa-list>
          <!-- Here you can use v-for to loop through items  -->
          <vsa-item class="grid content-center">
            <vsa-heading>
              <div class="grid grid-cols-5 lg:grid-cols-11">
                <div class="col-span-1"><img src="/researchers.svg" class="w-8 lg:w-10" /></div>
                <div class="flex flex-col justify-center col-span-4 lg:col-span-10 pl-6 md:pl-8 lg:pl-12 lg:ml-2">
                  <h2 class="font-semibold text-lg sm:text-xl text-left">Researchers</h2>
                </div>
              </div>
            </vsa-heading>
            <vsa-content>
              <div class="grid grid-cols-5 lg:grid-cols-11">
                <div class="col-span-4 lg:col-span-10 col-start-2 lg:col-start-3 -ml-8 md:-ml-4 lg:-ml-0 xl:-ml-12 lg:pl-2">
                  <h3 class="font-bold">Our Senior Consultants have a long history of working with research, and we understand how to help researchers:</h3>
                  <ul class="list-disc ml-5 pb-4 lg:pb-8">
                    <li>Implement ethical and robust data collections that keep the end user in mind</li>
                    <li>Manage information challenges for research or evaluation projects</li>
                    <li>Collect data from a variety of participants by building user-friendly data collection processes</li>
                    <li>Support participants at every stage of the research by building in safety mechanisms</li>
                    <li>Define data requirements and costs for research grant submissions</li>
                    <li>Design and create information networks</li>
                  </ul>
                </div>
              </div>
            </vsa-content>

          </vsa-item>

          <vsa-item class="grid content-center">
            <vsa-heading>
              <div class="grid grid-cols-5 lg:grid-cols-11">
                <div class="col-span-1"><img src="/government.svg" class="lg:w-12" /></div>
                <div class="flex flex-col justify-center col-span-4 lg:col-span-10 pl-6 md:pl-8 lg:pl-12">
                  <h2 class="font-semibold text-lg sm:text-xl text-left">Government</h2>
                </div>
              </div>
            </vsa-heading>

            <vsa-content>
              <div class="grid grid-cols-5 lg:grid-cols-11">
                <div class="col-span-4 lg:col-span-10 col-start-2 lg:col-start-3 -ml-8 md:-ml-4 lg:-ml-0 xl:-ml-12 lg:pl-2">
                  <h3 class="font-bold pb-1">Over 20 years we’ve partnered with our government clients to understand their stakeholders, help design empathic technical solutions and manage the implementation of complex projects. We will work with you to:</h3>
                  <ul class="list-disc ml-5 pb-4 lg:pb-8">
                    <li>Co-design technical solutions that make adoption of the system as low friction as possible for clients and end users</li>
                    <li>Build user-friendly, intuitive and automated solutions that reduce the workload for government and public users</li>
                    <li>Meet timelines, privacy and security compliance obligations</li>
                    <li>Collect data to inform policy and deliver services</li>
                    <li>Design and develop reporting systems to inform stakeholders</li>
                    <li>Understand how funding services affects outcomes to help plan for the future</li>
                    <li>Transition from paper data collection to sophisticated, easy-to-use online collections</li>
                    <li>Implement time-saving automated solutions</li>
                    <li>Work with states and territories with different laws and statutory requirements to develop national solutions to complex information challenges</li>
                  </ul>
                </div>
              </div>
            </vsa-content>
          </vsa-item>

          <vsa-item class="grid content-center">
            <vsa-heading>
              <div class="grid grid-cols-5 lg:grid-cols-11">
                <div class="col-span-1"><img src="/health.svg" class="w-10 lg:w-12" /></div>
                <div class="flex flex-col justify-center col-span-4 lg:col-span-10 pl-4 sm:pl-5 md:pl-8 lg:pl-12">
                  <h2 class="font-semibold text-lg sm:text-xl text-left">Health</h2>
                </div>
              </div>
            </vsa-heading>

            <vsa-content>
              <div class="grid grid-cols-5 lg:grid-cols-11">
                <div class="col-span-4 lg:col-span-10 col-start-2 lg:col-start-3 -ml-8 md:-ml-4 lg:-ml-0 xl:-ml-12 lg:pl-2">
                  <h3 class="font-bold pb-1">Logicly understands the requirements of data management in health settings. Throughout our history we’ve worked with clients to:</h3>
                  <ul class="list-disc ml-5 pb-4 lg:pb-8">
                    <li>Design effective solutions using our understanding of mental health, human services and the health system</li>
                    <li>Use empathic design logic to cater for multiple stakeholders and end users (eg. 31 entities in the Primary Health Network)</li>
                    <li>Evaluate the effectiveness of a health service</li>
                    <li>Create a national and integrated digital system</li>
                    <li>Safely pull data from multiple entities, collecting and integrating it into one national platform</li>
                    <li>Digitise risk assessments</li>
                    <li>Design flexible digital systems to help predict the severity of patients and provide the right treatment</li>
                  </ul>
                </div>
              </div>
            </vsa-content>
          </vsa-item>

          <vsa-item class="grid content-center">
            <vsa-heading>
              <div class="grid grid-cols-5 lg:grid-cols-11">
                <div class="col-span-1">
                  <img src="/education.svg" class="w-10 lg:w-12" />
                </div>
                <div class="flex flex-col justify-center col-span-4 lg:col-span-10 pl-4 sm:pl-5 md:pl-8 lg:pl-12">
                  <h2 class="font-semibold text-lg sm:text-xl text-left">Education</h2>
                </div>
              </div>
            </vsa-heading>
            <vsa-content>
              <div class="grid grid-cols-5 lg:grid-cols-11">
                <div class="col-span-4 lg:col-span-10 col-start-2 lg:col-start-3 -ml-8 md:-ml-4 lg:-ml-0 xl:-ml-12 lg:pl-2">
                  <h3 class="font-bold pb-1">With experience running multiple large census projects across schools and kindergartens to small, time-sensitive data collections regarding attendance and expenditure, Logicly has worked with the education sector to:</h3>
                  <ul class="list-disc ml-5 pb-4 lg:pb-8">
                    <li>Build secure data collection tools to record enrolment data to assist with funding planning</li>
                    <li>Build simple, user-friendly digital applications to help capture complex information complex projects</li>
                    <li>Collect information to inform policy or meet key Department reporting requirements</li>
                    <li>Capture complex service information with as little impact on users as possible</li>
                  </ul>
                </div>
              </div>
            </vsa-content>
          </vsa-item>

          <vsa-item class="grid content-center">
            <vsa-heading>
              <div class="grid grid-cols-5 lg:grid-cols-11">
                <div class="col-span-1">
                  <img src="/non-government.svg" class="w-10 lg:w-12" />
                </div>
                <div class="flex flex-col justify-center col-span-4 lg:col-span-10 pl-4 sm:pl-5 md:pl-8 lg:pl-12">
                  <h2 class="text-left text-lg sm:text-xl font-semibold -mr-10">Non-government</h2>
                </div>
              </div>
            </vsa-heading>
            <vsa-content>
              <div class="grid grid-cols-5 lg:grid-cols-11">
                <div class="col-span-4 lg:col-span-10 col-start-2 lg:col-start-3 -ml-8 md:-ml-4 lg:-ml-0 xl:-ml-12 lg:pl-2">
                  <h3 class="font-bold pb-1">Logicly’s hands on approach means we can work with the subject matter experts to help them:</h3>
                  <ul class="list-disc ml-5 pb-4 lg:pb-8">
                    <li>Collate research information to guide pilot programs</li>
                    <li>Use sophisticated analysis to assess the design and implementation of pilot programs</li>
                    <li>Produce a quick way to have information available for analysis</li>
                    <li>Build systems to help stakeholders gain a complete story of people’s experience and outcomes</li>
                  </ul>
                </div>
              </div>
            </vsa-content>
          </vsa-item>

          <vsa-item class="grid content-center">
            <vsa-heading>
              <div class="grid grid-cols-5 lg:grid-cols-11">
                <div class="col-span-1">
                  <img src="/corporate.svg" class="w-10 lg:w-12" />
                </div>
                <div class="flex flex-col justify-center col-span-4 lg:col-span-10 pl-4 sm:pl-5 md:pl-8 lg:pl-12">
                  <h2 class="font-semibold text-lg sm:text-xl text-left">Corporate</h2>
                </div>
              </div>
            </vsa-heading>
            <vsa-content>
              <div class="grid grid-cols-5 lg:grid-cols-11">
                <div class="col-span-4 lg:col-span-10 col-start-2 lg:col-start-3 -ml-8 md:-ml-4 lg:-ml-0 xl:-ml-12 lg:pl-2">
                  <h3 class="font-bold pb-1">Over the past 20 years we’ve worked with a number of corporate clients to:</h3>
                  <ul class="list-disc ml-5 pb-4 lg:pb-8">
                    <li>Develop a business case for senior decision makers</li>
                    <li>Co-design customised interactive dashboards or systems to make more informed decisions</li>
                    <li>Develop an easy way to manage employees, reviews, make comments and prioritise tasks</li>
                    <li>Transition from a manual system to a web platform</li>
                    <li>Build platforms to fit with people’s mobile lifestyle, using the principles of ease of use and accessibility to increase the usability of the application</li>
                    <li>Replace Excel spreadsheets with efficient systems, using in-built validations and checks to reinforce data quality</li>
                    <li>Design secure industry monitoring tools that businesses can rely on</li>
                    <li>Build systems that reduce time, effort and reduce errors</li>
                  </ul>
                </div>
              </div>
            </vsa-content>
          </vsa-item>
        </vsa-list>
      </div>
    </page-section>

    <page-section class="hidden sm:block">
      <div class="w-full">
        <light-overlay-image class="overlay-height"
          imageurl="/What-are-your-information-and-digital-needs.jpg"
          overlaytext="What are your information and digital needs?"
        />
      </div>
    </page-section>

    <div class="block w-full sm:hidden">
      <div class="container mx-auto">
        <light-overlay-image class="overlay-height"
          imageurl="/What-are-your-information-and-digital-needs.jpg"
          overlaytext="What are your information and digital needs?"
        />
      </div>
    </div>


    <CTA
      text="Discover how we can help"
      buttonText="What we do"
      buttonLink="/whatwedo"
    />


  </div>

</template>

<script>
  import backgroundUrl from '~/assets/images/Logicly-who-we-help-header-our-clients-approach-us-with-a-range-of-challenges.jpg';

  import {
    VsaList,
    VsaItem,
    VsaHeading,
    VsaContent,
    VsaIcon
  } from 'vue-simple-accordion';

  import 'vue-simple-accordion/dist/vue-simple-accordion.css';


  export default {
    // ...
    components: {
      VsaList,
      VsaItem,
      VsaHeading,
      VsaContent,
      VsaIcon
    },
    data() {
      return {
        backgroundUrl
      }
    }
    // ...
  }

</script>

<style>

.overlay-height {
  height: 485px;
}

@media only screen and (max-width: 1280px) {
  .overlay-height {
    height: 385px;
  }
}

@media only screen and (max-width: 1024px) {
  .overlay-height {
    height: 290px;
  }
}

@media only screen and (max-width: 768px) {
  .overlay-height {
    height: 250px;
  }
}

@media only screen and (max-width: 640px) {
  .overlay-height {
    height: 350px;
  }
}

/* VSA-list Overrides */
.vsa-item__trigger__icon--is-default {
  width:40px!important;
  transform: rotate(270deg);
}

.vsa-list {
  --vsa-border-width: 0px;
  max-width:100%;
  border:none;
  border-bottom:1px solid #e84e1b!important;
}

.vsa-item {
  border:none;
  border-top:1px solid #e84e1b!important;
  min-height: 5rem;
}

.vsa-item__trigger:hover {
  background-color:#e84e1b!important;
  color:white!important;
  margin-bottom: -1px;
  min-height: 5rem;
}

.vsa-item--is-active .vsa-item__heading {
  border-bottom:none!important;
}

.vsa-item__trigger__icon--is-default::before, .vsa-item__trigger__icon--is-default::after {
  background-color:#9c9b9b;
}


</style>
