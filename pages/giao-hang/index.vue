<template>
    <div class="landing-page">
        <div class="container c-1280">
            <h2>Giao Hàng Và Vận Chuyển</h2>
            <p>
                - Thời đại công nghệ ngày càng phát triển. Các dịch vụ công nghệ
                ngày càng nhiều và đa dạng giúp cho việc giao hàng vận chuyển
                ngày càng trở nên dễ dàng và tiết kiệm chi phí cũng như thời
                gian. Tuy nhiên thời gian của chúng ta ngày càng bị thu gọn bởi
                nhiều yếu tố. Gì Cũng In luôn luôn mong muốn phục vụ tốt nhu cầu
                của từng Quý khách.
            </p>
            <img src="~/assets/images/freeship1.jpg" alt="freeship 1 banner" />
            <p>
                - Gì Cũng In luôn kết nối với đội ngũ giao hàng nhanh chóng và
                linh hoạt sẽ cố gắng mang lại một dịch vụ giao hàng nhanh, đẹp
                và tốt nhất cho Quý khách.
            </p>
            <p>
                - Đối với các đơn hàng được giao tại nội thành TP HCM nhân viên
                Gì Cũng In sẽ linh hoạt giao tận nơi theo yêu cầu của Quý khách
                hàng cung cấp. Hàng hóa sẽ luôn được đóng gói cận thận kỹ càng
                trước khi giao. Sản phẩm được giao phải là sản phẩm tốt nhất
                giao tận tay Quý khách.
            </p>
            <p>
                - Đối với Quý khách ở tỉnh nhân viên sẽ tư vấn giao theo yêu cầu
                của Quý khách. Giao nhanh qua các chành xe do Quý khách chỉ định
                để khi hàng đến nơi Quý khách ra chành xe để nhận hàng nhanh
                hơn.
            </p>
            <p>
                - Đối với các đơn hàng giao tỉnh bình thường qua các dịch vụ
                giao hàng như Viettel Post, GHTK, GHN, Bưu điện, Ship Cod Quý
                khách gửi yêu cầu cung cấp thông tin sớm để đội ngũ giao hàng
                sắp xếp giao nhanh nhất.
            </p>
            <h4>1 - GIAO HÀNG MIỄN PHÍ</h4>
            <img src="~/assets/images/freeship2.jpg" alt="freeship 2 banner" />
            <p>Giao hàng miễn phí khi đạt các điều kiện sau:</p>
            <p>
                - Đơn hàng nhỏ gọn đối với các khổ giao dưới kích thước A3 + (33
                - 50cm)
            </p>
            <p>- Đơn hàng từ 999k</p>
            <p>
                - Giao hàng thông qua các đơn vị vận chuyển: GHN, GHTK, Viettel
                post,..
            </p>
            <p>
                - Với đơn hàng quý khách hàng cần giao ngay như grab, ahamove,
                gojek,… chúng tôi chỉ hỗ trợ tối đa cho 28k/đơn hàng
            </p>
            <h4>2 - GIAO HÀNG TÍNH PHÍ - PHÍ GIAO RA NHÀ XE - CHÀNH XE:</h4>
            <img src="~/assets/images/freeship3.jpg" alt="freeship 3 banner" />
            <img src="~/assets/images/freeship4.jpg" alt="freeship 4 banner" />
            <p class="title">Các đơn hàng giao tại Tp HCM</p>
            <p>
                Đối với các đơn hàng không đạt tiêu chí giao hàng miễn phí. Gì
                Cũng In giao trong nội thành TP HCM và các quận còn lại từ
                16.500vnđ đến 28.000vnđ tuỳ vào kích thước của kiện hàng.
            </p>
            <p class="title">Các đơn hàng giao tỉnh</p>
            <p>
                - Quý khách ở tỉnh sẽ được nhân viên giao hàng ra nơi Quý khách
                chỉ định như dịch vụ giao hàng hoặc chành xe theo yêu cầu. Sản
                phẩm sẽ được nhanh chóng chuyển đến nơi quý khách yêu cầu. Đối
                với nhà xe chành xe Quý khách cần liên hệ nhà xe để lấy hàng khi
                cần thiết xác nhận bên Gì Cũng In giúp Quý khách lấy hàng nhanh
                và đúng hàng. Khi có chi phí gửi hàng Quý khách vui lòng thanh
                toán trực tiếp với đơn vị giao hàng.
            </p>
            <p>
                - Đối với các đơn hàng trên 999k Gì Cũng In sẽ miễn phí giao ra
                chành xe, nhà xe, bến xe trong nội thành, TpHCM.
            </p>
            <p>
                Gì Cũng In luôn mong muốn mang đến cho Quý khách những dịch vụ
                tuyệt vời nhất!
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
    img {
        // height: 350px;
    }
    .title {
        font-weight: bold;
        font-style: italic;
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
}
</style>
