import { Transform } from 'stream';
import { pipeline } from 'stream/promises';

const transform = async () => {

    const reverseTransform = new Transform({
        transform(chunk, encoding, callback) {
            const reversedText = chunk.toString().split('').reverse().join('');
            callback(null, `${reversedText}\n`)
        }
    })

    await pipeline(process.stdin, reverseTransform, process.stdout);
};

await transform();