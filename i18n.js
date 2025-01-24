const translations = {
    zh: {
        'nav.features': '功能',
        'nav.why-us': '为什么选择我们',
        'nav.download': '下载',
        'hero.title': '快速、安全的云端文件同步',
        'hero.description': '基于 Electron 打造的轻量级跨平台文件同步工具\n支持多云存储平台，让文件管理更轻松',
        'hero.cta': '立即下载',
        'features.title': '核心功能',
        'features.speed.title': '高速同步',
        'features.speed.desc': '采用多线程技术，支持断点续传，传输速度快如闪电',
        'features.security.title': '安全可靠',
        'features.security.desc': '端到端加密，确保您的数据安全',
        'features.platform.title': '多平台支持',
        'features.platform.desc': '支持主流云存储平台，一键同步所有数据',
        'why-us.title': '为什么选择 CloudSync？',
        'why-us.easy.title': '简单易用',
        'why-us.easy.desc': '界面直观，无需复杂设置，新手也能轻松上手',
        'why-us.performance.title': '性能强劲',
        'why-us.performance.desc': '优化的传输算法，让同步更快更稳定',
        'why-us.cross-platform.title': '跨平台支持',
        'why-us.cross-platform.desc': 'Windows、macOS、Linux 全平台支持',
        'download.title': '立即下载',
        'footer.rights': '保留所有权利',
        'footer.privacy': '隐私政策'
    },
    en: {
        'nav.features': 'Features',
        'nav.why-us': 'Why Us',
        'nav.download': 'Download',
        'hero.title': 'Fast & Secure Cloud Sync',
        'hero.description': 'Lightweight cross-platform file sync tool built with Electron\nSupporting multiple cloud storage platforms for easier file management',
        'hero.cta': 'Download Now',
        'features.title': 'Core Features',
        'features.speed.title': 'High-Speed Sync',
        'features.speed.desc': 'Multi-threaded technology with resume capability for lightning-fast transfers',
        'features.security.title': 'Secure & Reliable',
        'features.security.desc': 'End-to-end encryption ensuring your data safety',
        'features.platform.title': 'Multi-Platform Support',
        'features.platform.desc': 'Support for major cloud platforms with one-click sync',
        'why-us.title': 'Why Choose CloudSync?',
        'why-us.easy.title': 'Easy to Use',
        'why-us.easy.desc': 'Intuitive interface, no complex setup needed',
        'why-us.performance.title': 'Powerful Performance',
        'why-us.performance.desc': 'Optimized transfer algorithms for faster and stable sync',
        'why-us.cross-platform.title': 'Cross-Platform',
        'why-us.cross-platform.desc': 'Full support for Windows, macOS, and Linux',
        'download.title': 'Download Now',
        'footer.rights': 'All Rights Reserved',
        'footer.privacy': 'Privacy Policy'
    }
};

// 设置默认语言
let currentLang = localStorage.getItem('language') || 'zh';
document.documentElement.lang = currentLang;

// 切换语言函数
function switchLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;
    updateContent();
}

// 更新页面内容
function updateContent() {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[currentLang][key]) {
            if (element.tagName === 'INPUT' && element.type === 'placeholder') {
                element.placeholder = translations[currentLang][key];
            } else {
                element.textContent = translations[currentLang][key];
            }
        }
    });
}

// 页面加载时更新内容
document.addEventListener('DOMContentLoaded', updateContent); 