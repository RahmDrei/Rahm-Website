// DOM Elements
const body = document.body;
const loadingScreen = document.querySelector('.loading-screen');
const mobileMenu = document.getElementById('mobileMenu');
const menuToggle = document.getElementById('menuToggle');
const closeMenu = document.getElementById('closeMenu');
const themeToggle = document.getElementById('themeToggle');

// Theme Management
function toggleTheme() {
    body.classList.toggle('light-mode');
    const isDark = !body.classList.contains('light-mode');
    themeToggle.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
}

// Mobile Menu Management
function toggleMobileMenu() {
    mobileMenu.classList.toggle('active');
    document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
}

// Alert System
function showCustomAlert(message) {
    const alert = document.getElementById('customAlert');
    alert.textContent = message;
    alert.classList.add('show');

    if (alert.timeout) {
        clearTimeout(alert.timeout);
    }

    alert.timeout = setTimeout(() => {
        alert.classList.remove('show');
    }, 3000);
}

// Navigation Functions
function joinDiscord() {
    window.open("https://discord.gg/MrUxMENThX", "_blank");
    showCustomAlert('Opening Discord invite link...');
    toggleMobileMenu();
}

function getScripts() {
    window.open("https://example.com/scripts", "_blank");
    showCustomAlert('Redirecting to scripts page...');
    toggleMobileMenu();
}

function joinGroup() {
    showCustomAlert('This feature is currently in development. Check back soon!');
    toggleMobileMenu();
}

function showChangelog() {
    window.open("https://example.com/changelog", "_blank");
    showCustomAlert('Opening changelog...');
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    // Remove loading screen after load
    setTimeout(() => {
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 500);
    }, 1500);
});

themeToggle.addEventListener('click', toggleTheme);
menuToggle.addEventListener('click', toggleMobileMenu);
closeMenu.addEventListener('click', toggleMobileMenu);

// Close mobile menu on outside click
document.addEventListener('click', (e) => {
    if (mobileMenu.classList.contains('active') && 
        !e.target.closest('.mobile-menu') && 
        !e.target.closest('.menu-toggle')) {
        toggleMobileMenu();
    }
});
