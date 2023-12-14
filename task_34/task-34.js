'use strict';

// const enterLinkBtn = document.getElementById(`.enterBtn`);
const followLink = document.getElementById(`btnId`);
const inpSite = document.getElementById(`inpID`);

followLink.addEventListener("click", function () {
    let link = inpSite.value;
    if (!link) {
        alert('Link is missing');
    } else {
        if (link.startsWith('http') === false && link.startsWith('https') === false) {
            link = `https://${link}`;
        }
        window.location.href = link;
    }
})
