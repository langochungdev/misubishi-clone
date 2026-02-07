// Phần kêu gọi liên hệ dịch vụ

<template>
    <section class="service-cta-wrapper">
        <div class="cta-grid">
            <div class="cta-info">
                <h2 class="cta-title">
                    Bạn cần hỗ trợ<br />dịch vụ?
                </h2>
                <p class="cta-description">
                    Liên hệ ngay với đội ngũ chuyên gia của chúng tôi để được tư vấn giải pháp tối ưu nhất cho doanh
                    nghiệp và dự án của bạn.
                </p>
                <div class="cta-hotline">
                    <span class="hotline-label">Hotline:</span>
                    <a href="tel:1800585833" class="hotline-number">1800 585 833</a>
                </div>
                <a href="#" class="cta-btn">
                    <span>Liên hệ ngay</span>
                    <svg width="28" height="19" viewBox="0 0 28 19" fill="none">
                        <path d="M18 1l9 8.5-9 8.5M0 9.5h27" stroke="currentColor" stroke-width="2" />
                    </svg>
                </a>
            </div>
            <div class="cta-image">
                <img src="https://placehold.co/710x500/0d47a1/white?text=Liên+hệ+dịch+vụ" alt="Liên hệ dịch vụ" />
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
.service-cta-wrapper {
    margin: 0 10px;
}

.cta-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0;
}

.cta-info {
    background: #ebebeb;
    padding: 45px 34px;
    min-height: 500px;
    display: flex;
    flex-direction: column;
}

.cta-title {
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 64px;
    line-height: 76.8px;
    color: black;
    margin: 0 0 30px 0;
}

.cta-description {
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 18px;
    line-height: 25.2px;
    color: black;
    margin: 0 0 30px 0;
}

.cta-hotline {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 30px;
}

.hotline-label {
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 18px;
    color: black;
}

.hotline-number {
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 24px;
    color: #e60012;
    text-decoration: none;
}

.hotline-number:hover {
    text-decoration: underline;
}

.cta-btn {
    display: inline-flex;
    align-items: center;
    gap: 15px;
    border: 3px solid #e60012;
    background: #e60012;
    padding: 12px 24px;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 18px;
    color: white;
    text-decoration: none;
    cursor: pointer;
    align-self: flex-start;
    margin-top: auto;
    transition: all 0.3s;
}

.cta-btn:hover {
    background: #c50010;
    border-color: #c50010;
}

.cta-image {
    overflow: hidden;
}

.cta-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.3s;
}

.cta-image:hover img {
    transform: scale(1.03);
}
</style>
