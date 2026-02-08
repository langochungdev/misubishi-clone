<template>
    <section class="intro-section">
        <div class="intro-header">
            <h2 class="intro-title">Giới thiệu Mitsubishi Electric</h2>
            <div class="intro-cards">
                <div class="intro-card">
                    <h3>Số liệu công ty</h3>
                    <p>Mitsubishi Electric là một trong những thương hiệu hàng đầu thế giới về sản xuất và kinh doanh các hệ thống, sản phẩm điện-điện tử dùng trong hàng loạt lĩnh vực và ứng dụng.</p>
                    <button class="expand-btn" aria-label="Mở rộng số liệu công ty">+</button>
                </div>
                <div class="intro-card">
                    <h3>Lịch sử</h3>
                    <p>Từ khi thành lập vào năm 1921, Mitsubishi Electric đã luôn đi đầu trong công cuộc đổi mới sản phẩm và sáng tạo kỹ thuật của Nhật Bản</p>
                    <button class="expand-btn" aria-label="Mở rộng lịch sử">+</button>
                </div>
                <div class="intro-card">
                    <h3>Vị trí</h3>
                    <p>Từ năm 2011 đến nay, Mitsubishi Electric thành lập trụ sở chính tại TP. Hồ Chí Minh, 2 chi nhánh (Đà Nẵng và Hà Nội) và 1 showroom tại Hà Nội.</p>
                    <button class="expand-btn" aria-label="Mở rộng vị trí">+</button>
                </div>
            </div>
        </div>

        <div class="banner-links">
            <a href="#" class="banner-link data-center">
                <img src="https://placehold.co/1440x462/1a237e/white?text=Data+Center+Solutions" alt="Data Center Solutions" width="1440" height="462" loading="lazy" />
                <div class="banner-text">
                    <img src="https://placehold.co/576x100/transparent/white?text=Data+Center+Solutions" alt="Data Center Solutions" width="576" height="100" loading="lazy" />
                </div>
            </a>

            <a href="#" class="banner-link ai-robot">
                <img src="https://placehold.co/1440x442/263238/white?text=AI+Robot+Technology" alt="Leading the industry with AI robot" width="1440" height="442" loading="lazy" />
            </a>
        </div>

        <div class="product-grid">
            <a href="#" class="product-card">
                <img src="https://placehold.co/480x350/2e7d32/white?text=Green+Building" alt="Green Building" width="480" height="350" loading="lazy" />
                <div class="product-overlay">
                    <h3>TIÊN PHONG GIẢI PHÁP TỔNG THỂ CHO TÒA NHÀ XANH</h3>
                    <span class="learn-more">Tìm hiểu thêm →</span>
                </div>
            </a>
            <a href="#" class="product-card">
                <img src="https://placehold.co/480x350/1565c0/white?text=Data+Center" alt="Data Center" width="480" height="350" loading="lazy" />
                <div class="product-overlay">
                    <h3>Giải pháp Tổng thể cho Trung tâm dữ liệu</h3>
                    <span class="learn-more">Tìm hiểu thêm →</span>
                </div>
            </a>
            <a href="#" class="product-card">
                <img src="https://placehold.co/480x350/ff6f00/white?text=Factory+Automation" alt="Factory Automation" width="480" height="350" loading="lazy" />
                <div class="product-overlay">
                    <h3>Hệ thống Tự động hóa Công nghiệp</h3>
                    <span class="learn-more">Tìm hiểu thêm →</span>
                </div>
            </a>
            <a href="#" class="product-card">
                <img src="https://placehold.co/480x350/00bcd4/white?text=Air+Conditioner" alt="Air Conditioner" width="480" height="350" loading="lazy" />
                <div class="product-overlay">
                    <h3>Điều hòa không khí Mitsubishi Electric</h3>
                    <span class="learn-more">Tìm hiểu thêm →</span>
                </div>
            </a>
            <a href="#" class="product-card">
                <img src="https://placehold.co/480x350/607d8b/white?text=Refrigerator" alt="Refrigerator" width="480" height="350" loading="lazy" />
                <div class="product-overlay">
                    <h3>Tủ lạnh Mitsubishi Electric</h3>
                    <span class="learn-more">Tìm hiểu thêm →</span>
                </div>
            </a>
            <a href="#" class="product-card">
                <img src="https://placehold.co/480x350/8bc34a/white?text=Fans" alt="Fans" width="480" height="350" loading="lazy" />
                <div class="product-overlay">
                    <h3>Quạt điện Mitsubishi Electric</h3>
                    <span class="learn-more">Tìm hiểu thêm →</span>
                </div>
            </a>
        </div>
    </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
