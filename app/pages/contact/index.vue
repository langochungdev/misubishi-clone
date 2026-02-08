// Trang liên hệ của Mitsubishi Electric Việt Nam

<template>
    <div class="contact-wrapper">
        <ContactBanner />
        <div class="contact-container">
            <ContactInfo />
            <ContactForm />
            <ContactMap />
        </div>
        <RelatedPages />
    </div>
</template>

<script setup lang="ts">
import ContactBanner from './(components)/ContactBanner.vue';
import ContactInfo from './(components)/ContactInfo.vue';
import ContactForm from './(components)/ContactForm.vue';
import ContactMap from './(components)/ContactMap.vue';
import RelatedPages from '~/pages/home/(components)/RelatedPages.vue';

definePageMeta({
    layout: 'default',
});
</script>

<style scoped>
.contact-wrapper {
    background: white;
    width: 100%;
    min-height: 100vh;
}

.contact-container {
    max-width: 1440px;
    margin: 0 auto;
    padding: 0;
}
</style>
