const validEmail = new RegExp(
    '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,3}$'
 );

const login = (email) => {if (validEmail.test(email)) return true;   else return false; };  
module.exports = login;


