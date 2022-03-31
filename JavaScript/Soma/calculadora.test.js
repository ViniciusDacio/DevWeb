import {soma, sub} from './soma'

it('Soma de dois numeros positivos', () =>{
    expect(soma(2,4)).toBe(6);
});

it('Soma de dois numeros negativos', () =>{
    expect(sub(-2,4)).toBe(-6);
});
