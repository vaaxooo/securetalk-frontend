export default {
    // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
    ssr: false,

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'SecureTalk',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" },
            { rel: "stylesheet", href: "/assets/css/bootstrap-icons.css" },
            { rel: "stylesheet", href: "/assets/css/theme.min.css" },
            { rel: "stylesheet", href: "/assets/css/styles.css" }
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        '~plugins/metamask.js',
        '~plugins/socket.js',
        '~plugins/crypto.js',
        { src: '~/plugins/socket', mode: 'client' },
        { src: '~/plugins/bootstrap.js', mode: 'client' },
        { src: '~/plugins/moment.js', mode: 'client' },
        { src: '~/plugins/notificationSound.js', mode: 'client' },
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        "@nuxtjs/axios", ['@nuxtjs/dotenv', { systemvars: true }, ],
        "@nuxtjs/auth-next", "@nuxtjs/toast", ['nuxt-clipboard', { autoSetContainer: true }],
    ],

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},

    axios: {
        baseURL: process.env.API,
    },

    toast: {
        position: 'bottom-center',
        duration: 5000
    },

    // auth: {
    //     redirect: {
    //         login: '/',
    //         home: '/',
    //         logout: '/',
    //         callback: '/',
    //     },
    //     localStorage: {
    //         prefix: 'auth.'
    //     },
    //     strategies: {
    //         local: {
    //             token: {
    //                 property: 'token',
    //                 global: true,
    //                 required: true,
    //                 type: 'Bearer',
    //                 maxAge: 3600
    //             },
    //             user: {
    //                 property: 'user',
    //                 autoFetch: false
    //             },
    //             endpoints: {
    //                 login: { url: '/account/login', method: 'post' },
    //                 refresh: { url: '/account/refresh', method: 'post' },
    //                 logout: false,
    //                 user: false
    //             }
    //         }
    //     },
    //     preserveState: true,
    //     watchLoggedIn: true
    // },

    // router: {
    //     middleware: ['auth']
    // },
}