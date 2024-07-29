<template>
    <div class="product-section spad pt-0">
        <div class="container-fluid">
            <div class="slider-section">
                <VueSlickCarousel v-bind="settings">
                    <div v-for="item in listBanner" :key="item.id">
                        <img
                            class="w-100"
                            :src="getImgTag(item.content.rendered)"
                            :alt="`banner ${item.id}`"
                        />
                    </div>
                </VueSlickCarousel>
            </div>
        </div>
        <div class="container">
            <div class="products mt-5">
                <div class="row text-center">
                    <h4 class="w-100 text-center mb-2">{{ category.title }}</h4>
                </div>
                <div class="row">
                    <div
                        v-for="(item, index) in category.subMenu"
                        :key="item + index"
                        class="col-md-3 mb-5"
                    >
                        <div class="p-item">
                            <div class="p-img">
                                <img
                                    v-if="item.image"
                                    class="mb-3"
                                    :src="
                                        paramsId === 'blog'
                                            ? getImgTag(item.image)
                                            : item.image
                                    "
                                    :alt="item.title + ' image'"
                                    style="width: 100%; height: 100%"
                                />
                            </div>
                            <div class="inner-text text-center mb-2">
                                <h5>{{ item.title }}</h5>
                            </div>
                            <div class="inner-btn">
                                <div class="row pl-3 pr-3">
                                    <div class="col-sm-12 mb-3 pl-sm-3 pl-sm-3">
                                        <NuxtLink
                                            :to="`${paramsId}/${item.url}`"
                                            class="btn btn primary-btn"
                                            >{{
                                                paramsId === 'blog'
                                                    ? 'Xem ngay'
                                                    : 'Chọn mẫu'
                                            }}</NuxtLink
                                        >
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
    components: {
        VueSlickCarousel,
    },
    scrollToTop: true,
    data() {
        return {
            settings: {
                dots: false,
                fade: true,
            },
            category: [],
        }
    },
    computed: {
        paramsId() {
            return this.$route.params.category
        },
    },
    created() {
        this.category = this.$store.menu.find(
            (item) => item.url === this.paramsId
        )
        this.listBanner = this.$store.allPosts.filter(
            (item) => item.categories[0] === 46
        )
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
.slick-arrow {
    &.slick-prev {
        left: 15px;
        z-index: 1;
    }
    &.slick-next {
        right: 15px;
        z-index: 1;
    }
}
</style>
