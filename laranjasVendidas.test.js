const laranjasVendidas = require("./laranjasVendidas.js");

test("calcular laranjas vendidas no dia", () => {
  expect(laranjasVendidas(100, 40)).toBe(60);
});

test("calcular laranjas vendidas no dia", () => {
  expect(laranjasVendidas(250, 180)).toBe(70);
});

test("calcular laranjas vendidas no dia", () => {
  expect(laranjasVendidas(80, 80)).toBe(0);
});