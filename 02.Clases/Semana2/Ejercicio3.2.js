const { ask } = ('../helpers/input.js');

async function main() {
    let option = ' ';
    let frutas = [ ];

    while(option !== '3') {
        option = await ask(`¿Qué deseas hacer? \n1.- Agregar una fruta. \n2.- Eliminar una fruta. \n3.- Frutas disponibles. \n4.- Salir`)

        if(opcion === '1') {
            let frutaNueva = await ask('¿Que fruta deseas agregar?: ');
            frutas.push(frutaNueva);
            console.log('Fruta agregada')
        } else if (opcion === '2') {
            if(frutas.length === 0 ) {
                console.log('No hay frutas disponibles');
                continue;
            } else {
                let frutaEliminar = await ask('')
            }
        }
    }
}