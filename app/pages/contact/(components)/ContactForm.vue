// Form liên hệ gửi yêu cầu

<template>
    <section class="contact-form-wrapper">
        <div class="form-grid">
            <div class="form-content">
                <h2 class="form-title">Gửi yêu cầu cho<br />chúng tôi</h2>
                <p class="form-description">
                    Vui lòng điền đầy đủ thông tin bên dưới, đội ngũ chúng tôi sẽ phản hồi trong thời gian sớm nhất.
                </p>

                <form class="contact-form" @submit.prevent="handleSubmit">
                    <div class="form-row">
                        <div class="form-group">
                            <label for="fullName">Họ và tên *</label>
                            <input id="fullName" v-model="form.fullName" type="text" autocomplete="name" required />
                        </div>
                        <div class="form-group">
                            <label for="company">Công ty</label>
                            <input id="company" v-model="form.company" type="text" autocomplete="organization" />
                        </div>
                    </div>

                    <div class="form-row">
                        <div class="form-group">
                            <label for="email">Email *</label>
                            <input id="email" v-model="form.email" type="email" autocomplete="email" required />
                        </div>
                        <div class="form-group">
                            <label for="phone">Số điện thoại *</label>
                            <input id="phone" v-model="form.phone" type="tel" autocomplete="tel" required />
                        </div>
                    </div>

                    <div class="form-group full-width">
                        <label for="subject">Chủ đề</label>
                        <select id="subject" v-model="form.subject">
                            <option value="">Chọn chủ đề</option>
                            <option value="tuvan">Tư vấn giải pháp</option>
                            <option value="baotri">Bảo trì & Bảo dưỡng</option>
                            <option value="sanpham">Thông tin sản phẩm</option>
                            <option value="duan">Hợp tác dự án</option>
                            <option value="khac">Khác</option>
                        </select>
                    </div>

                    <div class="form-group full-width">
                        <label for="message">Nội dung *</label>
                        <textarea id="message" v-model="form.message" rows="5" required></textarea>
                    </div>

                    <button type="submit" class="submit-btn">
                        <span>Gửi yêu cầu</span>
                        <svg width="28" height="19" viewBox="0 0 28 19" fill="none">
                            <path d="M18 1l9 8.5-9 8.5M0 9.5h27" stroke="currentColor" stroke-width="2" />
                        </svg>
                    </button>
                </form>
            </div>

            <div class="form-image">
                <img src="https://placehold.co/710x700/0d47a1/white?text=Liên+hệ" alt="Liên hệ Mitsubishi Electric" width="710" height="700" loading="lazy" />
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const form = reactive({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
});

function handleSubmit() {
}
</script>

<style scoped>
.contact-form-wrapper {
    margin: 0 10px;
}

.form-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
}

.form-content {
    background: #ebebeb;
    padding: 45px 34px;
}

.form-title {
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 40px;
    line-height: 1.15;
    color: black;
    margin: 0 0 20px 0;
}

.form-description {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 25.2px;
    color: black;
    margin: 0 0 30px 0;
}

.contact-form {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
}

.form-group {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.form-group.full-width {
    grid-column: 1 / -1;
}

.form-group label {
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 14px;
    color: #333;
}

.form-group input,
.form-group select,
.form-group textarea {
    padding: 12px 16px;
    border: 2px solid #ccc;
    background: white;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    color: black;
    outline: none;
    transition: border-color 0.3s;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
    border-color: #e60012;
}

.form-group textarea {
    resize: vertical;
}

.submit-btn {
    display: inline-flex;
    align-items: center;
    gap: 15px;
    border: 3px solid #e60012;
    background: #e60012;
    padding: 12px 24px;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 18px;
    color: white;
    cursor: pointer;
    align-self: flex-start;
    transition: background-color 0.3s, border-color 0.3s;
}

.submit-btn:focus-visible {
    outline: 2px solid #e60012;
    outline-offset: 2px;
}

.submit-btn:hover {
    background: #c50010;
    border-color: #c50010;
}

.form-image {
    overflow: hidden;
}

.form-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.3s;
}

.form-image:hover img {
    transform: scale(1.03);
}

@media (max-width: 768px) {
    .form-grid {
        grid-template-columns: 1fr;
    }

    .form-title {
        font-size: clamp(28px, 5vw, 40px);
        text-wrap: balance;
    }

    .form-title br {
        display: none;
    }

    .form-content {
        padding: 30px 20px;
    }

    .form-row {
        grid-template-columns: 1fr;
    }

    .form-image {
        height: 300px;
    }

    .submit-btn {
        min-height: 44px;
        touch-action: manipulation;
        width: 100%;
        justify-content: center;
    }

    .form-group input,
    .form-group select,
    .form-group textarea {
        font-size: 16px;
        min-height: 44px;
    }
}

@media (prefers-reduced-motion: reduce) {

    .submit-btn,
    .form-group input,
    .form-group select,
    .form-group textarea,
    .form-image img {
        transition: none;
    }
}
</style>
