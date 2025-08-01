const fs = require('fs/promises');
const path = require('path');

async function crearNota() {
    try {
        const carpeta = path.resolve('notas');
        const archivo = path.join(carpeta, 'notas.txt');

        await fs.mkdir(carpeta, { recursive: true });
        console.log('Se creo correctamente la carpeta.')

        await fs.writeFile(archivo, 'Esta es la primera linea.\n');
        console.log('Se escribio correctamente la primera linea en el archivo notas.txt');

        await fs.appendFile(archivo, 'Esta es la segunca linea.\n');
        console.log('Se agrego correctamente la segunda linea en el archivo notas.txt');

        console.log('Archivo creado en: ', archivo);
    }

    catch (error) {
        console.log('Error: No se pudo crear la carpeta. ', error);
    }
}

crearNota()