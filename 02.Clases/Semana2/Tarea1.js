const { ask } = require('../helpers/input.js');

async function main() {
    //let contador = 1;
    //let limite = 100;
    
    let pares = []
    
    for(let i = 0; i <= 100; i = i + 2) {
        pares.push(i);
    }
    console.log(`Los números pares del 1 al 100 son: `, pares);

    //let pares = [];
    //console.log('Ciclo For de 2 en 2');
    //for (let i = 0; i <= 100; i = i + 2) {
    //    pares.push(i);
    //}
    //console.log('Los numeros pares del 1 al 100 son: ', pares);
}

main ();