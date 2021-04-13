
<template>
  <div>
    <Hero
      heading="OUR PROJECTS"
      subheading="Intelligent decision-making with thoughtful digital solutions"
      background-url="/Logicly-Projects-Intelligent-decision-making-with-thoughtful-digital-solutions.jpg"
      overlay
    />

    <page-section altrow>
      <h2 class="text-2xl font-extrabold text-center text-logiclytextgrey">
        Our diverse projects are from a range of sectors
      </h2>
    </page-section>

    <!-- {{ activeTab }} -->
    <page-section altrow>
      <vue-tabs ref="tabs" @tab-change="setActiveTab" v-model="activeTab">
        <v-tab v-for="category in categories" :id="category" :title="category" :key="category" class="flex">
          <template #title>
            <div>
              <img :src="'projects_' + category + '.svg'" style="height:4rem" />
            </div>
            {{ category }}
          </template>
        </v-tab>
      </vue-tabs>
    </page-section>

    <page-section>
      <div class="grid grid-cols-12 border-t-2 border-b-2 border-logiclyorange">
        <div class="col-span-4">
          {{ activeTab }}
          projects
        </div>
        <div class="col-span-8 projects-list">
          <ul class='articles'>
            <li @click="setActiveArticle(index)" v-for="(article, index) in articles" :class="{ 'articles-active': isActiveArticle(index) }">
              {{ article.title }}
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
      this.articles       = await this.$content('projects').where({ category: this.activeTab }).fetch();

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

h2 {
font-weight:700;
}

h3 {
  font-size:2rem;
  font-weight:700;
}

.articles {
  padding: 1em;
}
.articles-active {
  color: orange;
}

ul.nav.nav-tabs {
  display:flex;
  justify-content:space-between;
}

li > a > div > img {
  margin:auto;
  margin-bottom:0.5rem;
}

.icons-sidebar div {
  border-top: 2px solid #dedede;
  padding:1rem;
  margin-right:1rem;
  text-align:center;
}

.icons-sidebar img {
  margin:auto;
  width:4rem;
}

.project-images img {
  margin-bottom:1rem;
}

.project-images {
  margin-bottom:4rem;
}

.project-image-secondrow {
  height:21rem;
}

.projects-list ul li::before {
  content: "> ";
}

.project-text div {
  margin-left: 2em;
}

</style>
