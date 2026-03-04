// Fungsi Sidebar Mobile
const menuBtn = document.getElementById('menuBtn');
const closeBtn = document.getElementById('closeBtn');
const sidebar = document.getElementById('sidebar');

menuBtn.onclick = () => sidebar.classList.add('active');
closeBtn.onclick = () => sidebar.classList.remove('active');

// Fungsi Auto Slider Banner
const slider = document.getElementById('mainSlider');
const dots = document.querySelectorAll('.dot');
let counter = 0;

function slide() {
    counter++;
    if (counter > 3) counter = 0;
    
    slider.style.transform = `translateX(-${counter * 25}%)`;
    
    // Update dots
    dots.forEach(dot => dot.classList.remove('active'));
    dots[counter].classList.add('active');
}

// Geser otomatis setiap 4 detik
setInterval(slide, 4000);
