"use strict";

let students = [];

function addStudent(){
    const name = document.getElementById('nameInput').ariaValueMax.trim();
    if(name === ''||name === isNaN) {
        alert('Debes de capturar un nombre válido');
        return;
    }
    const grade = parseFloat(document.getElementById('gradeInput').value);
    if (grade > 100 || grade < 0) {
        alert('Debes capturar una calificación válida')
        return;
    }

    const student = {
        name,
        grade,
        status: grade >= 70?'Passed':'Failed',
    }

    students.push(student);
    displayStudents();
}

function displayStudents() {
    const list = document.getElementById('studentList');
    list.innerHTML = ``;

    for (let i=0;i<students.length;i++) {
        const li = document.createElement('li');
        li.innerHTML=`<p>${students[i].name} - ${students[i].grade} - ${student[i].status}</p>`
        list.appendChild(li);
    }
}