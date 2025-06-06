<template>
  <div>
    <Hero
      heading="OUR PROJECTS"
      subheading="Intelligent decision-making with thoughtful digital solutions"
      background-url="/Logicly-Projects-Intelligent-decision-making-with-thoughtful-digital-solutions.jpg"
      overlay
    />

  <page-section altrow>
    <div class="pb-12">
      <h2 class="-mb-8 text-2xl font-semibold text-center text-logiclytextgrey">
        Our diverse projects are from a range of sectors
      </h2>
    </div>
    <div class="flex flex-row flex-wrap items-center mt-10 force-break space-between justify-evenly">
      <button 
        @click.prevent="$router.push({ path: '/projects/' + category })" 
        class="flex flex-col items-center py-2 lg:py-0" 
        v-for="category in categories"
      >
        <img 
          v-if="$route.params.slug == category" 
          :src="'/Projects_' + capitalize(category) + '_selected.svg'" 
          class="h-10 filter-orange mx-auto"
        />
        <img 
          v-else 
          :src="'/Projects_' + capitalize(category) + '.svg'" 
          class="h-10 filter-orange mx-auto"
          alt=""
        />      
        <div class="pt-2 text-xs font-medium text-center capitalize sm:text-sm text-logiclytextgrey">
          {{ category }}
        </div>
      </button>
    </div>
  </page-section>

  <page-section>
      <NuxtChild />
  </page-section>

  <CTA
    text="Do you have an information or digital challenge?"
    buttonText="Get in touch"
    buttonLink="/contactus"
  />

  </div>
</template>

<script>
export default {
  scrollToTop: true,
  data() {
    return {
      categories: [],
    };
  },
  head() {
    return {
      title: "Projects · Logicly"
    };
  },
  methods: {
    capitalize(str) {
      return str.replace(/(^|[\s-])\S/g, function (match) {
        return match.toUpperCase();
      });
    },
  },
   async created() {
     let categories = await this.$content('projects').only(['category']).fetch();
     let sortedCategories = categories.map(article => article.category).sort((a,b) => a.localeCompare(b));

     this.categories = new Set(sortedCategories);
  },
}
</script>

<style>

/* On hover change SVG colour */
.filter-orange:hover {
  filter: invert(34%) sepia(48%) saturate(3112%) hue-rotate(354deg) brightness(97%) contrast(89%);
}
/* End SVG fix */

.project-page p {
  font-weight:300;
  font-size:1rem;
}

.project-page h2 {
  font-weight:400;
  font-size:1.25rem;
}

.project-page h3 {
  padding-top:1.25rem;
  padding-bottom:0.25rem;
  font-size:1.25rem;
  font-weight:600;
}

.project-page h4 {
  font-weight:600;
  font-size:1rem;
  margin-top:0.5rem;
}

.project-page h5 {
  font-weight:500;
  font-size:0.85em;
}

.project-page .project-4-style {
  font-weight:300;
}

.project-page .articles {
  padding-bottom: 4em;
}

.project-page .articles-active {
  color: #E94E1B;
}

.project-page ul.nav.nav-tabs {
  display:flex;
  justify-content:space-between;
}

.project-page li > a > div > img {
  margin:auto;
  margin-bottom:0.5rem;
}

/* Commenting out right margin while icons-sidebar is displayed on the wrong side */
.icons-sidebar div {
  border-top: 2px solid #dedede;
  padding-top:1.75rem;
  padding-bottom:1.75rem;
/*  margin-right:1rem; */
  text-align:center;
}

.icons-sidebar-last {
  border-bottom: 2px solid #dedede;
}

@media only screen and (max-width: 1024px) {
  .icons-sidebar-last {
    border-bottom:0px;
  }
/* margin-left added as temporary padding while icons-sidebar is displayed on the wrong side */
  .icons-sidebar {
    margin-left: 0rem;
  }
}

.icons-sidebar img {
  margin:auto;
  height:4.5rem;
  padding:0.5rem;
  margin-bottom:0.5rem;
}

.project-images img {
  margin-bottom:1rem;
}

.project-images {
  margin-bottom:4rem;
}

@media only screen and (max-width: 1024px) {
  .project-images {
    margin-bottom:2rem;
  }
}

.project-image-secondrow {
  height:21rem;
}

@media only screen and (max-width: 1280px) {
  .project-image-secondrow {
    height:16rem;
  }
}

@media only screen and (max-width: 1024px) {
  .project-image-secondrow {
    height:12rem;
  }
}

@media only screen and (max-width: 768px) {
  .project-image-secondrow {
    height:10rem;
  }
}

@media only screen and (max-width: 640px) {
  .project-image-secondrow {
    height:9.5rem;
  }
}

/* Commenting out left margin while icons-sidebar is displayed on the wrong side */
.project-text {
/*  margin-left:2rem; */
  padding-bottom:5rem;
}

@media only screen and (max-width: 1024px) {
  .project-text {
    margin-left:0rem;
    padding-bottom:3rem;
  }
}

.project-text p {
  padding-bottom:0.5rem;
}

.project-text-list ul li {
  list-style:disc;
  margin-left:1.25rem;
  font-weight:300;
}

.project-text-h4 {
  margin-top:-1.25rem;
}

@media only screen and (max-width: 1024px) {
  .project-page ul.nav.nav-tabs {
    flex-wrap: wrap;
  }

.projectsector {
  width:9.5rem;
  }
}

@media only screen and (max-width: 597px) {
.projectsector {
  width:8rem;
  }
}

@media only screen and (max-width: 509px) {
.projectsector {
  width:7rem;
  }
}

@media only screen and (max-width: 477px) {
.projectsector {
  width:6.5rem;
  }
}

@media only screen and (max-width: 390px) {
.projectsector {
  width:5.6rem;
  }
}

.articles-select {
  width:100%;
  border: 1px solid #E9E8E1;
  padding: 10px 0px 10px 10px;
}


/* This will evenly size all projects icons for mobile display */

@media only screen and (max-width: 1024px) {
  .force-break > button {
    flex-basis: 33.33%;
  }
}

</style>
