<template>
    <header class="header-nav">
        <div class="header-container">
            <div class="logo-section">
                <a href="/" class="logo-link">
                    <img src="https://placehold.co/150x35/e60012/white?text=MELCO" alt="Mitsubishi Electric" class="logo" />
                </a>
                <div class="logo-text">
                    <span>MITSUBISHI</span>
                    <span>ELECTRIC</span>
                    <span>VIETNAM</span>
                </div>
            </div>

            <nav class="main-nav">
                <ul class="nav-list">
                    <li><a href="#">Thiết bị gia dụng</a></li>
                    <li><a href="#">Giải pháp Tòa nhà</a></li>
                    <li><a href="#">Tự động hóa Công nghiệp</a></li>
                    <li><a href="#">Sáng Kiến Bền Vững</a></li>
                    <li><a href="#">Giới thiệu</a></li>
                    <li><a href="#">Tuyển dụng</a></li>
                    <li><a href="#">Tin tức</a></li>
                </ul>
            </nav>

            <div class="header-actions">
                <button class="lang-btn">
                    <span>VI</span>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                        <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </button>
                <button class="user-btn">
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" stroke-width="2" />
                        <circle cx="12" cy="7" r="4" stroke="currentColor" stroke-width="2" />
                    </svg>
                </button>
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
    height: 35px;
    width: auto;
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
