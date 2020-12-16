export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'We Collect',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'https://upload.wikimedia.org/wikipedia/en/0/0c/TUemblem.png' }
    ],
    script: [
      { src: 'https://cdn.jsdelivr.net/npm/sweetalert2@10' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~/plugins/firebase.js'
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    'vue-scrollto/nuxt',
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
