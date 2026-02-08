// Danh sách các dự án tiêu biểu của Mitsubishi Electric

<template>
    <section class="project-list-wrapper">
        <div class="filter-bar">
            <button v-for="category in categories" :key="category.id" :class="['filter-btn', { active: activeCategory === category.id }]" @click="activeCategory = category.id">
                {{ category.label }}
            </button>
        </div>

        <div class="project-grid">
            <a v-for="project in filteredProjects" :key="project.id" :href="project.link" class="project-card">
                <div class="card-image">
                    <img :src="project.image" :alt="project.title" width="710" height="400" loading="lazy" />
                    <span class="card-category">{{ project.category }}</span>
                </div>
                <div class="card-content">
                    <h3 class="card-title">{{ project.title }}</h3>
                    <p class="card-location">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="currentColor" stroke-width="2" />
                            <circle cx="12" cy="10" r="3" stroke="currentColor" stroke-width="2" />
                        </svg>
                        {{ project.location }}
                    </p>
                    <p class="card-description">{{ project.description }}</p>
                    <span class="learn-more-btn">
                        <span>Xem chi tiết</span>
                        <svg width="28" height="19" viewBox="0 0 28 19" fill="none">
                            <path d="M18 1l9 8.5-9 8.5M0 9.5h27" stroke="currentColor" stroke-width="2" />
                        </svg>
                    </span>
                </div>
            </a>
        </div>
    </section>
</template>

<script setup lang="ts">
interface Project {
    id: number;
    title: string;
    category: string;
    categoryId: string;
    location: string;
    description: string;
    image: string;
    link: string;
}

const activeCategory = ref('all');

const categories = [
    { id: 'all', label: 'Tất cả' },
    { id: 'commercial', label: 'Tòa nhà thương mại' },
    { id: 'industrial', label: 'Khu công nghiệp' },
    { id: 'residential', label: 'Dân dụng' },
    { id: 'datacenter', label: 'Trung tâm dữ liệu' },
];

const projects: Project[] = [
    {
        id: 1,
        title: 'Landmark 81',
        category: 'Tòa nhà thương mại',
        categoryId: 'commercial',
        location: 'TP. Hồ Chí Minh',
        description: 'Cung cấp hệ thống thang máy, điều hòa trung tâm VRF và hệ thống quản lý tòa nhà BMS cho tòa nhà cao nhất Việt Nam.',
        image: 'https://placehold.co/710x400/1a237e/white?text=Landmark+81',
        link: '#',
    },
    {
        id: 2,
        title: 'Nhà máy Samsung HCMC-CE',
        category: 'Khu công nghiệp',
        categoryId: 'industrial',
        location: 'TP. Hồ Chí Minh',
        description: 'Triển khai hệ thống tự động hóa công nghiệp, robot và hệ thống điều hòa không khí công nghiệp cho nhà máy Samsung.',
        image: 'https://placehold.co/710x400/2e7d32/white?text=Samsung+Factory',
        link: '#',
    },
    {
        id: 3,
        title: 'Vinhomes Grand Park',
        category: 'Dân dụng',
        categoryId: 'residential',
        location: 'TP. Hồ Chí Minh',
        description: 'Cung cấp giải pháp điều hòa không khí cho khu đô thị với hàng nghìn căn hộ, đảm bảo hiệu quả năng lượng cao.',
        image: 'https://placehold.co/710x400/e65100/white?text=Vinhomes+Grand+Park',
        link: '#',
    },
    {
        id: 4,
        title: 'Data Center FPT Telecom',
        category: 'Trung tâm dữ liệu',
        categoryId: 'datacenter',
        location: 'Hà Nội',
        description: 'Giải pháp tổng thể cho trung tâm dữ liệu bao gồm hệ thống làm mát chính xác, UPS và hệ thống giám sát.',
        image: 'https://placehold.co/710x400/0d47a1/white?text=FPT+Data+Center',
        link: '#',
    },
    {
        id: 5,
        title: 'Aeon Mall Hà Đông',
        category: 'Tòa nhà thương mại',
        categoryId: 'commercial',
        location: 'Hà Nội',
        description: 'Hệ thống thang cuốn, thang máy và điều hòa VRF cho trung tâm thương mại lớn nhất khu vực Hà Đông.',
        image: 'https://placehold.co/710x400/4a148c/white?text=Aeon+Mall',
        link: '#',
    },
    {
        id: 6,
        title: 'KCN Thăng Long III',
        category: 'Khu công nghiệp',
        categoryId: 'industrial',
        location: 'Bắc Ninh',
        description: 'Triển khai hệ thống Factory Automation, hệ thống điều khiển PLC và giải pháp tiết kiệm năng lượng cho toàn khu công nghiệp.',
        image: 'https://placehold.co/710x400/37474f/white?text=KCN+Thăng+Long',
        link: '#',
    },
];

const filteredProjects = computed(() => {
    if (activeCategory.value === 'all') return projects;
    return projects.filter((p) => p.categoryId === activeCategory.value);
});
</script>

<style scoped>
.project-list-wrapper {
    margin: 0 10px;
}

.filter-bar {
    display: flex;
    gap: 0;
    background: black;
}

.filter-btn {
    flex: 1;
    padding: 20px 16px;
    background: black;
    color: white;
    border: none;
    border-right: 1px solid #333;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.filter-btn:last-child {
    border-right: none;
}

.filter-btn:focus-visible {
    outline: 2px solid #e60012;
    outline-offset: -2px;
}

.filter-btn:hover,
.filter-btn.active {
    background: #e60012;
}

.project-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0;
}

.project-card {
    display: flex;
    flex-direction: column;
    background: #ebebeb;
    text-decoration: none;
    color: black;
    transition: box-shadow 0.3s;
}

.project-card:nth-child(even) {
    background: #f5f5f5;
}

.card-image {
    position: relative;
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

.project-card:hover .card-image img {
    transform: scale(1.03);
}

.card-category {
    position: absolute;
    top: 20px;
    left: 20px;
    background: #e60012;
    color: white;
    padding: 6px 16px;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 14px;
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
    margin: 0 0 12px 0;
}

.card-location {
    display: flex;
    align-items: center;
    gap: 6px;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 14px;
    color: #666;
    margin: 0 0 16px 0;
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
    cursor: pointer;
    margin-top: auto;
    align-self: flex-end;
    transition: background-color 0.3s, color 0.3s;
}

.project-card:hover .learn-more-btn {
    background: black;
    color: white;
}

@media (max-width: 768px) {
    .project-list-wrapper {
        margin: 0;
    }

    .filter-bar {
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
    }

    .filter-btn {
        flex: none;
        padding: 14px 16px;
        font-size: 14px;
        white-space: nowrap;
        min-height: 44px;
        touch-action: manipulation;
    }

    .project-grid {
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
    .filter-btn,
    .learn-more-btn,
    .project-card {
        transition: none;
    }
}
</style>
