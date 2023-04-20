const password = require("../password");

const passtest1 = "1234dasj";
const passtest2 = "jj";
const passtest3 = "d";
const passtest4 = "asdasdasdasdasdasdasdasdasdsa";

test("Password exitoso", () => {
  expect(password(passtest1)).toBe(true);
});

test("Password fallido", () => {
  expect(password(passtest2)).toBe(false);
});

test("Password fallido", () => {
  expect(password(passtest3)).toBe(false);
});

test("Password fallido", () => {
  expect(password(passtest4)).toBe(true);
});