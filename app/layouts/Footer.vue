<template>
    <footer class="footer">
        <div class="footer-top">
            <div class="footer-support">
                <h4>HỖ TRỢ KHÁCH HÀNG</h4>
                <p class="hotline">Hotline 1800585833</p>
                <div class="footer-links-grid">
                    <div class="link-column">
                        <a href="#">Điều khoản bảo hành</a>
                        <a href="#">Thu hồi sản phẩm thải bỏ</a>
                    </div>
                    <div class="link-column">
                        <a href="#">Phương thức thanh toán</a>
                        <a href="#">Vận chuyển & giao nhận</a>
                    </div>
                </div>
            </div>

            <div class="footer-social">
                <h4>THEO DÕI</h4>
                <div class="social-icons">
                    <a href="https://www.facebook.com/MitsubishiElectricVN" target="_blank" class="social-icon">
                        <img src="https://placehold.co/46x46/1877f2/white?text=f" alt="Facebook" />
                    </a>
                    <a href="https://www.youtube.com/@MitsubishiElectricVietnam" target="_blank" class="social-icon">
                        <img src="https://placehold.co/46x46/ff0000/white?text=YT" alt="YouTube" />
                    </a>
                    <a href="https://www.linkedin.com/company/mitsubishi-electric-vietnam" target="_blank" class="social-icon">
                        <img src="https://placehold.co/46x46/0077b5/white?text=in" alt="LinkedIn" />
                    </a>
                </div>
            </div>
        </div>

        <div class="footer-bottom">
            <div class="footer-brand">
                <a href="/" class="footer-logo">
                    <img src="https://placehold.co/200x50/transparent/333?text=MELCO+LOGO" alt="Mitsubishi Electric" />
                </a>
                <span class="copyright">© Mitsubishi Electric Vietnam</span>
            </div>

            <div class="footer-info">
                <p>
                    CÔNG TY TNHH MITSUBISHI ELECTRIC VIỆT NAM<br />
                    Địa chỉ liên hệ tại trụ sở chính : Tầng 11&12, Tháp B, Tòa nhà Viettel, 285 đường Cách<br />
                    Mạng Tháng 8, Phường Hòa Hưng, TP. Hồ Chí Minh, Việt Nam.<br />
                    GCNĐKDN số 0310 919 107 do Sở Kế hoạch và Đầu tư TP. Hồ Chí Minh cấp lần đầu<br />
                    ngày 06/06/2011, cấp đổi lần thứ 12 ngày 11/11/2020
                </p>
                <div class="footer-legal">
                    <a href="#">Liên hệ</a> |
                    <a href="#">Chính sách quyền riêng tư</a> |
                    <a href="#">Điều khoản sử dụng</a> |
                    <a href="#">Sơ đồ trang web</a>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup lang="ts">
</script>

<style scoped>
.footer {
    background: #f5f5f5;
}

.footer-top {
    max-width: 1440px;
    margin: 0 auto;
    padding: 20px 0;
    display: flex;
    justify-content: space-between;
    padding-left: 250px;
    padding-right: 250px;
}

.footer-support h4,
.footer-social h4 {
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 24px;
    color: black;
    margin-bottom: 10px;
}

.hotline {
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 18px;
    color: red;
    margin-bottom: 20px;
}

.footer-links-grid {
    display: flex;
    gap: 50px;
}

.link-column {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.link-column a {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 18px;
    color: black;
    text-decoration: none;
}

.link-column a:hover {
    color: #e60012;
}

.footer-social {
    text-align: right;
}

.social-icons {
    display: flex;
    gap: 15px;
    margin-top: 15px;
}

.social-icon img {
    width: 46px;
    height: 46px;
    transition: transform 0.3s;
}

.social-icon:hover img {
    transform: scale(1.1);
}

.footer-bottom {
    background: #dcdbdb;
    padding: 20px 0;
}

.footer-bottom {
    max-width: 1920px;
    margin: 0 auto;
    padding: 20px 250px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
}

.footer-brand {
    display: flex;
    flex-direction: column;
    gap: 80px;
}

.footer-logo img {
    width: 160px;
    height: auto;
}

.copyright {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 18px;
    color: black;
}

.footer-info {
    text-align: right;
}

.footer-info p {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 1.4;
    color: black;
    margin-bottom: 10px;
}

.footer-legal {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 18px;
    color: black;
}

.footer-legal a {
    color: black;
    text-decoration: none;
}

.footer-legal a:hover {
    color: #e60012;
}
</style>
