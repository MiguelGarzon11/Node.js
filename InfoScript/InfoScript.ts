import * as os from "node:os";
import * as path from "node:path";
import { readdir } from "node:fs";


async function InfoSys () {
    const plataforma: string = os.platform()
    const memory: number = os.freemem()
    const memoryFree: number = os.totalmem()
}

InfoSys();

