import { getSaludo } from '../../base/02-template-string';

describe('Pruebas en el archivo 02-template-string.test.js', () => {
    test('getSaludo debe retornar hola mayito', () => {
        const nombre = 'Mayito';
        const saludo = getSaludo(nombre);
        expect(saludo).toBe('Hola ' + nombre + '!');
    })

    test('getSaludo debe retornar Hola Carlos! si no hay argumento', () => {
        const saludo = getSaludo();

        expect(saludo).toBe('Hola Carlos!');
    })
});


