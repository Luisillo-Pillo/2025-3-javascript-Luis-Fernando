const { ask } = require('../helpers/input.js');

function obtenerPromedio(numeros){
    let total = 0
    for (let i = 0; i < numeros.length; i++){
        total = total + numeros[i];
    }
    const promedio = total / numeros.length;

    return promedio;
}

function numeroMayor()

async function main() {
    const edades = [20, 18, 25, 30, 22];
    const lista = [5, 20, 8, 99, 3]
    const datos = [70, 80, 90, 100, 85]
    const nombre = ['Ana', 'Esteban', 'Luis', 'Oscar', 'María'];

    console.log(`Promedio de edades = ${obtenerPromedio(edades)}`)

}

main ();