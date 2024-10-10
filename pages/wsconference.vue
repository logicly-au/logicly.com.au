<template>
  <div>

    <Hero
    heading="WHY USE LOGICLY"
    subheading="Our Principals have more than 25 years' experience working with University and other research teams to co-create innovative solutions to complex data collection problems using leading edge technology solutions"
    background-url="/Logicly_how-we-work-header.jpg"
    overlay
    />

    <page-section>
      <div class="flex justify-center ">
        <div class="justify-center mb-6">
          <img width="100px" src="/Dissecting_your_information_problems.svg" />
        </div>
      </div>
      <div class="px-0 xl:px-0">
        <div class="text-center text-logiclytextgrey">
          <h2 class="text-lg">Freeing research teams to concentrate on their core investigative questions by taking on the technical and security problems involved in data collection workflow design, analysis and presentation.</h2>
        </div>
        </br>
        <div class="col-span-8 col-start-1 lg:col-span-4 text-logiclytextgrey">
          <ul class="pl-4 text-base leading-relaxed list-disc lg:text-sm">
            <li>Designing empathic workflows for longitudinal stuides that make the task easier for participants</li>
            <li>Delivering online randomised controlled trials and cluster randomised controlled trials</li>
            <li>Undertaking data transformation and linkage for research</li>
            <li>Supporting development of business cases for information projects</li>
            <li>Defining the data requirements for research</li>
            <li>Collecting useful and accurate data</li>
          </ul>
        </div>
        <div class="col-span-8 lg:col-span-4 lg:col-start-5">
          <ul class="pl-4 text-base leading-relaxed list-disc lg:text-sm">
            <li>Integrating multiple data sets</li>
            <li>Transitioning from a manual to an online system</li>
            <li>Systemising information management</li>
            <li>Capturing, collecting and collating stories and information</li>
            <li>Building efficient and easy to use systems to reduce errors and repetitious work</li>
            <li>Collating and transforming data for analysis</li>
          </ul>
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
        <h2 class="text-lg font-light">DIAGRAM SECTION
        </h2>
      </div>
    </page-section>


    <page-section altrow>
      <div class="text-center text-logiclytextgrey px-0 xl:px-6">
        <h2 class="text-lg font-light">Our specialist <span class="text-logiclytheme3 font-semibold">WebSurvey</span> team combines research, dataflow, workflow design and data collection experience with leading-edge technology.
        </h2>
        </br>
        <h2 class="text-lg font-light"><span class="text-logiclytheme3 font-semibold">WebSurvey</span> by Logicly is a unique, flexible, secure and reliable survey solution designed to accommodate and address research challenges.</h2>
      </div>
    </page-section>

    <page-section>
      <div class="container mx-auto mt-0">
        <div class="mb-6">
          <h2 class="text-3xl font-bold text-logiclytheme3">Specialists in</h2>
        </div>
        <div class="flex flex-wrap justify-center gap-3 mb-8">
          <!-- Badge pills -->
          <span
            v-for="pill in pills"
            :key="pill.tag"
            :class="[
              'px-4 py-1 rounded-full cursor-pointer transition-colors duration-300 text-xs font-medium',
              activeTag === pill.tag ? 'bg-logiclytheme3 text-white' : 'bg-logiclygreytwo text-logiclytextgrey'
            ]"
            @click="filterCaseStudies(pill.tag)"
          >
            {{ pill.label }}
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
        { tag: 'third-party systems', label: 'third-party systems' },
        { tag: 'mapping workflows', label: 'mapping workflows' },
        { tag: 'WebSurvey platform', label: 'WebSurvey platform' },
        { tag: 'end user support', label: 'end user support' },
        { tag: 'interaction with LMS', label: 'interaction with LMS' },
        { tag: 'program evaluation', label: 'program evaluation' },
      ],
      activeTag: null,
      caseStudies: [
        {
          client: 'Buoy Project',
          title: 'Supporting a research collaboration between universities and community organisations with a commitment to preventing male suicide',
          link: '../',
          image: '/We-Can-1.svg',
          tags: ['randomised control trials', 'research ethics', 'longitudinal studies', 'participant support', 'partners for grant applications', 'third-party systems', 'WebSurvey platform'],
        },
        {
          client: 'Orygen',
          title: 'Data linkage and transformation to create a value-adding research database',
          link: '../',
          image: '/We-Can-2.svg',
          tags: ['data linkage & transformation', 'research databases', 'data security', 'data strategy', 'R programming'],
        },
        {
          client: 'Movember',
          title: 'Evaluating a “world-class” course in suicide prevention in men',
          link: '../',
          image: '/We-Can-3.svg',
          tags: ['learning management system', 'randomised control trials', 'research ethics', 'longitudinal studies', 'end user support', 'WebSurvey platform'],
        },
        {
          client: 'AMHOCN',
          title: 'Data linkage and transformation to create a value-adding research database',
          link: '../',
          image: '/We-Can-1.svg',
          tags: ['data linkage & transformations', 'research databases', 'data security', 'data strategy', 'R programming'],
        },
        {
          client: 'Link-me',
          title: 'A large-scale trial of a new approach to stepped health care in general practice, particularly focused on delivering care to those with complex needs',
          link: '../',
          image: '/We-Can-2.svg',
          tags: ['interaction with LMS', 'randomised control trials', 'data ethics', 'longitudinal studies', 'end user support', 'program evaluation', 'WebSurvey platform'],
        },
        {
          client: 'HuNI',
          title: 'Data linkage and transformation to create a value-adding research database',
          link: '../',
          image: '/We-Can-3.svg',
          tags: ['data linkage & transformation', 'research databases', 'data security', 'data strategy', 'R programming'],
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
