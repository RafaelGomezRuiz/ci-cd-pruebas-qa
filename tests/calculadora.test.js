const { sumar, dividir } = require("../src/calculadora");

test("suma dos números", () => {
  expect(sumar(2, 3)).toBe(5);
});

test("divide correctamente", () => {
  expect(dividir(10, 2)).toBe(5);
});

test("lanza error al dividir entre cero", () => {
  expect(() => dividir(5, 0)).toThrow("No se puede dividir entre cero");
});