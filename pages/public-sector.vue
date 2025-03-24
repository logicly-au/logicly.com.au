<template>
  <div>

    <AspectRatio
      ar="13:4"
      width="100%"
      :style="{ backgroundSize: 'cover', backgroundImage: `url(/public-sector-header.jpg)` }"
    >
      <page-section overlay="overlay">
        <div class="w-full h-full eresearch-header grid content-center">
          <div class="mt-0">
            <h1 class="text-sm xl:text-base font-medium text-center text-white">PUBLIC SECTOR</h1>
            <h2 class="text-base sm:text-lg md:text-xl xl:text-2xl font-semibold text-center leading-tight text-white">We free research teams to focus on their core investigative questions by taking on the technical challenges</h2>
          </div>
        </div>
      </page-section>

    </AspectRatio>

    <page-section>
      <div class="flex justify-center ">
        <div class="justify-center mb-6">
          <img width="100px" src="/Dissecting_your_information_problems.svg" alt="Dissecting your information problems visual"/>
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
        <h3 class="pb-6 pt-1 text-xl font-semibold text-center text-logiclytextgrey">From conceptualisation to impact</h3>
      </div>

      <div class="grid grid-cols-12 xl:gap-x-6 text-logiclytextgrey">
        <div class="col-span-12 pb-6 border-t-2 border-logiclygreytwo md:pb-8">
        </div>

        <div class="grid justify-center col-span-12 pb-6 md:pb-8 xl:pb-10">
          <img src="~/assets/images/greyarrow.svg" alt="Grey arrow" class="h-4 p-0 md:h-5 xl:h-6"/>
        </div>

        <div class="col-span-1 sm:col-span-3 xl:col-span-4">         
        </div>

        <div class="col-span-2 sm:col-span-1 ml-2 border-l-2 border-logiclygreythree">
          <div class="w-6 h-6 -ml-3 rounded-full bg-logiclytheme1">
          </div>
        </div>

        <div class="col-span-9 sm:col-span-7 xl:col-span-5 pb-4 pl-0 pt-0 lg:-ml-4 lg:pb-8 xl:pl-4 xl:-ml-12 xl:pb-16">
          <h3 class="pb-3 text-xl font-bold text-logiclytheme1 pt-0 -mt-2">1. <span class="text-logiclytextgrey font-semibold text-lg">Data concepts and metrics</span></h3>         
        </div>

        <div class="col-span-1 sm:col-span-3 xl:col-span-4">       
        </div>

        <div class="col-span-2 sm:col-span-1 ml-2 border-l-2 border-logiclygreythree">
          <div class="w-6 h-6 -ml-3 rounded-full bg-logiclytheme2">
          </div>
        </div>

        <div class="col-span-9 sm:col-span-7 xl:col-span-5 pb-4 pl-0 pt-0 lg:-ml-4 lg:pb-8 xl:pl-4 xl:-ml-12 xl:pb-16">
          <h3 class="pb-3 text-xl font-bold text-logiclytheme2 pt-0 -mt-2">2. <span class="text-logiclytextgrey font-semibold text-lg">Data collection</span></h3>         
        </div>      

        <div class="col-span-1 sm:col-span-3 xl:col-span-4">
          
        </div>

        <div class="col-span-2 sm:col-span-1 ml-2 border-l-2 border-logiclygreythree">
          <div class="w-6 h-6 -ml-3 rounded-full bg-logiclytheme4">
          </div>
        </div>

        <div class="col-span-9 sm:col-span-7 xl:col-span-5 pb-4 pl-0 pt-0 lg:-ml-4 lg:pb-8 xl:pl-4 xl:-ml-12 xl:pb-16">
          <h3 class="pb-3 text-xl font-bold text-logiclytheme4 pt-0 -mt-2">3. <span class="text-logiclytextgrey font-semibold text-lg">Data analysis</span></h3>         
        </div>    

        <div class="col-span-1 sm:col-span-3 xl:col-span-4">        
        </div>

        <div class="col-span-2 sm:col-span-1 ml-2 border-logiclygreythree">
          <div class="w-6 h-6 -ml-3 rounded-full bg-logiclytheme3">
          </div>
        </div>

        <div class="col-span-9 sm:col-span-7 xl:col-span-5 pl-0 pt-0 lg:-ml-4 xl:pl-4 xl:-ml-12">
          <h3 class="text-xl font-bold text-logiclytheme3 pt-0 -mt-2">4. <span class="text-logiclytextgrey font-semibold text-lg">Data presentation and interpretation</span></h3>         
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
        <div class="flex flex-wrap justify-center gap-2 md:gap-3 mb-4">
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
          <!-- Show all badge pill -->
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
        <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
          <div
            v-for="study in filteredCaseStudies"
            :key="study.title"
            class="p-4 border rounded-lg shadow-sm hover:shadow-md"
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
      title: "Public sector · Logicly"
    };
  },
  data() {
    return {
      pills: [
        { tag: 'data linkage & transformation', label: 'data linkage & transformation' },
        { tag: 'data security', label: 'data security' },
        { tag: 'research databases', label: 'research databases' },
        { tag: 'end user support', label: 'end user support' },
        { tag: 'R programming', label: 'R programming' },
        { tag: 'analytics & presentation', label: 'analytics & presentation' },
        { tag: 'mapping workflows', label: 'mapping workflows' },
        { tag: 'program evaluation', label: 'program evaluation' },
        { tag: 'data strategy', label: 'data strategy' },
        { tag: 'usabilty & accessibility', label: 'usabilty & accessibility' }
      ],
      activeTag: null,
      caseStudies: [
        {
          client: 'Department of health',
          title: 'Efficiently processing and securing highly sensitive data',
          link: '/projects/government#department-of-health',
          image: '/We-Can-2.svg',
          tags: ['data linkage & transformation', 'data security', 'analytics & presentation', 'usabilty & accessibility'],
        },
        {
          client: 'Queensland Department of Transport and Main Roads',
          title: 'Queensland Online Travel Survey',
          link: '/projects/government#queensland-department-of-transport-and-main-roads',
          image: '/We-Can-3.svg',
          tags: ['data security', 'mapping workflows', 'program evaluation', 'usabilty & accessibility'],
        },
        {
          client: 'AMHOCN',
          title: 'Demonstrating the positive effect mental health investments have on the wellbeing of the population',
          link: '/projects/government#the-australian-mental-health-outcome-and-classification-network',
          image: '/We-Can-1.svg',
          tags: ['data linkage & transformations', 'research databases', 'data security', 'data strategy', 'R programming', 'analytics & presentation', 'usabilty & accessibility'],
        },
        {
          client: 'The Department of Health (DoH)’s Primary Mental Health Care Minimum Dataset',
          title: 'Clarity for understanding and improving national health',
          link: '/projects/government#the-department-of-health-primary-mental-health-care-minimum-dataset',
          image: '/We-Can-2.svg',
          tags: ['data strategy', 'data security', 'end user support', 'program evaluation', 'analytics & presentation', 'usabilty & accessibility'],
        },
        {
          client: 'The Department of Planning and Community’s Growth Areas Authority (GAA)',
          title: 'An agile response to multiplying complexity',
          link: '/projects/government#the-department-of-planning-and-communitys-growth-areas-authority',
          image: '/We-Can-3.svg',
          tags: ['data linkage & transformation', 'research databases', 'data strategy', 'R programming', 'analytics & presentation'],
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
@media only screen and (max-width: 520px) {
  .eresearch-header div {
    margin-top: -1rem;
    margin-left: 1rem;
    margin-right: 1rem;
  }
}

@media only screen and (max-width: 450px) {
  .eresearch-header div {
    margin-top: -2rem;
  }
}

@media only screen and (max-width: 410px) {
  .eresearch-header div {
    margin-top: -3rem;
  }
  .eresearch-header div h1 {
    font-size: 0.8rem;
  }
  .eresearch-header div h2 {
    font-size: 0.85rem;
  }
}
</style>
