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
                <li v-for="(category, index) in article.categories" :key="index" class="pb-2">
                  <router-link
                    :to="{ path: '/insights', hash: `#${encodeURIComponent(category)}` }"
                    class="font-semibold hover:underline"
                  >
                    {{ category }}
                  </router-link>
                </li>
              </ul>
            </div>
            <div class="col-span-12 lg:col-span-9 lg:col-start-4 lg:pl-6 blogheading">
              <h1 class="pb-5 text-xl font-semibold leading-tight text-logiclyorange">{{ article.title }}</h1>
              <span class="text-lg font-light text-logiclytextgrey" v-html="`${article.summary}`"></span>
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
        <div class="col-span-12 -mt-6 lg:col-span-9 lg:col-start-4 lg:pl-6 lg:mt-4 lg:mb-4 blog-text">
            <div class="logiclysquare"> </div>
            <span class="ml-2 text-sm font-semibold">{{ article.author }}</span>
            <span class="text-sm font-semibold">is Logicly's</span>
            <span class="text-xs font-medium">{{ article.jobtitle }}</span>
        </div>
      </div>

      <div class="mt-6 border-t-2 border-logiclyorange lg:mt-16" v-if="related.length > 0">
        <div class="grid grid-cols-12 mt-10 lg:mt-12">
          <div class="col-span-12 lg:col-span-3">
            <p class="pb-8 text-lg font-semibold lg:text-base text-logiclytextgrey lg:pb-0">
              Related articles
            </p>
          </div>
          <div class="col-span-12 lg:col-span-9 lg:col-start-4 lg:pl-10">
            <ul>
              <div class="grid gap-5 lg:grid-cols-2 grid-rows-auto">
                <li v-for="(article, index) in related">
                  <div class="">
                    <div class="pb-5">
                      <NuxtLink :to="`${article.link}`">
                        <img class="w-full" :src="article.img" :alt="article.alt" />
                      </NuxtLink>
                    </div>
                    <div>
                      <NuxtLink :to="`${article.link}`">
                        <span class="text-lg font-semibold lg:text-base text-logiclytheme4 hover:underline">{{ article.title }}</span>
                      </NuxtLink>
                    </div>
                    <div class="pb-2">
                      <span class="text-sm font-medium">{{ article.author }}</span>
                      <span class="text-logiclytheme4">|</span>
                      <span class="text-sm font-normal">{{ article.date }}</span>
                    </div>
                    <div class="pb-2">
                      <span class="text-base font-light lg:text-sm" v-html="`${article.summary}`"></span>
                    </div>
                    <div>
                      <span class="text-base font-normal lg:text-sm text-logiclytheme4 hover:underline">
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
      title: "Logicly Insights - " + this.article.title,
      link: [
        {
          rel: 'canonical',
          href: 'https://www.logicly.com.au' + this.$route.path
        }
      ],
      meta: [
      {
        hid: 'og:title',
        name: 'og:title',
        property: 'og:title',
        content: "Logicly Insights - " + this.article.title,
      },
      {
        hid: 'description',
        name: 'description',
        property: 'description',
        content: this.article.description
      },
      {
        hid: 'og:url',
        name: 'og:url',
        property: 'og:url',
        content: 'https://www.logicly.com.au' + this.$route.path
      },
    ],
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
