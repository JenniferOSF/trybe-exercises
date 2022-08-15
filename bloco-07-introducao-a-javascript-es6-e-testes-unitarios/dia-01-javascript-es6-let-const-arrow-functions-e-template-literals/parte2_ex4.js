const substituaX = (nome) => {
    const frase = ('Tryber x aqui!');
    const fraseArray = frase.split(' ');
    for(index = 0; index < fraseArray.length; index += 1) {
        if (fraseArray[index] === 'x') {
            fraseArray[index] = nome;
        }
    }
    return fraseArray.join(' ');
};
//console.log(substituaX('Bebeto'));

const minhasSkills = (param1) => {
    const skills = ['HTML', 'CSS', 'JavaScript'];
    let result = `${param1} Minhas três principais habilidades são:`
    for (let index = 0; index < skills.length; index += 1) {
        result = `${result} - ${skills[index]}`;
    }
    return result;
};

console.log(minhasSkills(substituaX('Bebeto')));