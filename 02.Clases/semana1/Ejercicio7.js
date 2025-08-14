const { ask } = require('../helpers/input');

async function main() {
  const number = Number(await ask("Ingresa un número: "));

  if(number % 3 !==0 && number%5!==0) {
    console.log('No es múltiplo de 3 o 5')
  } else if(number % 3 ===0 && number %5!==0) {
    console.log('Solamente es múltiplo de 3')
  } else if(number %3!==0 && number %5===0) {
    console.log('Solamente es múltiplo de 5')
  } else {
    console.log('Es multiplo de 3 y 5')
  }
}

main();