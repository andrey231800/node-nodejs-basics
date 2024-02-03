import fs from "fs/promises";
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';


const copy = async () => {

    try {

        const __filename = fileURLToPath(import.meta.url);
        const __dirname = dirname(__filename);

        const sourcePath = path.join(__dirname, '/files');
        const destinationPath = path.join(__dirname, '/files_copy');

        await fs.mkdir(destinationPath);
        const files = await fs.readdir(sourcePath, {encoding: 'utf8', recursive: true});

        files.forEach(async (file) => {

            const sourceFile = path.join(sourcePath, file);
            const destinationFile = path.join(destinationPath, file);

            await fs.copyFile(sourceFile, destinationFile);
        })

    } catch {
        
        throw new Error('FS operation failed');

    }

};

await copy();
