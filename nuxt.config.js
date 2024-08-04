export default {
    // Target: https://go.nuxtjs.dev/config-target
    router: {
        scrollBehavior(to, from, savedPosition) {
            // Customize scrolling behavior here
            return { x: 0, y: 0 } // This will scroll to the top by default
        },
    },
    target: 'static',

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'Gì Cũng In',
        htmlAttrs: {
            lang: 'vi',
        },
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            },
            {
                'http-equiv': 'X-UA-Compatible',
                content: 'ie=edge',
            },
            {
                name: 'description',
                content:
                    'Gì cũng in - Chuyên thiết kế, in ấn: tem nhãn decal, túi hộp, standee, catologue, tờ rơi, thiết kế logo, bộ nhận diện thương hiệu chất lượng cao tại Tp. Hồ Chí Minh.',
            },
            {
                name: 'keywords',
                content:
                    'gì cũng in, in tem nhãn, in nhãn mác, in tem decal, in tem bảo hành, in sticker, in áo thun, in danh thiếp, in túi giấy, in nhanh, in standee, in catologue, in tại tân bình, in tại Tp HCM.',
            },
        ],
        link: [
            {
                rel: 'shortcut icon',
                type: 'image/x-icon',
                href: '/favicon.png',
            },
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css?family=Muli:300,400,500,600,700,800,900&amp;display=swap',
            },
            {
                rel: 'stylesheet',
                href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css',
            },
        ],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        '@/assets/css/bootstrap.min.css',
        '@/assets/css/style.css',
        '@/assets/css/main.css',
        '@/assets/css/theme-sugar.css',
        '@/assets/css/quill.snow.css',
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        {
            src: '~/plugins/vue-lightbox-plugin.js',
            ssr: false,
        },
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/eslint
        '@nuxtjs/eslint-module',
        '@nuxtjs/google-analytics',
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: ['@nuxtjs/sitemap', '@nuxtjs/robots', '@nuxtjs/axios'],
    robots: {
        /* module options */
        UserAgent: '*',
        Allow: '/',
    },
    googleAnalytics: {
        id: 'G-9DTVYNTE5G',
    },
    publicRuntimeConfig: {
        googleAnalytics: {
            id: 'G-9DTVYNTE5G',
        },
        axios: {
            baseURL: 'https://gicungin.com/wp-json/wp/v2/',
        },
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        transpile: [({ isLegacy }) => isLegacy && 'axios'],
    },
    sitemap: {
        hostname: 'https://gicungin.com', // https://www.yoursite.com
    },
}
