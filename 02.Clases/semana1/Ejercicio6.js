const { ask } = require('../helpers/input');

async function main() {
  const dia = Number(await ask("Ingresa un número del 1 al 7: "));
  const diasSemana = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo']

  if(dia >=1 && dia <=7) {
    console.log(diasSemana[dia-1])
  } else {
    console.log('Este no es un número válido')
  }
}

main();