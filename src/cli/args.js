const parseArgs = () => {
    const args = process.argv;
    const newArr = [];

    for (let i = 0; i < args.length; i++) {
        if (args[i].includes('--')) {
            newArr.push(`${args[i].replace(/--/gm, '')} is ${args[i+1]}`)
        }
    }

    console.log(newArr.join(', '))


    // Write your code here 
};

parseArgs();