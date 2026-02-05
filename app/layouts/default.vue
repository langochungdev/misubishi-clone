<template>
    <div class="layout-default">
        <Nav />
        <main class="main-content">
            <slot />
        </main>
        <Footer />
    </div>
</template>

<script setup lang="ts">
import Nav from './Nav.vue';
import Footer from './Footer.vue';
</script>

<style scoped>
.layout-default {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

.main-content {
    flex: 1;
}
</style>
