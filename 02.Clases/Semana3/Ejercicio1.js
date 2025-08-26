const { ask } = require('../helpers/input.js');

async function main() {
    const personas = [
        {
            nombre:"Alejandra",
            edad:28,
            ocupación:"Desarrollador",
            saludar: function () {
                console.log (`Hola, mi nombre es ${this.nombre}`);
            }
        },
        {
            nombre:"Carlos",
            edad:36,
            ocupación:"Desarrollador",
            saludar: function () {
                console.log (`Hola, mi nombre es ${this.nombre}`);
            }
        },
    ];

    console.log(personas[0].nombre);
    personas [0].saludar();
    personas [1].saludar();
}

main ();