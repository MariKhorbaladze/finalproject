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

document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.button');

    function updateSlider(index) {
        const slides = document.querySelectorAll('.carousel-slide');
        slides.forEach((slide, idx) => {
            if (idx === index) {
                slide.style.display = 'block';  
            } else {
                slide.style.display = 'none';  
            }
        });

        buttons.forEach((button, idx) => {
            if (idx === index) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });
    }

    buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
            updateSlider(index);
        });
    });
    
});


// document.addEventListener("DOMContentLoaded", function() {
//     const categories = document.querySelectorAll('.category');
//     const projects = document.querySelectorAll('.grid-container');
  
//     categories.forEach(category => {
//       category.addEventListener('click', function() {
//         this.classList.toggle('selected');
        
//         const selectedCategories = getSelectedCategories();
//         showProjects(selectedCategories);
//       });
//     });
  
//     function getSelectedCategories() {
//       const selectedCategories = [];
//       categories.forEach(category => {
//         if (category.classList.contains('selected')) {
//           selectedCategories.push(category.dataset.category);
//         }
//       });
//       return selectedCategories;
//     }
  
//     function showProjects(selectedCategories) {
//       projects.forEach(project => {
//         const projectCategory = project.dataset.category;
//         if (selectedCategories.includes("all") || selectedCategories.includes(projectCategory)) {
//           project.style.display = "block";
//         } else {
//           project.style.display = "none";
//         }
//       });
//     }
//   });
  
  
  

