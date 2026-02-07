// Trang giới thiệu về công ty Mitsubishi Electric Việt Nam

<template>
    <div class="about-wrapper">
        <HeroBanner />
        <div class="about-container">
            <IntroText />
            <VietnamSection />
            <GlobalSection />
            <AboutSocial />
        </div>
        <RelatedPages />
    </div>
</template>

<script setup lang="ts">
import HeroBanner from './(components)/HeroBanner.vue';
import IntroText from './(components)/IntroText.vue';
import VietnamSection from './(components)/VietnamSection.vue';
import GlobalSection from './(components)/GlobalSection.vue';
import AboutSocial from './(components)/AboutSocial.vue';
import RelatedPages from '~/pages/home/(components)/RelatedPages.vue';

definePageMeta({
    layout: 'default',
});
</script>

<style scoped>
.about-wrapper {
    background: white;
    width: 100%;
    min-height: 100vh;
}

.about-container {
    max-width: 1440px;
    margin: 0 auto;
    padding: 0;
}
</style>
