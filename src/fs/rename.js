import fs from 'fs/promises';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const rename = async () => {

    try {

        const __filename = fileURLToPath(import.meta.url);
        const __dirname = dirname(__filename);

        const oldPath = path.join(__dirname, 'files', 'wrongFilename.txt');
        const newPath = path.join(__dirname, 'files', 'properFilename.md');

        await fs.rename(oldPath, newPath);

    } catch {
        throw new Error('FS operation failed');
    }
    // Write your code here 
};

await rename();