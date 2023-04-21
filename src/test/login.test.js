const email1 = "test1234@gmail.com";
const email2 = "asdas";
const email3 = "12312@d";
const email4 = "qweqweq@dds.c";
const email5 = "";
const email6 = null;

const isEmailRegex = (email) => {
  if (/^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(email)) return true;
  return false;
};

test("Correo válido", () => {
  expect(isEmailRegex(email1)).toBeTruthy();
});

test("Correo inválido", () => {
  expect(isEmailRegex(email2)).toBeFalsy();
});

test("Correo inválido", () => {
  expect(isEmailRegex(email3)).toBeFalsy();
});

test("Correo inválido", () => {
  expect(isEmailRegex(email4)).toBeFalsy();
});

test("Correo inválido", () => {
  expect(isEmailRegex(email5)).toBeFalsy();
});

test("Correo inválido", () => {
  expect(email6).toBeNull();
});
