'use string';

const smile = document.querySelectorAll('.smile');
const count = document.querySelectorAll('.count-vote');

smile.forEach((element) => {
    element.addEventListener('click', (e) => {
        let countEl = e.target.parentNode.querySelector('.count-vote');
        ++countEl.textContent
    })
})
