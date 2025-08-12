import * as os from "node:os";
import * as path from "node:path";
import { readdir } from "node:fs";


function InfoSys() {

    const platform = os.platform();
    const memory = (os.totalmem() / (1024 * 1024)).toFixed(0);
    const memoryFree = (os.freemem() / (1024 * 1024)).toFixed(0);
    const userDir = os.homedir();

    const Info = [platform, memory, memoryFree, userDir];
    Info.forEach(Information => {
        switch (Information) {
            case platform:
                console.log(`${"Plataforma:".padEnd(30)}${platform}`)
                return;
            case memory:
                console.log(`${"Memoria:".padEnd(30)}${memory}mb`)
                return;
            case memoryFree:
                console.log(`${"Memoria libre:".padEnd(30)}${memoryFree}mb`)
                return;
            case userDir:
                console.log(`${"Directorio Personal:".padEnd(30)}${userDir}`)

        }
    });
}

InfoSys();

