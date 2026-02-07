<template>
    <section class="news-section">
        <div class="news-tabs">
            <button v-for="tab in tabs" :key="tab.id" :class="['tab-btn', { active: activeTab === tab.id }]" @click="activeTab = tab.id">
                {{ tab.label }}
            </button>
        </div>

        <div class="news-grid">
            <article v-for="news in newsItems" :key="news.id" class="news-card">
                <a :href="news.link" class="news-image">
                    <img :src="news.image" :alt="news.title" />
                </a>
                <div class="news-content">
                    <span class="news-date">{{ news.date }}</span>
                    <h3 class="news-title">
                        <a :href="news.link">{{ news.title }}</a>
                    </h3>
                    <a :href="news.link" class="news-btn">Tìm hiểu thêm →</a>
                </div>
            </article>
        </div>
    </section>
</template>

<script setup lang="ts">
const activeTab = ref('news');

interface Tab {
    id: string;
    label: string;
}

interface NewsItem {
    id: number;
    date: string;
    title: string;
    image: string;
    link: string;
}

const tabs: Tab[] = [
    { id: 'news', label: 'TIN TỨC' },
    { id: 'handbook', label: 'SỔ TAY GIA DỤNG' },
    { id: 'projects', label: 'HỒ SƠ DỰ ÁN' },
];

const newsItems = ref<NewsItem[]>([
    {
        id: 1,
        date: '29, Tháng 1, 2026',
        title: 'Mitsubishi Electric Việt Nam khai trương Trung tâm giải pháp gia công tia lửa điện (EDM) tại thành phố Đ…',
        image: 'https://placehold.co/432x224/e60012/white?text=EDM+Center',
        link: '#',
    },
    {
        id: 2,
        date: '25, Tháng 12, 2025',
        title: 'Trái Tim Của Mọi Công Trình – Mitsubishi Electric Diamond Controls',
        image: 'https://placehold.co/432x224/1565c0/white?text=Diamond+Controls',
        link: '#',
    },
    {
        id: 3,
        date: '17, Tháng 12, 2025',
        title: 'Khai trương Trung tâm giải pháp cơ điện tử tại thành phố Hồ Chí Minh',
        image: 'https://placehold.co/432x224/ff6f00/white?text=Mechatronics',
        link: '#',
    },
]);
</script>

<style scoped>
.news-section {
    max-width: 1440px;
    margin: 0 auto;
}

.news-tabs {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
}

.tab-btn {
    background: black;
    color: white;
    border: none;
    border-right: 2px solid #d3d3d3;
    padding: 37px 20px;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 30px;
    cursor: pointer;
    transition: background 0.3s;
}

.tab-btn:last-child {
    border-right: none;
}

.tab-btn:hover,
.tab-btn.active {
    background: #333;
}

.news-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
}

.news-card {
    background: white;
    display: flex;
    flex-direction: column;
}

.news-image {
    display: block;
    height: 290px;
    overflow: hidden;
    padding: 33px 24px;
}

.news-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s;
}

.news-card:hover .news-image img {
    transform: scale(1.05);
}

.news-content {
    padding: 20px 24px 30px;
    flex: 1;
    display: flex;
    flex-direction: column;
}

.news-date {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 12.8px;
    color: black;
    margin-bottom: 10px;
}

.news-title {
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 18px;
    line-height: 1.25;
    margin-bottom: auto;
}

.news-title a {
    color: black;
    text-decoration: none;
}

.news-title a:hover {
    color: #e60012;
}

.news-btn {
    display: inline-block;
    margin-top: 30px;
    padding: 12px 17px;
    border: 3px solid black;
    background: white;
    color: black;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 19.2px;
    text-decoration: none;
    text-align: center;
    align-self: center;
    transition: all 0.3s;
}

.news-btn:hover {
    background: black;
    color: white;
}
</style>
