"use strict"; //Sirve paraque no se detenga la carga de scripts cuando uno de ellos falla

function addTask() {
    const input = document.getElementById('taskInput');
    const taskText = input.value.trim();

    if ( taskText !== '') {
        const li = document.createElement('li');// <li></li>
        li.innerHTML = `
        <span onClick = 'roggleComplete(this)'>${taskText}</span>
        <div class='task-buttons'>
            <button onClick='deleteTask(this)'>Delete</button>
        </div>
        `;
        document.getElementById('taskList').appendChild(li);
        input.value = '';
    }
}

function deleteTask(btn) {
    btn.closest('li').remove();
}

function toggleComplete(span){
    span.classList.toggle('task-complete');
}