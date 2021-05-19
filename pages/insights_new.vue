
<template>
  <div class="insights_new">
    <Hero
      heading="INSIGHTS"
      subheading="In depth articles, discussions and thoughts on innovative digital systems, projects and topics of interest from our team."
      background-url="/Logicly_website_photos_header-14.jpg"
      black
      overlay
    />

    <page-section altrow>
      <div class="grid grid-cols-3 text-logiclytextgrey">
        <div class="col-span-1">
          <p class="text-2xl font-semibold text-left text-logiclytextgrey">
            Topics
          </p>
        </div>
        <!-- TODO Add dropdown menu -->
        <div class="col-span-1 col-start-3 border-b-2 border-logiclyorange">
          All categories
        </div>
      </div>
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
      <div class="grid grid-cols-12 pt-6 -mb-16 text-logiclytextgrey insights-page">

        <!-- Project list desktop -->
        <div class="col-span-12 projects-list">
          <ul class='articles'>
            <div class="grid xl:grid-cols-3 grid-rows-auto gap-5 pb-4">
              <li @click="setActiveArticle(index)" v-for="(article, index) in articles" :class="{ 'articles-active': isActiveArticle(index) }">
                <div class="pb-8">
                  <div class="pb-5">
                     <img class="w-full" :src="article.img" :alt="article.alt" />
                  </div>
                  <div>
                    <span class="text-lg xl:text-base font-semibold text-logiclytheme4">{{ article.title }}</span>
                  </div>
                  <div class="pb-2">
                    <span class="font-medium text-sm">{{ article.author }}</span>
                    <span class="text-logiclytheme4">|</span>
                    <span class="font-normal text-sm">{{ article.date }}</span>
                  </div>
                  <div class="pb-1">
                    <span class="font-light text-base xl:text-sm" v-html="`${article.description}`"></span>
                  </div>
                  <div>
                    <span class="font-normal text-base xl:text-sm text-logiclytheme4">
                      <NuxtLink :to="`${article.link}`">Read more</NuxtLink>
                    </span>
                  </div>
                </div>
              </li>
            </div>
          </ul>
        </div>

      </div>
    </page-section>

    <!--<page-section altrow>
      <div class="grid grid-cols-12 text-logiclytextgrey insights-page">
        <div class="col-span-3">

        </div>
      </div>
    </page-section>-->

<!--TODO make this component collect data(category, title and description) from active article -->
    <BlogHeading
    />

    <page-section>
      <div class="col-span-12 text-logiclytextgrey insights-page">
        <nuxt-content :document="activeArticle" />
      </div>
    </page-section>


    <PageSectionEmail
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
        'Complex data',
        'Digital transformation',
        'Public sector',
        'Data reliability',
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
      this.articles       = await this.$content('insights').where({ category: this.activeTab }).fetch();

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
.insights-page p {
  font-weight:300;
  font-size:1rem;
}

.insights-page h1 {
  font-weight:700!important;
  font-size:1.25rem!important;
  padding-bottom:0.3rem!important;
}

.insights-page h2 {
  padding-top:1rem!important;
  padding-bottom:0.25rem!important;
  font-weight:700!important;
  font-size:1.3rem!important;
}

.insights-page h3 {
  padding-top:0.5rem!important;
  padding-bottom:0.25rem!important;
  font-size:1rem!important;
  font-weight:600!important;
}

.insights-page h4 {
  text-align: left;
  color: #E94E1B;
  font-weight: 600;
}

.insights-page h5 {
  text-align: left;
  color: #3c3c3b;
  font-weight:500;
  font-size:0.85em;
}

.blog-sidebar-author {
  border-top: 2px solid #E94E1B;
  border-bottom: 2px solid #dedede;
  padding-top: 1rem;
  padding-bottom: 1rem;
}

.blog-sidebar {
  padding-bottom: 3rem;
}

.blog-social-media {
  font-weight: 600;
  font-size: 0.9rem;
  color: #3c3c3b;
  padding-top: 1.5rem;
}

.blog-text {
  margin-left:1rem;
  padding-bottom:5rem;
}

@media only screen and (max-width: 1024px) {
  .blog-text {
    margin-left:0rem;
    padding-bottom:3rem;
  }
}

.blog-text p {
  padding-bottom:0.5rem;
}

.blog-text-list ul li {
  list-style:disc;
  margin-left:1.25rem;
  font-weight:300;
}

ul.nav.nav-tabs {
  display:flex;
  justify-content:space-between;
}

.insights-page li > a > div > img {
  margin:auto;
  margin-bottom:0.5rem;
}

.insights-page .blog-text img {
  padding:10px 0px 20px 0px;
}

.blog-text-list {
  padding-bottom:0.5rem;
}

.blog-text a {
  color:#E6332A!important;
  text-decoration: none;
  border-bottom: 1px solid #E6332A;
  padding-bottom: 0.1rem;
}

.articles {
  padding-bottom: 4em;
}


</style>
