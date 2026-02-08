<template>
    <section class="social-section">
        <div class="social-grid">
            <div class="facebook-column">
                <h2>FACEBOOK</h2>
                <div class="facebook-embed">
                    <!-- Facebook Page Plugin placeholder -->
                    <div class="facebook-placeholder">
                        <p>Facebook Feed</p>
                    </div>
                </div>
            </div>

            <div class="youtube-column">
                <h2>YouTube</h2>

                <div class="videos-grid">
                    <div v-for="video in videos" :key="video.id" class="video-card">
                        <a :href="video.link" class="video-thumbnail">
                            <img :src="video.thumbnail" :alt="video.title" width="440" height="323" loading="lazy" />
                            <div class="play-button" aria-hidden="true">
                                <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                                    <circle cx="30" cy="30" r="28" fill="rgba(0,0,0,0.6)" stroke="white" stroke-width="2" />
                                    <path d="M24 18l18 12-18 12V18z" fill="white" />
                                </svg>
                            </div>
                        </a>
                        <h3 class="video-title">{{ video.title }}</h3>
                    </div>
                </div>

                <a href="https://www.youtube.com/@MitsubishiElectricVietnam" target="_blank" rel="noopener noreferrer" class="youtube-btn">
                    Youtube
                    <img src="https://www.youtube.com/favicon.ico" alt="YouTube" />
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
        thumbnail: 'https://placehold.co/440x323/333/white?text=Video+1',
        link: '#',
    },
    {
        id: 2,
        title: 'Hội thảo về Giải pháp tổng thể cho Tòa nhà thông minh',
        thumbnail: 'https://placehold.co/440x323/444/white?text=Video+2',
        link: '#',
    },
    {
        id: 3,
        title: 'Điều hòa Chính xác làm mát hệ thống IT – IT cooling system',
        thumbnail: 'https://placehold.co/440x323/555/white?text=Video+3',
        link: '#',
    },
    {
        id: 4,
        title: 'Hệ thống Quản lý Tòa nhà - BMS',
        thumbnail: 'https://placehold.co/440x323/666/white?text=Video+4',
        link: '#',
    },
];
</script>

<style scoped>
.social-section {
    max-width: 1440px;
    margin: 0 auto;
}

.social-grid {
    display: grid;
    grid-template-columns: 480px 1fr;
    /* min-height: 1218px; */
}

.facebook-column {
    background: #dcdbdb;
    padding: 50px 30px;
}

.facebook-column h2 {
    font-family: 'Roboto', sans-serif;
    font-weight: 900;
    font-size: 36px;
    color: black;
    margin-bottom: 30px;
}

.facebook-placeholder {
    background: white;
    height: 1000px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #999;
}

.youtube-column {
    background: #f1f0f0;
    padding: 50px;
    position: relative;
}

.youtube-column h2 {
    font-family: 'Roboto', sans-serif;
    font-weight: 900;
    font-size: 36px;
    color: black;
    margin-bottom: 30px;
}

.videos-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
}

.video-card {
    margin-bottom: 20px;
}

.video-thumbnail {
    display: block;
    position: relative;
    height: 323px;
    overflow: hidden;
    background: #333;
    touch-action: manipulation;
}

.video-thumbnail img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.play-button {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: transform 0.3s ease;
}

.video-thumbnail:hover .play-button {
    transform: translate(-50%, -50%) scale(1.1);
}

.video-thumbnail:focus-visible {
    outline: 2px solid #e60012;
    outline-offset: 2px;
}

.video-title {
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 18px;
    line-height: 1.4;
    color: black;
    margin-top: 15px;
    padding: 0 20px;
}

.youtube-btn {
    position: absolute;
    bottom: 50px;
    right: 50px;
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 11px 23px;
    border: 3px solid black;
    background: transparent;
    color: black;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 18px;
    text-decoration: none;
    transition: background 0.3s ease, color 0.3s ease;
    touch-action: manipulation;
}

.youtube-btn img {
    width: 35px;
    height: 29px;
}

.youtube-btn:hover {
    background: black;
    color: white;
}

.youtube-btn:focus-visible {
    outline: 2px solid #e60012;
    outline-offset: 2px;
}

@media (max-width: 768px) {
    .social-grid {
        grid-template-columns: 1fr;
        min-height: auto;
    }

    .facebook-column {
        padding: 30px 16px;
    }

    .facebook-column h2 {
        font-size: 24px;
        margin-bottom: 20px;
    }

    .facebook-placeholder {
        height: 400px;
    }

    .youtube-column {
        padding: 30px 16px;
        position: static;
    }

    .youtube-column h2 {
        font-size: 24px;
        margin-bottom: 20px;
    }

    .videos-grid {
        grid-template-columns: 1fr;
        gap: 16px;
    }

    .video-thumbnail {
        height: auto;
        aspect-ratio: 16 / 9;
    }

    .play-button svg {
        width: 48px;
        height: 48px;
    }

    .video-card {
        margin-bottom: 10px;
    }

    .video-title {
        font-size: 15px;
        padding: 0;
    }

    .youtube-btn {
        position: static;
        margin-top: 24px;
        display: inline-flex;
        font-size: 16px;
        width: 100%;
        justify-content: center;
    }
}

@media (prefers-reduced-motion: reduce) {

    .play-button,
    .youtube-btn {
        transition: none;
    }
}
</style>
