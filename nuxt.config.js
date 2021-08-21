import i18n from './config/i18n';

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'abonements',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/scss/global.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['@/plugins/message.js', '@/plugins/api.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/style-resources',
  ],

  styleResources: {
    scss: ['./assets/scss/global/variables.scss'],
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['nuxt-helmet', '@nuxtjs/axios', '@nuxtjs/auth-next', 'nuxt-i18n'],

  auth: {
    strategies: {
      local: false,
      cookie: {
        // cookie: {
        //   name: 'id',
        // },
        // token: {
        //   property: 'connect.sid',
        //   global: true,
        // },
        user: {
          property: false,
        },
        options: {
          expires: new Date(new Date().getTime() + 20000000000).getTime(),
          maxAge: 31622400,
          domain: 'localhost:3000',
        },
        endpoints: {
          login: { url: '/auth/login', method: 'post', withCredentials: true },
          logout: { url: '/auth/logout', method: 'delete' },
          user: { url: '/auth/user', method: 'get' },
        },
      },
    },
  },

  axios: {
    baseURL: 'http://localhost:4000/api/v1',
    credentials: true,
  },

  helmet: {
    hidePoweredBy: true,
  },

  i18n: {
    strategy: 'prefix_except_default',
    defaultLocale: 'ru',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      onlyOnRoot: true,
    },
    locales: [
      {
        code: 'ru',
        name: 'Russian',
        file: 'ru-Ru.json',
      },
      {
        code: 'en',
        name: 'English',
        file: 'en-En.json',
      },
    ],
    vueI18n: i18n,
  },

  publicRuntimeConfig: {
    // baseURL: process.env.BASE_URL,
    axios: {
      baseURL: process.env.BASE_URL,
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
