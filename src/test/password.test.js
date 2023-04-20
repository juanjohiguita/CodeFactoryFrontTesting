const password = require("../password");

const password1 = "123dasjdas";
const password2 = "jj";
const password3 = "d";
const password4 = "asdasdasdasdasdasdasdasdasdsa";

test("Password exitoso", () => {
  expect(password(password1)).toBe(true);
});

test("Password fallido", () => {
  expect(password(password2)).toBe(false);
});

test("Password fallido", () => {
  expect(password(password3)).toBe(false);
});

test("Password fallido", () => {
  expect(password(password4)).toBe(false);
});