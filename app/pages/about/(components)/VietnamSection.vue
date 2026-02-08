// Phần giới thiệu Mitsubishi Electric tại Việt Nam

<template>
    <section class="vietnam-section-wrapper">
        <div class="section-grid">
            <div class="info-block">
                <h2 class="section-title">
                    Mitsubishi Electric tại<br />Việt Nam
                </h2>
                <p class="section-description">
                    Từ khi bắt đầu hoạt động tại thị trường Châu Á vào giữa thập niên 50, Mitsubishi Electric đã không
                    ngừng phát triển để trở thành một trong những công ty hàng đầu trong khu vực. Vào năm 2011, Công ty
                    Mitsubishi Electric đã chính thức thành lập trụ sở chính ở Thành phố Hồ Chí Minh và 2 chi nhánh ở
                    Đà Nẵng và Hà Nội. Nhiệm vụ của Mitsubishi Electric là cải thiện đời sống của người dân Việt Nam,
                    tạo ra môi trường xanh hơn thông qua các hoạt động kinh doanh và những đóng góp cho cộng đồng xã
                    hội.
                </p>
                <a href="#" class="learn-more-btn">
                    <span>Tìm hiểu thêm</span>
                    <svg width="28" height="19" viewBox="0 0 28 19" fill="none">
                        <path d="M18 1l9 8.5-9 8.5M0 9.5h27" stroke="currentColor" stroke-width="2" />
                    </svg>
                </a>
            </div>

            <div class="stats-block">
                <div class="stats-top">
                    <span class="stats-label">Vị trí</span>
                    <div class="stats-number">4</div>
                    <div class="stats-unit">địa điểm</div>
                </div>
                <div class="stats-links">
                    <a href="#" class="stats-link">
                        <span class="link-icon">›</span>
                        <span>Lịch sử</span>
                    </a>
                    <a href="#" class="stats-link">
                        <span class="link-icon">›</span>
                        <span>Tầm nhìn, sứ mệnh và giá trị</span>
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
.vietnam-section-wrapper {
    margin: 0 10px;
}

.section-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0;
}

.info-block {
    background: #ebebeb;
    padding: 45px 34px;
    position: relative;
    min-height: 750px;
    display: flex;
    flex-direction: column;
}

.section-title {
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 64px;
    line-height: 76.8px;
    color: black;
    margin: 0 0 45px 0;
}

.section-description {
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 18px;
    line-height: 25.2px;
    color: black;
    margin: 0;
}

.learn-more-btn {
    display: inline-flex;
    align-items: center;
    gap: 15px;
    border: 3px solid black;
    background: none;
    padding: 10px 16px;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 18px;
    color: black;
    text-decoration: none;
    cursor: pointer;
    margin-top: auto;
    align-self: flex-end;
    transition: background 0.3s ease, color 0.3s ease;
    touch-action: manipulation;
    min-height: 44px;
}

.learn-more-btn:hover {
    background: black;
    color: white;
}

.learn-more-btn:focus-visible {
    outline: 2px solid #e60012;
    outline-offset: 2px;
}

.stats-block {
    background: #ebebeb;
    display: flex;
    flex-direction: column;
}

.stats-top {
    background: url('https://placehold.co/710x361/555/white?text=Vietnam+Map') center/cover no-repeat;
    padding: 30px;
    min-height: 360px;
    display: flex;
    flex-direction: column;
}

.stats-label {
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 22px;
    color: black;
}

.stats-number {
    font-family: 'Roboto', sans-serif;
    font-weight: 100;
    font-size: 151px;
    line-height: 100px;
    color: black;
    text-align: center;
    margin: 20px 0 10px;
}

.stats-unit {
    font-family: 'Roboto', sans-serif;
    font-weight: 100;
    font-size: 32px;
    color: black;
    text-align: center;
}

.stats-links {
    padding: 25px 40px;
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.stats-link {
    display: flex;
    align-items: center;
    gap: 10px;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 22px;
    color: black;
    text-decoration: none;
    transition: color 0.3s ease;
    touch-action: manipulation;
    min-height: 44px;
}

.stats-link:hover {
    color: #e60012;
}

.stats-link:focus-visible {
    outline: 2px solid #e60012;
    outline-offset: 2px;
}

.link-icon {
    font-size: 20px;
}

@media (max-width: 768px) {
    .vietnam-section-wrapper {
        margin: 0;
    }

    .section-grid {
        grid-template-columns: 1fr;
    }

    .info-block {
        padding: 28px 16px;
        min-height: auto;
    }

    .section-title {
        font-size: clamp(32px, 8vw, 48px);
        line-height: 1.15;
        margin-bottom: 24px;
    }

    .section-title br {
        display: none;
    }

    .section-description {
        font-size: 15px;
        line-height: 1.5;
    }

    .learn-more-btn {
        align-self: stretch;
        justify-content: center;
        margin-top: 24px;
        font-size: 16px;
    }

    .stats-top {
        min-height: 240px;
        padding: 24px 16px;
    }

    .stats-number {
        font-size: 100px;
        line-height: 80px;
    }

    .stats-unit {
        font-size: 24px;
    }

    .stats-links {
        padding: 20px 16px;
        gap: 8px;
    }

    .stats-link {
        font-size: 18px;
    }
}

@media (prefers-reduced-motion: reduce) {

    .learn-more-btn,
    .stats-link {
        transition: none;
    }
}
</style>
