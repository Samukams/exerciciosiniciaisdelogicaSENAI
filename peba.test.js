const calcularPontos = require('./peba.js');

test("10v e 5e, 35 pontos: ",() => {
    expect(calcularPontos(10,5)).toBe(35);
})

test("3v e 2e, 11 pontos: ",() => {
    expect(calcularPontos(3,2)).toBe(11);
})

test("0v e 7e, 7 pontos: ",() => {
    expect(calcularPontos(0,7)).toBe(7);
})

test("0v e 0e, 0 pontos: ",() => {
    expect(calcularPontos(0,0)).toBe(0);
})

test("5v e 0e, 15 pontos: ",() => {
    expect(calcularPontos(5,0)).toBe(15);
})

test("0v e 10e, 10 pontos: ",() => {
    expect(calcularPontos(0,10)).toBe(10);
})

test("100v e 50e, 350 pontos: ",() => {
    expect(calcularPontos(100,50)).toBe(350);
})

