
export default {
    mode: 'universal',
    /*
    ** Headers of the page
    */
    server: {
        host: '0.0.0.0'
    },
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
        '~/assets/css/main.styl'
    ],
    /*
    ** Plugins to load before mounting the App
    */
    plugins: [
    ],
    /*
    ** Nuxt.js dev-modules
    */
    buildModules: [
        // Doc: https://github.com/nuxt-community/eslint-module
        '@nuxtjs/eslint-module',
        // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
        '@nuxtjs/tailwindcss',
        '@nuxtjs/vuetify',
    ],
    /*
    ** Nuxt.js modules
    */
    modules: [
        'cookie-universal-nuxt',
        // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios',
        // Doc: https://github.com/nuxt-community/dotenv-module
        '@nuxtjs/dotenv'
    ],
    /*
    ** Axios module configuration
    ** See https://axios.nuxtjs.org/options
    */
    axios: {
        baseURL: 'http://home.miezekatz.de:8080/'
    },
    vuetify: {
        theme: {
            themes: {
                light: {
                    primary: '#303E7A'
                }
            }
        }
    },
    /*
    ** Build configuration
    */
    build: {
        /*
        ** You can extend webpack config here
        */
        extend(config, ctx) {
        }
    }
}
