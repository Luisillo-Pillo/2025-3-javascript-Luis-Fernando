const { ask } = ('../helpers/input.js');

async function main() {
    let option = ' ';
    let frutas = [ ];

    while(option !== '3') {
        option = await ask(`¿Qué deseas hacer? \n1.- Agregar una fruta. \n2.- Eliminar una fruta. \n3.- Frutas disponibles. \n4.- Salir`)
    }
}