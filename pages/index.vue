<template>
    <section class="home-section spad pt-0">
        <div class="container">
            <div class="slider-section">
                <div class="hero-items owl-carousel">
                    <img
                        class="w-100"
                        style="height: 275px"
                        src="~/assets/images/2402d115-3c61-4a5d-a716-e47aa0eb702a1245x275-01.jpg"
                    />
                    <img
                        class="w-100"
                        style="height: 275px"
                        src="~/assets/images/1d7f75e2-31a4-4ab7-8c6f-9666b3a35dae]245x275-02.jpg"
                    />
                    <img
                        class="w-100"
                        style="height: 275px"
                        src="~/assets/images/ba42b12a-f585-440e-ad9a-366a9070a9ca1245x275-03.jpg"
                    />
                    <img
                        class="w-100"
                        style="height: 275px"
                        src="~/assets/images/fb4373f9-4e94-496b-8f0c-32e35efa4a3d1245x275-04.jpg"
                    />
                    <img
                        class="w-100"
                        style="height: 275px"
                        src="~/assets/images/14b1b660-42ef-401e-ad58-a2b70f1367271245x275-05.jpg"
                    />
                </div>
            </div>

            <section class="quote">
                <div class="order-form f-placeholder">
                    <div class="row justify-content-lg-center">
                        <div class="col-lg-6">
                            <h4 class="text-center mb-2 f-title">
                                BÁO GIÁ TEM NHÃN STICKER ONLINE
                            </h4>
                            <div class="left-form p-2 mb-2">
                                <h5 class="text-center">
                                    Vui lòng chọn lại chật liệu và nhập kích
                                    thước, số lượng
                                </h5>
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text f-quote"
                                            >Chất Liệu</span
                                        >
                                    </div>
                                    <select
                                        class="form-control classic"
                                    ></select>
                                </div>
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text f-quote"
                                            >Kích Thước</span
                                        >
                                    </div>
                                    <input type="number" />
                                    <input type="number" />
                                </div>
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text f-quote"
                                            >Số Lượng</span
                                        >
                                    </div>
                                    <input type="number" />
                                </div>
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text f-quote"
                                            >Chọn Gia Công</span
                                        >
                                    </div>
                                    <select
                                        class="form-control classic"
                                        @change="order_caculate()"
                                    ></select>
                                </div>
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text f-quote"
                                            >Chọn Bế</span
                                        >
                                    </div>
                                    <select
                                        class="form-control classic"
                                        @change="order_caculate()"
                                    ></select>
                                </div>

                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"
                                            >Hình Mẫu</span
                                        >
                                    </div>
                                    <div class="sample"></div>
                                </div>
                            </div>
                            <div
                                class="left-button d-flex justify-content-between flex-wrap"
                            >
                                <button class="btn primary-btn mb-2 f-button">
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
                                    Vui lòng nhập thông tin để tiến hành đặt
                                    hàng online
                                </h5>
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text f-quote"
                                            >Ghi Chú</span
                                        >
                                    </div>
                                    <textarea
                                        class="form-control"
                                        rows="1"
                                    ></textarea>
                                </div>
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text f-quote"
                                            >Mã Khuyến Mãi</span
                                        >
                                    </div>
                                    <input
                                        type="text"
                                        maxlength="10"
                                        placeholder="Nhập mã khuyến mãi"
                                        class="form-control mr-2"
                                    />
                                    <button
                                        class="btn primary-btn pt-0 pb-0 pr-2 pl-2 f-button"
                                        @click="order_applyCoupon()"
                                    >
                                        Áp dụng
                                    </button>
                                    <!-- <button
                                        class="btn primary-btn pt-0 pb-0 pr-2 pl-2"
                                        @click="order_cancelCoupon()"
                                    >
                                        Hủy
                                    </button> -->
                                </div>
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text f-quote"
                                            >Đơn giá sản phẩm (1 tem)</span
                                        >
                                    </div>
                                    <div class="price">
                                        <strong> (vnđ)</strong>
                                    </div>
                                </div>
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text f-quote"
                                            >Khuyến Mãi</span
                                        >
                                    </div>
                                    <div class="price">
                                        <strong> (vnđ)</strong>
                                    </div>
                                </div>
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text f-quote"
                                            >Thành Tiền</span
                                        >
                                    </div>
                                    <div class="price">
                                        <strong> (vnđ)</strong>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <p class="text-danger">
                        - Kích thước cho phép nhập từ 10mm đến 300mm.<br />
                        - Số lượng tối thiểu là 100 và số lượng tối đa là
                        1.000.00.<br />
                        - Liên hệ 0909.371.586 để đặt hàng số lượng lớn.
                    </p>
                </div>
            </section>

            <hr class="dashed dash-t" />
            <hr class="dashed dash-b dash-bt" />

            <div class="banner">
                <div class="row">
                    <div class="col-lg-3">
                        <a
                            href="/danh-muc/thi-cong-quang-cao"
                            class="single-banner"
                        >
                            <img
                                src="~/assets/images/993b5475-4b08-43ee-9f59-9bfab75acb8d5d964f3f-5cf7-42ab-aa3a-f223b28a9f80formex.jpg"
                                alt="Thi công"
                            />
                            <div class="inner-text">
                                <h5 class="f-category">Thi công</h5>
                            </div>
                        </a>
                    </div>
                    <div class="col-lg-3">
                        <a
                            href="/danh-muc/cac-dich-vu-in-giay"
                            class="single-banner"
                        >
                            <img
                                src="~/assets/images/0f3baf4c-880e-4eb2-900b-58501d9b8a4bz3462175161143_a2e48040c2b110bdf97fd93812663a0d.jpg"
                                alt="Giấy"
                            />
                            <div class="inner-text">
                                <h5 class="f-category">Giấy</h5>
                            </div>
                        </a>
                    </div>
                    <div class="col-lg-3">
                        <a
                            href="/danh-muc/dich-vu-thiet-ke"
                            class="single-banner"
                        >
                            <img
                                src="~/assets/images/36e21fcc-6e5e-44bd-8e69-4df3cb22a0a5z3462175248601_fd68772b2f11a3ff1f6e8c4e12a43c43.jpg"
                                alt="Thiết kế"
                            />
                            <div class="inner-text">
                                <h5 class="f-category">Thiết kế</h5>
                            </div>
                        </a>
                    </div>
                    <div class="col-lg-3">
                        <a
                            href="/danh-muc/san-pham-quang-cao"
                            class="single-banner"
                        >
                            <img
                                src="~/assets/images/c9453732-c3d8-437b-ae40-8733a563d2d3z3462175086592_e74a18fa42840b5b7895dbb76e92e744.jpg"
                                alt="Standee"
                            />
                            <div class="inner-text">
                                <h5 class="f-category">Standee</h5>
                            </div>
                        </a>
                    </div>
                    <div class="col-lg-3">
                        <a href="/danh-muc/in-format" class="single-banner">
                            <img
                                src="~/assets/images/5d964f3f-5cf7-42ab-aa3a-f223b28a9f80formex.jpg"
                                alt="Format"
                            />
                            <div class="inner-text">
                                <h5 class="f-category">Format</h5>
                            </div>
                        </a>
                    </div>
                    <div class="col-lg-3">
                        <a href="/danh-muc/in-nhanh" class="single-banner">
                            <img
                                src="~/assets/images/598e3e6e-77a5-4ef7-843f-f8592b43c3934bb9d1b98c724c2c1563.jpg"
                                alt="In Nhanh"
                            />
                            <div class="inner-text">
                                <h5 class="f-category">In Nhanh</h5>
                            </div>
                        </a>
                    </div>
                    <div class="col-lg-3">
                        <a
                            href="/danh-muc/in-ky-thuat-so"
                            class="single-banner"
                        >
                            <img
                                src="~/assets/images/b5084137-ab67-4bbc-abdc-6ae6ea6b4395z3462175050332_fa7a40be17b69bf4b6ad47469baddf2b.jpg"
                                alt="In Phun KTS"
                            />
                            <div class="inner-text">
                                <h5 class="f-category">In Phun KTS</h5>
                            </div>
                        </a>
                    </div>
                    <div class="col-lg-3">
                        <a
                            href="/danh-muc/in-tem-decal-giay"
                            class="single-banner"
                        >
                            <img
                                src="~/assets/images/db3490de-11b9-4e1b-9bd2-8f6aaa42289da6fac6755ab59aebc3a4.jpg"
                                alt="Tem nhãn"
                            />
                            <div class="inner-text">
                                <h5 class="f-category">Tem nhãn</h5>
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
                            <iframe
                                class="w-100 h-100"
                                src="https://www.youtube.com/embed/p19G_PQyRZY"
                            >
                            </iframe>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="single-banner">
                            <img
                                class="mw-100"
                                src="~/assets/images/thegioisticker.jpg"
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
            <div class="brand mt-3 f-bottom-line">
                <div class="row">
                    <div class="col-md-12">
                        <h4>ĐỐI TÁC</h4>
                    </div>
                </div>

                <div class="row mt-3 mb-3">
                    <div class="col-md-12 flex">
                        <div class="parter-logo">
                            <img src="~/assets/fonts/dhs-logo-xanh-01.svg" />
                        </div>
                        <div class="parter-logo">
                            <img src="~/assets/images/memoryzone-logo2.png" />
                        </div>
                        <div class="parter-logo">
                            <img src="~/assets/images/logo-adv-271x61-01.png" />
                        </div>
                        <div class="parter-logo">
                            <img src="~/assets/images/logo-sbc.png" />
                        </div>
                        <div class="parter-logo">
                            <img src="~/assets/images/zodiac-logo.jpg" />
                        </div>
                        <div class="parter-logo">
                            <img src="~/assets/images/DGG-logo.png" />
                        </div>
                        <div class="parter-logo">
                            <img src="~/assets/images/logo-nhatviet.png" />
                        </div>
                        <div class="parter-logo">
                            <img src="~/assets/images/logo-ho-viet-ads.png" />
                        </div>
                    </div>
                </div>
            </div>

            <div class="brand f-bottom-line mt-4">
                <div class="row">
                    <div class="col-md-5">
                        <h4>THƯƠNG HIỆU THÀNH VIÊN</h4>
                    </div>

                    <div class="col-md-7 flex">
                        <h4>PHƯƠNG THỨC THANH TOÁN LINH HOẠT</h4>
                    </div>
                </div>

                <div class="row mt-3">
                    <div class="col-md-5 flex">
                        <div class="payment-icon">
                            <img src="~/assets/fonts/LOGO-PDCA-01.svg" />
                        </div>
                        <div class="payment-icon">
                            <img
                                src="~/assets/fonts/LOGO-THE-GIOI-MAY-IN-NHANH.svg"
                            />
                        </div>
                        <div class="payment-icon">
                            <img
                                src="~/assets/fonts/LOGO-THE-GIOI-STICKER.svg"
                            />
                        </div>
                        <div class="payment-icon">
                            <img src="~/assets/fonts/LOGO-TND.svg" />
                        </div>
                    </div>

                    <div class="col-md-7 flex">
                        <div class="payment-icon">
                            <img src="~/assets/images/thanh-toan-online2.png" />
                        </div>
                        <div class="payment-icon">
                            <img src="~/assets/images/Vietcombank2.png" />
                        </div>
                        <div class="payment-icon">
                            <img src="~/assets/images/ACB.png" />
                        </div>
                        <div class="payment-icon">
                            <img src="~/assets/images/MoMo_Logo.png" />
                        </div>
                        <div class="payment-icon">
                            <img src="~/assets/images/zalopay.png" />
                        </div>
                        <div class="payment-icon">
                            <img src="~/assets/images/viettelpay2.png" />
                        </div>
                        <div class="payment-icon">
                            <img src="~/assets/images/vnpay.png" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'IndexPage',
}
</script>
<style scoped lang="scss">
.hero-items.owl-carousel {
    display: flex;
    overflow: auto;
    white-space: nowrap;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;

    img {
        display: inline-block;
    }
}
</style>
