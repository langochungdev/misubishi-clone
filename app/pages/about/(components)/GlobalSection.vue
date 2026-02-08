// Phần giới thiệu Mitsubishi Electric toàn cầu

<template>
    <section class="global-section-wrapper">
        <div class="section-grid">
            <div class="info-block">
                <h2 class="section-title">
                    Mitsubishi Electric<br />Toàn cầu
                </h2>
                <p class="section-description">
                    Tập đoàn Mitsubishi Electric mong muốn đóng góp lâu dài cho xã hội với tư cách là Công ty "xanh"
                    dẫn đầu toàn cầu. Để đạt được điều này, chúng tôi áp dụng công nghệ hiện đại và trình độ chuyên
                    môn vào hàng loạt lĩnh vực kinh doanh trong khi theo đuổi các sáng kiến nhằm xây dựng xã hội phồn
                    thịnh và sôi động.
                </p>
                <a href="#" class="learn-more-btn">
                    <span>Tìm hiểu thêm</span>
                    <svg width="28" height="19" viewBox="0 0 28 19" fill="none">
                        <path d="M18 1l9 8.5-9 8.5M0 9.5h27" stroke="currentColor" stroke-width="2" />
                    </svg>
                </a>
            </div>

            <div class="links-block">
                <div class="history-banner">
                    <img src="https://placehold.co/710x337/1a1a2e/white?text=Lịch+sử+Mitsubishi+Electric" alt="Lịch sử Mitsubishi Electric" width="710" height="337" loading="lazy" class="history-image" />
                    <span class="history-label">Lịch sử Mitsubishi Electric</span>
                    <a href="#" class="history-btn">
                        <span>Tìm hiểu thêm</span>
                        <svg width="28" height="19" viewBox="0 0 28 19" fill="none">
                            <path d="M18 1l9 8.5-9 8.5M0 9.5h27" stroke="currentColor" stroke-width="2" />
                        </svg>
                    </a>
                </div>
                <nav class="global-links">
                    <a v-for="link in globalLinks" :key="link.label" :href="link.href" class="global-link-item">
                        <span class="link-icon">›</span>
                        <span>{{ link.label }}</span>
                    </a>
                </nav>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const globalLinks = [
    { label: 'Động lực tăng trưởng', href: '#' },
    { label: 'Số liệu về công ty', href: '#' },
    { label: 'Chiến lược công ty', href: '#' },
    { label: 'Sứ mệnh công ty', href: '#' },
    { label: 'Thông điệp từ chủ tịch', href: '#' },
    { label: 'Nghiên cứu và phát triển / Công nghệ', href: '#' },
    { label: 'Tính bền vững', href: '#' },
    { label: 'Nhà đầu tư', href: '#' },
    { label: 'Mitsubishi Electric Một công ty đa quốc gia, đa văn hóa', href: '#' },
];
</script>

<style scoped>
.global-section-wrapper {
    margin: 0 10px;
}

.section-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0;
}

.info-block {
    background: #f5f5f5;
    padding: 45px 34px;
    min-height: 754px;
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

.links-block {
    background: #ebebeb;
    display: flex;
    flex-direction: column;
}

.history-banner {
    position: relative;
    min-height: 337px;
    overflow: hidden;
}

.history-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
}

.history-label {
    position: absolute;
    top: 30px;
    left: 30px;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 22px;
    color: white;
}

.history-btn {
    position: absolute;
    bottom: 30px;
    right: 25px;
    display: inline-flex;
    align-items: center;
    gap: 15px;
    border: 3px solid white;
    background: none;
    padding: 10px 16px;
    font-family: 'Roboto', sans-serif;
    font-weight: 600;
    font-size: 18px;
    color: white;
    text-decoration: none;
    cursor: pointer;
    transition: background 0.3s ease, color 0.3s ease;
    touch-action: manipulation;
    min-height: 44px;
}

.history-btn:hover {
    background: white;
    color: black;
}

.history-btn:focus-visible {
    outline: 2px solid #e60012;
    outline-offset: 2px;
}

.global-links {
    padding: 30px 45px;
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.global-link-item {
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

.global-link-item:hover {
    color: #e60012;
}

.global-link-item:focus-visible {
    outline: 2px solid #e60012;
    outline-offset: 2px;
}

.link-icon {
    font-size: 20px;
}

@media (max-width: 768px) {
    .global-section-wrapper {
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

    .history-banner {
        min-height: 220px;
    }

    .history-label {
        font-size: 18px;
        top: 16px;
        left: 16px;
    }

    .history-btn {
        bottom: 16px;
        right: 16px;
        font-size: 15px;
        padding: 8px 14px;
    }

    .global-links {
        padding: 20px 16px;
        gap: 8px;
    }

    .global-link-item {
        font-size: 16px;
    }
}

@media (prefers-reduced-motion: reduce) {

    .learn-more-btn,
    .history-btn,
    .global-link-item {
        transition: none;
    }
}
</style>
