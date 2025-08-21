const { ask } = require('../helpers/input.js');

async function main() {
    let opcion = '';
    let edades = [];
    
    while(opcion !== '3') {
        opcion = await ask(`¿Qué deseas hacer?
            \n1. Agregar una edad.
            \n2. Mostrar analisis.
            \n3. Salir`
        )

        if(opcion === '1') {
            const edadNueva = await ask ('¿Qué edad vas a ingresar?')
            edades.push(edadNueva);
        } else if (opcion === '2') {
           let mayores = 0;
           for (let i = 0; i < edades.length; i++) {
            if (edades [i]>=18) {
                mayores++;
            }
           }
           console.log(`De un total de: ${edades.length} edades, ${mayores} son mayores de edad`);
        } else if (opcion ==='3') {
            console.log('Gracias');
        } else {
            console.log('Opción inválida');
        }
    }
}
main ();