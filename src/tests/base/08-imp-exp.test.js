import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp';
import heroes from '../../datos/heroes';

describe('Pruebas heroicas', () => {

    test('Debe de retornar un heroe por id', () => {

        const id = 1;
        const heroe = getHeroeById(id);
        
        const heroeData = heroes.find( h => h.id === id);

        expect( heroe ).toEqual(heroeData);
          
    });

    test('Debe de retornar undefined si heroe no existe', () => {

        const id = 10;
        const heroe = getHeroeById(id);

        expect( heroe ).toBe(undefined);
          
    });

    test('Debe retornar un arreglo con los héroes de DC', () => {

         const owner = 'DC';
         const heroes = getHeroesByOwner(owner);

         const heroesData = heroes.filter( h => h.owner === 'DC'); 

         expect(heroes).toEqual(heroesData);
    });

    test('Debe retornar un arreglo con los héroes de Marvel', () => {

        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner);

        const heroesData = heroes.filter( h => h.owner === 'Marvel'); 

        expect(heroes).toEqual(heroesData);
          
    });

})