// Bản đồ Google Maps nhúng vị trí văn phòng

<template>
    <section class="contact-map-wrapper">
        <div class="map-container">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.5177!2d106.6685!3d10.7741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDQ2JzI3LjAiTiAxMDbCsDQwJzA2LjYiRQ!5e0!3m2!1svi!2svn!4v1700000000000" width="100%" height="100%" style="border: 0" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Vị trí Mitsubishi Electric Việt Nam"></iframe>
        </div>
    </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
.contact-map-wrapper {
    margin: 0 10px;
}

.map-container {
    width: 100%;
    height: 450px;
    background: #e0e0e0;
}

.map-container iframe {
    display: block;
}

@media (max-width: 768px) {
    .contact-map-wrapper {
        margin: 0;
    }

    .map-container {
        height: 320px;
    }
}
</style>
