// Cấu hình Nuxt cho dự án Mitsubishi Electric Việt Nam

export default defineNuxtConfig({
    compatibilityDate: "2025-07-15",
    devtools: { enabled: true },
    css: ["~/assets/css/main.css"],

    modules: ["@nuxtjs/seo"],

    site: {
        url: "https://misubishi-clone.langochung.me",
        name: "Mitsubishi Electric Việt Nam",
        description: "Mitsubishi Electric Việt Nam - Giải pháp điều hòa không khí, thang máy, tự động hóa công nghiệp, thiết bị điện gia dụng hàng đầu Nhật Bản.",
        defaultLocale: "vi",
    },

    app: {
        head: {
            htmlAttrs: { lang: "vi" },
            charset: "utf-8",
            viewport: "width=device-width, initial-scale=1",
            title: "Mitsubishi Electric Việt Nam | Changes for the Better",
            meta: [
                {
                    name: "description",
                    content: "Mitsubishi Electric Việt Nam - Giải pháp điều hòa không khí, thang máy, tự động hóa công nghiệp, thiết bị điện gia dụng hàng đầu Nhật Bản.",
                },
                { name: "author", content: "Mitsubishi Electric Vietnam" },
                {
                    name: "keywords",
                    content: "Mitsubishi Electric, điều hòa, thang máy, tự động hóa, thiết bị điện, Việt Nam",
                },
                { name: "theme-color", content: "#000000" },
                { name: "robots", content: "index, follow" },

                { property: "og:type", content: "website" },
                {
                    property: "og:title",
                    content: "Mitsubishi Electric Việt Nam | Changes for the Better",
                },
                {
                    property: "og:description",
                    content: "Giải pháp điều hòa không khí, thang máy, tự động hóa công nghiệp, thiết bị điện gia dụng hàng đầu Nhật Bản.",
                },
                {
                    property: "og:url",
                    content: "https://misubishi-clone.langochung.me",
                },
                {
                    property: "og:image",
                    content: "https://misubishi-clone.langochung.me/img/og-image.jpg",
                },
                { property: "og:image:width", content: "1200" },
                { property: "og:image:height", content: "630" },
                { property: "og:locale", content: "vi_VN" },
                {
                    property: "og:site_name",
                    content: "Mitsubishi Electric Việt Nam",
                },

                { name: "twitter:card", content: "summary_large_image" },
                {
                    name: "twitter:title",
                    content: "Mitsubishi Electric Việt Nam | Changes for the Better",
                },
                {
                    name: "twitter:description",
                    content: "Giải pháp điều hòa không khí, thang máy, tự động hóa công nghiệp hàng đầu Nhật Bản.",
                },
                {
                    name: "twitter:image",
                    content: "https://misubishi-clone.langochung.me/img/og-image.jpg",
                },
            ],
            link: [
                { rel: "icon", type: "image/x-icon", href: "/img/favicon.ico" },
                {
                    rel: "icon",
                    type: "image/png",
                    sizes: "32x32",
                    href: "/img/favicon-32x32.png",
                },
                {
                    rel: "icon",
                    type: "image/png",
                    sizes: "16x16",
                    href: "/img/favicon-16x16.png",
                },
                {
                    rel: "apple-touch-icon",
                    sizes: "180x180",
                    href: "/img/apple-touch-icon.png",
                },
                { rel: "manifest", href: "/manifest.webmanifest" },
                { rel: "canonical", href: "https://misubishi-clone.langochung.me" },
                {
                    rel: "preconnect",
                    href: "https://fonts.googleapis.com",
                },
                {
                    rel: "preconnect",
                    href: "https://fonts.gstatic.com",
                    crossorigin: "",
                },
                {
                    rel: "stylesheet",
                    href: "https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap",
                },
            ],
        },
    },

    schemaOrg: {
        identity: {
            type: "Organization",
            name: "Mitsubishi Electric Vietnam Co., Ltd.",
            url: "https://misubishi-clone.langochung.me",
            logo: "https://misubishi-clone.langochung.me/img/logo.png",
            description: "Mitsubishi Electric Việt Nam - Giải pháp điều hòa không khí, thang máy, tự động hóa công nghiệp, thiết bị điện gia dụng hàng đầu Nhật Bản.",
            address: {
                "@type": "PostalAddress",
                streetAddress: "Tầng 11&12, Tháp B, Tòa nhà Viettel, 285 Cách Mạng Tháng 8",
                addressLocality: "Quận 10",
                addressRegion: "TP. Hồ Chí Minh",
                addressCountry: "VN",
            },
            contactPoint: {
                "@type": "ContactPoint",
                telephone: "+84-1800-585-833",
                contactType: "customer service",
                availableLanguage: ["Vietnamese", "English"],
            },
            sameAs: ["https://facebook.com/MitsubishiElectricVietnam", "https://youtube.com/@MitsubishiElectricVietnam", "https://linkedin.com/company/mitsubishi-electric-vietnam"],
        },
    },

    sitemap: {
        exclude: ["/admin/**", "/api/**"],
    },

    robots: {
        groups: [
            {
                userAgent: ["*"],
                allow: ["/"],
                disallow: ["/admin", "/api"],
            },
            {
                userAgent: ["GPTBot"],
                allow: ["/"],
            },
            {
                userAgent: ["Google-Extended"],
                allow: ["/"],
            },
            {
                userAgent: ["ClaudeBot", "Claude-Web"],
                allow: ["/"],
            },
            {
                userAgent: ["anthropic-ai"],
                allow: ["/"],
            },
            {
                userAgent: ["CCBot"],
                allow: ["/"],
            },
            {
                userAgent: ["PerplexityBot"],
                allow: ["/"],
            },
            {
                userAgent: ["Bytespider"],
                allow: ["/"],
            },
        ],
        sitemap: ["https://misubishi-clone.langochung.me/sitemap.xml"],
    },
});
