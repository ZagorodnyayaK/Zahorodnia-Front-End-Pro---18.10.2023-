const divGhost = document.querySelector(`.ghost`);
const input = document.querySelector(`.my_input`);

input.addEventListener(`focus`, () => {
    divGhost.style.display = "inline";
});
input.addEventListener(`blur`, () => {
    divGhost.style.display = "none";
});
