
<template>
  <div>
  <page-section alt>
    <div style="height:32rem">Our diverse articles are from a range of sectors</div>
  </page-section>
  <page-section>
    Tabbed section {{ activeTab }}
      <vue-tabs ref="tabs" @tab-change="setActiveTab" v-model="activeTab">

      <v-tab v-for="category in categories" :id="category" :title="category" :key="category">
        <template #title>
          <div>iconhere</div>
          {{ category }}
        </template>

        <ul class='articles'>
          <li @click="setActiveArticle(index)" v-for="(article, index) in articles" :class="{ 'articles-active': isActiveArticle(index) }">
            {{ article.title }}
          </li>
        </ul>

        <nuxt-content :document="activeArticle" />
      </v-tab>

    </vue-tabs>
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
        'research',
        'government',
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





