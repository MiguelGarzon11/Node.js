const fs = require('fs/promises');
const path = require('path');

async function crearArchivo() {
    try {
        await fs.writeFile('archivo.txt', 'Hola mundo\n');
        console.log('Archivo creado correctamente');

    }

    catch (error) {
        console.log('Error al crear el archivo: ', error);
    }
}

crearArchivo();


async function agregarLinea(archivo) {
    try {
        await fs.appendFile(archivo, 'Segunda linea');
        console.log('Se agrego correctamente la segunda linea al archivo.\n');
    }

    catch (error) {
        console.log('Error al agregar contenido al archivo: ', error);
    }
}

agregarLinea('archivo.txt');


async function crearCarpeta(archivo) {
    try {
        const carpetaDestino = path.join(__dirname, 'ejercicioArchivo');
        await fs.mkdir(carpetaDestino, { recursive: true });
        console.log('Carpeta "ejercicioArchivo" creada correctamente.')

        await fs.access(archivo);

        const nuevoDestino = path.join(carpetaDestino, path.basename(archivo));

        await fs.rename(archivo, nuevoDestino);
        console.log(`Archivo movido: ${nuevoDestino}`);
    
    }

    catch (error) {
        console.log('Error al crear carpeta y mover archivo ahi.', (error));
    }
}

crearCarpeta('archivo.txt');
 