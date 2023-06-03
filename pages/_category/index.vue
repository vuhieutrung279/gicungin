<template>
    <div class="product-section spad pt-0">
        <div class="container-fluid">
            <div class="slider-section">
                <VueSlickCarousel v-bind="settings">
                    <div>
                        <img
                            class="w-100"
                            src="~/assets/images/banner-slide-1.jpg"
                        />
                    </div>
                    <div>
                        <img
                            class="w-100"
                            src="~/assets/images/banner-slide-2.jpg"
                        />
                    </div>
                    <div>
                        <img
                            class="w-100"
                            src="~/assets/images/banner-slide-3.jpg"
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
        }
    },
    computed: {
        paramsId() {
            return this.$route.params.category
        },
    },
    created() {
        this.category = this.$store.state.menu.find(
            (item) => item.url === this.paramsId
        )
    },
    mounted() {},
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
