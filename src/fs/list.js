import fs from 'fs/promises';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const list = async () => {
    try {
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = dirname(__filename);

        const dirToRead = path.join(__dirname, 'files');

        const filesList = await fs.readdir(dirToRead);

        console.log(filesList);
        
        
    } catch {
        throw new Error('FS operation failed');
    }
};

await list();