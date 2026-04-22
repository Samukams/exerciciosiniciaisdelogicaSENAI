const multiplicar = require("./pepequeno.js");

test("2° teste", () => {
  expect(multiplicar(120, 10)).toBe(1200);
});

test("2° teste", () => {
  expect(multiplicar(85, 5)).toBe(425);
});

test("2° teste", () => {
  expect(multiplicar(199.90, 3)).toBe(599.70);
});