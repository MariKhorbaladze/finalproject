document.addEventListener('DOMContentLoaded', (event) => {
    let currentIndex = 0;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    function showSlide(index) {
        const slider = document.querySelector('.slides');
        slider.style.transform = `translateX(-${index * 100}%)`;
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        showSlide(currentIndex);
    }

    showSlide(currentIndex);

    setInterval(nextSlide, 5000);
});

document.addEventListener('DOMContentLoaded', () => {
    const progressBarContainers = document.querySelectorAll('.progress-bar-container');

    const animateProgressBars = () => {
        progressBarContainers.forEach(container => {
            const rect = container.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                const progressBar = container.querySelector('.progress');
                const percent = container.getAttribute('data-percent');
                progressBar.style.width = `${percent}%`;
            }
        });
    };

    window.addEventListener('scroll', animateProgressBars);
    window.addEventListener('load', animateProgressBars); 
});


