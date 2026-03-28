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
// ======= DAFTAR MENU CAFE (EDIT DI SINI) =======
// 5. Fungsi Show More Menu
// 5. Data Menu Lengkap (32 Item) & Logika Render
const menuData = [
    // --- ESPRESSO BASED ---
    { name: "Cappuccino Italiano", price: "Rp 35.000", desc: "Espresso, Steamed Milk, Foam", img: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=200&q=80", category: "Espresso Based" },
    { name: "Caramel Macchiato", price: "Rp 50.000", desc: "Vanilla, Espresso, Milk, Caramel", img: "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=200&q=80", category: "Espresso Based" },
    { name: "Cafe Latte", price: "Rp 35.000", desc: "Espresso, Smooth Steamed Milk", img: "https://images.unsplash.com/photo-1551030173-122aabc4489c?w=200&q=80", category: "Espresso Based" },
    { name: "Americano", price: "Rp 28.000", desc: "Double Espresso with Hot Water", img: "https://images.unsplash.com/photo-1551446591-142875a901a1?w=200&q=80", category: "Espresso Based" },
    { name: "Mochaccino", price: "Rp 40.000", desc: "Espresso, Chocolate, Milk", img: "https://images.unsplash.com/photo-1576092762791-dd9e2220abd1?w=200&q=80", category: "Espresso Based" },
    { name: "Vanilla Latte", price: "Rp 40.000", desc: "Latte with Sweet Vanilla Syrup", img: "https://images.unsplash.com/photo-1558401402-289b7eb9bbd7?w=200&q=80", category: "Espresso Based" },
    { name: "Hazelnut Latte", price: "Rp 40.000", desc: "Latte with Roasted Hazelnut", img: "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=200&q=80", category: "Espresso Based" },
    { name: "Flat White", price: "Rp 35.000", desc: "Espresso with Microfoam Milk", img: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=200&q=80", category: "Espresso Based" },
    { name: "Piccolo", price: "Rp 30.000", desc: "Ristretto shot with Steamed Milk", img: "https://images.unsplash.com/photo-1551030173-122aabc4489c?w=200&q=80", category: "Espresso Based" },
    { name: "Espresso Single", price: "Rp 20.000", desc: "Pure Extract of Arabica", img: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=200&q=80", category: "Espresso Based" },

    // --- MANUAL BREW ---
    { name: "V60 Manual Brew", price: "Rp 38.000", desc: "Single Origin Selection", img: "https://images.unsplash.com/photo-1559496417-e7f25cb247f3?w=200&q=80", category: "Manual Brew" },
    { name: "Japanese Iced", price: "Rp 40.000", desc: "Flash Chilled Pour Over", img: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=200&q=80", category: "Manual Brew" },
    { name: "Aeropress", price: "Rp 38.000", desc: "Smooth and Full Bodied", img: "https://images.unsplash.com/photo-1559496417-e7f25cb247f3?w=200&q=80", category: "Manual Brew" },
    { name: "French Press", price: "Rp 35.000", desc: "Classic Immersion Brew", img: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=200&q=80", category: "Manual Brew" },
    { name: "Vietnam Drip", price: "Rp 28.000", desc: "Robusta Blend with Sweet Milk", img: "https://images.unsplash.com/photo-1558401402-289b7eb9bbd7?w=200&q=80", category: "Manual Brew" },
    { name: "Kalita Wave", price: "Rp 40.000", desc: "Clean and Balanced Filter", img: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=200&q=80", category: "Manual Brew" },

    // --- NON-COFFEE ---
    { name: "Summer Mojito", price: "Rp 30.000", desc: "Lime, Mint, Soda, Syrup", img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=200&q=80", category: "Non Coffee" },
    { name: "Matcha Latte", price: "Rp 38.000", desc: "Premium Uji Matcha & Milk", img: "https://images.unsplash.com/photo-1515823662972-da6a2e4d3002?w=200&q=80", category: "Non Coffee" },
    { name: "Red Velvet Latte", price: "Rp 35.000", desc: "Red Velvet Flavor with Milk", img: "https://images.unsplash.com/photo-1558401402-289b7eb9bbd7?w=200&q=80", category: "Non Coffee" },
    { name: "Taro Latte", price: "Rp 35.000", desc: "Sweet Purple Yam Milk", img: "https://images.unsplash.com/photo-1515823662972-da6a2e4d3002?w=200&q=80", category: "Non Coffee" },
    { name: "Classic Chocolate", price: "Rp 35.000", desc: "Rich Belgian Chocolate", img: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=200&q=80", category: "Non Coffee" },
    { name: "Lychee Tea", price: "Rp 25.000", desc: "Black Tea with Real Lychee", img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=200&q=80", category: "Non Coffee" },
    { name: "Peach Yakult", price: "Rp 28.000", desc: "Yakult Mixed with Peach Syrup", img: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=200&q=80", category: "Non Coffee" },
    { name: "Lemon Tea", price: "Rp 22.000", desc: "Fresh Squeezed Lemon & Tea", img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=200&q=80", category: "Non Coffee" },

    // --- SNACKS & PASTRY ---
    { name: "Butter Croissant", price: "Rp 25.000", desc: "Flaky French Pastry", img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=200&q=80", category: "Snacks & Pastry" },
    { name: "Almond Croissant", price: "Rp 32.000", desc: "Filled with Almond Cream", img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=200&q=80", category: "Snacks & Pastry" },
    { name: "Fudge Brownies", price: "Rp 25.000", desc: "Dense Chocolate Cake", img: "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=200&q=80", category: "Snacks & Pastry" },
    { name: "French Fries", price: "Rp 20.000", desc: "Crispy Shoestring Cut", img: "https://images.unsplash.com/photo-1576092762791-dd9e2220abd1?w=200&q=80", category: "Snacks & Pastry" },
    { name: "Mix Platter", price: "Rp 45.000", desc: "Sausage, Fries, Nuggets", img: "https://images.unsplash.com/photo-1515823662972-da6a2e4d3002?w=200&q=80", category: "Snacks & Pastry" },
    { name: "New York Cheesecake", price: "Rp 38.000", desc: "Classic Baked Cheesecake", img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=200&q=80", category: "Snacks & Pastry" },
    { name: "Choco Lava", price: "Rp 35.000", desc: "Melted Chocolate Inside", img: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=200&q=80", category: "Snacks & Pastry" },
    { name: "Dimsum Basket", price: "Rp 30.000", desc: "Steamed Chicken & Shrimp", img: "https://images.unsplash.com/photo-1559496417-e7f25cb247f3?w=200&q=80", category: "Snacks & Pastry" }
];

const menuGrid = document.getElementById("menuGrid");
let currentCategory = "";
const limitShow = 8; // Jumlah menu yang tampil di awal

// Fungsi Render HTML
menuData.forEach((item, index) => {
    // Sisipkan judul kategori jika berganti
    if (item.category !== currentCategory) {
        const catTitle = document.createElement("div");
        catTitle.className = `menu-category ${index >= limitShow ? 'hidden-menu' : ''}`;
        catTitle.innerHTML = `<h3>${item.category}</h3>`;
        menuGrid.appendChild(catTitle);
        currentCategory = item.category;
    }

    // Buat elemen menu
    const div = document.createElement("div");
    // Menu ke-9 dan seterusnya disembunyikan secara default
    div.className = `menu-item ${index >= limitShow ? 'hidden-menu' : ''}`;
    div.innerHTML = `
        <img src="${item.img}" alt="${item.name}">
        <div class="menu-details">
            <h4>${item.name}</h4>
            <span class="price">${item.price}</span>
            <p>${item.desc}</p>
        </div>
    `;
    menuGrid.appendChild(div);
});

// Logika Tombol Show More
const btnShowMore = document.getElementById("btnShowMore");
if (btnShowMore) {
    btnShowMore.addEventListener("click", function() {
        const hiddenItems = document.querySelectorAll(".hidden-menu");
        
        if (hiddenItems.length > 0) {
            // Tampilkan semua
            hiddenItems.forEach(el => {
                el.classList.remove("hidden-menu");
                el.classList.add("show-menu");
            });
            btnShowMore.textContent = "Sembunyikan Menu";
        } else {
            // Sembunyikan kembali elemen index >= limitShow
            const allItemsAndCats = menuGrid.children;
            let menuCount = 0;
            
            for (let i = 0; i < allItemsAndCats.length; i++) {
                let el = allItemsAndCats[i];
                if (el.classList.contains('menu-item')) menuCount++;
                
                // Jika elemen berada setelah batas limitShow, sembunyikan
                if (menuCount > limitShow || (el.classList.contains('menu-category') && menuCount >= limitShow)) {
                    el.classList.remove("show-menu");
                    el.classList.add("hidden-menu");
                }
            }
            btnShowMore.textContent = "Lihat Menu Lengkap";
            document.getElementById("menu").scrollIntoView({ behavior: 'smooth' });
        }
    });
}