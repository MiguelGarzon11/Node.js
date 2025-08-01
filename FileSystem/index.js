const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'archivo.txt');

// Escribir archivo (sobreescribe si ya existe) 

fs.writeFile(filePath, 'Hola Miguel desde Node.js\n', (err) => {
    if (err) throw err;
    console.log('Archivo creado');

    // Agregar contenido adicional
    fs.appendFile(filePath, 'Segunda linea\n', (err) => {
        if (err) throw err;
        console.log("Contenido agregado");

        // Leer archivo 
        fs.readFile(filePath, 'utf-8', (err, data) => {
            if (err) throw err;
            console.log('Archivo eliminado');
        
            // Eliminar archivo
            fs.unlink(filePath, (err) => {
                if (err) throw err;
                console.log('Archivo eliminado');
            });
        });
    });
}); 

// Crear carpetas
// fs.mkdir() → crea carpetas.
// { recursive: true } → permite crear múltiples niveles de carpetas.

fs.mkdir('nueva/carpeta', { recursive: true }, (err) => {});


// Verificar existencia
// fs.existsSync() → comprueba si un archivo o carpeta existe.

if (fs.existsSync('archivo.txt')) {
  console.log('Existe');
}

