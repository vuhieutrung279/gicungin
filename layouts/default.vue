<template>
    <div>
        <div v-if="show" id="main-component">
            <TheHeader />
            <main>
                <Nuxt />
                <a
                    id="back-to-top"
                    href="#"
                    class="btn btn-lg back-to-top"
                    role="button"
                >
                    <i class="fa fa-chevron-up" style="color: #ffffff"></i>
                </a>
            </main>
            <TheFooter />
        </div>
        <div v-else class="loading">
            <img src="../assets/images/loading.gif" alt="loading icon" />
        </div>
    </div>
</template>
<script>
import ogImage from '@/assets/images/logo.jpg'
export default {
    data() {
        return {
            show: false,
        }
    },
    head() {
        return {
            link: [
                {
                    rel: 'canonical',
                    href: 'https://gicungin.com' + this.$route.path,
                },
            ],
            meta: [
                {
                    hid: 'og:image',
                    property: 'og:image',
                    content: 'https://gicungin.com' + ogImage,
                },
            ],
        }
    },
    async mounted() {
        if (!sessionStorage.allPosts) {
            let currentPage = 2
            const allPosts = []
            const postPerPage = await this.$axios.get(
                'https://gicungin.com/wp-json/wp/v2/posts?_fields=id,categories,content,title,_links,_embedded&_embed=wp:term&order=asc'
            )
            allPosts.push(...postPerPage.data)

            const totalPages = postPerPage.headers['x-wp-totalpages']

            while (totalPages >= currentPage) {
                const postNextPage = await this.$axios.get(
                    `https://gicungin.com/wp-json/wp/v2/posts?page=${currentPage}&_fields=id,categories,content,title,_links,_embedded&_embed=wp:term&order=asc`
                )
                allPosts.push(...postNextPage.data)
                currentPage++
            }

            this.$store.allPosts = allPosts
            sessionStorage.setItem('allPosts', JSON.stringify(allPosts))
        } else {
            this.$store.allPosts = JSON.parse(
                sessionStorage.getItem('allPosts')
            )
        }

        if (!sessionStorage.menu) {
            const category4Posts = this.$store.allPosts
                .filter((post) => post.categories[0] === 4)
                .map((post) => ({
                    id: post.id,
                    title: post.title.rendered,
                    image: this.getImgTag(post.content.rendered),
                    url: post._embedded['wp:term'][1][0].name,
                    content: this.getContentTag(post.content.rendered),
                }))

            this.$store.menu = category4Posts.map((post) => {
                const subMenu = this.$store.allPosts
                    .filter(
                        (subPost) =>
                            subPost._embedded['wp:term'][0][0].name === post.url
                    )
                    .map((subPost) => ({
                        id: subPost.id,
                        title: subPost.title.rendered,
                        image:
                            subPost._embedded['wp:term'][0][0].name !== 'blog'
                                ? this.getImgTag(subPost.content.rendered)
                                : subPost.content.rendered,
                        url: subPost._embedded['wp:term'][1][0].name,
                        content: this.getContentTag(subPost.content.rendered),
                    }))

                return { ...post, subMenu }
            })
            sessionStorage.setItem('menu', JSON.stringify(this.$store.menu))
        } else {
            this.$store.menu = JSON.parse(sessionStorage.menu)
        }

        this.$nextTick(() => {
            setTimeout(() => {
                this.show = true
            }, 1000)
        })
    },
    methods: {
        getImgTag(str) {
            if (!str) return ''
            // const imgSrcRegex = /<img\s+[^>]*src="([^"]*)"/i
            // const match = str.match(imgSrcRegex)
            // return match ? match[1] : ''
            const regex = /<img[^>]+src="([^"]+)"/g
            const matches = [...str.matchAll(regex)].map((match) => match[1])
            return matches.length ? matches : []
        },
        getContentTag(str) {
            if (!str) return ''
            const regex = /<blockquote[^>]*>([\s\S]*?)<\/blockquote>/g
            const matches = str.match(regex)
            return matches ? matches[0] : ''
        },
    },
}
</script>
<style lang="scss">
.loading {
    position: absolute;
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
}
</style>
