import fs from "fs/promises";
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const remove = async () => {


    try {
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = dirname(__filename);

        const fileToDelete = path.join(__dirname, 'files', 'fileToRemove.txt');

        await fs.rm(fileToDelete);
        
    } catch {
        throw new Error('FS operation failed');
    }


};

await remove();