document.addEventListener('DOMContentLoaded', function () {
    const images = ["./imgs/profile-me.jpg", "./imgs/me.jpg", "./imgs/black.jpg"];
    let currentIndex = 0;

    const sliderImage = document.getElementById('slider-image');
    const prevButton = document.getElementById('prev-btn');
    const nextButton = document.getElementById('next-btn');

    function showImage(index) {
        sliderImage.src = images[index];
    }

    prevButton.addEventListener('click', function () {
        currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
        showImage(currentIndex);
    });

    nextButton.addEventListener('click', function () {
        currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
        showImage(currentIndex);
    });

    showImage(currentIndex);

    function changePhoto() {
        currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
        showImage(currentIndex);
    }

    setInterval(changePhoto, 5000);
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


// recomendacia 

const recDiv = document.createElement("div")
recDiv.setAttribute("id", "rec-div")
document.getElementById("rec-div").style.backgroundImage = "url('./imgs/pixel.svg')";
document.body.appendChild(recDiv)





