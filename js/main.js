// Initialize AOS
document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS with custom settings
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        mirror: false,
        offset: 50
    });

    // Initialize gallery
    loadGallery();
});

// Gallery images data
const galleryImages = [
    { src: 'images/image1.jpg', category: 'suits' },
    { src: 'images/image2.jpg', category: 'suits' },
    { src: 'images/image3.jpg', category: 'caftan' },
    { src: 'images/image4.jpg', category: 'suits' },
    { src: 'images/image5.jpg', category: 'dresses' },
    { src: 'images/image6.jpg', category: 'suits' },
    { src: 'images/image7.jpg', category: 'caftan' },
    { src: 'images/image-DNL.jpg', category: 'dresses' },
    { src: 'images/image.jpg', category: 'uniforms' }
];

// Load gallery images
function loadGallery() {
    const galleryGrid = document.querySelector('.gallery-grid');
    if (!galleryGrid) {
        console.error('Gallery grid not found');
        return;
    }

    console.log('Loading gallery images...');
    galleryGrid.innerHTML = ''; // Clear existing content

    galleryImages.forEach((image, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.setAttribute('data-category', image.category);
        galleryItem.setAttribute('data-aos', 'fade-up');
        galleryItem.setAttribute('data-aos-delay', (index * 100).toString());
        
        const img = document.createElement('img');
        img.src = image.src;
        img.alt = `${image.category} design`;
        img.addEventListener('load', () => {
            console.log(`Image loaded: ${image.src}`);
        });
        img.addEventListener('error', () => {
            console.error(`Error loading image: ${image.src}`);
        });
        
        galleryItem.appendChild(img);
        galleryGrid.appendChild(galleryItem);
    });
}

// Gallery filtering
const galleryFilters = document.querySelectorAll('.gallery-filters .btn');
galleryFilters.forEach(filter => {
    filter.addEventListener('click', function() {
        // Remove active class from all filters
        galleryFilters.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked filter
        this.classList.add('active');
        
        const category = this.getAttribute('data-filter');
        const galleryItems = document.querySelectorAll('.gallery-item');
        
        galleryItems.forEach(item => {
            if (category === 'all' || item.getAttribute('data-category') === category) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// Initialize Hero Swiper
const heroSwiper = new Swiper('.hero-swiper', {
    loop: true,
    effect: 'fade',
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// Initialize Testimonials Swiper
const testimonialsSwiper = new Swiper('.testimonials-swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
        }
    }
});

// Navbar scroll effect
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
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

// Form Submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // Add form submission logic here
    alert('Thank you for your message. We will get back to you soon!');
    this.reset();
});
