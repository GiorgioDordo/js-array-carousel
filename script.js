
const sources = ['img/1.jpg','img/2.jpg','img/3.jpg','img/4.jpg','img/5.jpg']

// elements
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const carouselGallery = document.querySelector('.gallery');
const thumbnailGallery = document.getElementById('thumbnails');

// generate img from js
let imgs = '';
for(let i = 0; i < sources.length; i++) {
    const currentElement = sources[i];
    imgs += `<img src="${currentElement}">`;
}

carouselGallery.innerHTML = imgs;
carouselGallery.innerHTML = imgs;

const images = document.querySelectorAll('#carousel img');
const thumbs = document.querySelectorAll('#thumbnails img');

let currentActiveIndex = 0;
images[currentActiveIndex].classList.add('active');
thumbs[currentActiveIndex].classList.add('active');

// next button 
nextBtn.addEventListener('click', function(){

    // remove active class from the current image
    images[currentActiveIndex].classList.remove('active');
    thumbs[currentActiveIndex].classList.remove('active');

    // increase index
    currentActiveIndex++;

    if(currentActiveIndex === images.length) {
        currentActiveIndex = 0;
    }

    // add active class to the next image
    images[currentActiveIndex].classList.add('active');
    thumbs[currentActiveIndex].classList.add('active');
});

// prev button 
prevBtn.addEventListener('click', function(){

    // remove active class from the current image
    images[currentActiveIndex].classList.remove('active');
    thumbs[currentActiveIndex].classList.remove('active');

    // decrease index
    currentActiveIndex--;

    if(currentActiveIndex < 0) {
        currentActiveIndex = images.length - 1;
    }

    // add active class to the next image
    images[currentActiveIndex].classList.add('active');
    thumbs[currentActiveIndex].classList.add('active');
});