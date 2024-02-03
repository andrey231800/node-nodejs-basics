import zlib from 'zlib';
import { pipeline } from 'stream/promises';
import fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const compress = async () => {

    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const fileToCompress = path.join(__dirname, 'files', 'fileToCompress.txt');
    const compressedFile = path.join(__dirname, 'files', 'archieve.gz');

    const gzip = zlib.createGzip();
    const source = fs.createReadStream(fileToCompress);
    const destination = fs.createWriteStream(compressedFile);

    await pipeline(source, gzip, destination);
    // Write your code here 
};

await compress();