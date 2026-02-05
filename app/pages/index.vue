<template>
    <div class="home-page">
        <HeroSlider />
        <IntroSection />
        <NewsSection />
        <SocialSection />
        <RelatedPages />
    </div>
</template>

<script setup lang="ts">
import HeroSlider from './home/components/HeroSlider.vue';
import IntroSection from './home/components/IntroSection.vue';
import NewsSection from './home/components/NewsSection.vue';
import SocialSection from './home/components/SocialSection.vue';
import RelatedPages from './home/components/RelatedPages.vue';

definePageMeta({
    layout: 'default'
});
</script>

<style scoped>
.home-page {
    background: white;
    width: 100%;
    min-height: 100vh;
}
</style>
