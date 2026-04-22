const salarioJunin = require("./salarioJunin.js");

test("caso 1", () => {
  expect(salarioJunin(3000, 20)).toEqual({
    valorDia: 150.00,
    salarioSemanal: 750.00
  });
});

test("caso 2", () => {
  expect(salarioJunin(4500, 22)).toEqual({
    valorDia: 204.55,
    salarioSemanal: 1022.73
  });
});

test("caso 3", () => {
  expect(salarioJunin(2000, 10)).toEqual({
    valorDia: 200.00,
    salarioSemanal: 1000.00
  });
});

test("caso 666", () => {
  expect(salarioJunin(3000, 0)).toEqual({
    valorDia: 0,
    salarioSemanal: 0
  });
});

test("caso 667", () => {
  expect(salarioJunin(0, 20)).toEqual({
    valorDia: 0,
    salarioSemanal: 0
  });
});

test("caso 668", () => {
  expect(salarioJunin(0, 0)).toEqual({
    valorDia: 0,
    salarioSemanal: 0
  });
});

test("caso 669", () => {
  expect(salarioJunin(5000, 31)).toEqual({
    valorDia: 161.29,
    salarioSemanal: 806.45
  });
});