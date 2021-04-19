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
      heading="We help people understand all the possibilities"
      subheading="We help clients understand the power of technology to improve efficiencies and gain quality information
              to inform critical decisions. We guide our clients through the possible pathways and alternatives. It is
              rare that any two projects are the same so every digital system is designed for your specific needs and vision."
      altrow
    />


    <page-section>
      <div class="grid grid-cols-8 px-0 gap-x-4 text-logiclytextgrey md:px-4 xl:px-6">
        <div class="col-span-8 mb-8 text-center lg:col-span-6 lg:col-start-2 xl:col-span-8">
          <h1 class="text-2xl font-semibold text-center text-logiclytextgrey">Information and digital needs come in all different forms</h1>
        </div>
        <div class="col-span-8 col-start-1 lg:col-span-4 text-logiclytextgrey">
          <ul class="text-base leading-relaxed list-disc lg:text-sm">
            <li>Developing a business case</li>
            <li>Define the data requirements for research</li>
            <li>Collecting useful and accurate data</li>
            <li>Integrating multiple data sets</li>
            <li>Transition from a manual to an online system</li>
          </ul>
        </div>
        <div class="col-span-8 lg:col-span-4 lg:col-start-5">
          <ul class="text-base leading-relaxed list-disc lg:text-sm">
            <li>Systemising information management</li>
            <li>Capture, collect and collate stories and information</li>
            <li>Efficient systems to reduce errors and repititious work</li>
            <li>Collating and transforming data for analysis</li>
          </ul>
        </div>
      </div>
    </page-section>


    <overlay-image
      imageurl="/different_audiences.jpg"
      text="Different Audiences. Different Information Needs. Different Systems."
    />


    <page-section>
      <div class="text-logiclytextgrey">
        <h2 class="mb-10 text-2xl font-semibold text-center xl:mb-16">Meeting the internal and external needs of different industries</h2>
        <vsa-list>
          <!-- Here you can use v-for to loop through items  -->
          <vsa-item>
            <vsa-heading>
              <div class="grid grid-cols-11">
                <div class="col-span-1"><img src="/researchers.svg" class="w-20 pr-4" /></div>
                <div class="flex flex-col justify-center col-span-10">
                  <h2 class="text-left">Researchers</h2>
                </div>
              </div>
            </vsa-heading>
            <vsa-content>
              <div class="grid grid-cols-11">
                <div class="col-span-9 col-start-2">
                  <div class="grid grid-cols-11">
                  <div class="col-span-9 col-start-2">
                    <h3 class="font-bold">Fulfilling a research grant</h3>
                    <p>Managing information challenges for research or evaluation projects.</p>
                    <h3 class="font-bold">Quoting for a research grant</h3>
                    <p>Helping define the data requirements and costings so researchers can submit a grant.</p>
                    <h3 class="font-bold">Develping data collection processes</h3>
                    <p>The strategy and design of data collection processes that meet ethic requirements.</p>
                    <h3 class="font-bold">Creating information networks</h3>
                    <p>Supporting researchers to design and develop a streamlined network of information.</p>
                  </div>
                  </div>
                </div>
              </div>
            </vsa-content>

          </vsa-item>

          <vsa-item>
            <vsa-heading>
              <div class="grid grid-cols-11">
                <div class="col-span-1"><img src="/government.svg" class="w-20 pr-4" /></div>
                <div class="flex flex-col justify-center col-span-10">
                  <h2 class="text-left">Government</h2>
                </div>
              </div>
            </vsa-heading>

            <vsa-content>
              <div class="grid grid-cols-11">
                <div class="col-span-9 col-start-2">
                  <h3 class="font-bold">Meeting Government requirements</h3>
                  <p>Meeting timelines, privacy and security compliance obligations.</p>
                  <h3 class="font-bold">Collecting data to inform policy</h3>
                  <p>Building and managing data collection and reporting systems to better inform and deliver government
                    services.</p>
                  <h3 class="font-bold">Evaluating and planning of services</h3>
                  <p>Helping government understand how funding services affects outcomes to help plan for the future.
                  </p>
                  <h3 class="font-bold">Transitioning to online data collections</h3>
                  <p>Assisting government to transition from paper data collection to sophisticated, easy-to-use online
                    collections.</p>
                  <h3 class="font-bold">Time saving automated solutions</h3>
                  <p>Designing user-friendly, intuitive and automated solutions that reduce the workload for government
                    and public users.</p>
                </div>
              </div>
            </vsa-content>
          </vsa-item>

          <vsa-item>
            <vsa-heading>
              <div class="grid grid-cols-11">
                <div class="col-span-1"><img src="/health.svg" class="w-20 pr-4" /></div>
                <div class="flex flex-col justify-center col-span-10">
                  <h2 class="text-left">Health</h2>
                </div>
              </div>
            </vsa-heading>

            <vsa-content>
              <div class="grid grid-cols-11">
                <div class="col-span-9 col-start-2">
                  <h3 class="font-bold">Understanding the effectiveness of a health service</h3>
                  <p>An understanding of mental health, human services and the health system</p>
                  <h3 class="font-bold">Catering for multiple stakeholders and end users</h3>
                  <p>The ability to work with states and territories with different laws and statutory requirements:
                    (eg. 31 entities in the primary health regional network)</p>
                  <h3 class="font-bold">Creating a national and integrated digital system</h3>
                  <p>Ability to safely pull data from all entities, collect and integrate into one national platform.
                  </p>
                  <h3 class="font-bold">A system for risk assessment</h3>
                  <p>A system to help predict the severity of patients and provide the right treatment.</p>
                </div>
              </div>
            </vsa-content>
          </vsa-item>

          <vsa-item>
            <vsa-heading>
              <div class="grid grid-cols-11">
                <div class="col-span-1">
                  <img src="/education.svg" class="w-20 pr-4" />
                </div>
                <div class="flex flex-col justify-center col-span-10">
                  <h2 class="text-left">Education</h2>
                </div>
              </div>
            </vsa-heading>
            <vsa-content>
              <div class="grid grid-cols-11">
                <div class="col-span-9 col-start-2">
                  <h3 class="font-bold">Digital applications</h3>
                  <p>Designing and developing simple applications to help capture complex information from education
                    providers.</p>
                  <h3 class="font-bold">Information to inform policy</h3>
                  <p>Understanding how to improve policy or meet key Department reporting requirements.</p>
                  <h3 class="font-bold">Capturing complex service information</h3>
                  <p>Designing simple applications to help capture complex service information from education providers.
                  </p>
                  <h3 class="font-bold">Secure data collection</h3>
                  <p>Building secure data collection tools to record enrolment data to assist with funding planning.</p>
                </div>
              </div>
            </vsa-content>
          </vsa-item>

          <vsa-item>
            <vsa-heading>
              <div class="grid grid-cols-11">
                <div class="col-span-1">
                  <img src="/non-government.svg" class="w-20 pr-4" />
                </div>
                <div class="flex flex-col justify-center col-span-10">
                  <h2 class="text-left">Non-government</h2>
                </div>
              </div>
            </vsa-heading>
            <vsa-content>
              <div class="grid grid-cols-11">
                <div class="col-span-9 col-start-2">
                  <h3 class="font-bold">Research information to pilot a new program</h3>
                  <p>Using sophisticated analysis to assess the design and implementation of pilot programs.</p>
                  <h3 class="font-bold">A way to consolidate alot of information</h3>
                  <p>A quick way to have information at their fingertips to analyse.To gain a complete story of people’s
                    experience and outcomes.</p>
                </div>
              </div>
            </vsa-content>
          </vsa-item>

          <vsa-item>
          <vsa-heading>
              <div class="grid grid-cols-11">
                <div class="col-span-1">
                  <img src="/corporate.svg" class="w-20 pr-4" />
                </div>
                <div class="flex flex-col justify-center col-span-10">
                  <h2 class="text-left">Corporate</h2>
                </div>
              </div>
            </vsa-heading>
            <vsa-content>
              <div class="grid grid-cols-11">
                <div class="col-span-9 col-start-2">
                  <h3 class="font-bold">Developing a business case</h3>
                  <p>A detailed response for senior decision makers to get approval to proceed.</p>
                  <h3 class="font-bold">Customised interactive dashboards</h3>
                  <p>An easy way to manage employees, reviews, make comments and prioritise tasks.</p>
                  <h3 class="font-bold">Transitioning from a manual system to a web platform</h3>
                  <p>A platform to fit iwith people’s mobile lifestyle. The</p>
                  ease of use and accessibility increases the usability of the application.
                  <h3 class="font-bold">Replacing Excel spreadsheets with an efficient system</h3>
                  <p>Building a bespoke platform that simplifies a process. to manage and analyse their data.</p>
                  <h3 class="font-bold">A system to make more informed decisions</h3>
                  <p>Gaining a better overview and deep understanding of the business and their clients.</p>
                  <h3 class="font-bold">Accurate sales reports a business can rely on</h3>
                  <p>A system that reduces time, effort and reduces errors.</p>
                  <h3 class="font-bold">A performance management system</h3>
                  <p>A tool to easily analyse tailored information from thousands of staff</p>
                </div>
              </div>
            </vsa-content>
          </vsa-item>
        </vsa-list>
      </div>
    </page-section>


    <overlay-image
      imageurl="/What-are-your-information-and-digital-needs.jpg"
      text="What are your information and digital needs?"
    />


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

/* VSA-list Overrides */
.vsa-item__trigger__icon--is-default {
  width:48px!important;
}

.vsa-list {
  max-width:100%;
  border:none;
}

.vsa-item {
  border:none;
  border-top:2px solid #e84e1b!important;
}

.vsa-item__trigger:hover {
  background-color:#e84e1b!important;
  color:white!important;
  margin-bottom: -1px;
}

.vsa-item--is-active .vsa-item__heading {
  border-bottom:none!important;
}

.vsa-item__trigger__icon--is-default::before, .vsa-item__trigger__icon--is-default::after {
  background-color:#9c9b9b;
}

</style>
