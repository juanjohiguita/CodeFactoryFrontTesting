const expresion = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/
const login = (email) => {if (expresion.test(email)) return true;   else return false; };  
module.exports = login;


