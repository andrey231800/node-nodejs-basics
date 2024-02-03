const parseEnv = () => {
    const names = Object.entries(process.env).filter(obj => obj[0].includes('RSS'))
        .map(pair => `${pair[0]}=${pair[1]}`).join('; ');

    console.log(names)
    
};

parseEnv();