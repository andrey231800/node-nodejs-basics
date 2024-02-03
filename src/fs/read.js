import fs from "fs/promises";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const read = async () => {

    try {

        const __filename = fileURLToPath(import.meta.url);
        const __dirName = dirname(__filename);

        const text = await fs.readFile(`${__dirName}/files/fileToRead.txt`, {encoding: 'utf8', flag: 'rs'});

        console.log(text);
    } catch {
        throw new Error("FS operation failed");
    }
    // Write your code here 
};

await read();