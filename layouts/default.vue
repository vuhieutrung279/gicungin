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
    async created() {
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

        const category4Posts = allPosts
            .filter((post) => post.categories[0] === 4)
            .map((post) => ({
                id: post.id,
                title: post.title.rendered,
                image: this.getImgTag(post.content.rendered),
                url: post._embedded['wp:term'][1][0].name,
            }))

        this.$store.menu = category4Posts.map((post) => {
            const subMenu = allPosts
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
                }))

            return { ...post, subMenu }
        })

        this.$nextTick(() => {
            setTimeout(() => {
                this.show = true
            }, 1000)
        })
    },
    methods: {
        getImgTag(str) {
            if (!str) return ''
            const imgSrcRegex = /<img\s+[^>]*src="([^"]*)"/i
            const match = str.match(imgSrcRegex)
            return match ? match[1] : ''
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
