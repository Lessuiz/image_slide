const arrowBack = document.querySelector('.arrow-back');
const arrowFw = document.querySelector('.arrow-forward');
const imageFrame = document.querySelector('.image-frame');
const imageList = document.querySelectorAll('.image');

let currentImage = 0

const nextImage = function slideToTheNextImage() {
  imageList[currentImage].classList.add('slided');
  if (currentImage + 1 >= imageList.length) {
    currentImage = 0;
    imageList[0].classList.remove('slided');
  } else {
    currentImage += 1;
    imageList[currentImage].classList.remove('slided');
  }
};

const previousImage = function slideToThePreviousImage() {
  imageList[currentImage].classList.add('slided');
  if (currentImage - 1 < 0) {
    currentImage = imageList.length - 1;
    imageList[currentImage].classList.remove('slided');
  } else {
    currentImage -= 1;
    imageList[currentImage].classList.remove('slided');
  }
};

arrowBack.addEventListener('click', previousImage)
arrowFw.addEventListener('click', nextImage)

setInterval(nextImage, 5000)