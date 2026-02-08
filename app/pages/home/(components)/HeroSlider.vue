<template>
    <section class="hero-slider">
        <div class="hero-slide">
            <img src="https://placehold.co/1920x704/333/white?text=Hero+Banner" alt="Mitsubishi Electric" width="1920" height="704" fetchpriority="high" class="hero-image" />
            <div class="hero-content">
                <h1 class="hero-title">Better begins here.</h1>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
.hero-slider {
    width: 100%;
    height: 704px;
    position: relative;
    overflow: hidden;
}

.hero-slide {
    position: relative;
    width: 100%;
    height: 100%;
}

.hero-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.hero-content {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    padding-left: 309px;
}

.hero-title {
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 41.6px;
    color: white;
    text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
    text-wrap: balance;
}

@media (max-width: 768px) {
    .hero-slider {
        height: 50vw;
        min-height: 220px;
        max-height: 360px;
    }

    .hero-content {
        padding: 0 20px;
        align-items: flex-end;
        padding-bottom: 24px;
    }

    .hero-title {
        font-size: clamp(20px, 5.5vw, 28px);
    }
}
</style>
