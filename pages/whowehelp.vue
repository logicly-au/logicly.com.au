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
              rare that any two projects are the same so every digital system is designed for your specific needs and
              vision."
      altrow
    />

    <div class="w-full">
      <div class="container mx-auto my-4">

        <div class="grid grid-cols-15">

          <div class="grid grid-cols-2 col-span-11 col-start-3 mt-4">
            <div class="col-span-2 text-center">
              <h1 class="text-lg font-bold text-logiclytextgrey">Information and digital needs come in all different
                forms</h1>
            </div>
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

            <div class="col-span-11 col-start-3">
              <img src="~/assets/images/Different_audiences_Different_information_needs_Different_systems.jpg" />
              <!-- TODO Replace placeholder image here -->
              <div class="relative font-bold text-center text-white top-center">Different Audiences. Different
                Information Needs. Different Systems.</div>
            </div>


            <div class="col-span-11 col-start-3">
              <h2>Meeting the internal and external needs of different industries</h2>
              <vsa-list>
                <!-- Here you can use v-for to loop through items  -->
                <vsa-item>
                  <vsa-heading>
                    <h2>Researchers</h2>
                  </vsa-heading>
                  <vsa-content>
                    <h3>Fulfilling a research grant</h3>
                    <p>Managing information challenges for research or evaluation projects.</p>
                    <h3>Quoting for a research grant</h3>
                    <p>Helping define the data requirements and costings so researchers can submit a grant.</p>
                    <h3>Develping data collection processes</h3>
                    <p>The strategy and design of data collection processes that meet ethic requirements.</p>
                    <h3>Creating information networks</h3>
                    <p>Supporting researchers to design and develop a streamlined network of information.</p>
                  </vsa-content>

                </vsa-item>

                <vsa-item>
                  <vsa-heading>
                    Government
                  </vsa-heading>

                  <vsa-content>
                    <h3>Meeting Government requirements</h3>
                    <p>Meeting timelines, privacy and security compliance obligations.</p>
                    <h3>Collecting data to inform policy</h3>
                    <p>Building and managing data collection and reporting systems to better inform and deliver government
                      services.</p>
                    <h3>Evaluating and planning of services</h3>
                    <p>Helping government understand how funding services affects outcomes to help plan for the future.
                    </p>
                    <h3>Transitioning to online data collections</h3>
                    <p>Assisting government to transition from paper data collection to sophisticated, easy-to-use online
                      collections.</p>
                    <h3>Time saving automated solutions</h3>
                    <p>Designing user-friendly, intuitive and automated solutions that reduce the workload for government
                      and public users.</p>
                  </vsa-content>
                </vsa-item>

                <vsa-item>
                  <vsa-heading>
                    Health
                  </vsa-heading>

                  <vsa-content>
                    <h3>Understanding the effectiveness of a health service</h3>
                    <p>An understanding of mental health, human services and the health system</p>
                    <h3>Catering for multiple stakeholders and end users</h3>
                    <p>The ability to work with states and territories with different laws and statutory requirements:
                      (eg. 31 entities in the primary health regional network)</p>
                    <h3>Creating a national and integrated digital system</h3>
                    <p>Ability to safely pull data from all entities, collect and integrate into one national platform.
                    </p>
                    <h3>A system for risk assessment</h3>
                    <p>A system to help predict the severity of patients and provide the right treatment.</p>
                  </vsa-content>
                </vsa-item>

                <vsa-item>
                  <vsa-heading>
                    Education
                  </vsa-heading>
                  <vsa-content>
                    <h3>Digital applications</h3>
                    <p>Designing and developing simple applications to help capture complex information from education
                      providers.</p>
                    <h3>Information to inform policy</h3>
                    <p>Understanding how to improve policy or meet key Department reporting requirements.</p>
                    <h3>Capturing complex service information</h3>
                    <p>Designing simple applications to help capture complex service information from education providers.
                    </p>
                    <h3>Secure data collection</h3>
                    <p>Building secure data collection tools to record enrolment data to assist with funding planning.</p>
                  </vsa-content>
                </vsa-item>

                <vsa-item>
                  <vsa-heading>
                    Non-government
                  </vsa-heading>
                  <vsa-content>
                    <h3>Research information to pilot a new program</h3>
                    <p>Using sophisticated analysis to assess the design and implementation of pilot programs.</p>
                    <h3>A way to consolidate alot of information</h3>
                    <p>A quick way to have information at their fingertips to analyse.To gain a complete story of people’s
                      experience and outcomes.</p>
                  </vsa-content>
                </vsa-item>

                <vsa-item>
                  <vsa-heading>
                    Corporate
                  </vsa-heading>
                  <vsa-content>
                    <h3>Developing a business case</h3>
                    <p>A detailed response for senior decision makers to get approval to proceed.</p>
                    <h3>Customised interactive dashboards</h3>
                    <p>An easy way to manage employees, reviews, make comments and prioritise tasks.</p>
                    <h3>Transitioning from a manual system to a web platform</h3>
                    <p>A platform to fit iwith people’s mobile lifestyle. The</p>
                    ease of use and accessibility increases the usability of the application.
                    <h3>Replacing Excel spreadsheets with an efficient system</h3>
                    <p>Building a bespoke platform that simplifies a process. to manage and analyse their data.</p>
                    <h3>A system to make more informed decisions</h3>
                    <p>Gaining a better overview and deep understanding of the business and their clients.</p>
                    <h3>Accurate sales reports a business can rely on</h3>
                    <p>A system that reduces time, effort and reduces errors.</p>
                    <h3>A performance management system</h3>
                    <p>A tool to easily analyse tailored information from thousands of staff</p>
                  </vsa-content>
                </vsa-item>
              </vsa-list>
            </div>

            <div class="col-span-11 col-start-3">
              <img src="~/assets/images/What-are-your-information-and-digital-needs.jpg" />
              <!-- TODO Replace placeholder image here -->
              <div class="relative font-bold text-center text-white top-center">What are your information and digital
                needs?</div>
            </div>
            
        </div>








      </div>
    </div>

      <CTA
      text="Discover how we can help"
      buttonText="What we do"
      buttonLink="/whatwedo"
     />
     
  </div>

  </div>
  </div>

  </div>
  </div>

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
    return { backgroundUrl }
  }
    // ...
  }

</script>

<style>
</style>
