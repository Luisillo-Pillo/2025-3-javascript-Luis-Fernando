const { ask } = require('../helpers/input.js');

async function main() {
    const frutas = ['Fresas', 'Mango', 'Kiwi', 'Manzana', 'Uvas'];

    const cajon = Number(await ask('¿Qué cajón quieres abrir? (Elije del 1 al 5): '));

    for (let i = 1; i <= 5; i++) {
        if(i === cajon){
            console.log('En el cajón' + i + ' hay ' + frutas[i - 1])
        }
    }
}

main ();