'use strict';

const tbody = document.querySelector('table > tbody');
const refreshButton = document.querySelector('.fill-table');
const divTable = document.querySelector('.table')


const addTable = () => {
    if (!tbody.childNodes) {
        genTable();
    } else {
        refreshButton.innerHTML = 'Refresh numbers';
        {
            while (tbody.firstChild) {
                tbody.firstChild.remove()
            }
            genTable();
        }
    }
}

const genTable = () => {
    for (let i = 0; i <= 10; i++) {
        const tr = document.createElement('tr');
        tr.classList.add('line');
        for (let i = 0; i <= 10; i++) {
            const n = 1 + Math.random() * 100 | 0;
            const td = document.createElement('td');
            td.classList.add('box');
            td.innerText = n;
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }
};


refreshButton.addEventListener('click', () => {
    divTable.style.display = 'table-cell';
    addTable()
});