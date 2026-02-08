// Banner hero cho trang giới thiệu

<template>
    <section class="hero-banner-wrapper">
        <div class="hero-banner">
            <img src="https://placehold.co/1920x445/333333/white?text=About+Banner" alt="Giới thiệu" width="1920" height="445" fetchpriority="high" class="banner-image" />
            <h1 class="banner-title">GIỚI THIỆU</h1>
        </div>
    </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
.hero-banner-wrapper {
    position: relative;
    width: 100%;
    height: 445px;
    overflow: hidden;
}

.banner-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.banner-title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 72px;
    color: white;
    text-shadow: -4px 5px 14px black;
    margin: 0;
    text-align: center;
    text-wrap: balance;
}

@media (max-width: 768px) {
    .hero-banner-wrapper {
        height: auto;
        aspect-ratio: 16 / 7;
        min-height: 200px;
        padding-top: 56px;
    }

    .banner-title {
        font-size: clamp(28px, 8vw, 48px);
    }
}
</style>
