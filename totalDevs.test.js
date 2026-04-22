const totalDevs = require("./totalDevs.js");

test("total de devs na empresa", () => {
  expect(totalDevs(10, 5, 3)).toBe(18);
});

test("total de devs na empresa", () => {
  expect(totalDevs(25, 10, 15)).toBe(50);
});

test("total de devs na empresa", () => {
  expect(totalDevs(8, 2, 0)).toBe(10);
});