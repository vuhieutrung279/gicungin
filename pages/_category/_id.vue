<template>
    <section class="product-shop spad page-details">
        <div class="container">
            <div class="row">
                <div class="col-lg-9 order-1">
                    <div class="row">
                        <div class="col-lg-5">
                            <div class="product-pic-zoom">
                                <img
                                    class="product-big-img"
                                    :src="
                                        require(`~/assets/images/category/${subCategory.image}`)
                                    "
                                />
                            </div>
                            <div class="product-thumbs">
                                <div
                                    class="product-thumbs-track d-flex flex-lg-row"
                                >
                                    <div class="pt" style="width: 90px">
                                        <img
                                            :src="
                                                require(`~/assets/images/category/${subCategory.image}`)
                                            "
                                        />
                                    </div>
                                    <div class="pt" style="width: 90px">
                                        <img
                                            :src="
                                                require(`~/assets/images/category/${subCategory.image}`)
                                            "
                                        />
                                    </div>
                                    <div class="pt" style="width: 90px">
                                        <img
                                            :src="
                                                require(`~/assets/images/category/${subCategory.image}`)
                                            "
                                        />
                                    </div>
                                    <div class="pt" style="width: 90px">
                                        <img
                                            :src="
                                                require(`~/assets/images/category/${subCategory.image}`)
                                            "
                                        />
                                    </div>
                                    <div class="pt" style="width: 90px">
                                        <img
                                            :src="
                                                require(`~/assets/images/category/${subCategory.image}`)
                                            "
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-7">
                            <div class="product-details">
                                <div class="pd-title">
                                    <h3>{{ subCategory.title }}</h3>
                                </div>
                                <div
                                    style="border-bottom: solid 1px #e8e8e8"
                                    class="mb-2 pb-1"
                                >
                                    <p>Giá rẻ, số lượng in, sản xuất nhanh</p>
                                </div>
                                <div class="pd-title">
                                    <h5 style="color: #3587c8">
                                        ĐẶC ĐIÊM CƠ BẢN
                                    </h5>
                                </div>
                                <div
                                    style="border-bottom: solid 1px #e8e8e8"
                                    class="mb-2 pb-1"
                                >
                                    <p>- Màu sắc: 4 màu cơ bản CMYK</p>
                                    <p>
                                        - Số mặt in: 1 mặt và mặt còn lại là keo
                                        dán
                                    </p>
                                    <p>
                                        - Chất liêu in: Decal Nhựa Sữa mặt mờ
                                        SY19DL
                                    </p>
                                    <p>- Kỹ thuật in: In KTS</p>
                                    <p>- Máy in Lazer Konica.</p>
                                    <p>
                                        - Gia công: Cắt bế demi theo yêu cầu chỉ
                                        cần lột ra và dán.
                                    </p>
                                </div>

                                <button
                                    id="set-product-id"
                                    class="d-sm-none"
                                    @click="order_setProductId(3, 2)"
                                ></button>

                                <template v-if="Boolean('true')">
                                    <div class="pd-title">
                                        <h5 style="color: #3587c8">
                                            CHỌN KÍCH THƯỚC BẠN MUỐN
                                        </h5>
                                    </div>
                                    <div class="pd-size-choose">
                                        <div class="sc-item">
                                            <input id="sm-size" type="radio" />
                                            <label
                                                for="sm-size"
                                                width="20"
                                                height="30"
                                                >2x3cm</label
                                            >
                                        </div>
                                        <div class="sc-item">
                                            <input id="md-size" type="radio" />
                                            <label
                                                for="md-size"
                                                width="30"
                                                height="40"
                                                >3x4cm</label
                                            >
                                        </div>
                                        <div class="sc-item">
                                            <input id="lg-size" type="radio" />
                                            <label
                                                for="lg-size"
                                                width="40"
                                                height="50"
                                                >4x5cm</label
                                            >
                                        </div>
                                        <div class="sc-item">
                                            <input id="xl-size" type="radio" />
                                            <label
                                                for="xl-size"
                                                width="50"
                                                height="60"
                                                >5x6cm</label
                                            >
                                        </div>
                                        <div class="sc-item">
                                            <input id="xxl-size" type="radio" />
                                            <label
                                                for="xxl-size"
                                                width="60"
                                                height="80"
                                                >6x8cm</label
                                            >
                                        </div>
                                        <div class="sc-item">
                                            <input
                                                id="other-size"
                                                type="radio"
                                            />
                                            <label for="other-size">Khác</label>
                                        </div>
                                    </div>
                                </template>
                                <div class="pd-title">
                                    <h5 style="color: #3587c8">
                                        QUY TRÌNH ĐẶT HÀNG
                                    </h5>
                                </div>
                                <div
                                    style="border-bottom: solid 1px #e8e8e8"
                                    class="mb-2 pb-1"
                                >
                                    <p>- Chọn mẫu</p>
                                    <p>
                                        - Kết nối nhân viên qua: Zalo, Facebook
                                    </p>
                                    <p>- Chốt mẫu in và số lượng</p>
                                    <p>- Đặt cọc 50%</p>
                                    <p>- Tiến hành in ấn</p>
                                    <p>- Giao hàng</p>
                                </div>
                            </div>
                            <div class="container-fluid">
                                <div class="row add-to-cart">
                                    <div
                                        class="col-sm-8 d-flex flex-column justify-content-sm-around pt-2 pb-2"
                                    >
                                        <h5 style="color: #29a34b">
                                            Đặt in online, nhận ngay giá tốt
                                        </h5>
                                        <p>
                                            <span
                                                class="text-danger total-price"
                                                >đ</span
                                            >
                                        </p>
                                        <p>
                                            <span
                                                >(Giá trên chưa bao gồm 10%
                                                VAT)</span
                                            >
                                        </p>
                                    </div>
                                    <div
                                        class="col-sm-4 d-flex justify-content-center align-items-center"
                                    >
                                        <button
                                            class="btn primary-btn pd-cart f-button"
                                            tabindex="1"
                                        >
                                            ĐẶT HÀNG
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-5 mb-sm-2"></div>
                        <div class="col-md-7"></div>
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
                                                >Sáng: 7g30 - 11g30</span
                                            >
                                        </p>
                                        <p>
                                            <span
                                                style="
                                                    font-size: 14px;
                                                    color: rgb(230, 0, 0);
                                                "
                                                >Chiều: 13g00 - 17g00</span
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
    </section>
</template>

<script>
export default {
    data() {
        return {
            category: [],
            subCategory: {},
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
        this.subCategory = this.category.submenu.find(
            (item) => item.url === this.$route.params.id
        )
    },
    mounted() {},
}
</script>

<style lang="scss" scoped></style>
