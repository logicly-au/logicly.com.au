<template>
  <div>

    <page-section>
      <div class="flex justify-center ">
        <div class="justify-center mb-6">
          <img width="100px" src="/Dissecting_your_information_problems.svg" alt="Dissecting your information problems visual"/>
        </div>
      </div>
      <div class="grid grid-cols-8 gap-x-4 text-logiclytextgrey">
        <div class="col-span-8 text-center">
          <h2 class="text-2xl">It was great to meet you at the Aus Gov Data Summit</h2>
        </div>
      </div>
    </page-section>

    <page-section altrow>
      <div class="px-0 xl:px-0">
        <div class="text-center text-logiclytheme3">
          <h2 class="text-lg font-semibold"><a href="mailto:info@logicly.com.au">Email us at info@logicly.com.au to book your free consultation.</a></h2>
        </div>
      </div>
      <div class="grid justify-center align-center">
        <Button
          buttontext="what we do"
          buttonlink="/whatwedo"
        />
      </div>
    </page-section>

    <page-section>
      <div class="flex justify-center ">
      <h2 class="text-2xl font-bold">Developing thoughtfully designed digital systems</h2>
      <h3 class="pb-6 pt-1 text-xl font-semibold text-center text-logiclytextgrey">We bring twenty five years of knowledge and experience in research, strategy, design and technology to solve your complex information challenges. Our digital systems are built with innovative but practical
                thinking, flexibility and intuitive design, always with the user experience in mind.</h3>
      </div>
    </page-section>

    <page-section id="publicsector-projects">
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
        { tag: 'usability & accessibility', label: 'usability & accessibility' }
      ],
      activeTag: null,
      caseStudies: [
        {
          client: 'Department of health',
          title: 'Efficiently processing and securing highly sensitive data',
          link: '/projects/government#department-of-health',
          image: '/We-Can-2.svg',
          tags: ['data linkage & transformation', 'data security', 'analytics & presentation', 'usability & accessibility'],
        },
        {
          client: 'Queensland Department of Transport and Main Roads',
          title: 'Queensland Online Travel Survey',
          link: '/projects/government#queensland-department-of-transport-and-main-roads',
          image: '/We-Can-3.svg',
          tags: ['data security', 'mapping workflows', 'program evaluation', 'usability & accessibility'],
        },
        {
          client: 'AMHOCN',
          title: 'Demonstrating the positive effect mental health investments have on the wellbeing of the population',
          link: '/projects/government#the-australian-mental-health-outcome-and-classification-network',
          image: '/We-Can-1.svg',
          tags: ['data linkage & transformations', 'research databases', 'data security', 'data strategy', 'R programming', 'analytics & presentation', 'usability & accessibility'],
        },
        {
          client: 'The Department of Health (DoH)’s Primary Mental Health Care Minimum Dataset',
          title: 'Clarity for understanding and improving national health',
          link: '/projects/government#the-department-of-health-primary-mental-health-care-minimum-dataset',
          image: '/We-Can-2.svg',
          tags: ['data strategy', 'data security', 'end user support', 'program evaluation', 'analytics & presentation', 'usability & accessibility'],
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
