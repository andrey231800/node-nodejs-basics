import fs from 'fs';
import crypto from 'node:crypto';
import { createHash } from 'node:crypto';
import path, { dirname } from 'path';
import { pipeline } from 'stream/promises';
import { fileURLToPath } from 'url';

const calculateHash = async () => {

    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);

    const fileToRead = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt');

    const readStream = fs.createReadStream(fileToRead);

    const hash = createHash('sha256');

    readStream.on('data', chunk => {
        hash.update(chunk);
    })

    readStream.on('error', e => {
        throw new Error("Data hasn't been recieved");
    })

    readStream.on('end', () => {
        const hex = hash.copy().digest('hex');
        console.log(hex);
    })
    
};

await calculateHash();