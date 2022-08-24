//9 - A fim de evitar que futuros treinadores de Pokémon sejam prejudicados, o Professor Carvalho pediu que você o ajude a escrever testes para o sistema que distribui esses Pokémon. Para isso, você deve criar um novo arquivo .test.js ou .spec.js e copiar o código abaixo. Lembre-se de completar os testes para a função getPokemonDetails de acordo com as especificações.
//OBS: Lembre-se de exportar o arquivo do exercício 08 para que possamos utilizá-lo em nossos testes.
//OBS: Lembre-se de exportar o arquivo do exercício 08 para que possamos utilizá-lo em nossos testes.

const { getPokemonDetails } = require('./exercise8');

describe('A função getPokemonDetails', () => {
  it('retorna erro quando procuramos um pokémon que não existe no banco de dados', () => {
    const expectedError = new Error('Não temos esse pokémon para você :('); 

    getPokemonDetails('Pikachu', (error, _message) => { 
      try { 
        expect(error).toEqual(expectedError); 
        done(); 
      } catch (error) {
        done(error); 
      }
    });
  });
 });

 it('retorna um pokémon que existe no banco de dados', () => {
    const expectedString = 'Olá, seu pokémon é o Charmander, o tipo dele é Fire e a habilidade principal dele é Ember';

    getPokemonDetails('Charmander', (_error, result) => {
      try {
        expect(result).toBe(expectedString);
        done();
      } catch (error) {
        done(error);
      }
    });
});

