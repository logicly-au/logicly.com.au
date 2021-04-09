
<template>
  <div>
    <Hero
      heading="OUR PROJECTS"
      subheading="Intelligent decision-making with thoughtful digital solutions"
      background-url="/Logicly-Projects-Intelligent-decision-making-with-thoughtful-digital-solutions.jpg"
      overlay
    />

    <page-section altrow>
      <h2 class="text-2xl font-extrabold text-logiclytextgrey text-center">
        Our diverse projects are from a range of sectors
      </h2>
    </page-section>

    <!-- {{ activeTab }} -->
    <page-section altrow>
      <vue-tabs ref="tabs" @tab-change="setActiveTab" v-model="activeTab">
        <v-tab v-for="category in categories" :id="category" :title="category" :key="category">
          <template #title>
            <div>
              <img src="/1_Research.svg" />
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
        <div class="col-span-8">
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
  .articles {
    padding: 1em;
  }
  .articles-active {
    color: orange;
  }
</style>
