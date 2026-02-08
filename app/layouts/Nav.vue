<template>
    <header :class="['header-nav', { 'nav-hidden': !isVisible }]">
        <div class="header-container">
            <div class="logo-section">
                <NuxtLink to="/" class="logo-link">
                    <img src="https://placehold.co/65x65/e60012/white?text=LOGO" alt="Mitsubishi Electric" class="logo" width="65" height="65" />
                </NuxtLink>
            </div>

            <nav class="main-nav" :class="{ 'nav-open': isMobileMenuOpen }">
                <ul class="nav-list">
                    <li>
                        <NuxtLink to="/" @click="closeMobileMenu">Trang chủ</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/about" @click="closeMobileMenu">Giới thiệu</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/project" @click="closeMobileMenu">Dự án</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/service" @click="closeMobileMenu">Dịch vụ</NuxtLink>
                    </li>
                    <li><a href="#" @click="closeMobileMenu">Sản phẩm</a></li>
                    <li><a href="#" @click="closeMobileMenu">Bài viết</a></li>
                    <li>
                        <NuxtLink to="/contact" @click="closeMobileMenu">Liên hệ</NuxtLink>
                    </li>
                </ul>
            </nav>

            <div class="header-actions">
                <button class="search-btn" aria-label="Tìm kiếm">
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <circle cx="11" cy="11" r="8" stroke="currentColor" stroke-width="2" />
                        <path d="m21 21-4.35-4.35" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                    </svg>
                </button>
                <button class="hamburger-btn" :class="{ active: isMobileMenuOpen }" aria-label="Mở menu" @click="toggleMobileMenu">
                    <span class="hamburger-line"></span>
                    <span class="hamburger-line"></span>
                    <span class="hamburger-line"></span>
                </button>
            </div>
        </div>

        <div v-if="isMobileMenuOpen" class="mobile-overlay" @click="closeMobileMenu"></div>
    </header>
</template>

<script setup lang="ts">
const isVisible = ref(true);
const lastScrollY = ref(0);
const isMobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
    isMobileMenuOpen.value = !isMobileMenuOpen.value;
    document.body.style.overflow = isMobileMenuOpen.value ? 'hidden' : '';
};

const closeMobileMenu = () => {
    isMobileMenuOpen.value = false;
    document.body.style.overflow = '';
};

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
    document.body.style.overflow = '';
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

.nav-list li a:focus-visible {
    outline: 2px solid #e60012;
    outline-offset: 4px;
}

.header-actions {
    display: flex;
    align-items: center;
    gap: 5px;
}

.search-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    background: none;
    border: none;
    cursor: pointer;
    padding: 10px;
    color: black;
    border-left: 1px solid #e0e0e0;
    padding-left: 15px;
    touch-action: manipulation;
}

.search-btn:focus-visible {
    outline: 2px solid #e60012;
    outline-offset: 2px;
}

.hamburger-btn {
    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
    width: 44px;
    height: 44px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 8px;
    touch-action: manipulation;
}

.hamburger-btn:focus-visible {
    outline: 2px solid #e60012;
    outline-offset: 2px;
}

.hamburger-line {
    display: block;
    width: 24px;
    height: 2px;
    background: black;
    transition: transform 0.3s, opacity 0.3s;
}

.hamburger-btn.active .hamburger-line:nth-child(1) {
    transform: translateY(7px) rotate(45deg);
}

.hamburger-btn.active .hamburger-line:nth-child(2) {
    opacity: 0;
}

.hamburger-btn.active .hamburger-line:nth-child(3) {
    transform: translateY(-7px) rotate(-45deg);
}

.mobile-overlay {
    display: none;
}

@media (max-width: 768px) {
    .header-nav {
        height: 60px;
    }

    .header-container {
        padding: 0 16px;
    }

    .logo {
        height: 40px;
        width: 40px;
    }

    .logo-section {
        padding-right: 12px;
        gap: 10px;
    }

    .hamburger-btn {
        display: flex;
    }

    .main-nav {
        position: fixed;
        top: 60px;
        right: 0;
        width: 280px;
        height: calc(100dvh - 60px);
        background: white;
        flex-direction: column;
        justify-content: flex-start;
        box-shadow: -4px 0 12px rgba(0, 0, 0, 0.15);
        transform: translateX(100%);
        transition: transform 0.3s ease-in-out;
        z-index: 999;
        overflow-y: auto;
        overscroll-behavior: contain;
    }

    .main-nav.nav-open {
        transform: translateX(0);
    }

    .nav-list {
        flex-direction: column;
        gap: 0;
        padding: 8px 0;
        width: 100%;
    }

    .nav-list li {
        border-bottom: 1px solid #f0f0f0;
    }

    .nav-list li a {
        display: block;
        padding: 16px 24px;
        font-size: 16px;
        min-height: 48px;
        display: flex;
        align-items: center;
    }

    .nav-list li a:hover,
    .nav-list li a.router-link-active {
        background: #fafafa;
        color: #e60012;
    }

    .mobile-overlay {
        display: block;
        position: fixed;
        top: 60px;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.4);
        z-index: 998;
    }

    .search-btn {
        border-left: none;
        padding-left: 10px;
    }

    .search-btn svg {
        width: 22px;
        height: 22px;
    }
}
</style>
