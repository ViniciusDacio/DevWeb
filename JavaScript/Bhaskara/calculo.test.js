import {calcular_delta, calcular_x1, calcular_x2, calcular_bhaskara} from './funcoes_calculo'

it('Calculo de Delta', () =>{
    expect(calcular_delta(1, 2, 3)).toBe(-8);
});

it('Calculo de Delta', () =>{
    expect(calcular_delta(1, 5, 3)).toBe(13);
});

it('Calculo X1', () => {
    expect(calcular_x1(2, -6, 36)).toBe(3);
});

it('Calculo X2', () => {
    expect(calcular_x2(2, -6, 36)).toBe(0);
});

it('Calcular Bhaskara', () => {
    expect(calcular_bhaskara(2, -6, 0)).toEqual([3, 0]);
});

it('Calcular Bhaskara', () => {
    expect(calcular_bhaskara(9, -24, 16)).toEqual([1.33 , 1.33]);
});