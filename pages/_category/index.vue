<template>
    <div class="product-section spad pt-0">
        <!-- <div
            class="modal fade"
            id="order_modal"
            tabindex="-1"
            role="dialog"
            aria-labelledby="order_modal"
            aria-hidden="true"
        >
            <div
                class="modal-dialog modal-dialog-centered modal-xl"
                role="document"
            >
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Đặt hàng</h5>
                        <button
                            type="button"
                            class="close"
                            data-dismiss="modal"
                            aria-label="Close"
                        >
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="order-form f-placeholder">
                            <div class="row justify-content-lg-center">
                                <div class="col-lg-6">
                                    <h4 class="text-center mb-2 f-title">
                                        BÁO GIÁ TEM NHÃN STICKER ONLINE
                                    </h4>
                                    <div class="left-form p-2 mb-2">
                                        <h5 class="text-center">
                                            Vui lòng chọn lại chật liệu và nhập
                                            kích thước, số lượng
                                        </h5>
                                        <div class="input-group">
                                            <div class="input-group-prepend">
                                                <span
                                                    class="input-group-text f-quote"
                                                    >Chất Liệu</span
                                                >
                                            </div>
                                            <select
                                                class="form-control classic"
                                                :value="
                                                    order_selectedProduct?.id
                                                "
                                                @change="
                                                    order_selectedProductOnChange(
                                                        $event.target.value
                                                    )
                                                "
                                            >
                                                <option
                                                    :value="item.id"
                                                    v-for="item in order_products"
                                                    :key="item.id"
                                                >
                                                    {{ item.name }}
                                                </option>
                                            </select>
                                        </div>
                                        <div class="input-group">
                                            <div class="input-group-prepend">
                                                <span
                                                    class="input-group-text f-quote"
                                                    id
                                                    >Kích Thước</span
                                                >
                                            </div>
                                            <input
                                                type="number"
                                                v-model="order_input.width"
                                                v-on:keyup="order_caculate"
                                                autocomplete="off"
                                                name="width"
                                                number-input
                                                maxlength="9"
                                                placeholder="Ngang(mm)"
                                                class="form-control"
                                            />
                                            <input
                                                type="number"
                                                v-model="order_input.height"
                                                v-on:keyup="order_caculate"
                                                autocomplete="off"
                                                name="height"
                                                number-input
                                                maxlength="9"
                                                placeholder="Cao(mm)"
                                                class="form-control"
                                            />
                                        </div>
                                        <div class="input-group">
                                            <div class="input-group-prepend">
                                                <span
                                                    class="input-group-text f-quote"
                                                    id
                                                    >Số Lượng</span
                                                >
                                            </div>
                                            <input
                                                type="number"
                                                v-model="order_input.quantity"
                                                v-on:keyup="order_caculate"
                                                autocomplete="off"
                                                name="quantity"
                                                number-input
                                                maxlength="9"
                                                placeholder="Nhập số lượng cần in"
                                                class="form-control"
                                            />
                                        </div>
                                        <div class="input-group">
                                            <div class="input-group-prepend">
                                                <span
                                                    class="input-group-text f-quote"
                                                    id
                                                    >Chọn Gia Công</span
                                                >
                                            </div>
                                            <select
                                                class="form-control classic"
                                                v-model="order_input.machining"
                                                @change="order_caculate()"
                                            >
                                                <option
                                                    :value="item.id"
                                                    v-for="item in stickerOrder_ProcessingOptions"
                                                    :key="item.id"
                                                >
                                                    {{ item.name }}
                                                </option>
                                            </select>
                                        </div>
                                        <div class="input-group">
                                            <div class="input-group-prepend">
                                                <span
                                                    class="input-group-text f-quote"
                                                    id
                                                    >Chọn Bế</span
                                                >
                                            </div>
                                            <select
                                                class="form-control classic"
                                                v-model="order_input.cutType"
                                                @change="order_caculate()"
                                            >
                                                <option
                                                    :value="item.id"
                                                    v-for="item in stickerOrder_cutTypeOptions"
                                                    :key="item.id"
                                                >
                                                    {{ item.name }}
                                                </option>
                                            </select>
                                        </div>

                                        <div
                                            class="input-group"
                                            v-if="order_input.sample"
                                        >
                                            <div class="input-group-prepend">
                                                <span
                                                    class="input-group-text"
                                                    id
                                                    >Hình Mẫu</span
                                                >
                                            </div>
                                            <div class="sample">
                                                <img
                                                    :src="`https://api.thegioisticker.com/${order_input.sample}`"
                                                    alt="Hình mẫu"
                                                    class="w-100"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="left-button d-flex justify-content-between flex-wrap"
                                    >
                                        <button
                                            class="btn primary-btn mb-2 f-button"
                                        >
                                            Upload file in
                                        </button>
                                        <button
                                            class="btn primary-btn mb-2 f-button"
                                            @click="goToOnlineLibrary()"
                                        >
                                            Xem mẫu online
                                        </button>
                                        <button
                                            class="btn primary-btn mb-2 f-button"
                                            @click="order_reset()"
                                        >
                                            Làm mới
                                        </button>
                                        <button
                                            class="btn primary-btn mb-2 f-button"
                                            @click="order_placeOrder()"
                                        >
                                            Đặt hàng
                                        </button>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <h4 class="text-center mb-2 f-title">
                                        THÔNG TIN ĐẶT HÀNG
                                    </h4>
                                    <div class="right-form p-2 mb-2">
                                        <h5 class="text-center">
                                            Vui lòng nhập thông tin để tiến hành
                                            đặt hàng online
                                        </h5>
                                        <div class="input-group">
                                            <div class="input-group-prepend">
                                                <span
                                                    class="input-group-text f-quote"
                                                    id
                                                    >Ghi Chú</span
                                                >
                                            </div>
                                            <textarea
                                                v-model="order_input.note"
                                                class="form-control"
                                                rows="1"
                                            ></textarea>
                                        </div>
                                        <div class="input-group">
                                            <div class="input-group-prepend">
                                                <span
                                                    class="input-group-text f-quote"
                                                    id
                                                    >Mã Khuyến Mãi</span
                                                >
                                            </div>
                                            <input
                                                type="text"
                                                maxlength="10"
                                                placeholder="Nhập mã khuyến mãi"
                                                class="form-control mr-2"
                                                v-model="order_couponInput"
                                                :disabled="
                                                    order_input.couponCode !==
                                                    ''
                                                "
                                            />
                                            <button
                                                v-if="!order_input.couponCode"
                                                class="btn primary-btn pt-0 pb-0 pr-2 pl-2 f-button"
                                                @click="order_applyCoupon()"
                                            >
                                                Áp dụng
                                            </button>
                                            <button
                                                v-else
                                                class="btn primary-btn pt-0 pb-0 pr-2 pl-2"
                                                @click="order_cancelCoupon()"
                                            >
                                                Hủy
                                            </button>
                                        </div>
                                        <div class="input-group">
                                            <div class="input-group-prepend">
                                                <span
                                                    class="input-group-text f-quote"
                                                    id
                                                    >Đơn giá sản phẩm (1
                                                    tem)</span
                                                >
                                            </div>
                                            <div class="price">
                                                <strong
                                                    >{{
                                                        getFormatteDecimalNumber(
                                                            order_unitPrice
                                                        )
                                                    }}
                                                    (vnđ)</strong
                                                >
                                            </div>
                                        </div>
                                        <div class="input-group">
                                            <div class="input-group-prepend">
                                                <span
                                                    class="input-group-text f-quote"
                                                    id
                                                    >Khuyến Mãi</span
                                                >
                                            </div>
                                            <div class="price">
                                                <strong
                                                    >{{
                                                        getFormatteDecimalNumber(
                                                            order_input.couponAmount
                                                        )
                                                    }}
                                                    (vnđ)</strong
                                                >
                                            </div>
                                        </div>
                                        <div class="input-group">
                                            <div class="input-group-prepend">
                                                <span
                                                    class="input-group-text f-quote"
                                                    id
                                                    >Thành Tiền</span
                                                >
                                            </div>
                                            <div class="price">
                                                <strong
                                                    >{{
                                                        getFormatteDecimalNumber(
                                                            order_input.total -
                                                                order_input.couponAmount
                                                        )
                                                    }}
                                                    (vnđ)</strong
                                                >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <p
                                class="text-danger"
                                v-if="
                                    order_input.width &&
                                    order_input.height &&
                                    order_input.quantity &&
                                    (order_input.width < 10 ||
                                        order_input.width > 300 ||
                                        order_input.height < 10 ||
                                        order_input.height > 300 ||
                                        order_input.quantity < 100 ||
                                        order_input.quantity > 10000000)
                                "
                            >
                                - Kích thước cho phép nhập từ 10mm đến 300mm.<br />
                                - Số lượng tối thiểu là 100 và số lượng tối đa
                                là 1.000.00.<br />
                                - Liên hệ 0909.371.586 để đặt hàng số lượng lớn.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div> -->
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

            <div class="core-values mt-5 d-lg-block">
                <div class="row">
                    <div class="col-sm-12 col-lg-6 col-xl-3 pr-0">
                        <div class="cv-item">
                            <div class="d-flex mb-4">
                                <div class="cv-pic">
                                    <img
                                        src="~/assets/images/package.png"
                                        alt
                                    />
                                </div>
                                <div class="cv-text">
                                    <h6>BÁO GIÁ ONLINE</h6>
                                    <p>Chính xác nhanh chóng, ổn định.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-12 col-lg-6 col-xl-3 pl-0 pr-0">
                        <div class="cv-item">
                            <div class="d-flex mb-4">
                                <div class="cv-pic">
                                    <img
                                        src="~/assets/images/professional-processes.png"
                                        alt
                                    />
                                </div>
                                <div class="cv-text">
                                    <h6>QUY TRÌNH CHUYÊN NGHIỆP</h6>
                                    <p>
                                        Quy trình bài bản, làm việc khoa học
                                        hiệu quả và tiết kiêm.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-12 col-lg-6 col-xl-3 pl-0 pr-0">
                        <div class="cv-item">
                            <div class="d-flex mb-4">
                                <div class="cv-pic">
                                    <img
                                        src="~/assets/images/quality.png"
                                        alt
                                    />
                                </div>
                                <div class="cv-text">
                                    <h6>SẢN PHẨM CHẤT LƯỢNG</h6>
                                    <p>
                                        Chất liệu sản xuất được kiểm duyệt rất
                                        kỹ càng.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-12 col-lg-6 col-xl-3 pl-0">
                        <div class="cv-item border-right-0">
                            <div class="d-flex mb-4">
                                <div class="cv-pic">
                                    <img
                                        src="~/assets/images/consultant.png"
                                        alt
                                    />
                                </div>
                                <div class="cv-text">
                                    <h6>AN TÂM ĐẶT HÀNG</h6>
                                    <p>Với 7 ngày đổi trả.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

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
                                    <!-- <div class="col-sm-6 mb-3 pr-sm-1">
                                        <a
                                            class="btn primary-btn order-btn"
                                            data-toggle="modal"
                                            data-target="#order_modal"
                                            @click="order_setProductId(3)"
                                            >ĐẶT HÀNG</a
                                        >
                                    </div> -->
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
