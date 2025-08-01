const path = require('path');

// path.join() Unir varios segmentos de ruta de forma segura. Muy util para construir rutas a archivos o carpetas.

const ruta = path.join('carpeta', 'subcarpeta', 'archivo.txt')
console.log(ruta); // carpeta/subcarpeta/archivo.txt 


const rutaAbsoluta = path.join(__dirname, 'datos', 'archivo.txt');
console.log(rutaAbsoluta);

// path.basename() Devuelve el nombre del archivo de una ruta.

const archivo = path.basename('/usuarios/miguel/archivo.txt');
console.log(archivo)

// path.extname() Devuelve la extensión del archivo.

const extensión = path.extname('foto.png');
console.log(extensión);

// __dirname => Es una variable especial de Node.js que representa el directorio actual.

console.log(__dirname);

// path.resolve() => Convierte una ruta relativa en una ruta absoluta, muy util para asegurar que un archivo siempre se encuentre correctamente.

const ruta2 = path.resolve('carpeta', 'archivo.txt');
console.log(ruta2);






