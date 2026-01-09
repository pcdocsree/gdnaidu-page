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

document.addEventListener("DOMContentLoaded", function () {

    const slides = document.querySelectorAll(".quote-slide");
    const prevBtn = document.querySelector(".prev-arrow");
    const nextBtn = document.querySelector(".next-arrow");
    const dotsContainer = document.querySelector(".slider-dots");

    let current = 0;
    const VISIBLE_DOTS = 6;

    function renderDots() {
        dotsContainer.innerHTML = "";

        let start = Math.max(0, current - Math.floor(VISIBLE_DOTS / 2));
        let end = start + VISIBLE_DOTS;

        if (end > slides.length) {
            end = slides.length;
            start = Math.max(0, end - VISIBLE_DOTS);
        }

        for (let i = start; i < end; i++) {
            const dot = document.createElement("div");
            dot.className = "slider-dot";
            if (i === current) dot.classList.add("active");

            dot.addEventListener("click", () => {
                current = i;
                updateSlider();
            });

            dotsContainer.appendChild(dot);
        }
    }

    function updateSlider() {
        slides.forEach(slide => slide.classList.remove("active"));
        slides[current].classList.add("active");
        renderDots();
    }

    nextBtn.addEventListener("click", () => {
        current = (current + 1) % slides.length;
        updateSlider();
    });

    prevBtn.addEventListener("click", () => {
        current = (current - 1 + slides.length) % slides.length;
        updateSlider();
    });

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

    setActiveNav();
    updateSlider();
});
