// Banner hero cho trang dịch vụ

<template>
    <section class="service-banner-wrapper">
        <div class="service-banner">
            <img src="https://placehold.co/1920x445/1a237e/white?text=Services" alt="Dịch vụ" class="banner-image" />
            <h1 class="banner-title">DỊCH VỤ</h1>
        </div>
    </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
.service-banner-wrapper {
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
}
</style>
