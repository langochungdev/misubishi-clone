// Thông tin liên hệ các văn phòng và chi nhánh

<template>
    <section class="contact-info-wrapper">
        <div class="info-header">
            <h2 class="info-heading">Thông tin liên hệ</h2>
            <p class="info-description">
                Mitsubishi Electric Việt Nam luôn sẵn sàng lắng nghe và hỗ trợ bạn. Hãy liên hệ với chúng tôi qua các
                kênh dưới đây hoặc đến trực tiếp văn phòng gần nhất.
            </p>
        </div>

        <div class="offices-grid">
            <div v-for="office in offices" :key="office.id" class="office-card">
                <div class="office-icon">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="#e60012" stroke-width="2" />
                        <circle cx="12" cy="10" r="3" stroke="#e60012" stroke-width="2" />
                    </svg>
                </div>
                <h3 class="office-name">{{ office.name }}</h3>
                <p class="office-address">{{ office.address }}</p>
                <div class="office-details">
                    <p class="detail-item">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" stroke-width="2" />
                        </svg>
                        {{ office.phone }}
                    </p>
                    <p class="detail-item">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" stroke-width="2" />
                            <path d="m22 6-10 7L2 6" stroke="currentColor" stroke-width="2" />
                        </svg>
                        {{ office.email }}
                    </p>
                </div>
            </div>
        </div>

        <div class="hotline-bar">
            <div class="hotline-content">
                <span class="hotline-label">Đường dây nóng hỗ trợ 24/7:</span>
                <a href="tel:1800585833" class="hotline-number">1800 585 833</a>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const offices = [
    {
        id: 1,
        name: 'Trụ sở chính - TP. Hồ Chí Minh',
        address: 'Tầng 12, Tòa nhà Viettel, 285 Cách Mạng Tháng 8, Phường 12, Quận 10, TP. Hồ Chí Minh',
        phone: '(028) 3910 5945',
        email: 'info@mev.com.vn',
    },
    {
        id: 2,
        name: 'Chi nhánh Hà Nội',
        address: 'Tầng 8, Tòa nhà Cornerstone, 16 Phan Chu Trinh, Quận Hoàn Kiếm, Hà Nội',
        phone: '(024) 3974 8745',
        email: 'hanoi@mev.com.vn',
    },
    {
        id: 3,
        name: 'Chi nhánh Đà Nẵng',
        address: 'Tầng 5, Tòa nhà Indochina Riverside, 74 Bạch Đằng, Quận Hải Châu, Đà Nẵng',
        phone: '(0236) 3888 567',
        email: 'danang@mev.com.vn',
    },
];
</script>

<style scoped>
.contact-info-wrapper {
    margin: 0 10px;
}

.info-header {
    background: #f5f5f5;
    padding: 15px 30px 20px;
}

.info-heading {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 48px;
    line-height: 1.1;
    color: black;
    margin: 0 0 25px 0;
}

.info-description {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 25.2px;
    color: black;
    margin: 0;
}

.offices-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
}

.office-card {
    padding: 40px 30px;
    background: white;
    border-right: 1px solid #e0e0e0;
}

.office-card:last-child {
    border-right: none;
}

.office-icon {
    margin-bottom: 20px;
}

.office-name {
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 22px;
    color: black;
    margin: 0 0 15px 0;
}

.office-address {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #555;
    margin: 0 0 20px 0;
}

.office-details {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.detail-item {
    display: flex;
    align-items: center;
    gap: 10px;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 16px;
    color: black;
    margin: 0;
}

.hotline-bar {
    background: black;
    padding: 30px;
}

.hotline-content {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
}

.hotline-label {
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 20px;
    color: white;
}

.hotline-number {
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 32px;
    color: #e60012;
    text-decoration: none;
    transition: color 0.3s;
}

.hotline-number:hover {
    color: #ff3344;
}
</style>
