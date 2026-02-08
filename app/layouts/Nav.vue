<template>
    <header :class="['header-nav', { 'nav-hidden': !isVisible }]">
        <div class="header-container">
            <div class="logo-section">
                <a href="/" class="logo-link">
                    <img src="https://placehold.co/65x65/e60012/white?text=LOGO" alt="Mitsubishi Electric" class="logo" />
                </a>
            </div>

            <nav class="main-nav">
                <ul class="nav-list">
                    <li>
                        <NuxtLink to="/">Trang chủ</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/about">Giới thiệu</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/project">Dự án</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/service">Dịch vụ</NuxtLink>
                    </li>
                    <li><a href="#">Sản phẩm</a></li>
                    <li><a href="#">Bài viết</a></li>
                    <li>
                        <NuxtLink to="/contact">Liên hệ</NuxtLink>
                    </li>
                </ul>
            </nav>

            <div class="header-actions">
                <button class="search-btn">
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                        <circle cx="11" cy="11" r="8" stroke="currentColor" stroke-width="2" />
                        <path d="m21 21-4.35-4.35" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                    </svg>
                </button>
            </div>
        </div>
    </header>
</template>

<script setup lang="ts">
const isVisible = ref(true);
const lastScrollY = ref(0);

const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY.value && currentScrollY > 85) {
        isVisible.value = false;
    } else if (currentScrollY < lastScrollY.value) {
        isVisible.value = true;
    }

    lastScrollY.value = currentScrollY;
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.header-nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 85px;
    background: transparent;
    z-index: 1000;
    display: flex;
    justify-content: center;
    transform: translateY(0);
    transition: transform 0.3s ease-in-out;
}

.header-nav.nav-hidden {
    transform: translateY(-100%);
}

.header-container {
    max-width: 1440px;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 25px;
    background: white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.logo-section {
    display: flex;
    align-items: center;
    gap: 20px;
    padding-right: 20px;
    border-right: 1px solid #e1e1e1;
}

.logo {
    height: 65px;
    width: 65px;
}

.logo-text {
    display: flex;
    flex-direction: column;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 14px;
    line-height: 14px;
    color: black;
}

.main-nav {
    flex: 1;
    display: flex;
    justify-content: center;
}

.nav-list {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    gap: 30px;
}

.nav-list li a {
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 16px;
    color: black;
    text-decoration: none;
    transition: color 0.3s;
}

.nav-list li a:hover {
    color: #e60012;
}

.header-actions {
    display: flex;
    align-items: center;
    gap: 5px;
}

.lang-btn,
.user-btn,
.search-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 10px;
    color: black;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 18px;
}

.search-btn {
    border-left: 1px solid #e0e0e0;
    padding-left: 15px;
}
</style>
