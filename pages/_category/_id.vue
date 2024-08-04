<template>
    <section class="product-shop spad page-details">
        <client-only>
            <LightBox
                v-if="subCategory.image.length > 1"
                ref="lightbox"
                :media="media"
                :show-caption="false"
                :show-light-box="false"
                :showThumbs="false"
            />
        </client-only>
        <div v-if="paramsId != 'blog'" class="container">
            <div class="row">
                <div class="col-lg-9 order-1">
                    <div class="row">
                        <div class="col-lg-5">
                            <div class="product-pic-zoom">
                                <img
                                    class="product-big-img"
                                    :src="subCategory.image[0]"
                                    :alt="`${subCategory.title} image`"
                                    @click="openGallery(0)"
                                />
                            </div>
                            <div
                                v-if="subCategory.image.length > 1"
                                class="row"
                            >
                                <div class="list-small-img">
                                    <img
                                        v-for="index in subCategory.image
                                            .length > 3
                                            ? 3
                                            : subCategory.image.length"
                                        :key="index"
                                        :src="subCategory.image[index]"
                                        :alt="`${
                                            subCategory.title + index
                                        } image`"
                                        @click="openGallery(index)"
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-7">
                            <div class="product-details">
                                <div class="pd-title">
                                    <h3 v-html="subCategory.title"></h3>
                                </div>
                                <div
                                    style="border-bottom: solid 1px #e8e8e8"
                                    class="mb-2 pb-1"
                                >
                                    <p>Giá rẻ, số lượng in, sản xuất nhanh</p>
                                </div>
                                <div
                                    v-if="subCategory.content"
                                    v-html="subCategory.content"
                                    class="product-blockquote"
                                ></div>
                                <div v-else>
                                    <div class="pd-title">
                                        <h5 style="color: #ff6600">
                                            ĐẶC ĐIÊM CƠ BẢN
                                        </h5>
                                    </div>
                                    <div
                                        style="border-bottom: solid 1px #e8e8e8"
                                        class="mb-2 pb-1"
                                    >
                                        <p>- Màu sắc: 4 màu cơ bản CMYK</p>
                                        <p>
                                            - Số mặt in: 1 mặt và mặt còn lại là
                                            keo dán
                                        </p>
                                        <p>
                                            - Chất liêu in: Decal Nhựa Sữa mặt
                                            mờ SY19DL
                                        </p>
                                        <p>- Kỹ thuật in: In KTS</p>
                                        <p>- Máy in Lazer Konica.</p>
                                        <p>
                                            - Gia công: Cắt bế demi theo yêu cầu
                                            chỉ cần lột ra và dán.
                                        </p>
                                    </div>
                                    <div class="pd-title">
                                        <h5 style="color: #ff6600">
                                            QUY TRÌNH ĐẶT HÀNG
                                        </h5>
                                    </div>
                                    <div
                                        style="border-bottom: solid 1px #e8e8e8"
                                        class="mb-2 pb-1"
                                    >
                                        <p>- Chọn mẫu</p>
                                        <p>
                                            - Kết nối nhân viên qua: Zalo,
                                            Facebook
                                        </p>
                                        <p>- Chốt mẫu in và số lượng</p>
                                        <p>- Đặt cọc 50%</p>
                                        <p>- Tiến hành in ấn</p>
                                        <p>- Giao hàng</p>
                                    </div>
                                </div>
                            </div>
                            <div class="container-fluid"></div>
                        </div>
                    </div>
                    <div class="row add-to-cart">
                        <div class="col-sm-12">
                            <h5 style="color: #29a34b; margin-bottom: 15px">
                                Đặt in online, nhận ngay giá tốt
                            </h5>
                            <div class="list-qr">
                                <img
                                    src="~/assets/images/category/qr/QR1.jpg"
                                    alt="qr1 img"
                                />
                                <img
                                    src="~/assets/images/category/qr/QR2.jpg"
                                    alt="qr2 img"
                                />
                                <img
                                    src="~/assets/images/category/qr/QR3.jpg"
                                    alt="qr3 img"
                                />
                                <img
                                    src="~/assets/images/category/qr/QR4.jpg"
                                    alt="qr4 img"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 order-2">
                    <!-- Info Sidebar Section Begin -->
                    <div
                        class="row mb-2"
                        style="background-color: #ececec; padding: 1rem 2rem"
                    >
                        <div class="quality-items">
                            <div class="quill-editor">
                                <div class="ql-container ql-snow">
                                    <div class="ql-editor">
                                        <h2>
                                            <span
                                                style="
                                                    color: rgb(230, 0, 0);
                                                    font-size: 14px;
                                                "
                                                >LIÊN HỆ NHÂN VIÊN CSKH</span
                                            >
                                        </h2>
                                        <h2><br /></h2>
                                        <p>
                                            <span
                                                style="
                                                    font-size: 14px;
                                                    color: rgb(102, 163, 224);
                                                "
                                                ><img
                                                    src="~/assets/images/87dadf6c-51db-4853-b0b5-24be33b5d1a6.png"
                                                    width="48"
                                                    style="
                                                        display: inline;
                                                        float: left;
                                                        margin: 0px 1em 1em 0px;
                                                    "
                                                    alt="zalo icon"
                                            /></span>
                                        </p>
                                        <p>
                                            <span
                                                style="
                                                    color: rgb(102, 163, 224);
                                                    font-size: 12px;
                                                "
                                                >Mr Duy</span
                                            >
                                        </p>
                                        <p>
                                            <span style="font-size: 12px"
                                                >Zalo: 0353 512 525</span
                                            >
                                        </p>
                                        <p><br /></p>

                                        <p>
                                            <span
                                                style="
                                                    font-size: 14px;
                                                    color: rgb(102, 163, 224);
                                                "
                                                ><img
                                                    src="~/assets/images/87dadf6c-51db-4853-b0b5-24be33b5d1a6.png"
                                                    width="48"
                                                    style="
                                                        display: inline;
                                                        float: left;
                                                        margin: 0px 1em 1em 0px;
                                                    "
                                                    alt="zalo icon"
                                            /></span>
                                        </p>
                                        <p>
                                            <span
                                                style="
                                                    color: rgb(102, 163, 224);
                                                    font-size: 12px;
                                                "
                                                >Ms Nhi</span
                                            >
                                        </p>
                                        <p>
                                            <span style="font-size: 12px"
                                                >Zalo: 0988 856 441</span
                                            >
                                        </p>
                                        <p><br /></p>
                                        <p>
                                            <span
                                                style="
                                                    font-size: 14px;
                                                    color: rgb(230, 0, 0);
                                                "
                                                >Thời gian làm việc</span
                                            >
                                        </p>
                                        <p>
                                            <span
                                                style="
                                                    font-size: 14px;
                                                    color: rgb(230, 0, 0);
                                                "
                                                >Sáng: 8h30 - 12h00</span
                                            >
                                        </p>
                                        <p>
                                            <span
                                                style="
                                                    font-size: 14px;
                                                    color: rgb(230, 0, 0);
                                                "
                                                >Chiều: 13h00 - 18h00</span
                                            >
                                        </p>
                                        <p>
                                            <span
                                                style="
                                                    font-size: 14px;
                                                    color: rgb(230, 0, 0);
                                                "
                                                >Từ Thứ Hai đến Thứ Bảy, nghỉ
                                                Chủ Nhật</span
                                            >
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Info Sidebar Section End -->
                </div>
            </div>
            <div class="row divider">
                <div class="col-sm-9">
                    <div></div>
                </div>
                <div class="col-sm-3">
                    <div class="row"></div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-9 order-1">
                    <div class="row">
                        <div class="col-lg-12 order-1">
                            <div class="product-tab">
                                <div class="tab-item">
                                    <ul class="nav" role="tablist">
                                        <li>
                                            <a
                                                class="active"
                                                data-toggle="tab"
                                                href="#tab-1"
                                                role="tab"
                                                >GIỚI THIỆU SẢN PHẨM</a
                                            >
                                        </li>
                                        <li>
                                            <a
                                                data-toggle="tab"
                                                href="#tab-2"
                                                role="tab"
                                                >HƯỚNG DẪN ĐẶT HÀNG</a
                                            >
                                        </li>
                                        <li>
                                            <a
                                                data-toggle="tab"
                                                href="#tab-3"
                                                role="tab"
                                                >NHẬN XÉT</a
                                            >
                                        </li>
                                    </ul>
                                </div>
                                <div class="tab-item-content">
                                    <div class="tab-content">
                                        <div
                                            id="tab-1"
                                            class="tab-pane fade-in active"
                                            role="tabpanel"
                                        >
                                            <div class="product-content"></div>
                                        </div>
                                        <div
                                            id="tab-2"
                                            class="tab-pane fade"
                                            role="tabpanel"
                                        >
                                            <div class="specification-table">
                                                <!-- Order guideline Section Begin -->

                                                <div class="quill-editor">
                                                    <div
                                                        class="ql-container ql-snow"
                                                    ></div>
                                                </div>

                                                <!-- Order guideline Section End -->
                                            </div>
                                        </div>
                                        <div
                                            id="tab-3"
                                            class="tab-pane fade"
                                            role="tabpanel"
                                        >
                                            <div class="customer-review-option">
                                                <div
                                                    class="comment-option"
                                                ></div>
                                                <div class="personal-rating">
                                                    <h6>Đánh giá</h6>
                                                    <div class="rating">
                                                        <i
                                                            class="fa fa-star"
                                                        ></i>
                                                        <i
                                                            class="fa fa-star"
                                                        ></i>
                                                        <i
                                                            class="fa fa-star"
                                                        ></i>
                                                        <i
                                                            class="fa fa-star"
                                                        ></i>
                                                        <i
                                                            class="fa fa-star-o"
                                                        ></i>
                                                    </div>
                                                </div>
                                                <div class="leave-comment">
                                                    <h4>Nhận xét của bạn</h4>
                                                    <form
                                                        action="#"
                                                        class="comment-form"
                                                    >
                                                        <div class="row">
                                                            <div
                                                                class="col-lg-6"
                                                            >
                                                                <input
                                                                    type="text"
                                                                    placeholder="Tên"
                                                                />
                                                            </div>
                                                            <div
                                                                class="col-lg-6"
                                                            >
                                                                <input
                                                                    type="text"
                                                                    placeholder="Email"
                                                                />
                                                            </div>
                                                            <div
                                                                class="col-lg-12"
                                                            >
                                                                <textarea
                                                                    placeholder="Nhận xét"
                                                                ></textarea>
                                                                <button
                                                                    type="submit"
                                                                    class="site-btn f-button"
                                                                >
                                                                    Gửi
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-else class="container blog">
            <h2 v-html="subCategory.title"></h2>
            <div v-html="subCategory.image"></div>
        </div>
    </section>
</template>

<script>
import LightBox from 'vue-image-lightbox'
import 'vue-image-lightbox/dist/vue-image-lightbox.min.css'
export default {
    components: {
        LightBox,
    },
    scrollToTop: true,
    data() {
        return {
            category: [],
            subCategory: {},
            media: [],
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
        this.subCategory = this.category.subMenu.find(
            (item) => item.url === this.$route.params.id
        )
        this.media = this.subCategory.image.map((item) => {
            return {
                srcset: item,
                caption: item,
            }
        })
        // this.media = [
        //     {
        //         // For video
        //         thumb: 'https://s3-us-west-1.amazonaws.com/powr/defaults/image-slider2.jpg',
        //         sources: [
        //             {
        //                 src: 'https://www.w3schools.com/html/mov_bbb.mp4',
        //                 type: 'video/mp4',
        //             },
        //         ],
        //         type: 'video',
        //         caption: '<h4>Monsters Inc.</h4>',
        //         width: 800, // required
        //         height: 600, // required
        //         autoplay: true,
        //     },
        //     {
        //         thumb: 'http://example.com/thumb.jpg',
        //         src: 'http://example.com/image.jpg',
        //         caption: 'caption to display. receive <html> <b>tag</b>', // Optional
        //     },
        // ]
    },
    methods: {
        openGallery(index) {
            this.$refs.lightbox.showImage(index)
        },
    },
}
</script>

<style lang="scss">
.list-qr {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 15px;
    @media screen and (max-width: 992px) {
        justify-content: center;
    }
    img {
        width: 200px;
    }
}
.product-shop {
    .blog {
        h2 {
            text-align: center;
            margin-bottom: 20px;
        }
    }
}
.product-details {
    .product-blockquote {
        .wp-block-heading {
            color: #ff6600;
            &:nth-of-type(2) {
                border-top: solid 1px #e8e8e8;
                padding: 12px 0;
            }
        }
    }
}
.list-small-img {
    display: flex;
    flex-basis: 30%;
    gap: 15%;
}
</style>
