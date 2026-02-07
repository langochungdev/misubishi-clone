// Phần điểm nổi bật về dịch vụ

<template>
    <section class="service-features-wrapper">
        <div class="features-header">
            <h2 class="features-title">Tại sao chọn dịch vụ của chúng tôi?</h2>
        </div>
        <div class="features-grid">
            <div v-for="feature in features" :key="feature.id" class="feature-card">
                <div class="feature-icon">
                    <svg v-if="feature.icon === 'shield'" width="48" height="48" viewBox="0 0 24 24" fill="none">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="#e60012" stroke-width="2" fill="none" />
                        <path d="M9 12l2 2 4-4" stroke="#e60012" stroke-width="2" />
                    </svg>
                    <svg v-else-if="feature.icon === 'clock'" width="48" height="48" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="#e60012" stroke-width="2" />
                        <path d="M12 6v6l4 2" stroke="#e60012" stroke-width="2" stroke-linecap="round" />
                    </svg>
                    <svg v-else-if="feature.icon === 'users'" width="48" height="48" viewBox="0 0 24 24" fill="none">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="#e60012" stroke-width="2" />
                        <circle cx="9" cy="7" r="4" stroke="#e60012" stroke-width="2" />
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="#e60012" stroke-width="2" />
                    </svg>
                    <svg v-else width="48" height="48" viewBox="0 0 24 24" fill="none">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="#e60012" stroke-width="2" />
                        <path d="M22 4L12 14.01l-3-3" stroke="#e60012" stroke-width="2" stroke-linecap="round" />
                    </svg>
                </div>
                <h3 class="feature-title">{{ feature.title }}</h3>
                <p class="feature-description">{{ feature.description }}</p>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const features = [
    {
        id: 1,
        icon: 'shield',
        title: 'Chất lượng đảm bảo',
        description: 'Tất cả dịch vụ đều tuân thủ tiêu chuẩn chất lượng quốc tế, đảm bảo an toàn và hiệu quả cao nhất.',
    },
    {
        id: 2,
        icon: 'clock',
        title: 'Phản hồi nhanh chóng',
        description: 'Cam kết phản hồi trong vòng 24 giờ và xử lý sự cố khẩn cấp trong thời gian ngắn nhất.',
    },
    {
        id: 3,
        icon: 'users',
        title: 'Đội ngũ chuyên nghiệp',
        description: 'Kỹ sư và kỹ thuật viên được đào tạo trực tiếp từ Mitsubishi Electric Nhật Bản.',
    },
    {
        id: 4,
        icon: 'check',
        title: 'Cam kết hiệu quả',
        description: 'Đảm bảo thiết bị hoạt động ổn định với chế độ bảo hành dài hạn và chính sách hậu mãi tốt nhất.',
    },
];
</script>

<style scoped>
.service-features-wrapper {
    margin: 0 10px;
    background: black;
    padding: 50px 30px;
}

.features-header {
    margin-bottom: 40px;
}

.features-title {
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 30px;
    color: white;
    margin: 0;
}

.features-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0;
}

.feature-card {
    padding: 40px 24px;
    text-align: center;
}

.feature-icon {
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
}

.feature-title {
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 22px;
    color: white;
    margin: 0 0 15px 0;
}

.feature-description {
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    font-size: 16px;
    line-height: 24px;
    color: rgba(255, 255, 255, 0.85);
    margin: 0;
}
</style>
