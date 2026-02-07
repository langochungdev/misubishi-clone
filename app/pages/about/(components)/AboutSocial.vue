// Phần mạng xã hội Facebook và YouTube cho trang About

<template>
    <section class="about-social-wrapper">
        <div class="social-grid">
            <div class="facebook-column">
                <h2 class="social-title">FACEBOOK</h2>
                <div class="facebook-embed">
                    <div class="facebook-placeholder">
                        <p>Facebook Feed</p>
                    </div>
                </div>
            </div>

            <div class="youtube-column">
                <h2 class="social-title">YouTube</h2>

                <div class="videos-grid">
                    <div v-for="video in videos" :key="video.id" class="video-card">
                        <a :href="video.link" class="video-thumbnail">
                            <img :src="video.thumbnail" :alt="video.title" />
                            <div class="play-button">
                                <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                                    <circle cx="30" cy="30" r="28" fill="rgba(0,0,0,0.6)" stroke="white" stroke-width="2" />
                                    <path d="M24 18l18 12-18 12V18z" fill="white" />
                                </svg>
                            </div>
                        </a>
                        <h3 class="video-title">{{ video.title }}</h3>
                    </div>
                </div>

                <a href="https://www.youtube.com/@MitsubishiElectricVietnam" target="_blank" class="youtube-btn">
                    <span>Youtube</span>
                    <img src="https://www.youtube.com/favicon.ico" alt="YouTube" class="yt-icon" />
                </a>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const videos = [
    {
        id: 1,
        title: 'Mitsubishi Electric - Tiên phong trong Giải pháp tổng thể cho Tòa nhà',
        thumbnail: 'https://placehold.co/423x316/333/white?text=Video+1',
        link: '#',
    },
    {
        id: 2,
        title: 'Hội thảo về Giải pháp tổng thể cho Tòa nhà thông minh',
        thumbnail: 'https://placehold.co/423x316/555/white?text=Video+2',
        link: '#',
    },
    {
        id: 3,
        title: 'Điều hòa Chính xác làm mát hệ thống IT – IT cooling system',
        thumbnail: 'https://placehold.co/423x316/444/white?text=Video+3',
        link: '#',
    },
    {
        id: 4,
        title: 'Hệ thống Quản lý Tòa nhà - BMS',
        thumbnail: 'https://placehold.co/423x316/666/white?text=Video+4',
        link: '#',
    },
];
</script>

<style scoped>
.about-social-wrapper {
    margin: 0 10px;
}

.social-grid {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 0;
}

.facebook-column {
    background: #dcdbdb;
    padding: 50px 30px;
    min-height: 1200px;
}

.youtube-column {
    background: #f1f0f0;
    padding: 50px;
    position: relative;
}

.social-title {
    font-family: 'Roboto', sans-serif;
    font-weight: 900;
    font-size: 32px;
    color: black;
    margin: 0 0 30px 0;
}

.facebook-embed {
    width: 100%;
}

.facebook-placeholder {
    background: white;
    border: 1px solid #ddd;
    height: 1000px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Roboto', sans-serif;
    color: #999;
    font-size: 18px;
}

.videos-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 25px;
}

.video-card {
    display: flex;
    flex-direction: column;
}

.video-thumbnail {
    position: relative;
    display: block;
    overflow: hidden;
    border-radius: 0;
}

.video-thumbnail img {
    width: 100%;
    height: 316px;
    object-fit: cover;
    display: block;
}

.play-button {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0.9;
    transition: opacity 0.3s;
}

.video-thumbnail:hover .play-button {
    opacity: 1;
}

.video-title {
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 18px;
    line-height: 25.2px;
    color: black;
    margin: 10px 0 0;
    padding: 0 20px;
}

.youtube-btn {
    position: absolute;
    bottom: 45px;
    right: 45px;
    display: inline-flex;
    align-items: center;
    gap: 10px;
    border: 3px solid black;
    background: none;
    padding: 10px 23px;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 18px;
    color: black;
    text-decoration: none;
    cursor: pointer;
    transition: all 0.3s;
}

.youtube-btn:hover {
    background: black;
    color: white;
}

.yt-icon {
    width: 35px;
    height: 29px;
    object-fit: contain;
}
</style>
