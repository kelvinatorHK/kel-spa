require('dotenv').config()
const contentful = require('contentful')

export default {
  env: {
      CTF_SPACE_ID: process.env.CTF_SPACE_ID,
      CTF_CD_ACCESS_TOKEN: process.env.CTF_CD_ACCESS_TOKEN
  },
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  devModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/dotenv',
    '@nuxtjs/markdownit'
  ],
  markdownit: {
    injected: true
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
      config.node = {
        fs: 'empty'
      }
    }
  },
  generate: {
    routes: () => {
      console.log('In routes:');
      console.log('space:', process.env.CTF_SPACE_ID);
      console.log('ACCESS_TOKEN:', process.env.CTF_CD_ACCESS_TOKEN);
      const client = contentful.createClient({
        space:  process.env.CTF_SPACE_ID,
        accessToken: process.env.CTF_CD_ACCESS_TOKEN
      });

      return client.getEntries({
          content_type: 'blogPost'
      }).then((response) => {
          console.log('Got response');
          return response.items.map(entry => {
              return {
                  route: entry.fields.slug,
                  payload: entry
              };
          });
      });
    }
  }
}
