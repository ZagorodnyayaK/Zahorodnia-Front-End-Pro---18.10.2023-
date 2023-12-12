`use strict`;

const divGhost = document.querySelector(`.ghost`);
const input = document.querySelector(`.my_input`);

input.addEventListener(`focus`, () => {
    divGhost.style.visibility = "visible";
});
input.addEventListener(`blur`, () => {
    divGhost.style.visibility = "hidden";
});


