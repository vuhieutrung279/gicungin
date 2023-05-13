<template>
    <section class="home-section spad pt-0">
        <div class="container">
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
                                src="~/assets/images/gi-cung-in-banner2.png"
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
                                src="~/assets/images/c2333c22-cbff-45cf-b9fe-d826c7cb5e383-BANNER-NEW08-03-2023-01.png"
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
                                src="~/assets/images/7529fc49-f0ef-406a-ab19-356284f8dd913.png"
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
                                src="~/assets/images/b54c5cb6-73f1-481c-b2c0-0eae00a229083-BANNER-NEW08-03-2023-03.png"
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
</style>
