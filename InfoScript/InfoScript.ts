import * as os from "node:os";
import * as path from "node:path";
import { readdir, readFile } from "node:fs/promises";


const folder: string = process.argv[2] ?? '.'

async function ListarArchivos(folder: string) {

    try {
        const ruta = path.resolve(folder);
        console.log(`Leyendo directorio: ${ruta}`);

        const files = await readdir(ruta);
        console.log("Archivos encontrados:");
        files.forEach(file => console.log(`- ${file}`));

        for (const file of files) {
            if (path.extname(file) === '.txt') {
                const filePath = path.join(ruta, file);
                const contenido = await readFile(filePath, 'utf-8');
                console.log(`\n Contenido de ${file}:\n${contenido}`);
            }
        }

    } catch (error) {
        console.error(`No se pudo leer el directorio ${folder}`, error)
        process.exit(1)
    }


}


function InfoSys() {

    console.log('Información del sistema')
    const platform = os.platform();
    const memory = (os.totalmem() / (1024 * 1024)).toFixed(0);
    const memoryFree = (os.freemem() / (1024 * 1024)).toFixed(0);
    const userDir = os.homedir();

    const info = [
        { label: "Plataforma", value: platform },
        { label: "Memoria", value: `${memory} Mb` },
        { label: "Memoria Libre", value: `${memoryFree} Mb` },
        { label: "Directorio Personal", value: userDir }
    ];

    info.forEach(item => {
        console.log(`${item.label.padEnd(30)}${item.value}`);
    })

    console.log('--------------------------------------------------');



}

(async () => {
    InfoSys();
    await ListarArchivos(folder);
})();