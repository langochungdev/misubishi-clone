<template>
    <div>
        <NuxtRouteAnnouncer />
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
    </div>
</template>

<script setup lang="ts">
useSchemaOrg([
    defineWebSite({
        name: "Mitsubishi Electric Việt Nam",
        url: "https://misubishi-clone.langochung.me",
        description:
            "Giải pháp điều hòa không khí, thang máy, tự động hóa công nghiệp, thiết bị điện gia dụng hàng đầu Nhật Bản.",
        inLanguage: "vi",
    }),
    defineWebPage(),
]);
</script>
