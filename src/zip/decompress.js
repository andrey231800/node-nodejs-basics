import zlib from 'zlib';
import { pipeline } from 'stream/promises';
import fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const decompress = async () => {

    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const fileToDecompress = path.join(__dirname, 'files', 'archieve.gz');
    const decompressedFile = path.join(__dirname, 'files', 'fileToCompress.txt');

    const gzip = zlib.createGunzip();
    const source = fs.createReadStream(fileToDecompress);
    const destination = fs.createWriteStream(decompressedFile);

    await pipeline(source, gzip, destination);
    // Write your code here 
};

await decompress();