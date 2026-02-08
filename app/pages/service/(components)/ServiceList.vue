// Danh sách các dịch vụ chính của công ty

<template>
    <section class="service-list-wrapper">
        <div class="service-intro">
            <h2 class="intro-heading">Các dịch vụ của chúng tôi</h2>
            <p class="intro-description">
                Mitsubishi Electric cung cấp đa dạng các dịch vụ chuyên nghiệp, từ tư vấn giải pháp kỹ thuật đến bảo
                trì và hỗ trợ sau bán hàng, nhằm đảm bảo hệ thống của bạn luôn hoạt động ở hiệu suất tốt nhất.
            </p>
        </div>

        <div class="service-grid">
            <div v-for="service in services" :key="service.id" class="service-card">
                <div class="card-image">
                    <img :src="service.image" :alt="service.title" width="710" height="400" loading="lazy" />
                </div>
                <div class="card-content">
                    <h3 class="card-title">{{ service.title }}</h3>
                    <p class="card-description">{{ service.description }}</p>
                    <a :href="service.link" class="learn-more-btn">
                        <span>Tìm hiểu thêm</span>
                        <svg width="28" height="19" viewBox="0 0 28 19" fill="none">
                            <path d="M18 1l9 8.5-9 8.5M0 9.5h27" stroke="currentColor" stroke-width="2" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const services = [
    {
        id: 1,
        title: 'Tư vấn giải pháp kỹ thuật',
        description:
            'Đội ngũ chuyên gia của chúng tôi sẵn sàng tư vấn và đề xuất các giải pháp kỹ thuật tối ưu, phù hợp với nhu cầu cụ thể của từng dự án và khách hàng.',
        image: 'https://placehold.co/710x400/1a237e/white?text=Tư+vấn+kỹ+thuật',
        link: '#',
    },
    {
        id: 2,
        title: 'Lắp đặt hệ thống',
        description:
            'Dịch vụ lắp đặt chuyên nghiệp với đội ngũ kỹ thuật viên được đào tạo bài bản, đảm bảo hệ thống vận hành ổn định và đạt hiệu suất cao nhất.',
        image: 'https://placehold.co/710x400/2e7d32/white?text=Lắp+đặt+hệ+thống',
        link: '#',
    },
    {
        id: 3,
        title: 'Bảo trì & Bảo dưỡng',
        description:
            'Chương trình bảo trì định kỳ giúp kéo dài tuổi thọ thiết bị, ngăn ngừa sự cố và tối ưu hóa chi phí vận hành cho khách hàng.',
        image: 'https://placehold.co/710x400/e65100/white?text=Bảo+trì+bảo+dưỡng',
        link: '#',
    },
    {
        id: 4,
        title: 'Hỗ trợ kỹ thuật 24/7',
        description:
            'Đường dây nóng hỗ trợ kỹ thuật hoạt động 24/7, sẵn sàng giải đáp mọi thắc mắc và xử lý sự cố nhanh chóng cho khách hàng trên toàn quốc.',
        image: 'https://placehold.co/710x400/0d47a1/white?text=Hỗ+trợ+24/7',
        link: '#',
    },
    {
        id: 5,
        title: 'Đào tạo vận hành',
        description:
            'Cung cấp các khóa đào tạo chuyên sâu về vận hành, bảo trì thiết bị cho đội ngũ kỹ thuật của khách hàng, nâng cao năng lực quản lý hệ thống.',
        image: 'https://placehold.co/710x400/4a148c/white?text=Đào+tạo+vận+hành',
        link: '#',
    },
    {
        id: 6,
        title: 'Cung cấp phụ tùng chính hãng',
        description:
            'Đảm bảo cung cấp phụ tùng thay thế chính hãng với chất lượng cao, giúp thiết bị hoạt động bền bỉ và duy trì hiệu suất tối ưu.',
        image: 'https://placehold.co/710x400/37474f/white?text=Phụ+tùng+chính+hãng',
        link: '#',
    },
];
</script>

<style scoped>
.service-list-wrapper {
    margin: 0 10px;
}

.service-intro {
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

.service-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0;
    margin-top: 0;
}

.service-card {
    display: flex;
    flex-direction: column;
    background: #ebebeb;
}

.service-card:nth-child(even) {
    background: #f5f5f5;
}

.card-image {
    width: 100%;
    height: 400px;
    overflow: hidden;
}

.card-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s;
}

.service-card:hover .card-image img {
    transform: scale(1.03);
}

.card-content {
    padding: 34px;
    display: flex;
    flex-direction: column;
    flex: 1;
}

.card-title {
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 30px;
    line-height: 1.2;
    color: black;
    margin: 0 0 20px 0;
}

.card-description {
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
    transition: background-color 0.3s, color 0.3s;
}

.learn-more-btn:focus-visible {
    outline: 2px solid black;
    outline-offset: 2px;
}

.learn-more-btn:hover {
    background: black;
    color: white;
}

@media (max-width: 768px) {
    .service-list-wrapper {
        margin: 0;
    }

    .service-intro {
        padding: 15px 20px;
    }

    .intro-heading {
        font-size: clamp(28px, 6vw, 48px);
    }

    .intro-description {
        font-size: 16px;
    }

    .service-grid {
        grid-template-columns: 1fr;
    }

    .card-image {
        height: auto;
        aspect-ratio: 16 / 9;
    }

    .card-content {
        padding: 24px 20px;
    }

    .card-title {
        font-size: clamp(22px, 4vw, 30px);
    }

    .card-description {
        font-size: 16px;
    }

    .learn-more-btn {
        min-height: 44px;
        touch-action: manipulation;
        align-self: stretch;
        justify-content: center;
    }
}

@media (prefers-reduced-motion: reduce) {

    .card-image img,
    .learn-more-btn {
        transition: none;
    }
}
</style>
