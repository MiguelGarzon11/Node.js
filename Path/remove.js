const fs = require('fs/promises');

async function eliminarCarpeta() {
    try {
        await fs.rm('notas', { recursive:true });
        console.log('Carpeta eliminada correctamente.');
    }

    catch (error) {
        console.log('Error al eliminar carpeta.', error);
    }
}

eliminarCarpeta();

// Para eliminar archivos npm run remove