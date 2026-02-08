// Phần dự án nổi bật được highlight

<template>
    <section class="project-highlight-wrapper">
        <div class="highlight-grid">
            <div class="highlight-image">
                <img src="https://placehold.co/710x560/1a237e/white?text=Dự+án+nổi+bật" alt="Dự án nổi bật" width="710" height="560" loading="lazy" />
            </div>
            <div class="highlight-content">
                <span class="highlight-label">DỰ ÁN NỔI BẬT</span>
                <h2 class="highlight-title">Giải pháp tổng thể cho<br />Tòa nhà Xanh</h2>
                <p class="highlight-description">
                    Mitsubishi Electric tiên phong trong việc cung cấp giải pháp tổng thể cho các tòa nhà xanh tại Việt
                    Nam. Từ hệ thống điều hòa tiết kiệm năng lượng, thang máy thông minh đến hệ thống quản lý tòa nhà
                    BMS, chúng tôi giúp giảm đến 40% năng lượng tiêu thụ.
                </p>
                <ul class="highlight-features">
                    <li v-for="feature in features" :key="feature">{{ feature }}</li>
                </ul>
                <a href="#" class="highlight-btn">
                    <span>Tìm hiểu thêm</span>
                    <svg width="28" height="19" viewBox="0 0 28 19" fill="none">
                        <path d="M18 1l9 8.5-9 8.5M0 9.5h27" stroke="currentColor" stroke-width="2" />
                    </svg>
                </a>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const features = [
    'Giảm 40% năng lượng tiêu thụ',
    'Hệ thống BMS giám sát 24/7',
    'Đạt chứng chỉ Green Building',
    'Bảo trì định kỳ trọn đời',
];
</script>

<style scoped>
.project-highlight-wrapper {
    margin: 0 10px;
}

.highlight-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
}

.highlight-image {
    overflow: hidden;
    height: 560px;
}

.highlight-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.3s;
}

.highlight-image:hover img {
    transform: scale(1.03);
}

.highlight-content {
    background: #ebebeb;
    padding: 45px 34px;
    display: flex;
    flex-direction: column;
}

.highlight-label {
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 14px;
    color: #e60012;
    letter-spacing: 2px;
    margin-bottom: 20px;
}

.highlight-title {
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 40px;
    line-height: 1.15;
    color: black;
    margin: 0 0 25px 0;
}

.highlight-description {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 25.2px;
    color: black;
    margin: 0 0 25px 0;
}

.highlight-features {
    list-style: none;
    padding: 0;
    margin: 0 0 30px 0;
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.highlight-features li {
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 16px;
    color: black;
    padding-left: 24px;
    position: relative;
}

.highlight-features li::before {
    content: '';
    position: absolute;
    left: 0;
    top: 6px;
    width: 10px;
    height: 10px;
    background: #e60012;
}

.highlight-btn {
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
    transition: background-color 0.3s, border-color 0.3s;
}

.highlight-btn:focus-visible {
    outline: 2px solid #e60012;
    outline-offset: 2px;
}

.highlight-btn:hover {
    background: #c50010;
    border-color: #c50010;
}

@media (max-width: 768px) {
    .project-highlight-wrapper {
        margin: 0;
    }

    .highlight-grid {
        grid-template-columns: 1fr;
    }

    .highlight-image {
        height: auto;
        aspect-ratio: 16 / 9;
    }

    .highlight-content {
        padding: 30px 20px;
    }

    .highlight-title {
        font-size: clamp(28px, 5vw, 40px);
        text-wrap: balance;
    }

    .highlight-title br {
        display: none;
    }

    .highlight-description {
        font-size: 16px;
    }

    .highlight-btn {
        min-height: 44px;
        touch-action: manipulation;
        width: 100%;
        justify-content: center;
    }
}

@media (prefers-reduced-motion: reduce) {

    .highlight-btn,
    .highlight-image img {
        transition: none;
    }
}
</style>
