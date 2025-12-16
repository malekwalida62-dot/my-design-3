// script.js
document.addEventListener('DOMContentLoaded', function() {
    // التنقل المتنقل
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });

    // إغلاق القائمة عند النقر على رابط
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
        });
    });

    // التنقل السلس
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // تأثيرات الظهور عند التمرير
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);

    // مراقبة العناصر لإضافة تأثيرات الظهور
    const sections = document.querySelectorAll('section');
    const cards = document.querySelectorAll('.model-card, .spec-item, .gallery-item');
    
    sections.forEach(section => observer.observe(section));
    cards.forEach(card => observer.observe(card));

    // إدارة النماذج
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // محاكاة إرسال النموذج
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            // هنا يمكنك إضافة كود الإرسال الفعلي
            console.log('Form data:', data);
            
            // رسالة نجاح
            alert('شكراً لك! سنتواصل معك قريباً.');
            this.reset();
        });
    }

    // تأثيرات التمرير للشريط العلوي
    let lastScrollY = window.scrollY;
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(0, 0, 0, 0.98)';
            navbar.style.padding = '0.5rem 0';
        } else {
            navbar.style.background = 'rgba(0, 0, 0, 0.95)';
            navbar.style.padding = '1rem 0';
        }
        
        lastScrollY = window.scrollY;
    });

    // تحسين أداء الصور
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.loading = 'lazy';
    });

    // إضافة تأثيرات تفاعلية للأزرار
    const buttons = document.querySelectorAll('button, .btn-model');
    buttons.forEach(button => {
        button.addEventListener('mousedown', function() {
            this.style.transform = 'scale(0.95)';
        });
        
        button.addEventListener('mouseup', function() {
            this.style.transform = 'scale(1)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // تحديث السنة في الفوتر
    const yearElement = document.querySelector('footer p');
    if (yearElement) {
        const currentYear = new Date().getFullYear();
        yearElement.textContent = yearElement.textContent.replace('2024', currentYear);
    }
});

// وظائف إضافية
function initModelFilter() {
    // يمكن إضافة فلتر للموديلات هنا
    console.log('Model filter initialized');
}

function initImageZoom() {
    // يمكن إضافة تكبير الصور هنا
    console.log('Image zoom initialized');
}

// تهيئة الوظائف الإضافية
initModelFilter();
initImageZoom();
