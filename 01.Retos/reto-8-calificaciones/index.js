const { ask } = require('./helpers/input');

function obtenerAprobados(numeros){
    let aprobados = 0;
    for (let i = 0; i < numeros.length; i++){
        if (numeros [i] >=70){
            aprobados++;
        }
    }
    return aprobados
}

function analizarCalificaciones(numeros){
    const aprobados = obtenerAprobados (numeros);
    const reprobados = 0;
    const promedio = 0;
    const califAlta = 0;
    const califBaja = 0;

    return {aprobados,
        reprobados,
        promedio,
        califAlta,
        califBaja
    };
}

async function main() {
    const calificaciones = [90,
        89, 34, 45, 67, 89, 23, 12, 45, 89, 8, 90];
    const resultado = analizarCalificaciones(calificaciones);
    console.log(resultado);
}

main();