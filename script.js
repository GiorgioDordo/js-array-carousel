
const sources = ['img/1.jpg','img/2.jpg','img/3.jpg','img/4.jpg','img/5.jpg']

// elements
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const carouselGallery = document.querySelector('.gallery')

// generate img from js
for(let i = 0; i < sources.length; i++) {
    const image = document.createElement('img');
    image.src = sources[i];
    carouselGallery.appendChild(image);
}

const images = document.querySelectorAll('#carousel img')

let currentActiveIndex = 0;
images[currentActiveIndex].classList.add('active');

// next button 
nextBtn.addEventListener('click', function(){

    // remove active class from the current image
    images[currentActiveIndex].classList.remove('active');

    // increase index
    currentActiveIndex++;

    if(currentActiveIndex === images.length) {
        currentActiveIndex = 0;
    }

    // add active class to the next image
    images[currentActiveIndex].classList.add('active')
});

// prev button 
prevBtn.addEventListener('click', function(){

    // remove active class from the current image
    images[currentActiveIndex].classList.remove('active');

    // decrease index
    currentActiveIndex--;

    if(currentActiveIndex < 0) {
        currentActiveIndex = images.length - 1;
    }

    // add active class to the next image
    images[currentActiveIndex].classList.add('active')
});