.intro-section {
    max-width: 1440px;
    margin: 0 auto;
    padding: 0;
}

.intro-header {
    background: black;
    color: white;
    padding: 39px 30px 40px;
}

.intro-title {
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 30px;
    margin-bottom: 30px;
}

.intro-cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0;
}

.intro-card {
    padding: 40px 24px;
    position: relative;
}

.intro-card h3 {
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 20px;
    margin-bottom: 25px;
}

.intro-card p {
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    font-size: 18px;
    line-height: 1.4;
}

.expand-btn {
    position: absolute;
    right: 24px;
    bottom: 30px;
    background: none;
    border: none;
    color: white;
    font-size: 45px;
    cursor: pointer;
    font-weight: 300;
    min-width: 44px;
    min-height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    touch-action: manipulation;
}

.expand-btn:focus-visible {
    outline: 2px solid #e60012;
    outline-offset: 2px;
    border-radius: 4px;
}

.banner-links {
    display: flex;
    flex-direction: column;
}

.banner-link {
    display: block;
    position: relative;
    width: 100%;
    overflow: hidden;
}

.banner-link img {
    width: 100%;
    height: auto;
    display: block;
}

.banner-link {
    touch-action: manipulation;
}

.banner-link.data-center {
    height: 462px;
}

.banner-link.ai-robot {
    height: 442px;
}

.banner-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.banner-text img {
    max-width: 576px;
}

.product-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0;
}

.product-card {
    position: relative;
    height: 350px;
    overflow: hidden;
    display: block;
}

.product-card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
}

.product-card:hover img,
.product-card:focus-visible img {
    transform: scale(1.05);
}

.product-card:focus-visible {
    outline: 2px solid #e60012;
    outline-offset: -2px;
}

.product-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: white;
    padding: 20px;
}

.product-overlay h3 {
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 27px;
    text-shadow: -4px 5px 14px black;
    margin-bottom: 20px;
    line-height: 1.2;
    text-wrap: balance;
}

.learn-more {
    background: white;
    color: black;
    padding: 12px 30px;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 19.2px;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 10px;
}

@media (max-width: 768px) {
    .intro-header {
        padding: 20px 16px;
    }

    .intro-title {
        font-size: 22px;
        margin-bottom: 20px;
    }

    .intro-cards {
        grid-template-columns: 1fr;
    }

    .intro-card {
        padding: 24px 16px;
        border-bottom: 1px solid #333;
    }

    .intro-card h3 {
        font-size: 18px;
        margin-bottom: 15px;
    }

    .intro-card p {
        font-size: 15px;
        padding-right: 40px;
    }

    .expand-btn {
        font-size: 32px;
        right: 16px;
        bottom: 24px;
    }

    .banner-link.data-center,
    .banner-link.ai-robot {
        height: auto;
        /* aspect-ratio: 16 / 7; */
    }

    .banner-text img {
        max-width: 60vw;
    }

    .product-grid {
        grid-template-columns: 1fr;
    }

    .product-card {
        height: 56vw;
        min-height: 200px;
        max-height: 280px;
    }

    .product-overlay {
        padding: 16px;
    }

    .product-overlay h3 {
        font-size: clamp(16px, 4.5vw, 20px);
        margin-bottom: 12px;
    }

    .learn-more {
        padding: 10px 20px;
        font-size: 14px;
    }

    .intro-card:last-child {
        border-bottom: none;
    }

    @media (prefers-reduced-motion: reduce) {
        .product-card img {
            transition: none;
        }
    }
}
</style>
