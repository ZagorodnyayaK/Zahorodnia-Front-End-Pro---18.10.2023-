'use strict';

const imagesArray = ['nature.jpg', 'sunset.jpg', 'tree.jpg', 'trees.jpg'];


document.querySelector('.prev').addEventListener('click', (ev) => {
    const current = ev.target.src;
    const index = imagesArray.indexOf(current);
    ev.target.src = imagesArray[index - 1];
});
document.querySelector('.next').addEventListener('click', (ev) => {
    let current = ev.target.parentNode.querySelector('img').src;
    let imgSplited = current.split('/');
    current = imgSplited[imgSplited.length -1];
    console.log(ev.target,current);
    const index = imagesArray.indexOf(current);
    console.log(index);
    ev.target.src = imagesArray[index + 1];
});



