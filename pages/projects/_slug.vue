<template>
  <div class="grid grid-cols-12 pt-6 -mb-16 border-t-2 border-b-2 border-logiclyorange text-logiclytextgrey project-page">

    <h3 class="hidden col-span-4 mb-4 text-xl font-semibold lg:block">
      <span class='capitalize'>{{ category }}</span>
      projects
    </h3>

    <!-- Project list mobile -->
    <div class="block col-span-12 mb-10 lg:hidden">

      <!-- This uses the default select element on mobile, as it has a better UX. For desktop it uses vue-select. -->
      <select v-if="isMobile()"
              class="border p-2 w-full"
              placeholder="Select project"
              v-model="activeArticle"
              @change="onArticleSelect(activeArticle)">
        <option v-for="project in projects" :value="project">
          {{ project.title }}
        </option>
      </select>
      <v-select v-else placeholder="Select project" label="title" :options="projects" v-model="activeArticle" @change="viewArticle(activeArticle)"></v-select>

    </div>

    <!-- Project list desktop -->
    <div class="hidden col-span-12 lg:block projects-list">
      <ul class='articles'>
        <li v-for="(article, index) in projects" :class="{ 'articles-active': activeArticle && article.slug == activeArticle.slug }">
          <div class="grid grid-cols-12 pb-2">
            <div class="col-span-1 ml-2 -mt-1 text-2xl font-light">
              >
            </div>
            <div @click="onArticleSelect(article)" class="col-span-11 col-start-2 cursor-pointer xl:col-span-10 hover:underline">
              <span class="font-semibold">{{ article.title }}</span></br>
              <span class="text-sm font-light xl:text-base">{{ article.description }}</span>
            </div>
          </div>
        </li>
      </ul>
    </div>

    <div class="col-span-12" id="article-section">
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
      // On this branch, no default category leads to an error. On main, it simply
      // shows all projects. As a workaround to get the original behaviour we
      // make the following change, allowing for a blank category:
      return this.category ? this.category.charAt(0).toUpperCase() + this.category.slice(1) : '';
      // The wider issue is documented at: https://github.com/logicly-au/logicly.com.au/issues/191
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

    onArticleSelect(article) {
      this.viewArticle(article);

      // Add a delay to ensure content is rendered before scrolling to article
      setTimeout(() => {
        this.$nextTick(() => {
          const articleElement = document.getElementById('article-section');
          if (articleElement) {
            articleElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        });
      }, 100);
    },


    isMobile() {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
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
.vs__clear {
  display: none;
}
.articles-active {
  color: #E94E1B;
}

.icons-sidebar p {
  font-weight: 500;
  font-size: 0.85em;
}
</style>
