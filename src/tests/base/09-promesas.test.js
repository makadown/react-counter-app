import { getHeroeByIdAsync } from '../../base/09-promesas';
import heroes from '../../datos/heroes';

describe('Pruebas con promesas', () => {

    test('getHeroeByIdAsync debe de retornar un Héroe async', (done) => {

        const id = 1;

        getHeroeByIdAsync(id)
            .then( heroe => {
                expect( heroe ).toBe( heroes[0] );
                done();
            });
    });

    test('getHeroeByIdAsync debe de obtener error si heroe por id no existe', (done) => {

        const id = 100;

        getHeroeByIdAsync(id)
            .catch(error => {
                expect(error).toBe('No se pudo encontrar el héroe');
                done();
            })
    });

})