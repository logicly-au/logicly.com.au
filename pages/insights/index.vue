
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
        <select class="col-span-1 col-start-3 border-b-2 border-logiclyorange bg-logiclylightgrey" v-model="category">
          <option value="" disabled>All categories</option>
          <option v-for="category in categories" :value="category">{{ category }}</option>
        </select>
      </div>
    </page-section>



    <page-section>
      <!-- Top blog post in grid -->
      <!-- TODO Change this section to only show the first blog post in the blog post list(cuurently it lists all blog posts in the selected category) -->

    <!-- Blog posts grid -->
      <div class="grid grid-cols-12 pt-6 -mb-16 text-logiclytextgrey insights-page">
        <div class="col-span-12 projects-list">
          <ul class='articles'>
            <div class="grid gap-5 pb-4 lg:grid-cols-3 grid-rows-auto">
              <li v-for="(article, index) in filteredArticles" :class="{ 'col-span-3': index === 0 }">
                <div class="grid grid-cols-1 pb-8" :class="{ 'grid-cols-2' : index === 0 }" >
                  <div class="col-span-1">
                     <img class="object-cover h-full" :src="article.img" :alt="article.alt" />
                  </div>
                  <div class="col-span-1" :class="{ 'border-t-8 border-logiclyorange pl-2 bg-logiclylightgrey' : index === 0 }" >
                    <div>
                      <span class="text-lg font-semibold lg:text-base text-logiclytheme4">{{ article.title }}</span>
                    </div>
                    <div class="pb-2">
                      <span class="text-sm font-medium">{{ article.author }}</span>
                      <span class="text-logiclytheme4">|</span>
                      <span class="text-sm font-normal">{{ article.date }}</span>
                    </div>
                    <div class="pb-1">
                      <span class="text-base font-light lg:text-sm" v-html="`${article.description}`"></span>
                    </div>
                    <div>
                      <span class="text-base font-normal lg:text-sm text-logiclytheme4 hover:underline">
                        <NuxtLink :to="{ name: 'insights-slug', params: { slug: article.slug } }">Read more</NuxtLink>
                      </span>
                    </div>
                  </div>
                </div>
              </li>
            </div>
          </ul>
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
      category: '',
      articles: [],
    };
  },
  head() {
    return {
      title: "Insights · Logicly"
    };
  },
  computed: {
    categories() {
      return this.articles.map(insight => insight.category).sort();
    },

    filteredArticles() {
      return this.category ? this.articles.filter(article => article.category == this.category) : this.articles;
    },
  },
  methods: { },
  async created() {
    this.articles = await this.$content('insights').fetch();
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

.most-recent-insight {
  @apply col-span-3;
}

</style>
