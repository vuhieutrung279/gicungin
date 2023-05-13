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
                                    src="https://api.thegioisticker.com/upload/product/[0cdd0213-8cc4-4cba-9e96-30dadba37ca5]1.jpg"
                                    alt
                                />
                            </div>
                            <div class="product-thumbs">
                                <div
                                    class="product-thumbs-track d-flex flex-lg-row"
                                >
                                    <div
                                        class="pt"
                                        data-imgbigurl="https://api.thegioisticker.com/upload/product/[0cdd0213-8cc4-4cba-9e96-30dadba37ca5]1.jpg"
                                        style="width: 90px"
                                    >
                                        <img
                                            src="https://api.thegioisticker.com/upload/product/[0cdd0213-8cc4-4cba-9e96-30dadba37ca5]1.jpg"
                                            alt
                                        />
                                    </div>
                                    <div
                                        class="pt"
                                        data-imgbigurl="https://api.thegioisticker.com/upload/product/[0cdd0213-8cc4-4cba-9e96-30dadba37ca5]1.jpg"
                                        style="width: 90px"
                                    >
                                        <img
                                            src="https://api.thegioisticker.com/upload/product/[0cdd0213-8cc4-4cba-9e96-30dadba37ca5]1.jpg"
                                            alt
                                        />
                                    </div>
                                    <div
                                        class="pt"
                                        data-imgbigurl="https://api.thegioisticker.com/upload/product/[0cdd0213-8cc4-4cba-9e96-30dadba37ca5]1.jpg"
                                        style="width: 90px"
                                    >
                                        <img
                                            src="https://api.thegioisticker.com/upload/product/[0cdd0213-8cc4-4cba-9e96-30dadba37ca5]1.jpg"
                                            alt
                                        />
                                    </div>
                                    <div
                                        class="pt"
                                        data-imgbigurl="https://api.thegioisticker.com/upload/product/[0cdd0213-8cc4-4cba-9e96-30dadba37ca5]1.jpg"
                                        style="width: 90px"
                                    >
                                        <img
                                            src="https://api.thegioisticker.com/upload/product/[0cdd0213-8cc4-4cba-9e96-30dadba37ca5]1.jpg"
                                            alt
                                        />
                                    </div>
                                    <div
                                        class="pt"
                                        data-imgbigurl="https://api.thegioisticker.com/upload/product/[0cdd0213-8cc4-4cba-9e96-30dadba37ca5]1.jpg"
                                        style="width: 90px"
                                    >
                                        <img
                                            src="https://api.thegioisticker.com/upload/product/[0cdd0213-8cc4-4cba-9e96-30dadba37ca5]1.jpg"
                                            alt
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-7">
                            <div class="product-details">
                                <div class="pd-title">
                                    <h3>Tem decal sữa - Đổi chất liệu</h3>
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
                                    <p class="multi-line">
                                        - Màu sắc: 4 màu cơ bản CMYK - Số mặt
                                        in: 1 mặt và mặt còn lại là keo dán -
                                        Chất liêu in: Decal Nhựa Sữa mặt mờ
                                        SY19DL - Kỹ thuật in: In KTS - Máy in
                                        Lazer Konica. - Gia công: Cắt bế demi
                                        theo yêu cầu chỉ cần lột ra và dán.
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

                                <!--Nhập thông tin-->
                                <div class="pd-info-input f-placeholder">
                                    <h6 class="text-center">NHẬP THÔNG TIN</h6>
                                    <ul>
                                        <li v-if="Boolean('')">
                                            <div
                                                class="input-group input-group-rounded"
                                            >
                                                <div
                                                    class="input-group-prepend"
                                                >
                                                    <span
                                                        class="input-group-text f-quote"
                                                        >Số Lượng</span
                                                    >
                                                </div>
                                                <input
                                                    autocomplete="off"
                                                    name="quantity"
                                                    number-input
                                                    maxlength="9"
                                                    type="number"
                                                    placeholder="nhập số lượng cần in"
                                                    class="form-control form-control-rounded"
                                                />
                                            </div>
                                        </li>
                                        <li v-else>
                                            <div
                                                style="display: none"
                                                class="alert alert-danger alert-dismissible fade show"
                                                role="alert"
                                            ></div>
                                            <div
                                                id="sticker-size-input"
                                                class="input-group"
                                            >
                                                <div
                                                    class="input-group-prepend"
                                                >
                                                    <span
                                                        class="input-group-text f-quote"
                                                        >Nhập kích thước</span
                                                    >
                                                </div>
                                                <input
                                                    autocomplete="off"
                                                    name="width"
                                                    number-input
                                                    maxlength="9"
                                                    type="number"
                                                    placeholder="ngang(mm)"
                                                    class="form-control"
                                                />
                                                <input
                                                    autocomplete="off"
                                                    name="height"
                                                    number-input
                                                    maxlength="9"
                                                    type="number"
                                                    placeholder="cao(mm)"
                                                    class="form-control"
                                                />
                                            </div>

                                            <div
                                                class="input-group input-group-rounded"
                                            >
                                                <div
                                                    class="input-group-prepend"
                                                >
                                                    <span
                                                        class="input-group-text f-quote"
                                                        >Số Lượng</span
                                                    >
                                                </div>
                                                <input
                                                    autocomplete="off"
                                                    name="quantity"
                                                    number-input
                                                    maxlength="9"
                                                    type="number"
                                                    placeholder="nhập số lượng cần in"
                                                    class="form-control form-control-rounded"
                                                />
                                            </div>
                                            <div
                                                class="input-group input-group-rounded"
                                            >
                                                <div
                                                    class="input-group-prepend"
                                                >
                                                    <span
                                                        class="input-group-text input-group-text-rounded f-quote"
                                                        >Chọn Gia Công</span
                                                    >
                                                </div>
                                                <select
                                                    name="machining"
                                                    class="form-control classic"
                                                >
                                                    <option></option>
                                                </select>
                                            </div>
                                            <div
                                                class="input-group input-group-rounded"
                                            >
                                                <div
                                                    class="input-group-prepend"
                                                >
                                                    <span
                                                        class="input-group-text f-quote"
                                                        >Chọn Bế</span
                                                    >
                                                </div>
                                                <select
                                                    name="cutType"
                                                    class="form-control classic"
                                                >
                                                    <option></option>
                                                </select>
                                            </div>
                                        </li>
                                    </ul>
                                    <div class="product-note-section"></div>
                                    <p class="text-danger">
                                        - Kích thước cho phép nhập từ 10mm đến
                                        300mm.<br />
                                        - Số lượng tối thiểu là 100 và số lượng
                                        tối đa là 1.000.00.<br />
                                        - Liên hệ 0909.371.586 để đặt hàng số
                                        lượng lớn.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-5 mb-sm-2">
                            <div class="banner">
                                <!-- Banner Section Begin -->

                                <img
                                    src="https://api.thegioisticker.com/upload/setting/[e9facd4a-eae1-40d5-b968-bb45a6c5ccaf]banner km-01.jpg"
                                    alt
                                />

                                <!-- Banner Section End -->
                            </div>
                        </div>
                        <div class="col-md-7">
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
                        <div class="col-md-5 order-1 mb-sm-2">
                            <div class="promotion">
                                <!-- Promotion Section Begin -->

                                <div class="quill-editor">
                                    <div class="ql-container ql-snow">
                                        <div class="ql-editor">
                                            <p>
                                                👉 Kho Sticker:
                                                <a
                                                    href="https://thegioisticker.com/thu-vien-online"
                                                    rel="noopener noreferrer"
                                                    target="_blank"
                                                    style="
                                                        color: rgb(
                                                            49,
                                                            152,
                                                            211
                                                        );
                                                    "
                                                    >https://thegioisticker.com/thu-vien-online</a
                                                >.
                                            </p>
                                            <p>
                                                👉 Đa dạng mẫu Sticker siêu
                                                cute.
                                            </p>
                                            <p>
                                                👉 Thiết kế Sticker mới hoàn
                                                toàn miễn phí đẹp, độc, lạ.
                                            </p>
                                            <p>
                                                👉 Tư vấn nhiệt tình chuyên
                                                nghiệp.
                                            </p>
                                            <p>
                                                👍 Nhận ship COD toàn quốc tất
                                                cả đơn hàng cọc 50%.
                                            </p>
                                            <p>👍 Tuyển đại lý sỉ toàn quốc.</p>
                                        </div>
                                    </div>
                                </div>

                                <!-- Promotion Section End -->
                            </div>
                        </div>
                        <div class="col-md-7 order-2">
                            <div class="promotion">
                                <!-- Service promotion Section Begin -->

                                <div class="quill-editor">
                                    <div class="ql-container ql-snow">
                                        <div class="ql-editor">
                                            <h3>
                                                <span
                                                    style="
                                                        color: rgb(246, 72, 72);
                                                    "
                                                    >FREE SHIPPER</span
                                                >
                                            </h3>
                                            <p>
                                                👍 Q.Tân Bình, Q.Tân Phú đơn
                                                hàng trên 299k.
                                            </p>
                                            <p>
                                                👍 Q.3, Q.5, Q.10, Q.11, Q.Phú
                                                Nhuận đơn hàng trên 699k.
                                            </p>
                                            <p>
                                                👍
                                                <span
                                                    style="
                                                        color: rgb(69, 82, 94);
                                                    "
                                                    >Q.1, Quận Gò vấp, Quận 6
                                                    đơn hàng trên </span
                                                >999k.
                                            </p>
                                            <p>
                                                👍 Q.7, Q.8 đơn hàng trên
                                                1.699k.
                                            </p>
                                            <p>
                                                👍 Q. Thủ Đức, Q. Bình Tân đơn
                                                hàng trên 2.699k.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <!-- Service promotion Section End -->
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
                                            /></span>
                                        </p>
                                        <p>
                                            <span
                                                style="
                                                    color: rgb(102, 163, 224);
                                                    font-size: 12px;
                                                "
                                                >Mr Công Thiện</span
                                            >
                                        </p>
                                        <p>
                                            <span style="font-size: 12px"
                                                >Zalo: 090 139 1815</span
                                            >
                                        </p>
                                        <p><br /></p>
                                        <p>
                                            <span
                                                style="
                                                    color: rgb(102, 163, 224);
                                                    font-size: 12px;
                                                "
                                                ><img
                                                    src="~/assets/images/87dadf6c-51db-4853-b0b5-24be33b5d1a6.png"
                                                    width="48"
                                                    style="
                                                        display: inline;
                                                        float: left;
                                                        margin: 0px 1em 1em 0px;
                                                    "
                                                />
                                                Ms Thu Phương</span
                                            >
                                        </p>
                                        <p>
                                            <span style="font-size: 12px"
                                                >Zalo: 0923 791 586</span
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
                    <!-- Info Sidebar Section Begin -->
                    <div
                        class="row"
                        style="background-color: #ececec; padding: 1rem 2rem"
                    >
                        <div class="customer-care-items">
                            <div class="quill-editor">
                                <div class="ql-container ql-snow">
                                    <div class="ql-editor">
                                        <h2>
                                            <span
                                                style="
                                                    font-size: 14px;
                                                    color: rgb(230, 0, 0);
                                                "
                                                >LIÊN HỆ NHÂN VIÊN CSKH</span
                                            >
                                        </h2>
                                        <h2><br /></h2>
                                        <p>
                                            <span
                                                style="
                                                    color: rgb(102, 163, 224);
                                                    font-size: 14px;
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
                                                    font-size: 12px;
                                                    color: rgb(102, 163, 224);
                                                "
                                                >Mr Công Thiện</span
                                            >
                                        </p>
                                        <p>
                                            <span style="font-size: 12px"
                                                >Zalo: 090 139 1815</span
                                            >
                                        </p>
                                        <p><br /></p>
                                        <p>
                                            <span
                                                style="
                                                    font-size: 12px;
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
                                                />
                                                Ms Thu Phương</span
                                            >
                                        </p>
                                        <p>
                                            <span style="font-size: 12px"
                                                >Zalo: 0923 791 586</span
                                            >
                                        </p>
                                        <p><br /></p>
                                        <p>
                                            <span
                                                style="
                                                    color: rgb(230, 0, 0);
                                                    font-size: 14px;
                                                "
                                                >Thời gian làm việc</span
                                            >
                                        </p>
                                        <p>Sáng: 7g30 - 11g30</p>
                                        <p>Chiều: 13g00 - 17g00</p>
                                        <p>
                                            Từ Thứ Hai đến Thứ Bảy, nghỉ Chủ
                                            Nhật
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
export default {}
</script>

<style lang="scss" scoped></style>
