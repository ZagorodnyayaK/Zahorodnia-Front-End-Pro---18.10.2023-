'use strict';

const inputSite = document.querySelector('.input-link');
const followLink = document.querySelector('.validation-button');

followLink.addEventListener('click', () => {
    let link = inputSite.value;
    if (!link) {
        alert('Link is missing');
    } else {
        if (link.startsWith('http') === false && link.startsWith('https') === false) {
            link = `https://${link}`;
        }
        window.location.href = link;
    }
});



const divGhost = document.querySelector(`.ghost`);
const input = document.querySelector(`.my_input`);

input.addEventListener(`focus`, () => {
    divGhost.style.display = "inline";
});
input.addEventListener(`blur`, () => {
    divGhost.style.display = "none";
});

