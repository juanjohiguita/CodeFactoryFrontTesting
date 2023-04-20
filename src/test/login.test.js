const login = require("../tentativas/login");

const email1 = "test1234@gmail.com";
const email2 = "asdas";
const email3 = "12312@d";
const email4 = "qweqweq@dds.c";

test("Login exitoso", () => {
  expect(login(email1)).toBe(true);
});

test("Login fallido", () => {
  expect(login(email2)).toBe(false);
});

test("Login fallido", () => {
  expect(login(email3)).toBe(false);
});

test("Login fallido", () => {
  expect(login(email4)).toBe(false);
});