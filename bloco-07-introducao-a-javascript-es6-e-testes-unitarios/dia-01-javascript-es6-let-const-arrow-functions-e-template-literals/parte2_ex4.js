const substituaX = (nome) => {
    const frase = ('Tryber x aqui!');
    const fraseArray = frase.split(' ');
    for(index = 0; index < fraseArray.length; index += 1) {
        if (fraseArray[index] === 'x') {
            fraseArrau[index] = nome;
        }
    }
    return fraseArray.join(' ');
};
console.log(substituaX('Bebeto'));