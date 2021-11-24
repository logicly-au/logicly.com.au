<template>
  <div class="article">

    <AspectRatio
      ar="13:4"
      width="100%"
      :style="{ backgroundSize: 'cover', backgroundImage: `url(${article.imgheader})` }"
    >
      <page-section :altrow="altrow" :overlay="overlay">
        <div class="w-full h-full">
        </div>
      </page-section>

    </AspectRatio>

    <page-section altrow>
      <ul>
        <li>
          <div class="grid grid-cols-12">
            <div class="col-span-12 lg:col-span-3 text-logiclytextgrey">
              <ul>
                <li v-for="(category, index) in article.categories">
                  <h2 class="pb-2 font-semibold">
                    {{ category }}
                  </h2>
                </li>
              </ul>
            </div>
            <div class="col-span-12 lg:col-span-9 lg:col-start-4 lg:pl-6 blogheading">
              <h1 class="pb-5 text-xl font-semibold leading-tight text-logiclyorange">{{ article.title }}</h1>
              <span class="text-lg font-light text-logiclytextgrey" v-html="`${article.description}`"></span>
            </div>
          </div>
        </li>
      </ul>
    </page-section>

    <page-section>
      <div class="text-logiclytextgrey article-page">
        <nuxt-content :document="article" />
      </div>

      <div class="grid grid-cols-12">
        <div class="col-span-12 lg:col-span-9 lg:col-start-4 lg:pl-6 -mt-6 lg:mt-4 lg:mb-4 blog-text">
            <div class="logiclysquare"> </div>
            <span class="font-semibold text-sm ml-2">{{ article.author }}</span>
            <span class="font-semibold text-sm">is Logicly's</span>
            <span class="font-medium text-xs">{{ article.jobtitle }}</span>
        </div>
      </div>

      <div class="border-t-2 border-logiclyorange mt-6 lg:mt-16" v-if="related.length > 0">
        <div class="grid grid-cols-12 mt-10 lg:mt-12">
          <div class="col-span-12 lg:col-span-3">
            <p class="text-lg lg:text-base font-semibold text-logiclytextgrey pb-8 lg:pb-0">
              Related articles
            </p>
          </div>
          <div class="col-span-12 lg:col-span-9 lg:col-start-4 lg:pl-10">
            <ul>
              <div class="grid lg:grid-cols-2 grid-rows-auto gap-5">
                <li v-for="(article, index) in related">
                  <div class="">
                    <div class="pb-5">
                      <img class="w-full" :src="article.img" :alt="article.alt" />
                    </div>
                    <div>
                      <span class="text-lg lg:text-base font-semibold text-logiclytheme4">{{ article.title }}</span>
                    </div>
                    <div class="pb-2">
                      <span class="font-medium text-sm">{{ article.author }}</span>
                      <span class="text-logiclytheme4">|</span>
                      <span class="font-normal text-sm">{{ article.date }}</span>
                    </div>
                    <div class="pb-2">
                      <span class="font-light text-base lg:text-sm" v-html="`${article.description}`"></span>
                    </div>
                    <div>
                      <span class="font-normal text-base lg:text-sm text-logiclytheme4 hover:underline">
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
  },
  methods: { },
  async asyncData({ $content, params }) {
    const article = await $content('insights', params.slug).fetch();
    const related = await $content('insights').where({'categories': { $containsAny: article.categories }, 'slug': { $ne: article.slug }}).fetch();

    return { article, related };
  },
}
</script>

<style>
.article-page p {
  font-weight:300;
  font-size:1rem;
}

.article-page h1 {
  font-weight:700!important;
  font-size:1.25rem!important;
  padding-bottom:0.3rem!important;
}

.article-page h2 {
  padding-top:1rem!important;
  padding-bottom:0.25rem!important;
  font-weight:700!important;
  font-size:1.3rem!important;
}

.article-page h3 {
  padding-top:0.6rem!important;
  padding-bottom:0.25rem!important;
  font-size:1rem!important;
  font-weight:600!important;
}

.article-page h4 {
  text-align: left;
  color: #E94E1B;
  font-weight: 600;
}

.article-page h5 {
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

.article-page li > a > div > img {
  margin:auto;
  margin-bottom:0.5rem;
}

.article-page .blog-text img {
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

.article-top-img {
  height: 28rem;
}


</style>
