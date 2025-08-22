const { ask } = require('../helpers/input.js');

async function main() {    
    let pares = []
    
    for(let i = 0; i <= 100; i = i + 2) {
        pares.push(i);
    }
    console.log(`Los números pares del 1 al 100 son: `, pares);
}

main ();