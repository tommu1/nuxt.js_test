module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'sougei',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'sougei' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */

  css: ["~/assets/main.scss"],
  
  buildModules: ["@nuxtjs/vuetify"],

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
  },
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
    theme: {
      options: {
        customProperties: true
      },
      light: true,
      themes: {
        light: {
          background: '#0D3C61',
          primary: '#0D3C61',
          secondary: '#f08080',
          accent: '#9370db',
          error: '#2f4f4f',    
        }
      }
    }
  },

  server: {
    host: process.env.CLIENT_HOST,
    port: process.env.CLIENT_PORT,
  },

}

