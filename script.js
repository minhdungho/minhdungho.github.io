// ================================
// HAMBURGER MENU TOGGLE
// ================================
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobileNav');

hamburger.addEventListener('click', function() {
    this.classList.toggle('active');
    mobileNav.classList.toggle('active');
});

// Close mobile menu when clicking on a link
const mobileLinks = mobileNav.querySelectorAll('a');
mobileLinks.forEach(link => {
    link.addEventListener('click', function() {
        hamburger.classList.remove('active');
        mobileNav.classList.remove('active');
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
    const isClickInsideNav = mobileNav.contains(event.target);
    const isClickOnHamburger = hamburger.contains(event.target);
    
    if (!isClickInsideNav && !isClickOnHamburger && mobileNav.classList.contains('active')) {
        hamburger.classList.remove('active');
        mobileNav.classList.remove('active');
    }
});

// ================================
// SMOOTH SCROLL TO HOME
// ================================
document.querySelectorAll('a[href="#home"]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

// ================================
// LANGUAGE TRANSLATION
// ================================
const langSwitch = document.getElementById('langSwitch');
const langEN = document.getElementById('langEN');
const langVI = document.getElementById('langVI');

let currentLang = 'en';

// Store original English text from HTML
const originalContent = {};

// Function to save original content
function saveOriginalContent() {
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (!originalContent[key]) {
            originalContent[key] = element.textContent;
        }
    });
}

// Function to change language
function changeLanguage(lang) {
    currentLang = lang;
    
    // Update active state
    if (lang === 'en') {
        langEN.classList.add('active');
        langVI.classList.remove('active');
    } else {
        langVI.classList.add('active');
        langEN.classList.remove('active');
    }
    
    // Update all elements with data-translate attribute
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        
        if (lang === 'en') {
            // Restore original English content
            if (originalContent[key]) {
                element.textContent = originalContent[key];
            }
        } else if (lang === 'vi') {
            // Use Vietnamese translation
            if (translations.vi && translations.vi[key]) {
                element.textContent = translations.vi[key];
            }
        }
    });
    
    // Save language preference to localStorage
    try {
        localStorage.setItem('preferredLanguage', lang);
    } catch (e) {
        console.log('localStorage not available');
    }
    
    console.log('Language switched to:', lang);
}

// Language switch click handler
langSwitch.addEventListener('click', function() {
    const newLang = currentLang === 'en' ? 'vi' : 'en';
    changeLanguage(newLang);
});

// ================================
// UTILITY FUNCTIONS
// ================================

// Add smooth scroll behavior for all internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#home' && href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ================================
// ON PAGE LOAD
// ================================
document.addEventListener('DOMContentLoaded', function() {
    console.log('Portfolio loaded successfully');
    
    // Check if translations is loaded
    if (typeof translations === 'undefined') {
        console.error('translations.js not loaded! Make sure it is included before script.js');
        return;
    }
    
    // Save original English content first
    saveOriginalContent();
    
    // Check for saved language preference
    let savedLang = 'en';
    try {
        savedLang = localStorage.getItem('preferredLanguage') || 'en';
    } catch (e) {
        console.log('localStorage not available, using default language');
    }
    
    // Initialize with saved language or default to English
    changeLanguage(savedLang);
});