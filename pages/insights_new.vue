
<template>
  <div class="insights_new">
    <Hero
      heading="INSIGHTS"
      subheading="In depth articles, discussions and thoughts on innovative digital systems, projects and topics of interest from our team."
      background-url="/Logicly_website_photos_header-14.jpg"
      black
      overlay
    />


    <!-- Topics section with dropdown -->
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

    <!-- TODO Move blog categories. The images should be removed and the categories moved to te dropdown above -->
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


    <!-- Blog posts grid -->
    <page-section>
      <div class="grid grid-cols-12 pt-6 -mb-16 text-logiclytextgrey insights-page">
        <div class="col-span-12 projects-list">
          <ul class='articles'>
            <div class="grid gap-0 xl:gap-5 pb-4 xl:grid-cols-3 grid-rows-auto">
              <li @click="setActiveArticle(index)" v-for="(article, index) in articles" :class="{ 'articles-active': isActiveArticle(index), 'col-span-3' : index === 0 }">
                <div class="grid grid-cols-1 pb-12" :class="{ 'grid-cols-3' : index === 0 }" >
                  <div class="col-span-1" :class="{ 'col-span-3 xl:col-span-2' : index === 0 }">
                     <img class="object-cover h-full" :src="article.img" :alt="article.alt" />
                  </div>
                  <div class="col-span-1 pt-6" :class="{ 'col-span-3 xl:col-span-1 border-t-2 border-logiclyorange pl-4 pt-8 pr-4 pb-6 xl:pb-12 bg-logiclylightgrey' : index === 0 }" >
                    <div :class="{ 'mx-4 xl:mx-0 mb-6 xl:mb-0' : index === 0 }">
                      <NuxtLink :to="`${article.link}`">
                        <span class="text-xl xl:text-base font-semibold text-logiclyorange">{{ article.title }}</span>
                      </NuxtLink>
                      <div class="pt-1 xl:pt-0 pb-4 xl:pb-2" :class="{ 'xl:pb-2 mt-4' : index === 0 }">
                        <span class="text-sm font-medium">{{ article.author }}</span>
                        <span class="text-logiclyorange">|</span>
                        <span class="text-sm font-normal">{{ article.date }}</span>
                      </div>
                      <div class="pb-1">
                        <span class="text-base xl:text-sm font-light" v-html="`${article.description}`"></span>
                      </div>
                      <div>
                        <span class="text-base xl:text-sm text-logiclyorange hover:underline">
                          <NuxtLink :to="`${article.link}`">Read more</NuxtLink>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </page-section>


    <!-- First section of active blog post with blog post descritpion -->
    <!-- TODO Move this to a separate page for active blog post -->
    <page-section altrow>
      <ul>
        <li @click="setActiveArticle(index)" v-for="(article, index) in articles" :class="{ 'articles-active': isActiveArticle(index) }">
          <div class="grid grid-cols-12">
            <div class="col-span-12 lg:col-span-3 text-logiclytextgrey">
              <h2 class="pb-2 font-semibold">{{ article.category }}</h2>
            </div>
            <div class="col-span-12 lg:col-span-9 lg:col-start-4 lg:pl-6 blogheading">
              <h1 class="pb-5 text-xl font-semibold leading-tight text-logiclyorange">{{ article.title }}</h1>
              <span class="text-lg font-light text-logiclytextgrey" v-html="`${article.description}`"></span>
            </div>
          </div>
        </li>
      </ul>
    </page-section>


    <!-- Active blog post -->
    <!-- TODO Move this to a separate page for active blog post -->
    <page-section>
      <div class="text-logiclytextgrey insights-page">
        <nuxt-content :document="activeArticle" />
      </div>

      <div class="grid grid-cols-12">
        <div class="col-span-12 -mt-6 lg:col-span-9 lg:col-start-4 lg:pl-6 lg:mt-4 lg:mb-4 blog-text">
          <div v-for="article in articles" :class="{ 'articles-active': isActiveArticle(index) }">
            <div class="logiclysquare"> </div>
            <span class="ml-2 text-sm font-semibold">{{ article.author }}</span>
            <span class="text-sm font-semibold">is Logicly's</span>
            <span class="text-xs font-medium">{{ article.jobtitle }}</span>
          </div>
        </div>
      </div>

      <!-- TODO: Make this section show articles in the same category/topic -->
      <div class="mt-6 border-t-2 border-logiclyorange lg:mt-16">
        <div class="grid grid-cols-12 mt-10 lg:mt-12">
          <div class="col-span-12 lg:col-span-3">
            <p class="pb-8 text-lg font-semibold lg:text-base text-logiclytextgrey lg:pb-0">
              Related articles
            </p>
          </div>
          <div class="col-span-12 lg:col-span-9 lg:col-start-4 lg:pl-10">
            <ul>
              <div class="grid gap-5 lg:grid-cols-2 grid-rows-auto">
                <li @click="setActiveArticle(index)" v-for="(article, index) in articles" :class="{ 'articles-active': isActiveArticle(index) }">
                  <div class="">
                    <div class="pb-5">
                       <img class="w-full" :src="article.img" :alt="article.alt" />
                    </div>
                    <div>
                      <span class="text-lg font-semibold lg:text-base text-logiclyorange">{{ article.title }}</span>
                    </div>
                    <div class="pb-2">
                      <span class="text-sm font-medium">{{ article.author }}</span>
                      <span class="text-logiclyorange">|</span>
                      <span class="text-sm font-normal">{{ article.date }}</span>
                    </div>
                    <div class="pb-2">
                      <span class="text-base font-light lg:text-sm" v-html="`${article.description}`"></span>
                    </div>
                    <div>
                      <span class="text-base font-normal lg:text-sm text-logiclyorange hover:underline">
                        <NuxtLink :to="`${article.link}`">Read more</NuxtLink>
                      </span>
                    </div>
                  </div>
                </li>
              </div>
            </ul>
          </div>
        </div>
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
  head() {
    return {
      title: "Insights · Logicly"
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
  padding-top:0.6rem!important;
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
}

@media only screen and (max-width: 1024px) {
  .blog-text {
    margin-left:0rem;
    padding-bottom:3rem;
  }
}

.blogheading {
  margin-left:1rem;
}

@media only screen and (max-width: 1024px) {
  .blogheading {
    margin-left:0rem;
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
  font-weight: 400;
  text-decoration: none;
}


.blog-text a:hover {
  text-decoration: underline;
}

.blog-text a:visited {
  color:#A83914!important;
}

.articles {
  padding-bottom: 3em;
}

.logiclysquare {
  width: 8px;
  height: 8px;
  margin-top: 0.4rem;
  float: left;
  transform: rotate(45deg);
  background: #E94E1B;
}

.insights-top-img {
  height: 28rem;
}


</style>
