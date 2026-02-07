// Trang dịch vụ của công ty Mitsubishi Electric Việt Nam

<template>
    <div class="service-wrapper">
        <ServiceBanner />
        <div class="service-container">
            <ServiceList />
            <ServiceFeatures />
            <ServiceCTA />
        </div>
        <RelatedPages />
    </div>
</template>

<script setup lang="ts">
import ServiceBanner from './(components)/ServiceBanner.vue';
import ServiceList from './(components)/ServiceList.vue';
import ServiceFeatures from './(components)/ServiceFeatures.vue';
import ServiceCTA from './(components)/ServiceCTA.vue';
import RelatedPages from '~/pages/home/(components)/RelatedPages.vue';

definePageMeta({
    layout: 'default',
});
</script>

<style scoped>
.service-wrapper {
    background: white;
    width: 100%;
    min-height: 100vh;
}

.service-container {
    max-width: 1440px;
    margin: 0 auto;
    padding: 0;
}
</style>
