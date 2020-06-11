export default {
  mode: 'universal',
  generate: {
    routes: [
      "/",
      "/about",
      "/contact",
      "/menu",
      "/menu/pizza",
      "/menu/soups",
      "/menu/salads",
      "/menu/sandwiches",
      "/menu/appetizers",
      "/menu/beverages",
      "/menu/lunch",
      "/menu/catering"
    ]
  },
  loading: { color: '#fff' },
  modules: [
    '@nuxtjs/style-resources',
  ],

  styleResources: {
    sass: [
      './assets/*.sass'
    ],
  },
  build: {
    extend (config, ctx) {
    },
    build: {
      postcss: {
        plugins: {
          'postcss-url': false,
          'postcss-nested': {},
          'postcss-responsive-type': {},
          'postcss-hexrgba': {}
        },
        preset: {
          autoprefixer: {
            grid: true
          }
        }
      }
    }
  }
}
