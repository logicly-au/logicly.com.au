<template>
  <div class="grid grid-cols-12 pt-6 -mb-16 border-t-2 border-b-2 border-logiclyorange text-logiclytextgrey project-page">

    <div class="hidden col-span-4 text-xl font-semibold lg:block">
        <span class='capitalize'>{{ category }}</span>
        projects
      </div>

      <!-- Project list mobile -->
      <div class="block col-span-12 mb-10 lg:hidden">
        <v-select placeholder="Select project" label="title" :options="projects" v-model="activeArticle" @change="viewArticle(activeArticle)"></v-select>
      </div>

      <!-- Project list desktop -->
      <div class="hidden col-span-12 lg:block projects-list">
        <ul class='articles'>
          <li v-for="(article, index) in projects" :class="{ 'articles-active': activeArticle && article.slug == activeArticle.slug }">
            <div class="grid grid-cols-12 pb-2">
              <div class="col-span-1 ml-2 -mt-1 text-2xl font-light">
                >
              </div>
              <div @click="viewArticle(article)" class="col-span-11 col-start-2 cursor-pointer xl:col-span-10 hover:underline">
                <span class="font-semibold">{{ article.title }}</span></br>
                <span class="text-sm font-light xl:text-base">{{ article.description }}</span>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <div class="col-span-12">
        <nuxt-content :document="activeArticle" />
      </div>
  </div>
</template>


<script>
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css';

export default {
  components: { vSelect },
  data() {
    return {
      projects: [],
      category: '',
      activeArticle: '',
      title: '',
    };
  },
  head() {
    return {
      title: this.capitalizedCategory + " Projects · Logicly"
    };
  },
  computed: {
    capitalizedCategory() {
      return this.category.charAt(0).toUpperCase() + this.category.slice(1);
    },
  },

  watch: {
    projects: {
      immediate: true,
      handler(n,o) {
        const article = decodeURIComponent(this.$route.hash.replace(/^#/, ''));
        if (article) {
          this.viewArticle(this.projects.find(project => project.slug == article));
        } else {
          this.viewArticle(n[0]);
        }
      },
    },

  },
  methods: {
    viewArticle(article) {
      this.activeArticle = article;
      this.$router.push({ path: this.$route.path, hash: '#' + article.slug });
    },

  },
  async asyncData({ $content, params }) {
    const projects = await $content('projects').where({'category': params.slug }).fetch();
    return { projects, category: params.slug };
  },

  created() {
  },
}
</script>

<style>
.articles-active {
  color: #E94E1B;
}
</style>
