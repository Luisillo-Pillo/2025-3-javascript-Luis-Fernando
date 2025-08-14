const { ask } = require('../helpers/input.js');

async function main() {
    const age = Number(await ask('¿Cuántos años tienes?: '));
    const genere = await ask('¿Cuál es tu géreno (Masculino / Femenino) ');

    if (age<= 12 && genere === 'Femenino') {
        console.log('Eres una niña');
    } else if (age <=12 && genere === 'Masculino') {
        console.log('Eres un niño');
    } else if (age > 12 && age < 18 && genere === 'Femenino') {
        console.log('Eres una adolescente');
    } else if (age > 12 && age < 18 && genere === 'Masculino') {
        console.log('Eres un adolescente');
    } else if (age > 18 && age < 60 && genere === 'Masculino') {
        console.log('Eres un adulto masculino')
    } else if (age > 18 && age < 60 && genere === 'Femenino') {
        console.log('Eres una adulta femenina')
    } else if (age > 60 && genere === 'Masculino') {
        console.log('Eres un adulto mayor')
    } else if (age > 60 && genere === 'Femenino') {
        console.log('Eres una adulta mayor')
    } else {
        console.log('No se encontraron resultados')
    }

}

main();