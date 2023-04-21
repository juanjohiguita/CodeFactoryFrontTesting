const emailReg = new RegExp(/^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/);
function isEmailRegex(email) {
  if (emailReg.test(email)) return true;
  return false;
}

module.exports = isEmailRegex;
