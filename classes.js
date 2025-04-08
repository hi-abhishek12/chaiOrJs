class User {
    constructor(username , email , password){
        this.username = username
        this.email = email
        this.password  = password
        
        

    }
    encryptPassword(){
        return `${this.password}#01`
    }
    upperCase(){
        return `${this.username.toUpperCase()}`
    }
}

const user = new User('someone','someone@gmail.com',123);
console.log(user);
console.log(user.encryptPassword());
console.log(user.upperCase());

