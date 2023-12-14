'use strict';

// const enterLinkBtn = document.getElementById(`.enterBtn`);
const followLink = document.querySelectorAll('.input-link');
const inputSite = document.querySelectorAll('.validation-button');

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
