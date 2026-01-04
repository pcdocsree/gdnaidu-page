// Navigation active state
function setActiveNav() {
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        const linkHref = link.getAttribute('href');
        
        if (linkHref === currentPage) {
            link.classList.add('active');
        } else if (currentPage === '' && linkHref === 'index.html') {
            link.classList.add('active');
        }
    });
}

// Quotes Slider
function initQuotesSlider() {
    const quoteSlides = document.querySelectorAll('.quote-slide');
    const sliderDots = document.querySelectorAll('.slider-dot');
    const prevArrow = document.querySelector('.prev-arrow');
    const nextArrow = document.querySelector('.next-arrow');
    
    if (quoteSlides.length === 0) return;
    
    let currentSlide = 0;
    
    function showSlide(index) {
        // Hide all slides
        quoteSlides.forEach(slide => {
            slide.classList.remove('active');
        });
        
        // Remove active class from all dots
        sliderDots.forEach(dot => {
            dot.classList.remove('active');
        });
        
        // Show current slide and activate corresponding dot
        if (quoteSlides[index]) {
            quoteSlides[index].classList.add('active');
        }
        if (sliderDots[index]) {
            sliderDots[index].classList.add('active');
        }
        currentSlide = index;
    }
    
    // Next slide
    if (nextArrow) {
        nextArrow.addEventListener('click', function() {
            let nextIndex = currentSlide + 1;
            if (nextIndex >= quoteSlides.length) {
                nextIndex = 0;
            }
            showSlide(nextIndex);
        });
    }
    
    // Previous slide
    if (prevArrow) {
        prevArrow.addEventListener('click', function() {
            let prevIndex = currentSlide - 1;
            if (prevIndex < 0) {
                prevIndex = quoteSlides.length - 1;
            }
            showSlide(prevIndex);
        });
    }
    
    // Dot navigation
    sliderDots.forEach(dot => {
        dot.addEventListener('click', function() {
            const index = parseInt(this.getAttribute('data-index'));
            showSlide(index);
        });
    });
    
    // Auto slide every 5 seconds
    setInterval(function() {
        let nextIndex = currentSlide + 1;
        if (nextIndex >= quoteSlides.length) {
            nextIndex = 0;
        }
        showSlide(nextIndex);
    }, 5000);
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    setActiveNav();
    initQuotesSlider();
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                e.preventDefault();
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});