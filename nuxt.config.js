
export default {
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'static',
  ssr: false,
  router: {
    base: '/',
  },
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */

  server: {
    port: 8000 // default: 3000
  },
  head: {
    title: 'Logicly',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'og:description',
        name: 'og:description',
        property: 'og:description',
        content: 'We bring twenty five years of knowledge and experience in research, strategy, design and technology to solve your complex information challenges. Our digital systems are built with innovative but practical thinking, flexibility and intuitive design, always with the user experience in mind.'
      },
      { hid: 'description',
        name: 'description',
        property: 'description',
        content: 'We bring twenty five years of knowledge and experience in research, strategy, design and technology to solve your complex information challenges. Our digital systems are built with innovative but practical thinking, flexibility and intuitive design, always with the user experience in mind.'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt/content
    '@nuxt/content',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {},
  /*
  ** Content module configuration
  ** See https://content.nuxtjs.org/configuration
  */
  content: {},
  /* https://content.nuxtjs.org/advanced/#static-site-generation */
  generate: {
    async routes() {
      const { $content } = require("@nuxt/content");

      const insights = await $content("insights").only(["path"]).fetch();
      let insightsRoutes = insights.map((file) =>
        file.path === "/index" ? "/" : file.path
      );

      const projects = await $content("projects").only(["category"]).fetch();
      let projectsRoutes = projects.map((file) => `/projects/${file.category}`);

      return [...insightsRoutes, ...projectsRoutes];
    },
  },
};
