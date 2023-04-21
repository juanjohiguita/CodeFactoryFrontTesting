
  const emailReg = new RegExp(/^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/)
  function isEmailRegex(mail) {
    if (emailReg.test(mail)) return true;
    return false;
  }


  module.exports = isEmailRegex;