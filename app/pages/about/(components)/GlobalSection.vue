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
                    <img src="https://placehold.co/710x337/1a1a2e/white?text=Lịch+sử+Mitsubishi+Electric" alt="Lịch sử Mitsubishi Electric" class="history-image" />
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
    transition: all 0.3s;
}

.learn-more-btn:hover {
    background: black;
    color: white;
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
    transition: all 0.3s;
}

.history-btn:hover {
    background: white;
    color: black;
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
    transition: color 0.3s;
}

.global-link-item:hover {
    color: #e60012;
}

.link-icon {
    font-size: 20px;
}
</style>
