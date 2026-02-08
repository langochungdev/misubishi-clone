// Phần giới thiệu tổng quan về các dự án tiêu biểu

<template>
    <section class="project-intro-wrapper">
        <div class="intro-content">
            <h2 class="intro-heading">Hồ sơ dự án tiêu biểu</h2>
            <p class="intro-description">
                Mitsubishi Electric tự hào đồng hành cùng hàng trăm dự án lớn nhỏ trên khắp Việt Nam, từ tòa nhà
                thương mại, khu công nghiệp đến các công trình dân dụng. Chúng tôi mang đến giải pháp toàn diện với
                chất lượng vượt trội.
            </p>
        </div>
        <div class="stats-grid">
            <div v-for="stat in stats" :key="stat.id" class="stat-card">
                <span class="stat-number">{{ stat.number }}</span>
                <span class="stat-label">{{ stat.label }}</span>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const stats = [
    { id: 1, number: '500+', label: 'Dự án hoàn thành' },
    { id: 2, number: '200+', label: 'Đối tác tin cậy' },
    { id: 3, number: '30+', label: 'Tỉnh thành' },
    { id: 4, number: '15+', label: 'Năm kinh nghiệm' },
];
</script>

<style scoped>
.project-intro-wrapper {
    margin: 0 10px;
}

.intro-content {
    background: #f5f5f5;
    padding: 15px 30px 20px;
}

.intro-heading {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 48px;
    line-height: 1.1;
    color: black;
    margin: 0 0 25px 0;
}

.intro-description {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 25.2px;
    color: black;
    margin: 0;
}

.stats-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    background: black;
}

.stat-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 40px 24px;
    border-right: 1px solid #333;
}

.stat-card:last-child {
    border-right: none;
}

.stat-number {
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 48px;
    color: #e60012;
    margin-bottom: 10px;
}

.stat-label {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 18px;
    color: white;
    text-align: center;
}

@media (max-width: 768px) {
    .project-intro-wrapper {
        margin: 0;
    }

    .intro-content {
        padding: 15px 20px;
    }

    .intro-heading {
        font-size: clamp(28px, 6vw, 48px);
    }

    .intro-description {
        font-size: 16px;
    }

    .stats-grid {
        grid-template-columns: 1fr 1fr;
    }

    .stat-card {
        padding: 24px 16px;
        border-right: none;
        border-bottom: 1px solid #333;
    }

    .stat-card:nth-child(odd) {
        border-right: 1px solid #333;
    }

    .stat-card:nth-last-child(-n+2) {
        border-bottom: none;
    }

    .stat-number {
        font-size: clamp(32px, 6vw, 48px);
    }

    .stat-label {
        font-size: 15px;
    }
}
</style>
