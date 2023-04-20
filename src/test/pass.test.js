const pass = require("../tentativas/pass");

const passtest1 = "1234dasj";
const passtest2 = "jj";
const passtest3 = "d";
const passtest4 = "asdasdasdasdasdasdasdasdasdsa";

test("Password exitoso", () => {
  expect(pass(passtest1)).toBe(true);
});

test("Password fallido", () => {
  expect(pass(passtest2)).toBe(false);
});

test("Password fallido", () => {
  expect(pass(passtest3)).toBe(false);
});

test("Password fallido", () => {
  expect(pass(passtest4)).toBe(true);
});