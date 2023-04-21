const passReg = new RegExp(
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
);
const isPassRegex = (password) => {
  if (passReg.test(password)) return true;
  return false;
};

module.exports = isPassRegex;
