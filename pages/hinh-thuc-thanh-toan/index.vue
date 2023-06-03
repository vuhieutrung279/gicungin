<template>
    <div class="landing-page">
        <div class="container c-1280">
            <h2>Hướng dẫn thanh toán tại Gì Cũng In</h2>
            <p>Gì Cũng In nhận thanh toán với các hình thức sau:</p>
            <h4>Thanh toán tiền mặt tại văn phòng công ty</h4>
            <p>
                Quý khách hàng có thể đến trực tiếp văn phòng hoặc chi nhánh
                Công ty tại địa chỉ sau để thanh toán:
            </p>
            <p>77 Nguyễn Tử Nha, Phường 12, Quận Tân Bình, TP.HCM</p>
            <h4>Thanh toán Chuyển Khoản</h4>
            <p>
                Thanh toán chuyển khoản ra đời giúp cho việc thanh toán trở lên
                dễ dàng, tiện lợi, chính xác, với các app thanh toán hiện nay
                thao tác cực kì đơn giản, nhanh, gọn, lẹ giúp chúng ta có thể
                thanh toán ở bất kì nơi đâu bất kể thời gian nào qua mobile
                banking hoặc internet banking. Chỉ cần smartphone hoặc bất kì
                một máy tính nào bạn cũng có thể thanh toán ngay. Gì Cũng In
                cung cấp 2 tại khoản thanh toán cho Quý khách như sau:
            </p>
            <div class="landing-img">
                <img src="~/assets/images/category/qr/QR6.jpg" alt="qr6 icon" />
                <img src="~/assets/images/category/qr/QR5.jpg" alt="qr5 icon" />
                <img src="~/assets/images/category/qr/QR7.jpg" alt="qr7 icon" />
            </div>
            <h4>Thanh toán qua ví điện tử momo</h4>
            <p>
                Với App momo thanh toán bất kì hóa đơn nào cũng trở nên tiện lợi
                và dễ dàng hơn. <br />
                Gì Cũng In chấp nhận với số điện thoại thanh toán sau: <br />
                Số điện thoại: <b>0399 516 141</b>
            </p>
            <div class="landing-img">
                <img
                    class="momo"
                    src="~/assets/images/category/qr/Momo.png"
                    alt="momo icon"
                />
            </div>
            <p>
                <b>Lưu ý: </b>Sau khi chuyển khoản, quý khách vui lòng giữ lại
                biên lai chuyển tiền để đối chiếu trong trường hợp cần thiết.
                CÔNG TY chỉ chấp nhận chuyển khoản vào danh sách tài khoản được
                niêm yết ở trên. <br />
                - Số điện thoại liên lạc: <b>0988 856 441</b>
            </p>
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
    h4 {
        color: #ff6600;
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
        }
    }
    .landing-img {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        margin-bottom: 30px;
        img {
            height: 500px;
        }
        .momo {
            height: 300px;
        }
    }
}
</style>
