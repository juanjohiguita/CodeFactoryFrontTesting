const login = (email) => {if (/\S+@\S+.\S+/.test(email)) return true;   else return false; };  
module.exports = login;