const { ask } = require('../helpers/input.js');

function obtenerPromedio(numeros){
    let total = 0
    for (let i = 0; i < numeros.length; i++){
        total = total + numeros[i];
    }
    const promedio = total / numeros.length;

    return promedio;
}

function obtenerMayor(numeros) {
    let mayor = numeros [0];
    for (let i = 0; i < numeros.length; i++) {
        if (numeros [i] > mayor) {
            mayor = numeros [i];
        }
    }
    return mayor;
}

function obtenerMenor(numeros) {
    let menor = numeros [0];
    for (let i = 0; i < numeros.length; i++) {
        if (numeros [i] < menor) {
            menor = numeros [i];
        }
    }
    return menor;
}

function resumenEstadistico(numeros) {
    const promedio = obtenerPromedio(numeros);
    const mayor = obtenerMayor(numeros);
    const menor = obtenerMenor(numeros);

    return {'promedio':promedio,'mayor':mayor,'menor':menor};
    return {promedio, mayor, menor};
}

async function main() {
    const edades = [20, 18, 25, 30, 22];
    const lista = [5, 20, 8, 99, 3]
    const datos = [70, 80, 90, 100, 85]
    const nombre = ['Ana', 'Esteban', 'Luis', 'Oscar', 'María'];

    console.log(`Promedio de edades = ${obtenerPromedio(edades)}`);
    console.log(`El numero mayor de: ${lista} = ${obtenerMayor(lista)}`);
    console.log(`El numero menor de: ${lista} = ${obtenerMenor(lista)}`);
}

main ();