<template>
  <div>

    <Hero
    heading="WHY USE LOGICLY"
    subheading="We free research teams to focus on their core investigative questions by taking on the technical challenges"
    background-url="/Logicly_how-we-work-header.jpg"
    overlay
    />

    <page-section>
      <div class="flex justify-center ">
        <div class="justify-center mb-6">
          <img width="100px" src="/Dissecting_your_information_problems.svg" />
        </div>
      </div>
      <div class="grid grid-cols-8 gap-x-4 text-logiclytextgrey">
        <div class="col-span-8 text-center">
          <h2 class="text-lg pb-4">Our specialist team combines research, analysis and presentation expertise, dataflow and workflow design and data collection experience with leading-edge technology.</h2>
        </div>
        <div class="col-span-8 lg:col-span-4 col-start-1">
          <ul class="text-base lg:text-base font-light list-disc pl-6 lg:pl-0 pr-8">
            <li>Defining the data requirements for research</li>
            <li>Designing user friendly workflows for longitudinal studies</li>
            <li>Delivering randomised controlled trials and cluster randomised controlled trials</li>
            <li>Easy to use collection systems reducing errors and repetitious work</li>
            <li>Supporting and designing dataflows for intervention trials</li>
            <li>Analysis using standard tools such as SPSS and R</li>
          </ul>
        </div>
        <div class="col-span-8 lg:col-span-4 lg:col-start-5">
          <ul class="text-base lg:text-base font-light list-disc pl-6 lg:pl-0">
            <li>Undertaking data transformation and linkage for research</li>
            <li>Integrating multiple data sets to create research databases</li>
            <li>Supporting development of business cases for information projects</li>
            <li>Developing standardised systems to improve the efficiency of managing research data and reduce manual errors</li>
            <li>Static and dynamic data reporting and presentation</li>
            <li>Integration with data visualisation tools</li>
          </ul>
        </div>
      </div>
      <div class="row justify-content-center text-center mt-6">
        <div class="grid justify-center align-center">
          <button class="block w-48 h-12 my-5 font-medium text-center text-white tt-lc bg-logiclyorange hover:bg-logiclyhover">
            <NuxtLink :to="'#research-projects'">our research projects</NuxtLink>
          </button>
        </div>
      </div>
    </page-section>

    <page-section altrow>
      <div class="px-0 xl:px-0">
        <div class="text-center text-logiclytheme3">
          <h2 class="text-lg font-semibold">“It's been a delight. It was all coded up and integrated [with the third-party learning management system] for us, rather than having to do it ourselves.”</h2>
        </div>
      </div>
    </page-section>

    <page-section>
      <div class="text-center text-logiclytextgrey px-0 xl:px-6">
        <h2 class="text-2xl font-bold">Technical partners in research</h2>
        <h3 class="pb-6 text-xl font-semibold text-center text-logiclytextgrey">From conceptualisation to impact</h3>
      </div>

      <div class="grid grid-cols-12 xl:gap-x-6 text-logiclytextgrey">
        <div class="col-span-12 pb-6 border-t-2 border-logiclygreytwo md:pb-8">
        </div>

        <div class="grid justify-center col-span-12 pb-6 md:pb-8 xl:pb-10">
          <img src="~/assets/images/greyarrow.svg" class="h-4 p-0 md:h-5 xl:h-6"/>
        </div>

        <div class="col-span-12 xl:col-span-4">         
        </div>

        <div class="hidden col-span-1 ml-2 border-l-2 xl:block border-logiclygreythree">
          <div class="w-6 h-6 -ml-3 rounded-full bg-logiclytheme1">
          </div>
        </div>

        <div class="col-span-12 pb-2 pl-0 xl:col-span-4 xl:pl-4 xl:-ml-12 xl:pb-16">
          <h3 class="pt-4 pb-3 text-xl font-bold text-logiclytheme1 xl:pt-0 xl:-mt-2">1. Data concepts and metrics</h3>         
        </div>

        <div class="col-span-12 xl:col-span-4">       
        </div>

        <div class="hidden col-span-1 ml-2 border-l-2 xl:block border-logiclygreythree">
          <div class="w-6 h-6 -ml-3 rounded-full bg-logiclytheme2">
          </div>
        </div>

        <div class="col-span-12 pb-2 pl-0 xl:col-span-4 xl:pl-4 xl:-ml-12 xl:pb-16">
          <h3 class="pt-4 pb-3 text-xl font-bold text-logiclytheme2 xl:pt-0 xl:-mt-2">2. Data collection</h3>         
        </div>      

        <div class="col-span-12 xl:col-span-4">
          
        </div>

        <div class="hidden col-span-1 ml-2 border-l-2 xl:block border-logiclygreythree">
          <div class="w-6 h-6 -ml-3 rounded-full bg-logiclytheme4">
          </div>
        </div>

        <div class="col-span-12 pb-2 pl-0 xl:col-span-4 xl:pl-4 xl:-ml-12 xl:pb-16">
          <h3 class="pt-4 pb-3 text-xl font-bold text-logiclytheme4 xl:pt-0 xl:-mt-2">3. Data analysis</h3>         
        </div>    

        <div class="col-span-12 xl:col-span-4">        
        </div>

        <div class="hidden col-span-1 ml-2 xl:block border-logiclygreythree">
          <div class="w-6 h-6 -ml-3 rounded-full bg-logiclytheme3">
          </div>
        </div>

        <div class="col-span-12 pb-2 pl-0 xl:col-span-4 xl:pl-4 xl:-ml-12 ">
          <h3 class="pt-4 pb-3 text-xl font-bold text-logiclytheme3 xl:pt-0 xl:-mt-2">4. Data presentation and interpretation</h3>         
        </div>
      </div>
    </page-section>

    <page-section altrow>
      <div class="px-0 xl:px-0">
        <div class="text-center text-logiclytheme3">
          <h2 class="text-lg font-semibold">“In case you did not hear the trial crushed it due to the heavy lifting from you and the team.”</h2>
        </div>
      </div>
    </page-section>

    <page-section id="research-projects">
      <div class="container mx-auto -mt-8">
        <div class="mb-6">
          <h2 class="text-3xl font-bold text-logiclytheme3">Case studies</h2>
        </div>
        <div class="flex flex-wrap justify-center gap-3 mb-4">
          <!-- Badge pills -->
          <span
            v-for="pill in pills"
            :key="pill.tag"
            :class="[
              'px-4 py-1 rounded-full cursor-pointer transition-colors duration-300 text-xs font-medium',
              activeTag === pill.tag ? 'bg-logiclytheme3 text-white' : 'bg-logiclygreytwo text-logiclytextgrey hover:bg-logiclygreyhover'
  ]"
            @click="filterCaseStudies(pill.tag)"
          >
            {{ pill.label }}
          </span>
        </div>
        <div class="flex flex-wrap justify-center mb-8">
          <!-- Show all badge pills -->
          <span
            :class="[
              'px-8 py-2 rounded-full cursor-pointer transition-colors duration-300 text-xs font-bold',
              !activeTag ? 'bg-logiclytheme3 text-white' : 'bg-white text-logiclytheme3 border-2 border-logiclytheme3 hover:border-logiclyredhover hover:text-logiclyredhover'
            ]"
            @click="filterCaseStudies(null)"
          >
            Show all
          </span>
        </div>

        <!-- Case studies -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div
            v-for="study in filteredCaseStudies"
            :key="study.title"
            class="p-4 border rounded-lg shadow-sm"
          >
            <a :href="study.link" class="block">
              <div class="flex justify-center items-center mt-6 mb-4">
                <img :src="study.image" alt="study.title" class="h-10" />
              </div>              
              <h4 class="font-bold text-logiclytextgrey">{{ study.client }}</h4>
              <p class="text-sm text-logiclytextgrey">{{ study.title }}</p>
            </a>
          </div>
        </div>
      </div>
    </page-section>    

  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "WebSurvey · Logicly"
    };
  },
  data() {
    return {
      pills: [
        { tag: 'randomised control trials', label: 'randomised control trials' },
        { tag: 'longitudinal studies', label: 'longitudinal studies' },
        { tag: 'data linkage & transformation', label: 'data linkage & transformation' },
        { tag: 'data security', label: 'data security' },
        { tag: 'research databases', label: 'research databases' },
        { tag: 'partners for grant applications', label: 'partners for grant applications' },
        { tag: 'learning management system', label: 'learning management system' },
        { tag: 'research ethics', label: 'research ethics' },
        { tag: 'participant support', label: 'participant support' },
        { tag: 'R programming', label: 'R programming' },
        { tag: 'analytics & presentation', label: 'analytics & presentation' },
        { tag: 'third-party systems', label: 'integration with third-party systems' },
        { tag: 'mapping workflows', label: 'mapping workflows' },
        { tag: 'WebSurvey platform', label: 'WebSurvey platform' },
        { tag: 'program evaluation', label: 'program evaluation' },
      ],
      activeTag: null,
      caseStudies: [
        {
          client: 'Buoy Project',
          title: 'Supporting a research collaboration between universities and community organisations with a commitment to preventing male suicide',
          link: '../',
          image: '/We-Can-1.svg',
          tags: ['randomised control trials', 'research ethics', 'longitudinal studies', 'participant support', 'partners for grant applications', 'third-party systems', 'WebSurvey platform', 'mapping workflows', 'program evaluation'],
        },
        {
          client: 'Orygen',
          title: 'Data linkage and transformation to create a value-adding research database',
          link: '/projects#orygen-ed-self-harm',
          image: '/We-Can-2.svg',
          tags: ['data linkage & transformation', 'research databases', 'data security', 'data strategy', 'R programming', 'analytics & presentation', 'research ethics'],
        },
        {
          client: 'Movember',
          title: 'Evaluating a “world-class” course in suicide prevention in men',
          link: '../',
          image: '/We-Can-3.svg',
          tags: ['learning management system', 'randomised control trials', 'research ethics', 'longitudinal studies', 'end user support', 'WebSurvey platform', 'third-party systems', 'participant support', 'mapping workflows', 'program evaluation'],
        },
        {
          client: 'AMHOCN',
          title: 'Data linkage and transformation to create a value-adding research database',
          link: '/projects#the-australian-mental-health-outcome-and-classification-network',
          image: '/We-Can-1.svg',
          tags: ['data linkage & transformations', 'research databases', 'data security', 'data strategy', 'R programming', 'analytics & presentation'],
        },
        {
          client: 'Link-me',
          title: 'A large-scale trial of a new approach to stepped health care in general practice, particularly focused on delivering care to those with complex needs',
          link: '/projects#the-university-of-melbourne-medical-schools-department-of-general-practice',
          image: '/We-Can-2.svg',
          tags: ['interaction with LMS', 'randomised control trials', 'data ethics', 'longitudinal studies', 'end user support', 'program evaluation', 'WebSurvey platform', 'data security', 'research ethics', 'participant support', 'mapping workflows'],
        },
        {
          client: 'HuNI',
          title: 'Data linkage and transformation to create a value-adding research database',
          link: '/projects#deakin-universitys-humanities-network-infrastructure',
          image: '/We-Can-3.svg',
          tags: ['data linkage & transformation', 'research databases', 'data security', 'data strategy', 'R programming', 'analytics & presentation'],
        },
      ],
    };
  },
  computed: {
    filteredCaseStudies() {
      if (!this.activeTag) {
        return this.caseStudies;
      }
      return this.caseStudies.filter(study => study.tags.includes(this.activeTag));
    },
  },
  methods: {
    filterCaseStudies(tag) {
      this.activeTag = tag === this.activeTag ? null : tag;
    },
  },
};
</script>

<style>
</style>
