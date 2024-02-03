import fs from 'fs';
    import path from 'path';
    import { pipeline } from 'stream/promises';
    import { fileURLToPath } from 'url';

const write = async () => {
    
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const filePath = path.join(__dirname, 'files', 'fileToWrite.txt');

    const writeStream = fs.createWriteStream(filePath);

    await pipeline(process.stdin, writeStream)

    // .pipe()


};

await write();