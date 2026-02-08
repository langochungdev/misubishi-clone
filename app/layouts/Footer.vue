<template>
    <footer class="footer">
        <div class="footer-bottom">
            <div class="footer-brand">
                <NuxtLink to="/" class="footer-logo">
                    <img src="https://placehold.co/200x50/transparent/333?text=MELCO+LOGO" alt="Mitsubishi Electric" width="160" height="40" />
                </NuxtLink>
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
                    <NuxtLink to="/contact">Liên hệ</NuxtLink>
                    <span class="divider">|</span>
                    <a href="#">Chính sách quyền riêng tư</a>
                    <span class="divider">|</span>
                    <a href="#">Điều khoản sử dụng</a>
                    <span class="divider">|</span>
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

.footer-bottom {
    max-width: 1920px;
    margin: 0 auto;
    padding: 20px 250px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    background: #dcdbdb;
}

.footer-brand {
    display: flex;
    flex-direction: column;
    gap: 80px;
    flex-shrink: 0;
}

.footer-logo img {
    width: 160px;
    height: auto;
}

.footer-logo:focus-visible {
    outline: 2px solid #e60012;
    outline-offset: 4px;
}

.copyright {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 18px;
    color: black;
}

.footer-info {
    text-align: right;
    min-width: 0;
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
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-wrap: wrap;
    gap: 4px;
}

.footer-legal .divider {
    color: #999;
}

.footer-legal a {
    color: black;
    text-decoration: none;
    transition: color 0.3s;
}

.footer-legal a:hover {
    color: #e60012;
}

.footer-legal a:focus-visible {
    outline: 2px solid #e60012;
    outline-offset: 2px;
}

@media (max-width: 768px) {
    .footer-bottom {
        flex-direction: column;
        padding: 24px 16px;
        gap: 24px;
    }

    .footer-brand {
        gap: 12px;
        align-items: center;
        width: 100%;
    }

    .footer-logo img {
        width: 140px;
    }

    .copyright {
        font-size: 14px;
    }

    .footer-info {
        text-align: center;
    }

    .footer-info p {
        font-size: 13px;
        line-height: 1.5;
    }

    .footer-info p br {
        display: none;
    }

    .footer-legal {
        justify-content: center;
        font-size: 14px;
        gap: 6px;
    }
}
</style>
