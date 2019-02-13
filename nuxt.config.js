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
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { href:"/splashscreens/iphone5_splash.png", media:"(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)", rel:"apple-touch-startup-image" },
      { href:"/splashscreens/iphone6_splash.png", media:"(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)", rel:"apple-touch-startup-image" },
      { href:"/splashscreens/iphoneplus_splash.png", media:"(device-width: 621px) and (device-height: 1104px) and (-webkit-device-pixel-ratio: 3)", rel:"apple-touch-startup-image" },
      { href:"/splashscreens/iphonex_splash.png", media:"(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)", rel:"apple-touch-startup-image" },
      { href:"/splashscreens/iphonexr_splash.png", media:"(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2)", rel:"apple-touch-startup-image" },
      { href:"/splashscreens/iphonexsmax_splash.png", media:"(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3)", rel:"apple-touch-startup-image" },
      { href:"/splashscreens/ipad_splash.png", media:"(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2)", rel:"apple-touch-startup-image" },
      { href:"/splashscreens/ipadpro1_splash.png", media:"(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2)", rel:"apple-touch-startup-image" },
      { href:"/splashscreens/ipadpro3_splash.png", media:"(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2)", rel:"apple-touch-startup-image" },
      { href:"/splashscreens/ipadpro2_splash.png", media:"(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2)", rel:"apple-touch-startup-image" }
    ]
  },
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/vuetify',
    '@nuxtjs/pwa'
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

