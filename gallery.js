const currentImage = document.querySelector('#current-image');
const images = document.querySelectorAll('.image-gallery img');

const opacity = 0.5;
images[0].style.opacity = opacity;
  


//click event for the pictures

images.forEach(img => img.addEventListener('click',imgClick));

//current image src changed to the target image src when a click event happends

function imgClick(e){
   

//reset the opacity
    images.forEach(img => (img.style.opacity =1));

//change the source of the image from current to target
    currentImage.src = e.target.src;

//add class fadein to the current-image div
   currentImage.classList.add('fade-in');

//set timeout to remove the class fadein from the current-image div
   setTimeout(() => currentImage.classList.remove('fade-in'), 500);

//opacity change to the clicked image
   e.target.style.opacity = opacity;
}