
<template>
  <div>
    <Hero
      heading="OUR PROJECTS"
      subheading="Intelligent decision-making with thoughtful digital solutions"
      background-url="/Logicly-Projects-Intelligent-decision-making-with-thoughtful-digital-solutions.jpg"
      overlay
    />


    <!-- {{ activeTab }} -->
    <page-section altrow>
      <div class="pb-12">
        <h2 class="text-2xl font-semibold text-center text-logiclytextgrey">
          Our diverse projects are from a range of sectors
        </h2>
      </div>
      <div class="project-page">
        <vue-tabs ref="tabs" @tab-change="setActiveTab" v-model="activeTab">
          <v-tab v-for="category in categories" :id="category" :title="category" :key="category" class="flex">
            <template #title>
              <div>
                <img :src="'/projects_' + category + '.svg'" class="h-10" />
              </div>
              <div class="text-sm pt-2 text-logiclytextgrey">
                {{ category }}
              </div>
            </template>
          </v-tab>
        </vue-tabs>
      </div>
    </page-section>

    <page-section>
      <div class="grid grid-cols-12 pt-6 -mb-16 border-t-2 border-b-2 border-logiclyorange text-logiclytextgrey project-page">

        <div class="hidden col-span-4 text-xl font-semibold xl:block">
          {{ activeTab }}
          projects
        </div>

        <!-- TODO Add mobile version of project-list -->
        <!-- Project list mobile -->
        <div class="col-span-12 block xl:hidden">
          <ul class='articles'>
            <li @click="setActiveArticle(index)" v-for="(article, index) in articles" :class="{ 'articles-active': isActiveArticle(index) }">
              <div class="grid grid-cols-12 pb-2">
                <div class="col-span-1 ml-2 -mt-1 text-2xl">
                  >
                </div>
                <div class="col-span-11 cursor-pointer">
                  <span class="font-semibold">{{ article.title }}</span></br>
                  <span class="font-light">{{ article.description }}</span>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <!-- Project list desktop -->
        <div class="hidden col-span-8 xl:block projects-list">
          <ul class='articles'>
            <li @click="setActiveArticle(index)" v-for="(article, index) in articles" :class="{ 'articles-active': isActiveArticle(index) }">
              <div class="grid grid-cols-12 pb-2">
                <div class="col-span-1 ml-2 -mt-1 font-light text-2xl">
                  >
                </div>
                <div class="col-span-10 col-start-2 cursor-pointer hover:underline">
                  <span class="font-semibold">{{ article.title }}</span></br>
                  <span class="font-light">{{ article.description }}</span>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div class="col-span-12">
          <nuxt-content :document="activeArticle" />
        </div>
      </div>
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
  data() {
    return {
      activeTab: '',
      activeTabIndex: 0,
      activeArticleIndex: 0,
      articles: [],
      categories: [
        'Research',
        'Government',
        'Health',
        'Education',
        'Non-Government',
        'Corporate',
      ],
    };
  },
  computed: {
    activeArticle() {
      return this.articles[this.activeArticleIndex];
    },
  },
  methods: {
    setActiveArticle(index) {
      this.activeArticleIndex = index;
      this.$router.push({path: this.$route.path, query: { article: index, tab: this.activeTabIndex }});
    },
    isActiveArticle(index) {
      return (this.activeArticleIndex == index);
    },
    async setActiveTab(newIndex) {
      this.activeTabIndex = newIndex;
      this.activeTab      = this.categories[this.activeTabIndex];
      this.articles       = await this.$content('projects').where({ category: this.activeTab }).sortBy('title', 'asc').fetch();

      this.$router.push({path: this.$route.path, query: { tab: newIndex, article: this.activeArticleIndex }});
    },
  },
   created() {
     this.setActiveTab(this.$route.query.tab || 0);
     this.setActiveArticle(this.$route.query.article || 0);
  },
}
</script>

<style>

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

.icons-sidebar {
  margin-top:0.5rem;
}

.icons-sidebar div {
  border-top: 2px solid #dedede;
  padding-top:1.75rem;
  padding-bottom:1.75rem;
  margin-right:1rem;
  text-align:center;
}

.icons-sidebar-last {
  border-bottom: 2px solid #dedede;
}

@media only screen and (max-width: 1024px) {
  .icons-sidebar-last {
    border-bottom:0px;
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

.project-text {
  margin-left:2rem;
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
  .project-text-h4 {
    margin-top:-1.25rem;
  }
}

</style>
