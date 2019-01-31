module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'pwa-botonera',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/dotenv',
    '@nuxtjs/bulma',
    '@nuxtjs/vuetify'
  ],
  vuetify: {
    theme: {
      primary: "#00bcd4",
      secondary: "#009688",
      accent: "#ffeb3b",
      error: "#e91e63",
      warning: "#ffc107",
      info: "#2196f3",
      success: "#4caf50"
      }
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

