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
                <NuxtLink to="/contact" class="quote-btn" aria-label="Yêu cầu báo giá">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" stroke-width="2" />
                        <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                    </svg>
                    <span>Báo giá</span>
                </NuxtLink>
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
    height: 72px;
    background: transparent;
    z-index: 1000;
    display: flex;
    justify-content: center;
    transform: translateY(0);
    transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
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
    padding: 0 40px;
    background: rgba(255, 255, 255, 0.97);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.06), 0 4px 16px rgba(0, 0, 0, 0.04);
}

.logo-section {
    display: flex;
    align-items: center;
    padding-right: 32px;
    border-right: 1px solid rgba(0, 0, 0, 0.08);
}

.logo-link {
    display: flex;
    align-items: center;
    transition: opacity 0.2s;
}

.logo-link:hover {
    opacity: 0.8;
}

.logo-link:focus-visible {
    outline: 2px solid #e60012;
    outline-offset: 4px;
    border-radius: 2px;
}

.logo {
    height: 48px;
    width: 48px;
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
    gap: 8px;
}

.nav-list li a {
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 14.5px;
    letter-spacing: 0.01em;
    color: #000;
    text-decoration: none;
    padding: 8px 14px;
    border-radius: 6px;
    transition: color 0.2s, background-color 0.2s;
    position: relative;
}

.nav-list li a::after {
    content: '';
    position: absolute;
    bottom: 2px;
    left: 14px;
    right: 14px;
    height: 2px;
    background: #e60012;
    border-radius: 1px;
    transform: scaleX(0);
    transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
}

.nav-list li a:hover {
    color: #e60012;
    background: rgba(230, 0, 18, 0.04);
}

.nav-list li a:hover::after {
    transform: scaleX(1);
}

.nav-list li a.router-link-exact-active {
    color: #e60012;
}

.nav-list li a.router-link-exact-active::after {
    transform: scaleX(1);
}

.nav-list li a:focus-visible {
    outline: 2px solid #e60012;
    outline-offset: 2px;
}

.header-actions {
    display: flex;
    align-items: center;
    gap: 4px;
    padding-left: 32px;
    border-left: 1px solid rgba(0, 0, 0, 0.08);
}

.quote-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    padding: 9px 16px;
    background: #e60012;
    color: white;
    text-decoration: none;
    border-radius: 8px;
    font-family: 'Roboto', sans-serif;
    font-weight: 600;
    font-size: 14px;
    cursor: pointer;
    transition: background-color 0.2s, transform 0.1s;
    touch-action: manipulation;
    box-shadow: 0 2px 8px rgba(230, 0, 18, 0.2);
}

.quote-btn svg {
    flex-shrink: 0;
}

.quote-btn:hover {
    background: #c50010;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(230, 0, 18, 0.3);
}

.quote-btn:active {
    transform: translateY(0);
}

.quote-btn:focus-visible {
    outline: 2px solid #e60012;
    outline-offset: 3px;
}

.hamburger-btn {
    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
    width: 40px;
    height: 40px;
    background: none;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    padding: 8px;
    touch-action: manipulation;
    transition: background-color 0.2s;
}

.hamburger-btn:hover {
    background: rgba(0, 0, 0, 0.04);
}

.hamburger-btn:focus-visible {
    outline: 2px solid #e60012;
    outline-offset: 2px;
}

.hamburger-line {
    display: block;
    width: 20px;
    height: 2px;
    background: #333;
    border-radius: 1px;
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.2s;
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
        height: 56px;
    }

    .header-container {
        padding: 0 16px;
    }

    .logo {
        height: 36px;
        width: 36px;
    }

    .logo-section {
        padding-right: 0;
        border-right: none;
    }

    .header-actions {
        padding-left: 0;
        border-left: none;
        gap: 2px;
    }

    .hamburger-btn {
        display: flex;
    }

    .main-nav {
        position: fixed;
        top: 56px;
        right: 0;
        width: 300px;
        height: calc(100dvh - 56px);
        background: rgba(255, 255, 255, 0.98);
        backdrop-filter: blur(16px);
        -webkit-backdrop-filter: blur(16px);
        flex-direction: column;
        justify-content: flex-start;
        box-shadow: -8px 0 24px rgba(0, 0, 0, 0.08);
        transform: translateX(100%);
        transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
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
        padding: 12px 0;
        width: 100%;
    }

    .nav-list li {
        border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    }

    .nav-list li:last-child {
        border-bottom: none;
    }

    .nav-list li a {
        display: flex;
        align-items: center;
        padding: 14px 24px;
        font-size: 15px;
        min-height: 48px;
        border-radius: 0;
        color: #333;
    }

    .nav-list li a::after {
        display: none;
    }

    .nav-list li a:hover,
    .nav-list li a.router-link-exact-active {
        background: rgba(230, 0, 18, 0.04);
        color: #e60012;
    }

    .mobile-overlay {
        display: block;
        position: fixed;
        top: 56px;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.3);
        z-index: 998;
        backdrop-filter: blur(2px);
        -webkit-backdrop-filter: blur(2px);
    }

    .quote-btn {
        padding: 7px 12px;
        font-size: 13px;
        gap: 4px;
    }

    .quote-btn svg {
        width: 16px;
        height: 16px;
    }
}
</style>
