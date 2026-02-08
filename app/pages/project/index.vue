// Trang hồ sơ dự án của Mitsubishi Electric Việt Nam

<template>
    <div class="project-wrapper">
        <ProjectBanner />
        <div class="project-container">
            <ProjectIntro />
            <ProjectList />
            <ProjectHighlight />
        </div>
        <RelatedPages />
    </div>
</template>

<script setup lang="ts">
import ProjectBanner from './(components)/ProjectBanner.vue';
import ProjectIntro from './(components)/ProjectIntro.vue';
import ProjectList from './(components)/ProjectList.vue';
import ProjectHighlight from './(components)/ProjectHighlight.vue';
import RelatedPages from '~/pages/home/(components)/RelatedPages.vue';

definePageMeta({
    layout: 'default',
});
</script>

<style scoped>
.project-wrapper {
    background: white;
    width: 100%;
    min-height: 100vh;
}

.project-container {
    max-width: 1440px;
    margin: 0 auto;
    padding: 0;
}
</style>
