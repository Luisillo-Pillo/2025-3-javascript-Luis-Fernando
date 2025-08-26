"use strict"; //Sirve paraque no se detenga la carga de scripts cuando uno de ellos falla

function addTask() {
    const input = document.getElementById('taskInput');
    const taskText = input.value.trim();

    if ( taskText !== '') {
        const li = document.createElement('li');// <li></li>
        li.innerHTML = `
        <span>${taskText}</span>
        `;
        document.getElementById('taskList').appendChild(li);
        input.value = '';
    }
}