<template>
    <div class="product-section spad pt-0">
        <div class="container-fluid">
            <div class="slider-section">
                <VueSlickCarousel v-bind="settings">
                    <div>
                        <img
                            class="w-100"
                            src="~/assets/images/banner-slide-1.jpg"
                            alt="kho thư viện banner"
                        />
                    </div>
                    <div>
                        <img
                            class="w-100"
                            src="~/assets/images/banner-slide-2.jpg"
                            alt="sticker banner"
                        />
                    </div>
                    <div>
                        <img
                            class="w-100"
                            src="~/assets/images/banner-slide-3.jpg"
                            alt="thiết kế free banner"
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
                        v-for="(item, index) in category.submenu"
                        :key="item + index"
                        class="col-md-3 mb-5"
                    >
                        <div class="p-item">
                            <div class="p-img">
                                <img
                                    v-if="item.image"
                                    class="mb-3"
                                    :src="
                                        require(`~/assets/images/category/${item.image}`)
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
                                            >Chọn mẫu</NuxtLink
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
    data() {
        return {
            settings: {
                dots: false,
                fade: true,
            },
            category: [],
            menu: []
        }
    },
    async fetch () {
        const url = "https://mocki.io/v1/ee8e7330-4dac-45a1-85fe-e8d766e7c74a";
        const response = await fetch(url);
        this.menu = (await response.json()).menu;
        this.category = this.menu.find(
            (item) => item.url === this.paramsId
        )
    },
    computed: {
        paramsId() {
            return this.$route.params.category
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
