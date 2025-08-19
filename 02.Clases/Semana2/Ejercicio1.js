const { ask } = requiere('../helpers/input.js');

async function saludar (nombre) {
    console.log(`Hola estimad@: ${nombre}, espero que tengas un buen día`)
}

async function main () {
    const personas = [
        "Andrea",
        "Dani",
        "Luis",
        "Yare",
    ];

    for(let i = 0; 1 < personas.length;i++){
        saludar(personas[i]);
    }
}

main ();