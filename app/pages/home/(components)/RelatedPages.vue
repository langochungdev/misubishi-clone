<template>
    <section class="related-section">
        <h2 class="related-title">Tham khảo các trang liên quan</h2>

        <div class="carousel-container">
            <button class="carousel-btn prev" @click="prevSlide">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M15 18l-6-6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </button>

            <div class="carousel-track">
                <a v-for="page in relatedPages" :key="page.id" :href="page.link" class="related-card">
                    <img :src="page.image" :alt="page.title" />
                    <span class="learn-more">Tìm hiểu thêm →</span>
                </a>
            </div>

            <button class="carousel-btn next" @click="nextSlide">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M9 18l6-6-6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </button>
        </div>

    </section>
</template>

<script setup lang="ts">
const relatedPages = [
    {
        id: 1,
        title: 'Related Page 1',
        image: 'https://placehold.co/480x320/e60012/white?text=Related+1',
        link: '#',
    },
    {
        id: 2,
        title: 'Related Page 2',
        image: 'https://placehold.co/480x320/1565c0/white?text=Related+2',
        link: '#',
    },
    {
        id: 3,
        title: 'Related Page 3',
        image: 'https://placehold.co/480x320/2e7d32/white?text=Related+3',
        link: '#',
    },
];

function prevSlide() {
    // TODO: Implement carousel logic
}

function nextSlide() {
    // TODO: Implement carousel logic
}
</script>

<style scoped>
.related-section {
    max-width: 1440px;
    margin: 0 auto;
    background: #f5f5f5;
    padding: 30px 0;
}

.related-title {
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 25px;
    color: black;
    margin: 0 30px 30px;
}

.carousel-container {
    position: relative;
    display: flex;
    align-items: center;
}

.carousel-btn {
    position: absolute;
    z-index: 10;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 10px;
    color: black;
}

.carousel-btn.prev {
    left: -40px;
}

.carousel-btn.next {
    right: -40px;
}

.carousel-track {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0;
    width: 100%;
    background: #989898;
}

.related-card {
    position: relative;
    height: 320px;
    overflow: hidden;
    display: block;
}

.related-card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s;
}

.related-card:hover img {
    transform: scale(1.05);
}

.learn-more {
    position: absolute;
    bottom: 40px;
    left: 50%;
    transform: translateX(-50%);
    background: white;
    color: black;
    padding: 12px 30px;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 19.2px;
    white-space: nowrap;
}

.carousel-dots {
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-top: 20px;
}

.dot {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 2px solid black;
    background: transparent;
    cursor: pointer;
    transition: background 0.3s;
}

.dot.active {
    background: black;
}
</style>
