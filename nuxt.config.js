export default {
    // Target: https://go.nuxtjs.dev/config-target
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
                    'Thế giới sticker - Tem nhãn decal, Tem nhãn sticker chất lượng cao uy tín chuyên nghiệp tại Tp HCM.',
            },
            {
                name: 'keywords',
                content:
                    'in tem nhãn, in nhãn mác, in tem decal, in tem bảo hành, in sticker, in tem nhãn tại tân phú.',
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
    plugins: [],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/eslint
        '@nuxtjs/eslint-module',
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: ['@nuxtjs/robots', '@nuxtjs/sitemap'],
    robots: {
        /* module options */
        UserAgent: '*',
        Disallow: '/admin',
        Allow: '/',
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},
    sitemap: {
        hostname: 'https://gicungin.com', // https://www.yoursite.com
    },
}
