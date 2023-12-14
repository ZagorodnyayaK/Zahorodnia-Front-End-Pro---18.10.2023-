'use strict';

const length = 10;
const tbody = document.querySelector('table > tbody');
const refreshButton = document.querySelector('.refresh')


    Array.from({length}, () => {
        const tr = document.createElement('tr');
        tr.classList.add('line');
        Array.from({length}, () => {
            const n = 1 + Math.random() * 100 | 0;
            const td = document.createElement('td');
            td.classList.add('box');
            td.innerText = n;
            tr.appendChild(td);
        });
        tbody.appendChild(tr);
    })


refreshButton.addEventListener('click', () =>{
    window.location.reload()
});