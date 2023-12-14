'use strict';

const button = document.querySelector('.change-img');
const arrayImages = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg'];


const getRandomIndex = (arrayImages) =>{
    return Math.floor(Math.random() * (arrayImages.length));
}

const getRandomImg = (arrayImages) => {
    return `images/${arrayImages[getRandomIndex(arrayImages)]}`;
}

const initRandomImg = (arrayImages) => {
    const image = document.querySelector('.numbers');
    image.src = getRandomImg(arrayImages);

}

button.addEventListener('click', () => initRandomImg(arrayImages));

