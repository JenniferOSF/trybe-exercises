//let info = {
//    personagem: 'Margarida',
//    origem: 'Pato Donald',
//    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    
//  };

//Exercicio 01
  //for (let personagem in info) {
  //  console.log('Bem-vinda, ' + info['personagem']);}

// Exercicio 02 - Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console. Valor esperado no console:

  //let info = {
  //  personagem: 'Margarida',
  //  origem: 'Pato Donald',
  //  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  //  recorrente: 'Sim',
  //  };

  //console.log(info);

// Exercicio 03 - Faça um for/in que mostre todas as chaves do objeto. Valor esperado no console:
let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'Sim',
};

for (let key in info) {
    console.log(key);
}