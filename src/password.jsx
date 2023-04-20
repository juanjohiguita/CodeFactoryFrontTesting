const validPassword = new RegExp('^(?=.?[A-Za-z])(?=.?[0-9]).{6,}$');
const password = (password) => { if (validPassword.test(password)) return true;   else return false; }; 
module.exports = password;