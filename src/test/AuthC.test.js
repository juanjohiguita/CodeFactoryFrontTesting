
const user = "John";
function setUsername(user){
  username = user;
}
setUsername("");



test("setUsername updates the value of nombre to an empty string", () => {
  
  
  expect(username).toBe("");
});