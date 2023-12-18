'use string';

const smile = document.querySelectorAll('.smile');

smile.forEach((element) => {
    element.addEventListener('click', (e) => {
        let countEl = e.target.parentNode.querySelector('.count-vote');
        ++countEl.textContent
    })
});
