// 1. Sticky Navigation Bar
window.addEventListener("scroll", function() {
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

// 2. Mobile Menu Toggle
function toggleMenu() {
    const menuList = document.getElementById("menuList");
    menuList.classList.toggle("show");
}

// 3. Close Mobile Menu when clicking a link
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById("menuList").classList.remove("show");
    });
});

// 4. Scroll Animation (Intersection Observer)
// Fungsi ini membuat elemen muncul perlahan saat di-scroll
const observerOptions = {
    threshold: 0.2
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running'; // Mulai animasi
            entry.target.style.opacity = 1; // Pastikan terlihat
            observer.unobserve(entry.target); // Hanya animasi sekali
        }
    });
}, observerOptions);

// Targetkan elemen yang ingin dianimasikan
document.querySelectorAll('.fade-in-left, .fade-in-right, .fade-in-up').forEach(el => {
    el.style.opacity = 0; // Sembunyikan dulu
    el.style.animationPlayState = 'paused'; // Pause animasi sampai terlihat
    observer.observe(el);
});