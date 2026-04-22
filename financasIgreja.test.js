const faltaPagar = require("./financasIgreja.js");

test("caso 1", () => {
  expect(faltaPagar(5000, 1200)).toBe(3800);
});

test("caso 2", () => {
  expect(faltaPagar(3000, 3000)).toBe(0);
});

test("caso 3", () => {
  expect(faltaPagar(4500, 2000)).toBe(2500);
});

test("caso 666", () => {
  expect(faltaPagar(4000, 5000)).toBe(-1000);
});

test("caso 667", () => {
  expect(faltaPagar(0, 1000)).toBe(-1000);
});

test("caso 668", () => {
  expect(faltaPagar(3500, 0)).toBe(3500);
});

test("caso 669", () => {
  expect(faltaPagar(0, 0)).toBe(0);
});