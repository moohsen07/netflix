export default {
  static: {
    prefix: false
  },
  render: {
    fallback: false
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'NETFLIX',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: ''
      },
      {
        name: 'format-detection',
        content: 'telephone=no'
      },
    ],
    link: [{
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        rel: 'stylesheet',
        href: 'https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css'
      }
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/scss/style/main.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{
      src: '@/plugins/vue-swiper',
      mode: 'client'
    },
    "@/plugins/axios"
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/style-resources',
    '@nuxtjs/google-fonts'
  ],
  googleFonts: {
    families: {
      Montserrat: [300, 500, 700]
    }
  },


  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  styleResources: {
    scss: [
      '~assets/scss/helpers/mixins.scss',
      '~assets/scss/helpers/variables.scss'
    ]
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: process.env.baseUrl
  },
  env: {
    baseURL: 'https://api.themoviedb.org/3',
    api_key: '09b53b52c6571f10831dde15264bb96a'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

}
