const { ask } = require('../helpers/input.js');

async function main() {
    let contador = 1;
    
    console.log('Ciclo For');
    for(let i = 2; i <= 100; i+2) {
        console.log(i)
    }
}

main ();