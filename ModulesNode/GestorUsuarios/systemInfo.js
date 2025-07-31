const os = require('os');  // Te permite acceder a información del sistema operativo.
const path = require('path'); // Sirve para trabajar rutas de archivos de forma segura y compatible con todos los sistemas operativos.

function showSystemInfo(){
    console.log('Usuario actual: ', os.userInfo().username);
    console.log('Usuario actual:' , os.userInfo());
    console.log('Sitema operativo:' , os.type());
    console.log('Plataforma: ', os.platform());
    console.log('Directorio actual:', __dirname);
    console.log('Ruta de este archivo: ', path.basename(__filename));
}

module.exports = showSystemInfo;
