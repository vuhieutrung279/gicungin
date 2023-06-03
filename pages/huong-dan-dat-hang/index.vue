<template>
    <div class="landing-page">
        <div class="container c-1280">
            <h2>Hướng dẫn đặt hàng</h2>
            <p>
                Gì Cũng In với giao diện được thiết kế đơn giản thân thiện và
                ngắn gọn giúp khách hàng lựa chọn sản phẩm nhanh chóng và tiện
                lợi.
            </p>
            <ul>
                <li>
                    <span>Bước 1: </span>Truy cập trang chủ website:
                    <a href="https://gicungin.com/" target="_blank"
                        >https://gicungin.com/</a
                    >
                </li>
                <li>
                    <span>Bước 2: </span>Liên hệ với nhân viên qua Zalo bằng các
                    số điện thoại: 0988 856 441 – 0353 512 424 – 0353 512 525 –
                    0396 300 803
                </li>

                <li>
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
                </li>
                <li>
                    <span>Bước 3: </span>Báo gửi mẫu cần làm và số lượng, yêu
                    cầu về sản phẩm để nhân viên báo giá
                </li>
                <li>
                    <span>Bước 4: </span>Chốt mẫu, số lượng, giá và thời gian
                    giao hàng
                </li>
                <li><span>Bước 5: </span>Cọc 50% giá trị đơn hàng</li>
                <li>
                    <span>Bước 6: </span>Gì Cũng In tiến hành thực hiện đơn hàng
                </li>
                <li><span>Bước 7: </span>Giao hàng</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.c-1280 {
    max-width: 1280px !important;
    width: 100%;
}
.landing-page {
    padding: 40px 10px 25px;
    h2 {
        color: #ff6600;
        margin-bottom: 25px;
    }
    p {
        font-size: 18px;
    }
    ul {
        li {
            span {
                font-weight: bold;
            }
            a {
                color: #ff6600;
                &:focus,
                &:hover {
                    color: #ea662f;
                }
            }
            .list-qr {
                display: flex;
                justify-content: center;
                align-items: center;
                flex-wrap: wrap;
                margin: 0 auto;
                img {
                    width: 200px;
                }
            }
        }
    }
}
</style>
