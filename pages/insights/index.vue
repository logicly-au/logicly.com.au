
<template>
  <div class="insights_new">

    <Hero
      class="hidden sm:block"
      heading="INSIGHTS"
      subheading="In depth articles, discussions and thoughts on innovative digital systems, projects and topics of interest from our team."
      background-url="/Logicly_website_photos_header-14.jpg"
      black
      overlay
    />

    <Hero
      class="block sm:hidden"
      heading="INSIGHTS"
      background-url="/Logicly_website_photos_header-14.jpg"
      black
      overlay
    />


    <!-- Topics section with dropdown -->
    <page-section altrow>
      <div class="grid grid-cols-3 mx-0 text-logiclytextgrey xl:-mx-20">
        <div class="col-span-3 sm:col-span-1">
          <p class="pb-4 text-2xl font-semibold text-left text-logiclytextgrey sm:pb-0">
            Topics
          </p>
        </div>
        <select class="col-span-3 col-start-1 pb-2 border-b-2 sm:col-span-1 sm:col-start-3 border-logiclyorange bg-logiclylightgrey sm:pb-0" @change="updateHash()" v-model="category">
          <option value="" >All categories</option>
          <option v-for="category in categories" :value="category">{{ category }}</option>
        </select>
      </div>
    </page-section>


    <page-section>
    <!-- Blog posts grid -->
      <div class="grid grid-cols-12 pt-6 mx-0 -mb-16 text-logiclytextgrey insights-page xl:-mx-20">
        <div class="col-span-12 projects-list">
          <ul class='articles'>
            <div class="grid gap-0 pb-4 xl:gap-5 xl:grid-cols-3 grid-rows-auto">
              <li v-for="(article, index) in filteredArticles" class="col-span-3 xl:col-span-1" :class="{ 'xl:col-span-3': index === 0 }">
                <div class="grid grid-cols-1 pb-12" :class="{ 'grid-cols-3' : index === 0 }" >
                  <div class="col-span-1" :class="{ 'col-span-3 xl:col-span-2' : index === 0 }">
                    <NuxtLink :to="{ name: 'insights-slug', params: { slug: article.slug } }">
                      <img class="object-cover h-full blog-img" :src="article.img" :alt="article.alt" :class="{ 'first-blog-img': index === 0 }"/>
                    </NuxtLink>
                  </div>
                  <div class="col-span-1 pt-6" :class="{ 'col-span-3 xl:col-span-1 border-t-2 border-logiclyorange pl-2 xl:pl-6 pt-8 pr-2 xl:pr-8 pb-6 xl:pb-12 bg-logiclylightgrey' : index === 0 }" >
                    <div :class="{ 'mx-4 xl:mx-0 mb-6 xl:mb-0' : index === 0 }">
                      <NuxtLink :to="{ name: 'insights-slug', params: { slug: article.slug } }">
                        <span class="text-lg font-semibold sm:text-xl xl:text-base text-logiclyorange">{{ article.title }}</span>
                      </NuxtLink>
                      <div class="pt-1 pb-4 xl:pt-0 xl:pb-2" :class="{ 'xl:pb-2 mt-4' : index === 0 }">
                        <span class="text-sm font-medium">{{ article.author }}</span>
                        <span class="text-logiclyorange">|</span>
                        <span class="text-sm font-normal">{{ article.date }}</span>
                      </div>
                      <div class="pb-1">
                        <span class="text-base font-light xl:text-sm" v-html="`${article.summary}`"></span>
                      </div>
                      <div>
                        <span class="text-base xl:text-sm text-logiclyorange hover:underline">
                          <NuxtLink :to="{ name: 'insights-slug', params: { slug: article.slug } }">Read more</NuxtLink>
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
      let categories = this.articles.reduce((accum, item) => {
        return accum.concat(item.categories);
      }, []);

      return new Set(categories);
    },

    filteredArticles() {
      return this.category ? this.articles.filter(article => article.categories.indexOf(this.category) !== -1) : this.articles;
    },
  },
  methods: {
    updateHash() {
      this.$router.push({ name: this.$route.name, hash: `#${this.category}` });
    },
  },
  async created() {
    this.articles = await this.$content('insights').fetch();

    let category = decodeURIComponent(this.$route.hash.replace(/^#/, ''));
    if (category && this.categories.has(category)) {
      this.category = category;
    }

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

.blog-text-list ol li {
  list-style:decimal;
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

.blog-img {
  width:100%;
  height:200px;
}

.first-blog-img {
  width:100%;
  height: auto;
}

.most-recent-insight {
  @apply col-span-3;
}

.blog-graphic {
  height:7rem;
  margin:auto;
  margin-top:8px;
}

@media only screen and (max-width: 1279px) {
  .blog-img {
    height:auto;
  }
}

</style>
