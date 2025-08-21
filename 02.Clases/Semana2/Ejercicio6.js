const { ask } = require('../helpers/input.js');

async function main() {
    const palabra = await ask('Escribe una palabra: ');
    let resultado = '';
    for(let i = 0; i < palabra.length; i++) {
        resultado = resultado + palabra [i]
    }
    
    console.log('Tu palabra al reves es: ', resultado);
    
}

main ();