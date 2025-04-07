const setUserName = function(username){
    this.username = username;
    console.log('called')
}
const createUser = function(username , email , password){
    setUserName.call(this, username)
    this.email = email;
    this.password = password;
}

const newUser =  new createUser('someone' , 'someone@gmail.com',1123);
console.log(newUser)
  