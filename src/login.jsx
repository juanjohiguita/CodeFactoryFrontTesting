export const validEmail = new RegExp(
    '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$'
 );

const login = (email) => {if (validEmail.test(email)) return true;   else return false; };  
module.exports = login;


