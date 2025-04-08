// const setUserName = function(username){
//     this.username = username;
//     console.log('called')
// }
// const createUser = function(username , email , password){
//     setUserName.call(this, username)
//     this.email = email;
//     this.password = password;
// }

// const newUser =  new createUser('someone' , 'someone@gmail.com',1123);
// console.log(newUser);

//behind the scene

function User(username, email , password){
    this.username = username,
    this.email = email,
    this.password = password
    
}

User.prototype.encryptPassword = function(){
    return `${this.password}#01`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}
const user = new User('someone','someone@gmail.com', 124 );
console.log(user);
console.log(user.encryptPassword())
console.log(user.changeUsername())




  