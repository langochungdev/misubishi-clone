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
    transition: all 0.3s;
}

.learn-more-btn:hover {
    background: black;
    color: white;
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
    transition: color 0.3s;
}

.stats-link:hover {
    color: #e60012;
}

.link-icon {
    font-size: 20px;
}
</style>
