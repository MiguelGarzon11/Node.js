const fs = require('node:fs');

// Callbacks (patron error-first)

fs.readFile('', 'utf-8', (err, data) => {
    if (err) {
        console.log('Error al leer archivo: ', err.message);
        exit(0);
    }
    console.log('Contenido:', data);
});

// Con promesas 

fetch('https://api.example.com/data')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error('Error en fetch: ', err.message));


// Con async/await (try/catch)

async function obtenerDatos() {
    try {
        const res = await fetch('https://api.example.com/data');
        const data = await res.json();
        console.log(data);
    } catch (err) {
        console.error('Error en async: ', err.message);
    }
}


obtenerDatos();