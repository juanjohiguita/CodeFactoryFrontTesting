//const validPassword = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d\S]{8,}$');
const password = (password) => { if ((password.length>=6)) return true;   else return false; }; 
module.exports = password;