'use strict';

const btn = document.querySelector(`.changeImg`);
const arrImages = [`1.jpg`,`2.jpg`,`3.jpg`,`4.jpg`,`5.jpg`,`6.jpg`,`7.jpg`,`8.jpg`,`9.jpg`];



 function getRandomImg(arrImages){
    let randIndex = Math.floor(Math.random() * (arrImages.length + 0 - 0));
    return `images/${arrImages[randIndex]}`;
}
function initRandImg(arrImages){
    const img = document.getElementById(`rand_img`);
    img.src = getRandomImg(arrImages);
}

btn.addEventListener(`click`,() => initRandImg(arrImages));