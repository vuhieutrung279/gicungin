<template>
    <section class="home-section spad pt-0">
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
            <hr class="dashed dash-t" />
            <hr class="dashed dash-b dash-bt" />

            <div class="banner">
                <div class="row">
                    <div
                        v-for="(item, index) in listProduct"
                        :key="item.title + index"
                        class="col-lg-3"
                    >
                        <a :href="item.url" class="single-banner">
                            <img
                                :src="
                                    require(`~/assets/images/category/${item.image}`)
                                "
                                alt="Thi công"
                            />
                            <div class="inner-text">
                                <h5 class="f-category">{{ item.title }}</h5>
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            <hr class="dashed dash-t" />
            <hr class="dashed dash-b dash-bt" />

            <div class="video">
                <div class="row">
                    <div class="col-md-6">
                        <div class="single-banner">
                            <img
                                class="mw-100"
                                src="~/assets/images/gi-cung-in-banner2.jpg"
                            />
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="single-banner">
                            <img
                                class="mw-100"
                                src="~/assets/images/gi-cung-in-banner.jpg"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div class="promotion mt-5 f-bottom-line">
                <h3>KHUYẾN MÃI HẤP DẪN</h3>
                <div class="row">
                    <div class="col-md-4">
                        <div class="card">
                            <img
                                class="card-img-top rounded"
                                src="~/assets/images/banner-promo-1.jpg"
                                style="
                                    height: 225px;
                                    width: 100;
                                    display: block;
                                "
                                alt
                            />
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card">
                            <img
                                class="card-img-top rounded"
                                src="~/assets/images/banner-promo-2.jpg"
                                style="
                                    height: 225px;
                                    width: 100%;
                                    display: block;
                                "
                                alt
                            />
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card">
                            <img
                                class="card-img-top rounded"
                                src="~/assets/images/banner-promo-3.jpg"
                                style="
                                    height: 225px;
                                    width: 100%;
                                    display: block;
                                "
                                alt
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
    name: 'IndexPage',
    components: {
        VueSlickCarousel,
    },
    data() {
        return {
            settings: {
                dots: false,
                fade: true,
            },
        }
    },
    computed: {
        listProduct() {
            return this.$store.state.menu.filter((item) => item.isShowHome)
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
.home-section .banner .single-banner .inner-text {
    .f-category {
        font-size: 1.15rem;
        font-weight: bold;
    }
}
</style>
