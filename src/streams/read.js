import fs from 'fs';
import path from 'path';
import { pipeline } from 'stream/promises';
import { fileURLToPath } from 'url';

const read = async () => {

    try {
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = path.dirname(__filename);
        const filePath = path.join(__dirname, 'files', 'fileToRead.txt');
    
        const readStream = fs.createReadStream(filePath);

        await pipeline(
            readStream,
            process.stdout
        )

    } catch {
        throw new Error('FS operation failed');
    }

    // Write your code here 
};

await read();