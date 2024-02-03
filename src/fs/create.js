import fs from "fs/promises";
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const create = async () => {
    try {
        const __fileName = fileURLToPath(import.meta.url);
        const __dirName = dirname(__fileName);

        const fileToWrite = path.join(__dirName, 'files', 'fresh.txt');
        const textToWrite = 'I am fresh and young';
        
        await fs.writeFile(fileToWrite, textToWrite, {flag: 'wx'})
    } catch {
        throw new Error('FS operation failed');
    }
}

await create();

